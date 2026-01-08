#!/usr/bin/env node
/**
 * Script to fix product handles to match template expectations
 * 
 * Usage: node scripts/fix-product-handles.js
 */

const store = process.env.SHOPIFY_STORE || 'pffykd-mz.myshopify.com';
const token = process.env.SHOPIFY_TOKEN;

if (!token) {
  console.error('❌ Error: SHOPIFY_TOKEN environment variable not set');
  process.exit(1);
}

const baseUrl = `https://${store}/admin/api/2024-01`;

// Map of current handles to desired handles
const handleUpdates = [
  { current: 'paywall-product-5', desired: 'paywall-product-2', title: 'Paywall Product 2' },
  { current: 'paywall-product-6', desired: 'paywall-product-3', title: 'Paywall Product 3' },
  { current: 'monthly-membership-1', desired: 'monthly-membership', title: 'Monthly Membership' }
];

async function fixHandles() {
  console.log('🔧 Fixing product handles...\n');

  for (const update of handleUpdates) {
    try {
      // First, get the product by current handle
      const getResponse = await fetch(`${baseUrl}/products.json?handle=${update.current}`, {
        headers: {
          'X-Shopify-Access-Token': token
        }
      });

      if (!getResponse.ok) {
        console.log(`⚠️  Product with handle "${update.current}" not found, skipping...`);
        continue;
      }

      const data = await getResponse.json();
      if (data.products.length === 0) {
        console.log(`⚠️  Product with handle "${update.current}" not found, skipping...`);
        continue;
      }

      const product = data.products[0];
      console.log(`📦 Found: ${product.title} (current handle: ${product.handle})`);

      // Update the product handle
      const updateResponse = await fetch(`${baseUrl}/products/${product.id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': token
        },
        body: JSON.stringify({
          product: {
            id: product.id,
            handle: update.desired
          }
        })
      });

      if (updateResponse.ok) {
        const updated = await updateResponse.json();
        console.log(`✅ Updated: ${updated.product.title}`);
        console.log(`   Old handle: ${update.current}`);
        console.log(`   New handle: ${update.desired}`);
        console.log(`   → https://${store}/products/${update.desired}\n`);
      } else {
        const error = await updateResponse.text();
        if (error.includes('already exists') || error.includes('Handle has already been taken')) {
          console.log(`⚠️  Handle "${update.desired}" already exists. You may need to delete the old product first.`);
          console.log(`   Error: ${error.substring(0, 200)}\n`);
        } else {
          console.error(`❌ Failed to update ${update.title}:`, error.substring(0, 200));
        }
      }
    } catch (error) {
      console.error(`❌ Error updating ${update.title}:`, error.message);
    }
  }

  console.log('🎉 Done!\n');
}

fixHandles();

