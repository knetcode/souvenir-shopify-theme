# ✅ Fixed Setup Guide

## What Was Wrong

1. **JSON Templates**: Shopify doesn't support custom JSON templates for pages (only `page.json` is allowed). ✅ **Fixed** - Converted to `.liquid` templates
2. **Coded Pages 404**: Pages need to exist in Shopify Admin - templates alone don't create pages. ✅ **Solution below**

## ✅ What's Fixed

### Templates Now Available in Admin

I've converted the templates to `.liquid` files that will show up in the template dropdown:

- `templates/page.login.liquid` → Selectable as "login" template
- `templates/page.paywall.liquid` → Selectable as "paywall" template  
- `templates/page.membership.liquid` → Selectable as "membership" template

These will now appear in the template dropdown when creating/editing pages!

## 🚀 Quick Setup (Choose One Method)

### Method 1: Create Pages in Admin (Easiest - 2 minutes)

1. **Go to Shopify Admin**
   - Visit: `https://admin.shopify.com/store/pffykd-mz`
   - Navigate to: **Online Store** → **Pages** → **Add page**

2. **Create Each Page**:

   **Free Page:**
   - Title: "Free Example"
   - Content: "This is a free access page!"
   - Template: **Default** (or leave as is)
   - Save

   **Login Page:**
   - Title: "Login Example"  
   - Content: "This is login-protected content!"
   - Template: **login** (select from dropdown - should now appear!)
   - Save

   **Paywall Page:**
   - Title: "Paywall Example"
   - Content: "Premium content here!"
   - Template: **paywall** (select from dropdown)
   - Save

   **Membership Page:**
   - Title: "Membership Example"
   - Content: "Member-only content!"
   - Template: **membership** (select from dropdown)
   - Save

3. **Visit Your Pages**
   - They'll be at: `/pages/free-example`, `/pages/login-example`, etc.
   - (Handles are auto-generated from titles)

### Method 2: Use the Script (Faster if you have API access)

1. **Set up API credentials** (one-time):
   ```bash
   # Go to Shopify Admin → Settings → Apps → Develop apps
   # Create custom app with read_content, write_content scopes
   # Copy the Admin API access token
   export SHOPIFY_STORE=pffykd-mz.myshopify.com
   export SHOPIFY_TOKEN=your_token_here
   ```

2. **Run the script**:
   ```bash
   node scripts/create-test-pages.js
   ```

This will create all 4 test pages automatically!

## 🧪 Testing

After creating pages:

1. **Free Page**: Visit `/pages/free-example` - should work for everyone
2. **Login Page**: 
   - Visit while logged out → See "Login Required"
   - Log in → Visit again → See content
3. **Paywall Page**:
   - Visit while logged out → Login prompt
   - Visit while logged in (no purchase) → Purchase prompt
   - Visit after purchasing "Premium Content Pass" → See content
4. **Membership Page**:
   - Visit while logged out → Login prompt
   - Visit while logged in (no tag) → Membership prompt
   - Visit with "member-active" tag → See content

## 📝 About the Example Files

The `page.*-example.liquid` files I created earlier won't work as standalone pages (they return 404) because Shopify requires pages to exist in the admin. However, you can:

1. **Delete them** if you don't need them
2. **Keep them as reference** for how to structure page templates
3. **Use them as templates** by creating pages in admin and selecting them

## 🎯 Next Steps

1. Create the pages using Method 1 or 2 above
2. Test the access control
3. Customize the templates as needed
4. Create your actual content pages

The templates are now working correctly and will show up in the dropdown! 🎉

