# Access Control Setup Guide

This guide walks you through setting up pages with different access levels in your Shopify theme.

## 🎯 Overview

Your theme now supports four types of page access:

1. **Free Access** - Public pages (default)
2. **Login Required** - Pages visible only to logged-in customers
3. **One-Off Paywall** - Pages unlocked by purchasing a specific product
4. **Membership** - Pages visible only to customers with active membership tags

## 📁 Files Created

### Templates
- `templates/page-login.json` - Template for login-protected pages
- `templates/page-paywall.json` - Template for paywall-protected pages
- `templates/page-membership.json` - Template for membership-protected pages

### Sections
- `sections/page-login.liquid` - Section for login-protected content
- `sections/page-paywall.liquid` - Section for paywall-protected content
- `sections/page-membership.liquid` - Section for membership-protected content

### Snippets
- `snippets/access-control.liquid` - Reusable access control logic

## 🚀 Setup Instructions

### Step 1: Create Dummy Products

In your Shopify Admin, create these products:

#### For Paywall Pages:
1. Go to **Products** → **Add product**
2. Create a product called **"Premium Content Pass"**
3. Set the handle to: `premium-content-pass`
4. Make it a digital product (no shipping required)
5. Set a price (e.g., $9.99)

#### For Membership Pages:
1. Create a product called **"Monthly Membership"**
2. Set the handle to: `monthly-membership`
3. Make it a digital product
4. Set a recurring price (if using a subscription app)

### Step 2: Create Test Customers

1. Go to **Customers** → **Add customer**
2. Create a few test customers:
   - **Customer A**: Regular customer (no special access)
   - **Customer B**: Has purchased "Premium Content Pass"
   - **Customer C**: Has the tag `member-active` (for membership pages)

### Step 3: Set Up Customer Access

#### For Paywall Access:
1. Go to **Orders** → Create a test order
2. Add "Premium Content Pass" to the order
3. Assign it to Customer B
4. Mark the order as **Paid** and **Fulfilled**

#### For Membership Access:
1. Go to **Customers** → Select Customer C
2. In the customer details, add the tag: `member-active`
3. Save the customer

### Step 4: Create Pages in Shopify Admin

1. Go to **Online Store** → **Pages** → **Add page**

#### Free Access Page (Example: "About Us")
- Title: "About Us"
- Content: Add your content
- Template: **Default** (uses `templates/page.json`)
- Visibility: **Visible**

#### Login-Protected Page (Example: "My Dashboard")
- Title: "My Dashboard"
- Content: "Welcome! This is your private dashboard."
- Template: **page-login** (select from dropdown)
- Visibility: **Visible**

#### Paywall-Protected Page (Example: "Premium Content")
- Title: "Premium Content"
- Content: "This is exclusive premium content!"
- Template: **page-paywall** (select from dropdown)
- Visibility: **Visible**

#### Membership-Protected Page (Example: "Member Area")
- Title: "Member Area"
- Content: "Welcome to the member area!"
- Template: **page-membership** (select from dropdown)
- Visibility: **Visible**

### Step 5: Configure Page Settings

For **Paywall** and **Membership** pages, you can customize settings:

1. Go to the page in the theme editor
2. Click on the section
3. Adjust settings:
   - **Paywall pages**: Change the `paywall_product_handle` if needed
   - **Membership pages**: Change the `membership_tag` if needed

## 🧪 Testing Your Setup

### Test Free Access:
1. Visit your free page (e.g., `/pages/about-us`)
2. Should be visible to everyone

### Test Login Protection:
1. Visit your login-protected page while logged out
2. Should see "Login Required" message
3. Log in and visit again
4. Should see the content

### Test Paywall:
1. Visit your paywall page while logged out
2. Should see login prompt
3. Log in as Customer A (no purchase)
4. Should see "Unlock This Content" message
5. Log in as Customer B (has purchase)
6. Should see the content

### Test Membership:
1. Visit your membership page while logged out
2. Should see login prompt
3. Log in as Customer A or B (no membership tag)
4. Should see "Membership Required" message
5. Log in as Customer C (has `member-active` tag)
6. Should see the content

## 🔧 Customization

### Changing Product Handles

If you want to use different product handles:

1. Edit the template JSON file (e.g., `templates/page-paywall.json`)
2. Change the `paywall_product_handle` value
3. Or edit the section settings in the theme editor

### Changing Membership Tags

If you're using a subscription app that uses different tags:

1. Edit `templates/page-membership.json`
2. Change the `membership_tag` value
3. Or edit the section settings in the theme editor

### Styling

All sections include basic styling. To customize:

1. Edit the `{% stylesheet %}` block in each section file
2. Or add custom CSS to `assets/critical.css`

## 📝 Notes for React Developers

### Key Differences from React:

1. **Templates vs Components**: 
   - Templates (`.json` files) define page structure
   - Sections (`.liquid` files) are like React components
   - Snippets (`.liquid` files) are like utility functions

2. **Liquid Syntax**:
   - `{% if %}` = conditional rendering
   - `{{ variable }}` = outputting data
   - `{% render 'snippet' %}` = including snippets (like imports)

3. **Data Flow**:
   - `customer` object is globally available (like context)
   - `page` object contains page data
   - `section.settings` contains section configuration

4. **State Management**:
   - No client-side state like React
   - Everything is server-rendered
   - Access is checked on each page load

## 🐛 Troubleshooting

### Page shows "Login Required" even when logged in:
- Clear your browser cache
- Check that you're actually logged in (visit `/account`)

### Paywall not working:
- Verify the product handle matches exactly (case-sensitive)
- Check that the order status is "Paid"
- Ensure the customer is assigned to the order

### Membership not working:
- Verify the customer tag matches exactly (case-sensitive)
- Check customer tags in Shopify Admin
- If using a subscription app, check what tags it creates

## 🎉 Next Steps

1. Create your actual content pages
2. Set up real products for paywall/membership
3. Integrate with a subscription app (like Recharge) for real membership functionality
4. Customize the styling to match your brand
5. Add more sophisticated access control logic if needed

