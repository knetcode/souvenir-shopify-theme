# Automatic Membership Tagging Setup

This guide shows you how to automatically add the `member-active` tag to customers when they purchase the membership product.

## Option 1: Shopify Flow (Recommended - No Code Required)

Shopify Flow is the easiest way to automate this. Here's how to set it up:

### Steps:

1. **Go to Shopify Admin → Settings → Apps and sales channels**
2. **Install Shopify Flow** (if not already installed)
3. **Create a new workflow:**
   - Trigger: "Order paid"
   - Condition: "Order line items" → "Product handle" → "equals" → `monthly-membership`
   - Action: "Add customer tag" → Tag: `member-active`

4. **Activate the workflow**

That's it! Now whenever a customer purchases the membership product, they'll automatically get the `member-active` tag.

## Option 2: Webhook + Script (For Custom Solutions)

If you need more control or want to run this on your own server:

### Step 1: Set up Webhook in Shopify

1. Go to **Settings → Notifications → Webhooks**
2. Click **Create webhook**
3. Configure:
   - **Event**: "Order paid" or "Order updated"
   - **Format**: JSON
   - **URL**: Your server endpoint (e.g., `https://your-server.com/webhooks/shopify/membership`)

### Step 2: Set up Server Endpoint

The webhook will send order data to your server. Your server should:
1. Check if the order contains the membership product
2. Call the `tagCustomerIfMember` function from `scripts/auto-tag-members.js`
3. Add the `member-active` tag to the customer

### Step 3: Update API Token Scopes

Make sure your API token has these scopes:
- `read_orders`
- `read_customers`
- `write_customers`

## Option 3: Manual Script (For One-Time or Periodic Runs)

You can run the script manually to tag existing customers:

```bash
export SHOPIFY_STORE=pffykd-mz.myshopify.com
export SHOPIFY_TOKEN=your_token_here
node scripts/auto-tag-members.js
```

This will check recent orders and tag customers who purchased the membership product.

### Set up as Cron Job (Optional)

To run automatically every hour:

```bash
# Add to crontab (crontab -e)
0 * * * * cd /path/to/souvenir && /usr/bin/node scripts/auto-tag-members.js >> /tmp/membership-tagging.log 2>&1
```

## Testing

After setting up, test by:
1. Creating a test order with the membership product
2. Marking it as paid
3. Checking the customer's tags in Shopify Admin
4. Verifying they now have the `member-active` tag

## Troubleshooting

- **Tag not being added**: Check that the product handle matches exactly (`monthly-membership`)
- **Webhook not firing**: Verify the webhook URL is accessible and returns 200 OK
- **API errors**: Ensure your token has the required scopes

