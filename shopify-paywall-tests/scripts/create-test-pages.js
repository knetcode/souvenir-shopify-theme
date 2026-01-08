#!/usr/bin/env node
/**
 * Quick script to create test pages via Shopify Admin API
 * 
 * Usage: node scripts/create-test-pages.js
 * 
 * You'll need to set up API credentials first:
 * 1. Go to Shopify Admin → Settings → Apps and sales channels → Develop apps
 * 2. Create a custom app
 * 3. Configure Admin API access scopes: read_content, write_content
 * 4. Install the app and copy the Admin API access token
 * 5. Set environment variables:
 *    export SHOPIFY_STORE=pffykd-mz.myshopify.com
 *    export SHOPIFY_TOKEN=your_token_here
 */

const pages = [
  {
    title: 'Free Example',
    handle: 'free-example',
    body_html: '<p>This is a free access page - anyone can view it!</p><p>Welcome to our free content area.</p>',
    template_suffix: null, // Uses default template
    published: true
  },
  {
    title: 'Login Example',
    handle: 'login-example',
    body_html: '<p>This is a login-protected page. Only logged-in customers can see this content.</p>',
    template_suffix: 'login',
    published: true
  },
  {
    title: 'Paywall Example',
    handle: 'paywall-example',
    body_html: '<p>This is premium content unlocked by purchasing the Premium Content Pass!</p>',
    template_suffix: 'paywall',
    published: true
  },
  {
    title: 'Membership Example',
    handle: 'membership-example',
    body_html: '<p>Welcome to the member-only area! This content is for active members only.</p>',
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
        console.log(`✅ Created: ${page.title} → /pages/${handle}`);
      } else {
        const error = await response.text();
        if (error.includes('already exists')) {
          console.log(`⚠️  Already exists: ${page.title}`);
        } else {
          console.error(`❌ Failed to create ${page.title}:`, error);
        }
      }
    } catch (error) {
      console.error(`❌ Error creating ${page.title}:`, error.message);
    }
  }

  console.log('\n🎉 Done! Visit your pages:');
  pages.forEach(page => {
    console.log(`   https://${store}/pages/${page.handle}`);
  });
}

createPages();

