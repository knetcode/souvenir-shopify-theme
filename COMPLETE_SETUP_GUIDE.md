# Complete Setup Guide - From Zero to Live

This guide walks you through setting up the Souvenir theme from scratch, even if you're new to Shopify.

## 🎯 Overview

**What you're doing:**
1. Upload the theme to Shopify
2. Create the structure (collections, products, pages, blogs)
3. Add content from PDFs
4. Test everything
5. Hand off to client

**Notes:**
- **Paywall functionality** is currently disabled but can be re-enabled later. See `RE_ENABLE_PAYWALL.md` for instructions.
- **Free Mode (MVP):** Itineraries are set to display as FREE with hidden add-to-cart buttons. This can be easily disabled later to enable payments. See Step 11 for details.

**⚠️ Important:** The Shopify theme editor ("Edit theme") does **not work in Firefox**. Use Chrome

**Time estimate:** 4-6 hours for initial setup

---

## Part 1: Prerequisites & Setup

### Step 1: Install Shopify CLI

```bash
# Install via npm (you probably have this)
npm install -g @shopify/cli @shopify/theme

# Or via Homebrew (Mac)
brew tap shopify/shopify
brew install shopify-cli
```

### Step 2: Login to Shopify

```bash
shopify auth login
```

This will open a browser. Log in with the Shopify account the client gave you access to.

### Step 3: Navigate to Theme Folder

```bash
cd /Users/kylee/Code/souvenir/shopify-theme
```

---

## Part 2: Upload Theme to Shopify

### Step 4: Connect to Store

```bash
# List available stores
shopify theme list

# Or connect directly (if you know the store name)
shopify theme dev --store=your-store-name.myshopify.com
```

**Note:** `shopify theme dev` creates a development theme and syncs changes automatically. This is what you'll use for development.

### Step 5: Push Theme (Alternative Method)

If you prefer to push once instead of using `dev`:

```bash
# Push to a new unpublished theme
shopify theme push --unpublished

# Or push to a specific theme ID
shopify theme push --theme=THEME_ID
```

**Recommendation:** Use `shopify theme dev` - it auto-syncs your changes and gives you a preview URL.

---

## Part 3: Create Basic Structure

### Step 6: Create Collections

Collections are like categories. You need:

1. **Itineraries Collection**
   - Go to Shopify Admin → **Products** → **Collections** → **Create collection**
   - Name: `Itineraries`
   - Handle: `itineraries` (auto-generated, but **VERIFY** - this must match the menu link)
   - Description: "Detailed travel itineraries"
   - **Theme template:** Leave as "Default collection" (or select "itineraries" if you want the custom layout)
   - **Important:** After saving, check the collection URL - it should be `/collections/itineraries`
   - Save

2. **Shop/Souvenirs Collection**
   - Create another collection
   - Name: `Shop` or `Souvenirs`
   - Handle: `shop` or `souvenirs`
   - Save

### Step 7: Create Blogs

Blogs are for articles and interviews:

1. **Food, Culture, Life Blog**
   - Go to **Content** → **Blog posts** (or navigate directly to `/admin/blogs`)
   - Click **Manage blogs** (or look for blog management option)
   - Click **Add blog** (or **Create blog**)
   - Title: `Food, Culture, Life`
   - Handle: `food-culture-life` (verify)
   - Save

2. **The Interview Blog**
   - Add another blog
   - Title: `The Interview`
   - Handle: `the-interview` (verify)
   - Save

**Note:** In newer Shopify admin interfaces, blogs may be under **Content** → **Blog posts** instead of **Online Store**. If you don't see it, try the direct URL: `https://your-store.myshopify.com/admin/blogs`

### Step 8: Create Navigation Menus

**Note:** You can set up navigation menus now, but you'll need to create the pages first (Step 9) before the links will work. You can either:
- **Option A:** Create pages first (Step 9), then come back here to add navigation
- **Option B:** Set up navigation now with manual URLs, then create pages later

Navigation menus are managed in **Content → Menus**:

1. **Go to Content → Menus**
   - In the left sidebar, click **Content**
   - Click **Menus**
   - Or go directly to: `https://your-store.myshopify.com/admin/menus`

