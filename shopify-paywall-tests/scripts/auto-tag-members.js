#!/usr/bin/env node
/**
 * Script to automatically tag customers with "member-active" when they purchase
 * the membership product.
 * 
 * This script can be run periodically (via cron) or set up as a webhook handler.
 * 
 * Usage: node scripts/auto-tag-members.js
 * 
 * For webhook setup, you'll need to:
 * 1. Set up a webhook in Shopify Admin for order creation/update
 * 2. Point it to a server that runs this script
 * 
 * Or use Shopify Flow (recommended - see instructions below)
 */

const store = process.env.SHOPIFY_STORE || 'pffykd-mz.myshopify.com';
const token = process.env.SHOPIFY_TOKEN;
const MEMBERSHIP_PRODUCT_HANDLE = 'monthly-membership';
const MEMBERSHIP_TAG = 'member-active';

if (!token) {
  console.error('❌ Error: SHOPIFY_TOKEN environment variable not set');
  console.log('\nMake sure your API token has these scopes:');
  console.log('  - read_orders');
  console.log('  - read_customers');
  console.log('  - write_customers');
  process.exit(1);
}

const baseUrl = `https://${store}/admin/api/2024-01`;

async function tagCustomerIfMember(customerId) {
  try {
    // Get customer details
    const customerResponse = await fetch(`${baseUrl}/customers/${customerId}.json`, {
      headers: {
        'X-Shopify-Access-Token': token
      }
    });

    if (!customerResponse.ok) {
      console.error(`Failed to fetch customer ${customerId}`);
      return false;
    }

    const customerData = await customerResponse.json();
    const customer = customerData.customer;

    // Check if customer already has the tag
    if (customer.tags && customer.tags.includes(MEMBERSHIP_TAG)) {
      console.log(`✅ Customer ${customer.email} already has ${MEMBERSHIP_TAG} tag`);
      return true;
    }

    // Add the tag
    const currentTags = customer.tags ? customer.tags.split(',').map(t => t.trim()) : [];
    if (!currentTags.includes(MEMBERSHIP_TAG)) {
      currentTags.push(MEMBERSHIP_TAG);
    }

    const updateResponse = await fetch(`${baseUrl}/customers/${customerId}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token
      },
      body: JSON.stringify({
        customer: {
          id: customerId,
          tags: currentTags.join(', ')
        }
      })
    });

    if (updateResponse.ok) {
      console.log(`✅ Tagged customer ${customer.email} with ${MEMBERSHIP_TAG}`);
      return true;
    } else {
      const error = await updateResponse.text();
      console.error(`❌ Failed to tag customer ${customer.email}:`, error);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing customer ${customerId}:`, error.message);
    return false;
  }
}

async function checkRecentOrders() {
  console.log('🔍 Checking recent orders for membership purchases...\n');

  try {
    // Get recent paid orders
    const ordersResponse = await fetch(`${baseUrl}/orders.json?status=any&financial_status=paid&limit=50`, {
      headers: {
        'X-Shopify-Access-Token': token
      }
    });

    if (!ordersResponse.ok) {
      console.error('Failed to fetch orders');
      return;
    }

    const ordersData = await ordersResponse.json();
    const orders = ordersData.orders || [];

    let processed = 0;
    let tagged = 0;

    for (const order of orders) {
      // Check if order contains membership product
      const hasMembership = order.line_items.some(item => 
        item.product_id && 
        (item.variant_title?.toLowerCase().includes('membership') ||
         item.name?.toLowerCase().includes('membership'))
      );

      // Also check by getting product details if we have product_id
      let membershipFound = false;
      for (const item of order.line_items) {
        if (item.product_id) {
          try {
            const productResponse = await fetch(`${baseUrl}/products/${item.product_id}.json`, {
              headers: {
                'X-Shopify-Access-Token': token
              }
            });
            if (productResponse.ok) {
              const productData = await productResponse.json();
              if (productData.product.handle === MEMBERSHIP_PRODUCT_HANDLE) {
                membershipFound = true;
                break;
              }
            }
          } catch (e) {
            // Skip if we can't fetch product
          }
        }
      }

      if (hasMembership || membershipFound) {
        if (order.customer && order.customer.id) {
          processed++;
          const success = await tagCustomerIfMember(order.customer.id);
          if (success) tagged++;
        }
      }
    }

    console.log(`\n📊 Summary:`);
    console.log(`   Orders checked: ${orders.length}`);
    console.log(`   Membership orders found: ${processed}`);
    console.log(`   Customers tagged: ${tagged}`);
    console.log('\n🎉 Done!\n');

  } catch (error) {
    console.error('❌ Error checking orders:', error.message);
  }
}

// If run as a script (not imported)
if (require.main === module) {
  checkRecentOrders();
}

module.exports = { tagCustomerIfMember, checkRecentOrders };

