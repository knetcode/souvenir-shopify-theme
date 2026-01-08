#!/usr/bin/env node
/**
 * Script to create required products for access control pages
 * 
 * Usage: node scripts/create-required-products.js
 * 
 * Requires SHOPIFY_STORE and SHOPIFY_TOKEN environment variables
 */

const products = [
  {
    title: 'Monthly Membership',
    handle: 'monthly-membership',
    body_html: '<p>Get access to all membership content with an annual membership!</p><p>This membership gives you access to all three membership area pages.</p>',
    product_type: 'Membership',
    vendor: 'Store',
    tags: 'membership, subscription',
    variants: [{
      price: '99.00',
      requires_shipping: false,
      inventory_management: null,
      inventory_policy: 'deny'
    }],
    published: true
  },
  {
    title: 'Paywall Product 1',
    handle: 'paywall-product-1',
    body_html: '<p>Unlock Premium Content 1 with this one-time purchase!</p><p>Each premium page requires a separate purchase.</p>',
    product_type: 'Digital Product',
    vendor: 'Store',
    tags: 'paywall, premium, digital',
    variants: [{
      price: '29.00',
      requires_shipping: false,
      inventory_management: null,
      inventory_policy: 'deny'
    }],
    published: true
  },
  {
    title: 'Paywall Product 2',
    handle: 'paywall-product-2',
    body_html: '<p>Unlock Premium Content 2 with this one-time purchase!</p><p>Each premium page requires a separate purchase.</p>',
    product_type: 'Digital Product',
    vendor: 'Store',
    tags: 'paywall, premium, digital',
    variants: [{
      price: '29.00',
      requires_shipping: false,
      inventory_management: null,
      inventory_policy: 'deny'
    }],
    published: true
  },
  {
    title: 'Paywall Product 3',
    handle: 'paywall-product-3',
    body_html: '<p>Unlock Premium Content 3 with this one-time purchase!</p><p>Each premium page requires a separate purchase.</p>',
    product_type: 'Digital Product',
    vendor: 'Store',
    tags: 'paywall, premium, digital',
    variants: [{
      price: '29.00',
      requires_shipping: false,
      inventory_management: null,
      inventory_policy: 'deny'
    }],
    published: true
  }
];

async function createProducts() {
  const store = process.env.SHOPIFY_STORE || 'pffykd-mz.myshopify.com';
  const token = process.env.SHOPIFY_TOKEN;

  if (!token) {
    console.error('❌ Error: SHOPIFY_TOKEN environment variable not set');
    console.log('\nTo set it up:');
    console.log('1. Go to Shopify Admin → Settings → Apps and sales channels → Develop apps');
    console.log('2. Create a custom app');
    console.log('3. Configure Admin API access scopes: read_products, write_products');
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

  console.log('🚀 Creating required products...\n');

  for (const product of products) {
    try {
      const response = await fetch(`${baseUrl}/products.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': token
        },
        body: JSON.stringify({
          product: {
            title: product.title,
            body_html: product.body_html,
            vendor: product.vendor,
            product_type: product.product_type,
            tags: product.tags,
            variants: product.variants,
            published: product.published
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const handle = data.product.handle;
        const url = `https://${store}/products/${handle}`;
        results.created.push({ title: product.title, handle, url });
        console.log(`✅ Created: ${product.title}`);
        console.log(`   Handle: ${handle}`);
        console.log(`   → ${url}\n`);
      } else {
        const errorText = await response.text();
        if (errorText.includes('already exists') || errorText.includes('Handle has already been taken')) {
          const url = `https://${store}/products/${product.handle}`;
          results.exists.push({ title: product.title, handle: product.handle, url });
          console.log(`⚠️  Already exists: ${product.title}`);
          console.log(`   → ${url}\n`);
        } else {
          results.failed.push({ title: product.title, error: errorText });
          console.error(`❌ Failed to create ${product.title}:`, errorText.substring(0, 200));
        }
      }
    } catch (error) {
      results.failed.push({ title: product.title, error: error.message });
      console.error(`❌ Error creating ${product.title}:`, error.message);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Created: ${results.created.length} products`);
  console.log(`⚠️  Already exists: ${results.exists.length} products`);
  console.log(`❌ Failed: ${results.failed.length} products`);
  
  if (results.created.length > 0) {
    console.log('\n📦 Newly Created Products:');
    results.created.forEach(({ title, handle, url }) => {
      console.log(`   • ${title} (${handle})`);
      console.log(`     ${url}`);
    });
  }
  
  if (results.exists.length > 0) {
    console.log('\n📦 Existing Products:');
    results.exists.forEach(({ title, handle, url }) => {
      console.log(`   • ${title} (${handle})`);
      console.log(`     ${url}`);
    });
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed Products:');
    results.failed.forEach(({ title, error }) => {
      console.log(`   • ${title}: ${error.substring(0, 100)}`);
    });
  }

  console.log('\n' + '='.repeat(60));
  console.log('📝 IMPORTANT: Next Steps');
  console.log('='.repeat(60));
  console.log('\n1. Review the products in Shopify Admin');
  console.log('2. Adjust prices if needed');
  console.log('3. For membership: After a customer purchases, add the tag "member-active" to their customer account');
  console.log('4. For paywall: Access is automatically granted after purchase');
  console.log('\n🎉 Done!\n');
}

createProducts();

