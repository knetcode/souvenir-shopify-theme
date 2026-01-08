# Paywall Setup Guide

This guide explains how to set up and use the paywall system in the Souvenir Shopify theme.

## 🎯 Overview

The theme supports three types of access control:

1. **Login Required** - Pages visible only to logged-in customers
2. **One-Off Paywall** - Content unlocked by purchasing a specific product (e.g., individual itineraries)
3. **Membership** - Content visible only to customers with active membership tags

## 📁 Files Structure

### Snippets
- `snippets/access-control.liquid` - Core access control logic (reusable)

### Sections
- `sections/page-paywall.liquid` - Paywall-protected page section
- `sections/page-login.liquid` - Login-protected page section
- `sections/page-membership.liquid` - Membership-protected page section
- `sections/product-paywall-content.liquid` - Paywall content for product pages
- `sections/itinerary-paywall.liquid` - Specialized section for itinerary products

### Templates
- `templates/page.paywall.json` - Template for paywall-protected pages
- `templates/page.login.json` - Template for login-protected pages
- `templates/page.membership.json` - Template for membership-protected pages
- `templates/product.itinerary.json` - Template for itinerary products with paywall

## 🚀 Setup Instructions

### Step 1: Create Access Products

#### For Individual Itinerary Paywalls:
1. Go to **Products** → **Add product**
2. Create products for each itinerary (e.g., "Danish Riviera Itinerary")
3. Set appropriate handles (e.g., `danish-riviera-itinerary`)
4. Make them digital products (no shipping required)
5. Set prices (e.g., £25)

#### For General Premium Content:
1. Create a product called **"Premium Content Pass"**
2. Set handle to: `premium-content-pass`
3. Make it a digital product
4. Set a price

#### For Membership:
1. Create a product called **"Souvenir Membership"**
2. Set handle to: `souvenir-membership`
3. Make it a digital/subscription product
4. Set recurring price if using subscription app

### Step 2: Set Up Customer Tags

For membership access, customers need tags:

1. Go to **Customers** → Select a customer
2. Add tag: `member-active` (or your custom tag)
3. Save

**Note:** If using a subscription app (like Recharge), it will automatically add/remove tags when customers subscribe/unsubscribe.

### Step 3: Create Protected Pages

#### Paywall-Protected Page:
1. Go to **Online Store** → **Pages** → **Add page**
2. Title: "Premium Content" (or your title)
3. Template: Select **page.paywall** from dropdown
4. Content: Add your premium content
5. In theme editor, configure the section:
   - Set `paywall_product_handle` to the product handle (e.g., `premium-content-pass`)

#### Login-Protected Page:
1. Create a new page
2. Template: Select **page.login**
3. Content: Add your content
4. Only logged-in customers will see it

#### Membership-Protected Page:
1. Create a new page
2. Template: Select **page.membership**
3. Content: Add your content
4. In theme editor, configure:
   - Set `membership_tag` (default: `member-active`)

### Step 4: Set Up Itinerary Products

1. Create itinerary products in Shopify
2. For each itinerary product:
   - Go to **Products** → Select the itinerary product
   - In the theme customizer, change template to **product.itinerary**
   - Configure the `itinerary-paywall` section:
     - Add preview content (shown before purchase)
     - Add full content (shown after purchase)
     - Add day-by-day blocks for detailed itinerary

## 🎨 Usage Examples

### Example 1: Individual Itinerary Paywall

**Product:** "Danish Riviera Itinerary" (handle: `danish-riviera-itinerary`)

1. Create the product in Shopify
2. Use template: `product.itinerary`
3. The `itinerary-paywall` section automatically checks if the customer purchased this specific product
4. Shows preview to non-purchasers, full content to purchasers

### Example 2: General Premium Content Page

**Page:** "Premium Article" (template: `page.paywall`)

1. Create a page
2. Select template: `page.paywall`
3. In section settings, set `paywall_product_handle` to `premium-content-pass`
4. Anyone who purchased "Premium Content Pass" can access this page

### Example 3: Membership Area

**Page:** "Member Dashboard" (template: `page.membership`)

1. Create a page
2. Select template: `page.membership`
3. Customers with `member-active` tag can access
4. Others see "Membership Required" message

## 🔧 Customization

### Changing Product Handles

Edit the section settings in the theme editor, or edit the template JSON files:

```json
{
  "sections": {
    "paywall": {
      "type": "page-paywall",
      "settings": {
        "paywall_product_handle": "your-product-handle"
      }
    }
  }
}
```

### Changing Membership Tags

Edit section settings or template JSON:

```json
{
  "sections": {
    "membership": {
      "type": "page-membership",
      "settings": {
        "membership_tag": "your-custom-tag"
      }
    }
  }
}
```

### Styling

All sections use the theme's CSS variables and utility classes. To customize:

1. Edit the `{% stylesheet %}` blocks in section files
2. Or add custom CSS to `assets/theme.css`

## 🧪 Testing

### Test Paywall Access:
1. Create a test customer
2. Create a test order with the paywall product
3. Assign order to customer
4. Mark order as **Paid** and **Fulfilled**
5. Log in as that customer
6. Visit the paywall-protected page
7. Should see full content

### Test Membership Access:
1. Create a test customer
2. Add membership tag (`member-active`)
3. Log in as that customer
4. Visit membership-protected page
5. Should see content

### Test Login Protection:
1. Visit login-protected page while logged out
2. Should see "Login Required" message
3. Log in and visit again
4. Should see content

## 📝 Best Practices

1. **Product Handles**: Use consistent, descriptive handles (e.g., `danish-riviera-itinerary`)
2. **Membership Tags**: Use a consistent tag format (e.g., `member-active`, `member-premium`)
3. **Testing**: Always test with multiple customer accounts
4. **Orders**: Ensure orders are marked as "Paid" and "Fulfilled" for paywall access
5. **Subscription Apps**: If using Recharge or similar, configure them to add/remove membership tags automatically

## 🐛 Troubleshooting

### Paywall not working:
- Verify product handle matches exactly (case-sensitive)
- Check order status is "Paid"
- Ensure customer is assigned to the order
- Verify order is "Fulfilled"

### Membership not working:
- Verify customer tag matches exactly (case-sensitive)
- Check customer tags in Shopify Admin
- If using subscription app, verify it's adding tags correctly

### Login not working:
- Clear browser cache
- Verify you're logged in (visit `/account`)
- Check that `customer` object is available (it should be on all pages when logged in)

## 🎉 Next Steps

1. Create your actual itinerary products
2. Set up real paywall products
3. Integrate with subscription app (like Recharge) for membership
4. Customize styling to match your brand
5. Test thoroughly with real customer accounts
