#!/usr/bin/env node
/**
 * Script to create pages with different access control levels
 * 
 * Usage: node scripts/create-access-pages.js
 * 
 * You'll need to set up API credentials first:
 * 1. Go to Shopify Admin → Settings → Apps and sales channels → Develop apps
 * 2. Create a custom app
 * 3. Configure Admin API access scopes: read_content, write_content
 * 4. Install the app and copy the Admin API access token
 * 5. Set environment variables:
 *    export SHOPIFY_STORE=your-store.myshopify.com
 *    export SHOPIFY_TOKEN=your_token_here
 */

const pages = [
  // 3 pages accessible while logged out (free access)
  {
    title: 'Free Content Page 1',
    handle: 'free-content-1',
    body_html: '<p>This is a free access page - anyone can view it, even when logged out!</p><p>Welcome to our free content area. This is the first free page.</p>',
    template_suffix: null, // Uses default template
    published: true
  },
  {
    title: 'Free Content Page 2',
    handle: 'free-content-2',
    body_html: '<p>This is another free access page - accessible to everyone!</p><p>This is the second free page with public content.</p>',
    template_suffix: null,
    published: true
  },
  {
    title: 'Free Content Page 3',
    handle: 'free-content-3',
    body_html: '<p>This is the third free access page - no login required!</p><p>All visitors can view this content without any restrictions.</p>',
    template_suffix: null,
    published: true
  },
  
  // 3 pages that need you to be logged in
  {
    title: 'Member Dashboard 1',
    handle: 'member-dashboard-1',
    body_html: '<p>Welcome to your member dashboard! This is the first login-protected page.</p><p>Only logged-in customers can see this content.</p>',
    template_suffix: 'login',
    published: true
  },
  {
    title: 'Member Dashboard 2',
    handle: 'member-dashboard-2',
    body_html: '<p>This is the second login-protected page.</p><p>You must be logged in to view this content.</p>',
    template_suffix: 'login',
    published: true
  },
  {
    title: 'Member Dashboard 3',
    handle: 'member-dashboard-3',
    body_html: '<p>This is the third login-protected page.</p><p>Login required to access this exclusive content.</p>',
    template_suffix: 'login',
    published: true
  },
  
  // 3 pages that require one-off purchase (each page is a separate purchase)
  {
    title: 'Premium Content 1',
    handle: 'premium-content-1',
    body_html: '<p>This is premium content unlocked by purchasing Paywall Product 1!</p><p>Each premium page requires a separate purchase. This page requires: paywall-product-1</p>',
    template_suffix: 'paywall-1',
    published: true
  },
  {
    title: 'Premium Content 2',
    handle: 'premium-content-2',
    body_html: '<p>This is premium content unlocked by purchasing Paywall Product 2!</p><p>Each premium page requires a separate purchase. This page requires: paywall-product-2</p>',
    template_suffix: 'paywall-2',
    published: true
  },
  {
    title: 'Premium Content 3',
    handle: 'premium-content-3',
    body_html: '<p>This is premium content unlocked by purchasing Paywall Product 3!</p><p>Each premium page requires a separate purchase. This page requires: paywall-product-3</p>',
    template_suffix: 'paywall-3',
    published: true
  },
  
  // 3 pages that require annual membership (one membership gives access to all three)
  {
    title: 'Membership Area 1',
    handle: 'membership-area-1',
    body_html: '<p>Welcome to the membership area! This is the first member-only page.</p><p>One annual membership gives you access to all three membership pages.</p>',
    template_suffix: 'membership',
    published: true
  },
  {
    title: 'Membership Area 2',
    handle: 'membership-area-2',
    body_html: '<p>This is the second member-only page.</p><p>Active members with the "member-active" tag can access all membership pages.</p>',
    template_suffix: 'membership',
    published: true
  },
  {
    title: 'Membership Area 3',
    handle: 'membership-area-3',
    body_html: '<p>This is the third member-only page.</p><p>Your annual membership provides access to all membership content.</p>',
    template_suffix: 'membership',
    published: true
  }
];

async function createPages() {
  const store = process.env.SHOPIFY_STORE || 'pffykd-mz.myshopify.com';
  const token = process.env.SHOPIFY_TOKEN;

  if (!token) {
    console.error('❌ Error: SHOPIFY_TOKEN environment variable not set');
    console.log('\nTo set it up:');
    console.log('1. Go to Shopify Admin → Settings → Apps and sales channels → Develop apps');
    console.log('2. Create a custom app');
    console.log('3. Configure Admin API access scopes: read_content, write_content');
    console.log('4. Install the app and copy the Admin API access token');
    console.log('5. Run: export SHOPIFY_TOKEN=your_token_here');
    console.log('6. Then run this script again\n');
    process.exit(1);
  }

  const baseUrl = `https://${store}/admin/api/2024-01`;
  const results = {
    created: [],
    exists: [],
    failed: []
  };

  console.log('🚀 Creating pages...\n');

  for (const page of pages) {
    try {
      const response = await fetch(`${baseUrl}/pages.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': token
        },
        body: JSON.stringify({
          page: {
            title: page.title,
            body_html: page.body_html,
            template_suffix: page.template_suffix,
            published: page.published
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const handle = data.page.handle;
        const url = `https://${store}/pages/${handle}`;
        results.created.push({ title: page.title, url });
        console.log(`✅ Created: ${page.title}`);
        console.log(`   → ${url}\n`);
      } else {
        const errorText = await response.text();
        if (errorText.includes('already exists') || errorText.includes('Handle has already been taken')) {
          const url = `https://${store}/pages/${page.handle}`;
          results.exists.push({ title: page.title, url });
          console.log(`⚠️  Already exists: ${page.title}`);
          console.log(`   → ${url}\n`);
        } else {
          results.failed.push({ title: page.title, error: errorText });
          console.error(`❌ Failed to create ${page.title}:`, errorText);
        }
      }
    } catch (error) {
      results.failed.push({ title: page.title, error: error.message });
      console.error(`❌ Error creating ${page.title}:`, error.message);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Created: ${results.created.length} pages`);
  console.log(`⚠️  Already exists: ${results.exists.length} pages`);
  console.log(`❌ Failed: ${results.failed.length} pages`);
  
  if (results.created.length > 0) {
    console.log('\n📄 Newly Created Pages:');
    results.created.forEach(({ title, url }) => {
      console.log(`   • ${title}`);
      console.log(`     ${url}`);
    });
  }
  
  if (results.exists.length > 0) {
    console.log('\n📄 Existing Pages:');
    results.exists.forEach(({ title, url }) => {
      console.log(`   • ${title}`);
      console.log(`     ${url}`);
    });
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed Pages:');
    results.failed.forEach(({ title, error }) => {
      console.log(`   • ${title}: ${error.substring(0, 100)}`);
    });
  }

  console.log('\n' + '='.repeat(60));
  console.log('📝 IMPORTANT: Product Setup Required');
  console.log('='.repeat(60));
  console.log('\nFor the paywall pages to work, you need to create these products:');
  console.log('  1. paywall-product-1 (for Premium Content 1)');
  console.log('  2. paywall-product-2 (for Premium Content 2)');
  console.log('  3. paywall-product-3 (for Premium Content 3)');
  console.log('\nFor membership pages, ensure customers have the tag: member-active');
  console.log('\n🎉 Done!\n');
}

createPages();

