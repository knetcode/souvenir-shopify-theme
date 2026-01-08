#!/usr/bin/env node
/**
 * Simple script to tag a customer with member-active tag
 * 
 * Usage: node scripts/tag-customer.js <customer-email>
 * 
 * Example: node scripts/tag-customer.js knetcode@gmail.com
 */

const store = process.env.SHOPIFY_STORE || 'pffykd-mz.myshopify.com';
const token = process.env.SHOPIFY_TOKEN;
const MEMBERSHIP_TAG = 'member-active';

if (!token) {
  console.error('❌ Error: SHOPIFY_TOKEN environment variable not set');
  process.exit(1);
}

const customerEmail = process.argv[2];
if (!customerEmail) {
  console.error('❌ Error: Please provide customer email');
  console.log('Usage: node scripts/tag-customer.js <customer-email>');
  process.exit(1);
}

const baseUrl = `https://${store}/admin/api/2024-01`;

async function tagCustomer() {
  try {
    // Search for customer by email
    const searchResponse = await fetch(`${baseUrl}/customers/search.json?query=email:${encodeURIComponent(customerEmail)}`, {
      headers: {
        'X-Shopify-Access-Token': token
      }
    });

    if (!searchResponse.ok) {
      console.error('❌ Failed to search for customer');
      const error = await searchResponse.text();
      console.error('Error:', error);
      return;
    }

    const searchData = await searchResponse.json();
    const customers = searchData.customers || [];

    if (customers.length === 0) {
      console.error(`❌ Customer with email ${customerEmail} not found`);
      return;
    }

    const customer = customers[0];
    console.log(`📦 Found customer: ${customer.email} (ID: ${customer.id})`);

    // Check current tags
    const currentTags = customer.tags ? customer.tags.split(',').map(t => t.trim()) : [];
    console.log(`   Current tags: ${currentTags.join(', ') || '(none)'}`);

    // Check if already tagged
    if (currentTags.includes(MEMBERSHIP_TAG)) {
      console.log(`✅ Customer already has ${MEMBERSHIP_TAG} tag`);
      return;
    }

    // Add the tag
    currentTags.push(MEMBERSHIP_TAG);

    const updateResponse = await fetch(`${baseUrl}/customers/${customer.id}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token
      },
      body: JSON.stringify({
        customer: {
          id: customer.id,
          tags: currentTags.join(', ')
        }
      })
    });

    if (updateResponse.ok) {
      const updated = await updateResponse.json();
      console.log(`✅ Successfully tagged customer with ${MEMBERSHIP_TAG}`);
      console.log(`   New tags: ${updated.customer.tags}`);
    } else {
      const error = await updateResponse.text();
      console.error(`❌ Failed to tag customer:`, error);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

tagCustomer();