2. **Create/Edit Main Menu**
   - Click **Main menu** (or **Create menu** if it doesn't exist)
   - If creating new, name it: `Main menu`
   - Add menu items:
     - Click **Add menu item**
     - **Itineraries** → In the Link field, type: `/collections/itineraries`
       - **Important:** This links to the COLLECTION page (shows all itineraries), not a specific product
       - Make sure you created the "Itineraries" collection in Step 6
       - The collection handle must be exactly `itineraries` (check in Collections → Itineraries → URL)
     - **Editions** → In the Link field, type: `/pages/editions` (page - create in Step 9)
     - **People** → In the Link field, type: `/blogs/the-interview` (blog - create in Step 7)
     - **About** → In the Link field, type: `/pages/about` (page - create in Step 9)
   - **Note:** If pages/collections don't exist yet, you can manually type the URLs in the Link field. The search won't find them, but you can paste/type the URL directly.
   - Save

3. **Create/Edit Footer Menu**
   - Click **Footer menu** (or **Create menu** if it doesn't exist)
   - If creating new, name it: `Footer menu`
   - Add menu items:
     - Click **Add menu item**
     - **Subscriptions** → Type: `/pages/subscriptions` (create page in Step 9)
     - **Contact** → Type: `/pages/contact` (create page in Step 9)
     - **Advertising** → Type: `/pages/advertising` (create page in Step 9)
     - **Privacy** → Type: `/pages/privacy` (create page in Step 9)
     - **Shipping & Returns** → Type: `/pages/shipping-returns` (create page in Step 9)
     - **Terms of Service** → Type: `/pages/terms` (create page in Step 9)
   - **Note:** You can manually type these URLs even if pages don't exist yet
   - Save

**Important:** 
- The theme uses `linklists.main-menu` for header navigation and `linklists.footer` for footer navigation
- Make sure your menu handles match exactly: `main-menu` and `footer`
- If the search shows "No results", you can manually type/paste the URL in the Link field
- Links won't work until you create the actual pages/collections/blogs they point to
- **"Itineraries" menu item** should link to `/collections/itineraries` (the collection page showing all itineraries), NOT to a specific product

---

## Part 4: Create Pages

### Step 9: Create Basic Pages

**Note:** Create these pages so the navigation menu links you set up in Step 8 will work.

Go to **Online Store** → **Pages** → **Add page**

1. **About Page**
   - Title: `About`
   - Content: Add content from PDF
   - Template: Select `page.about` from dropdown
   - Visibility: **Visible**
   - Save

2. **Editions Page**
   - Title: `Editions`
   - Content: (can be empty, content comes from sections)
   - Template: Select `page.editions` from dropdown
   - Visibility: **Visible**
   - Save

3. **Other Pages** (create as needed - these are referenced in your Footer menu):
   - **Contact** → Handle: `contact`
   - **Privacy** → Handle: `privacy`
   - **Terms of Service** → Handle: `terms`
   - **Shipping & Returns** → Handle: `shipping-returns`
   - **Subscriptions** → Handle: `subscriptions`
   - **Advertising** → Handle: `advertising`
   - Template: Use default `page` template
   - **Note:** Make sure the page handles match the URLs you used in your navigation menus

**Note:** Paywall-protected page templates (`page.paywall`, `page.login`, `page.membership`) exist but are not needed since paywall is disabled.

---

## Part 5: Create Products (Itineraries & Shop Items)

### Step 10: Create Itinerary Products

For each itinerary from the PDFs:

1. Go to **Products** → **Add product**
2. **Basic Info:**
   - Title: e.g., "Danish Riviera Itinerary"
   - Description: Add preview content (what non-purchasers see)
   - Handle: e.g., `danish-riviera-itinerary` (make it URL-friendly)
   - Product type: `Itinerary`
   - Vendor: `Souvenir`
   - Tags: `itinerary`, `denmark`, etc.

3. **Pricing:**
   - Price: e.g., £25
   - Compare at price: (optional)
   - **Important:** Check "This is a digital product" (no shipping)

4. **Inventory:**
   - Track quantity: Uncheck (or set to unlimited)
   - SKU: e.g., `ITIN-DK-RIV-001`

5. **Shipping:**
   - Uncheck "This is a physical product"
   - (Digital products don't need shipping)

6. **Collections:**
   - Add to "Itineraries" collection

7. **Save**

8. **Set Template (Optional):**
   - After saving, go to **Online Store** → **Themes** → Click **Edit theme** on your theme
   - Navigate to the product page (use the search/URL bar at the top)
   - In the theme editor, you can change template to `product.itinerary` if you want a different layout
   - **Note:** Paywall functionality is disabled, so all content will be visible to everyone

### Step 11: Add Itinerary Content

After creating the product:

1. Go to **Online Store** → **Themes** → Click **Edit theme** on your theme
2. Navigate to the product page (use the search/URL bar at the top of the editor)
3. Edit the product description section to add all itinerary content
4. You can add images, day-by-day details, etc. directly in the product description
5. **Note:** Since paywall is disabled, all content is public - add everything you want customers to see

**Free Mode (MVP):**
- By default, itineraries are set to "Free Mode" - they show as FREE with crossed-out price
- The "Add to Cart" button is hidden in free mode
- To enable payments later: In the theme editor, find the "Product Main" section and uncheck "Free Mode (MVP)"

### Step 12: Create Shop Products

For souvenirs/shop items:

1. **Products** → **Add product**
2. Fill in:
   - Title, Description, Images
   - Price
   - Variants (if multiple colors/sizes)
   - Add to "Shop" collection
3. Save
4. These use the default `product` template (no paywall)

---

## Part 6: Create Blog Posts

### Step 13: Add Articles

1. Go to **Content** → **Blog posts** → **Add blog post**
   - (Or navigate directly to `/admin/blogs` and click **Add blog post**)
2. Select blog: `Food, Culture, Life`
3. Fill in:
   - Title
   - Content (from PDF)
   - Featured image
   - Excerpt (preview text)
   - Author
   - Tags (for categorization)
4. Save & Publish

### Step 14: Add Interviews

1. Go to **Content** → **Blog posts** → **Add blog post**
   - (Or navigate directly to `/admin/blogs` and click **Add blog post**)
2. Select blog: `The Interview`
3. Fill in:
   - Title (person's name)
   - Content (interview Q&A)
   - Featured image
   - Tags
4. Save & Publish

---

## Part 7: Configure Homepage

### Step 15: Set Up Homepage Sections

**⚠️ Browser Note:** The theme editor does not work in Firefox. Use Chrome

1. Go to **Online Store** → **Themes** → Click **Edit theme** on your theme
2. You're on the homepage (index) - it should load automatically
3. Configure each section:

   **Hero Featured:**
   - Upload featured itinerary image
   - Set title, duration, description
   - Link to the itinerary product

   **Welcome Section:**
   - Edit heading and link

   **Edition Featured:**
   - Set edition title/subtitle
   - Upload images
   - Add article blocks
   - Link to itinerary and shop items

   **Testimonials:**
   - Add testimonial blocks with text and author

   **Categories:**
   - Add category tabs
   - Add category items with images and links

   **Membership Promo:**
   - Upload background image
   - Edit text and link

4. **Save** (top right)

---

## Part 8: Paywall System (Currently Disabled)

**Note:** Paywall functionality has been disabled. All content is currently public.

If you need to re-enable paywalls later, see `RE_ENABLE_PAYWALL.md` for instructions.

The paywall system includes:
- Login-protected pages
- Product-based paywalls (purchase required)
- Membership-protected content

All paywall code is preserved in the theme and can be easily re-enabled.

---

## Part 9: Configure Header & Footer

### Step 19: Set Up Header

1. **Online Store** → **Themes** → **Edit theme** → Click on **Header** section
2. Configure:
   - Announcement bar text
   - Logo (if you have one)
   - Navigation links (should auto-populate from Main menu you created in Content → Menus)

### Step 20: Set Up Footer

1. In theme editor, click **Footer** section
2. Configure:
   - Newsletter heading
   - Membership section content
   - Upload membership image
   - Footer links (should auto-populate from Footer menu you created in Content → Menus)

---

## Part 10: Final Configuration

### Step 21: Set Theme as Live

1. **Themes** → Find your development theme
2. Click **Actions** → **Publish**
3. Confirm

### Step 22: Configure Settings

1. **Online Store** → **Preferences**
2. Set:
   - Store name
   - Store email
   - Meta description
   - Social sharing image

3. **Settings** → **Theme settings** (in theme editor - look for Settings icon/section)
   - Colors
   - Fonts
   - Social media links

---

## Part 11: Testing Checklist

### Step 23: Test Everything

- [ ] Homepage loads correctly
- [ ] Navigation menus work
- [ ] Itineraries collection shows products
- [ ] Shop collection shows products
- [ ] Individual itinerary product page:
  - [ ] Displays all content (paywall disabled)
  - [ ] Images load correctly
  - [ ] Product description shows properly
- [ ] Blog posts display correctly
- [ ] About page displays
- [ ] Editions page displays
- [ ] Footer newsletter form works
- [ ] Mobile responsive (test on phone)
- [ ] All links work
- [ ] Images load properly

---

## Part 12: Client Handoff

### Step 24: Create Documentation for Client

Create a simple guide for them:

**"How to Manage Your Souvenir Site"**

1. **Adding New Itineraries:**
   - Products → Add product
   - Fill in details
   - Add to "Itineraries" collection
   - In theme editor (Edit theme), set template to "product.itinerary"
   - Add full content in "Itinerary Paywall" section

2. **Adding Blog Posts:**
   - Content → Blog posts → Add blog post (or go to `/admin/blogs`)
   - Select blog (Food, Culture, Life OR The Interview)
   - Write and publish

3. **Editing Homepage:**
   - Themes → Edit theme
   - Click any section to edit
   - Save when done

4. **Managing Products:**
   - Products → Edit product
   - Update details, images, prices

5. **Viewing Orders:**
   - Orders → See all orders
   - When someone buys an itinerary, mark as Paid & Fulfilled

### Step 25: Give Them Access

- They should already have admin access
- Show them how to:
  - Edit pages in theme editor (Edit theme)
  - Add products
  - Manage orders
  - View customer accounts

---

## 🚨 Common Issues & Solutions

### Issue: Theme editor not loading / blank page
**Solution:** 
- **The theme editor does NOT work in Firefox** - use Chrome
- Clear browser cache
- Try incognito/private mode
- Check if JavaScript is enabled

### Issue: Theme not showing
**Solution:** Make sure you published it (Themes → Actions → Publish)

### Issue: Paywall not working
**Note:** Paywall is currently disabled. If you need to re-enable it, see `RE_ENABLE_PAYWALL.md`.

### Issue: Images not uploading
**Solution:** 
- Check file size (Shopify limit: 20MB)
- Use JPG/PNG format
- Compress if needed

### Issue: 404 when clicking "Itineraries" in menu
**Solution:**
- **First:** Make sure you've pushed the theme to Shopify (Step 4) - the collection template files need to be uploaded
- Check that the menu link points to `/collections/itineraries` (collection page), NOT to a specific product
- Verify the "Itineraries" collection exists and has the handle `itineraries`
- Check the collection URL: Go to Collections → Itineraries → Look at the URL in browser or collection settings
- Make sure the collection is published/visible (Online Store should be checked)
- **Theme template:** The collection should use "Default collection" template (or "itineraries" if you want custom layout)
- If you still get 404 after pushing theme, try:
  - Refresh the theme editor
  - Check that `templates/collection.json` exists in your theme files
  - Re-push the theme: `shopify theme push`

### Issue: Want to enable payments (disable Free Mode)
**Solution:**
- Go to **Online Store** → **Themes** → **Edit theme**
- Navigate to any product page (or edit the Product Main section globally)
- In the left sidebar, find the **Product Main** section
- Uncheck the **"Free Mode (MVP)"** checkbox
- Save
- The add-to-cart button will appear and prices will show normally
- **Note:** You'll need to do this for each product template, or set it globally if editing the section

### Issue: Can't see customer object
**Solution:** 
- Customer object is available on all pages when logged in
- Make sure you're testing with a real customer account (not admin)

### Issue: Template not showing in dropdown
**Solution:**
- Make sure template file is in `templates/` folder
- File must be `.json` format
- Refresh theme editor (close and reopen Edit theme)

---

## 📝 Quick Reference

### File Structure (for your reference):
```
shopify-theme/
├── templates/          # Page templates (JSON files)
├── sections/           # Reusable sections (Liquid files)
├── snippets/           # Small reusable code (Liquid files)
├── assets/             # CSS, JS, images
├── config/             # Theme settings
└── locales/            # Translations
```

### Key Concepts:

- **Templates** = Page layouts (like React page components)
- **Sections** = Reusable content blocks (like React components)
- **Snippets** = Small reusable code (like utility functions)
- **Collections** = Product categories
- **Products** = Individual items (itineraries, shop items)
- **Blogs** = Content categories (articles, interviews)
- **Pages** = Static content pages (About, Contact, etc.)

### Important URLs:

- Admin: `https://your-store.myshopify.com/admin`
- Theme Editor: Admin → Online Store → Themes → Edit theme
- Preview: Use the preview URL from `shopify theme dev`

---

## ✅ You're Done!

Once everything is tested and working:

1. ✅ Theme is live
2. ✅ All content is added
3. ✅ Client can manage content themselves
4. ✅ Documentation provided

**Note:** Paywall functionality is disabled but can be re-enabled if needed (see `RE_ENABLE_PAYWALL.md`)

**Next Steps for Client:**
- They can edit content via theme editor (Themes → Edit theme)
- They can add products via Products section
- They can manage orders and customers
- They can add blog posts via **Content** → **Blog posts**
- All content is public (no paywalls)

**You're done! 🎉**

---

## 📌 Important Notes

- **Paywall System:** Currently disabled. All content is public.
- **Re-enabling Paywalls:** See `RE_ENABLE_PAYWALL.md` if needed later.
- **Product Templates:** Use default `product` template for all products (itinerary template exists but paywall is disabled).
