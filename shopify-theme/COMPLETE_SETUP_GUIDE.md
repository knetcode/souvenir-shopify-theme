# Complete Setup Guide - From Zero to Live

This guide walks you through setting up the Souvenir theme from scratch, even if you're new to Shopify.

## 🎯 Overview

**What you're doing:**
1. Upload the theme to Shopify
2. Create the structure (collections, products, pages, blogs)
3. Add content from PDFs
4. Configure paywalls
5. Test everything
6. Hand off to client

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
   - Handle: `itineraries` (auto-generated, but verify)
   - Description: "Detailed travel itineraries"
   - Save

2. **Shop/Souvenirs Collection**
   - Create another collection
   - Name: `Shop` or `Souvenirs`
   - Handle: `shop` or `souvenirs`
   - Save

### Step 7: Create Blogs

Blogs are for articles and interviews:

1. **Food, Culture, Life Blog**
   - Go to **Online Store** → **Blog posts** → **Manage blogs**
   - Click **Add blog**
   - Title: `Food, Culture, Life`
   - Handle: `food-culture-life` (verify)
   - Save

2. **The Interview Blog**
   - Add another blog
   - Title: `The Interview`
   - Handle: `the-interview` (verify)
   - Save

### Step 8: Create Navigation Menus

1. **Main Menu**
   - Go to **Online Store** → **Navigation**
   - Click **Main menu** (or create if doesn't exist)
   - Add menu items:
     - Itineraries → Link to `/collections/itineraries`
     - Editions → Link to `/pages/editions`
     - People → Link to `/blogs/the-interview`
     - About → Link to `/pages/about`
   - Save

2. **Footer Menu**
   - Create or edit **Footer** menu
   - Add links:
     - Subscriptions → `/pages/subscriptions`
     - Contact → `/pages/contact`
     - Advertising → `/pages/advertising`
     - Privacy → `/pages/privacy`
     - Shipping & Returns → `/pages/shipping-returns`
     - Terms of Service → `/pages/terms`
   - Save

---

## Part 4: Create Pages

### Step 9: Create Basic Pages

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

3. **Other Pages** (create as needed):
   - Contact
   - Privacy
   - Terms of Service
   - Shipping & Returns
   - etc.
   - Template: Use default `page` template

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

8. **Set Template:**
   - After saving, go to **Online Store** → **Themes** → **Customize**
   - Navigate to the product page
   - In the theme editor, you'll see template options
   - Change template to `product.itinerary`

### Step 11: Add Full Itinerary Content

After creating the product:

1. Go to **Online Store** → **Themes** → **Customize**
2. Navigate to the product page (use the search/URL)
3. Find the **"Itinerary Paywall"** section
4. Configure:
   - **Preview Content**: What non-purchasers see (already in product description)
   - **Full Content**: The complete itinerary (from PDF)
   - **Day Blocks**: Add day-by-day content using the "Add block" button
     - For each day: Add title, content, optional image

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

1. Go to **Online Store** → **Blog posts** → **Add blog post**
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

1. **Blog posts** → **Add blog post**
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

1. Go to **Online Store** → **Themes** → **Customize**
2. You're on the homepage (index)
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

## Part 8: Configure Paywalls

### Step 16: Set Up Paywall Products

You need products that grant access:

1. **Create "Premium Content Pass"** (if using general paywall):
   - Product → Add product
   - Title: `Premium Content Pass`
   - Handle: `premium-content-pass`
   - Price: e.g., £99
   - Digital product
   - Save

2. **For Individual Itineraries:**
   - Each itinerary product IS the paywall product
   - When someone buys "Danish Riviera Itinerary", they get access to that itinerary's full content
   - No separate product needed

### Step 17: Test Paywall Access

1. **Create Test Customer:**
   - Customers → Add customer
   - Email, name, etc.
   - Save

2. **Create Test Order:**
   - Orders → Create order
   - Add the itinerary product
   - Assign to test customer
   - Mark as **Paid**
   - Mark as **Fulfilled**
   - Save

3. **Test:**
   - Log out
   - Visit itinerary product page
   - Should see preview content + "Login Required"
   - Log in as test customer
   - Should see full itinerary content

### Step 18: Set Up Membership (Optional)

If using membership system:

1. **Create Membership Product:**
   - Product → Add product
   - Title: `Souvenir Membership`
   - Handle: `souvenir-membership`
   - Price: £99/year (or use subscription app)
   - Digital product
   - Save

2. **Tag Customers:**
   - When a customer subscribes, add tag: `member-active`
   - Or use subscription app (Recharge) to auto-tag

3. **Create Membership Pages:**
   - Create page with template `page.membership`
   - Configure membership tag in section settings

---

## Part 9: Configure Header & Footer

### Step 19: Set Up Header

1. **Themes** → **Customize** → Click on **Header** section
2. Configure:
   - Announcement bar text
   - Logo (if you have one)
   - Navigation links (should auto-populate from menu you created)

### Step 20: Set Up Footer

1. In theme customizer, click **Footer** section
2. Configure:
   - Newsletter heading
   - Membership section content
   - Upload membership image
   - Footer links (should auto-populate from footer menu)

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

3. **Settings** → **Theme settings** (in customizer)
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
  - [ ] Shows preview to non-logged-in users
  - [ ] Shows "Login Required" when logged out
  - [ ] Shows full content when customer has purchased
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
   - In theme customizer, set template to "product.itinerary"
   - Add full content in "Itinerary Paywall" section

2. **Adding Blog Posts:**
   - Blog posts → Add blog post
   - Select blog (Food, Culture, Life OR The Interview)
   - Write and publish

3. **Editing Homepage:**
   - Themes → Customize
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
  - Edit pages in theme customizer
  - Add products
  - Manage orders
  - View customer accounts

---

## 🚨 Common Issues & Solutions

### Issue: Theme not showing
**Solution:** Make sure you published it (Themes → Actions → Publish)

### Issue: Paywall not working
**Solution:** 
- Check order is marked "Paid" AND "Fulfilled"
- Verify product handle matches exactly
- Clear browser cache

### Issue: Images not uploading
**Solution:** 
- Check file size (Shopify limit: 20MB)
- Use JPG/PNG format
- Compress if needed

### Issue: Can't see customer object
**Solution:** 
- Customer object is available on all pages when logged in
- Make sure you're testing with a real customer account (not admin)

### Issue: Template not showing in dropdown
**Solution:**
- Make sure template file is in `templates/` folder
- File must be `.json` format
- Refresh theme customizer

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
- Theme Customizer: Admin → Online Store → Themes → Customize
- Preview: Use the preview URL from `shopify theme dev`

---

## ✅ You're Done!

Once everything is tested and working:

1. ✅ Theme is live
2. ✅ All content is added
3. ✅ Paywalls are configured
4. ✅ Client can manage content themselves
5. ✅ Documentation provided

**Next Steps for Client:**
- They can edit content via theme customizer
- They can add products via Products section
- They can manage orders and customers
- They can add blog posts

**You're done! 🎉**
