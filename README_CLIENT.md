# Souvenir Theme - Complete Setup Guide

This guide walks you through setting up and managing your Souvenir theme.

**Important:** The Shopify theme editor does **not work in Firefox**. Use Chrome or Safari.

---

## Before You Start

### Key Terms

- **Handle:** A URL-friendly version of a name that Shopify creates automatically. For example, "Danish Riviera Itinerary" becomes `danish-riviera-itinerary`. Handles appear in URLs (like `/products/danish-riviera-itinerary`) and must match exactly when creating links.
- **Collection:** A group of products (like a category)
- **Blog:** A container for articles (you can have multiple blogs for different topics)
- **Section:** A building block you can add, remove, and rearrange in the theme editor
- **Template:** A page layout that determines which sections appear by default

### Backup Your Theme First

Before making any changes, create a backup:

1. Go to **Online Store → Themes**
2. Find your Souvenir theme
3. Click the **⋮** (three dots) menu
4. Select **Duplicate**
5. Name it something like "Souvenir Backup [Date]"

This way, you can always restore to a working version if something goes wrong.

---

## Part 1: Create Basic Structure

### Step 1: Create Collections

Collections are like categories. Go to **Products → Collections → Create collection**

1. **Itineraries Collection**
   - Name: `Itineraries`
   - Handle: `itineraries` (auto-generated, verify it matches)
   - Description: "Detailed travel itineraries"
   - Save

2. **Shop Collection**
   - Name: `Shop` or `Souvenirs`
   - Handle: `shop` or `souvenirs`
   - Save

### Step 2: Create Blogs

Blogs hold your articles and interviews. Go to **Content → Blog posts → Manage blogs → Add blog**

1. **Food, Culture, Life Blog**
   - Title: `Food, Culture, Life`
   - Handle: `food-culture-life`
   - Save

2. **The Interview Blog**
   - Title: `The Interview`
   - Handle: `the-interview`
   - Save

### Step 3: Create Navigation Menus

Go to **Content → Menus**

**Main Menu:**
- Click **Main menu** (or create if it doesn't exist)
- Add menu items:
  - **Itineraries** → Link: `/collections/itineraries`
  - **Editions** → Link: `/pages/editions`
  - **People** → Link: `/blogs/the-interview`
  - **About** → Link: `/pages/about`
- Save

**Footer Menu:**
- Click **Footer menu** (or create if it doesn't exist)
- Add menu items:
  - **Contact** → Link: `/pages/contact`
  - **Privacy** → Link: `/pages/privacy`
  - **Terms of Service** → Link: `/pages/terms`
  - **Shipping & Returns** → Link: `/pages/shipping-returns`
- Save

**Note:** You can type URLs manually even if pages don't exist yet. Create the pages in the next step.

---

## Part 2: Create Pages

Go to **Online Store → Pages → Add page**

1. **About Page**
   - Title: `About`
   - Template: Select `page.about`
   - Add your content
   - Save

2. **Editions Page**
   - Title: `Editions`
   - Template: Default (content comes from sections in theme editor)
   - Save

3. **Other Pages** (as needed):
   - Contact, Privacy, Terms of Service, Shipping & Returns
   - Use the default `page` template
   - Make sure the page handle matches your menu links (check at the bottom of the page editor under "Search engine listing")

---

## Part 3: Create Products

### Itinerary Products

For each itinerary:

1. Go to **Products → Add product**

2. **Basic Info:**
   - Title: e.g., "Danish Riviera Itinerary"
   - Description: See "Writing Product Descriptions" below
   - Product type: `Itinerary`
   - Tags: `itinerary`, location tags, etc.

3. **Pricing:**
   - Set your price, or set to $0 for free (displays as "FREE")
   - Check "This is a digital product" (no shipping needed)

4. **Inventory:**
   - Uncheck "Track quantity" (or set to unlimited)

5. **Collections:**
   - Add to "Itineraries" collection

6. **Save**

7. **Set Template:**
   - After saving, go to **Online Store → Themes → Customize**
   - At the top center of the editor, click the dropdown that shows the current page (e.g., "Home page")
   - Select **Products → [Your Product Name]** from the dropdown
   - Once on your product page, look at the top of the page and find the template dropdown (it will say something like "Default product")
   - Change it to `product.itinerary` for the itinerary layout
   - Click **Save** in the top right

### Writing Product Descriptions with Accordions

Use **Heading 5** to create expandable accordion sections in your product descriptions.

**How to do it:**
1. In the product description editor, write your section title
2. Select the text and choose "Heading 5" from the format dropdown
3. Write the content below it
4. Repeat for each accordion section

**Example:**

```
[Heading 5] What's Included
This 7-day itinerary covers accommodation recommendations, 
daily activities, restaurant picks, and insider tips...

[Heading 5] Best Time to Visit
The Danish Riviera is best visited from May through September 
when the weather is warm and beaches are accessible...

[Heading 5] Day 1: Arrival in Copenhagen
Arrive at Copenhagen Airport. Take the train to...

[Heading 5] Day 2: North to Helsingør
Start your morning with breakfast at...
```

Each Heading 5 becomes a clickable accordion title that expands to show the content below it.

### Shop Products

For souvenirs and physical items:

1. **Products → Add product**
2. Fill in title, description, images, price
3. Add variants if needed (colors, sizes)
4. Add to "Shop" collection
5. Save

---

## Part 4: Create Blog Posts

### Adding Articles

1. Go to **Content → Blog posts → Add blog post**
2. Select blog: `Food, Culture, Life`
3. Fill in:
   - Title
   - Content
   - Featured image
   - Excerpt (preview text)
   - Author
   - Tags
4. Save & Publish

### Adding Interviews

1. Go to **Content → Blog posts → Add blog post**
2. Select blog: `The Interview`
3. Fill in:
   - Title (person's name)
   - Content (interview Q&A)
   - Featured image
   - Tags
4. Save & Publish

---

## Part 5: Configure Homepage

1. Go to **Online Store → Themes → Customize**
2. You'll be on the homepage by default
3. Configure each section by clicking on it:

**Hero Featured:**
- Upload featured itinerary image
- Set title, duration, description
- Link to the itinerary product

**Welcome Section:**
- Edit heading and link

**Edition:**
- Set edition title/subtitle
- Select products to feature
- Select blog to pull articles from
- Set number of articles to display

**Testimonials:**
- Add testimonial blocks with quotes and authors

**Categories:**
- Add category tabs with images and links

4. Click **Save** (top right)

---

## Part 6: Configure Header & Footer

### Header

1. In theme editor, click **Header** section
2. Configure:
   - Announcement bar text (optional)
   - Logo image
   - Navigation (auto-populates from Main menu)

### Footer

1. Click **Footer** section
2. Configure:
   - Newsletter heading
   - Footer content
   - Links (auto-populates from Footer menu)

---

## Part 7: Theme Settings

In the theme editor, look at the left sidebar. Scroll down past all the sections to the very bottom. You'll see **Theme settings** with a gear icon. Click it to access:

### Colors
- **Background** - Main page background color
- **Foreground** - Main text color
- **Pink, Yellow, Cream** - Accent colors used throughout the theme
- **Gray shades** - Used for borders, secondary text, and subtle backgrounds

### Typography
- **Heading font** - Used for all titles and headings
- **Body font** - Used for paragraphs and regular text

### Social Media
- **Twitter, Facebook, Instagram** - Enter your full profile URLs (e.g., `https://instagram.com/yourhandle`)

---

## Part 8: Publishing

### Preview Before Publishing

Before making your theme live, always preview your changes:

1. In the theme editor, click **Preview** in the top right
2. A new tab will open showing how your store looks
3. Navigate around to check different pages
4. Close the preview tab when done

### Set Theme as Live

1. Go to **Online Store → Themes**
2. Find your theme
3. Click **Actions → Publish**
4. Confirm

### Store Settings

Go to **Online Store → Preferences**:
- Store name
- Meta description (for search engines)
- Social sharing image

---

## Day-to-Day Management

**Tip:** Always preview your changes before saving by clicking **Preview** in the theme editor. This opens a new tab where you can see how changes will look without affecting your live site.

### Adding New Itineraries
1. Go to **Products → Add product**
2. Fill in title, description (use Heading 5 for accordion sections—see Part 3)
3. Set price, mark as digital product
4. Add images
5. Add to "Itineraries" collection (right sidebar under "Collections")
6. Save
7. Change template to `product.itinerary`:
   - Go to **Online Store → Themes → Customize**
   - Use the page dropdown at top center to find your new product
   - Change the template dropdown to `product.itinerary`
   - Save

### Adding Blog Posts
1. Go to **Content → Blog posts → Add blog post**
2. Select the appropriate blog from the dropdown (e.g., "Food, Culture, Life" or "The Interview")
3. Add title, content, featured image
4. Set visibility to "Visible" 
5. Click **Save**

### Editing Homepage
1. Go to **Online Store → Themes → Customize**
2. You'll land on the homepage by default
3. Click any section in the left sidebar to edit it
4. Click **Save** when done

### Managing Products
1. Go to **Products** in the left sidebar
2. Click on any product to edit
3. Update details, images, prices as needed
4. Click **Save**

### Viewing Orders
1. Go to **Orders** in the left sidebar
2. Click any order to view details
3. Process and fulfill orders as needed

---

## Section Reference

Sections are the building blocks of your pages. In the theme editor, click **Add section** to insert any of these.

---

### Welcome Section

A centered introductory text block with an optional link.

| Setting | Description |
|---------|-------------|
| Label | Small uppercase text above the heading (e.g., "Welcome to Souvenir") |
| Heading | Main text, typically a tagline or introduction |
| Link | URL to link to |
| Link Text | Button/link text (e.g., "Discover more") |

---

### Edition

A magazine-style carousel combining products and blog articles. Think of "editions" like issues of a magazine—each edition can feature a curated mix of itineraries and articles around a theme (e.g., "Summer in Scandinavia" or "Edition One: Mediterranean Escapes").

This section allows you to create multiple editions, each with its own products and articles. Visitors can swipe or click through the carousel to browse different editions.

| Setting | Description |
|---------|-------------|
| Padding Top/Bottom | Adjust spacing above and below |

**Blocks (add "Edition" blocks for each edition you want):**

| Block Setting | Description |
|---------------|-------------|
| Edition Title | Name of the edition (e.g., "Edition One" or "Summer Collection") |
| Description | Short description text (1-2 sentences about this edition) |
| Products | Select products to feature in this edition's carousel |
| Blog | Select a blog to pull articles from |
| Number of articles | How many articles to show (1-20) |

---

### Accordion

Expandable FAQ or content sections. Visitors click to expand/collapse each item.

| Setting | Description |
|---------|-------------|
| Heading | Section title (optional) |
| Background Color | Section background |
| Allow multiple items open | If unchecked, opening one closes others |
| Padding Top/Bottom | Adjust spacing |

**Blocks (add multiple "Accordion Item"):**

| Block Setting | Description |
|---------------|-------------|
| Title | The clickable header text |
| Content | The expandable content (rich text) |

---

### Blog Carousel

A horizontal scrolling carousel of blog articles with navigation arrows.

| Setting | Description |
|---------|-------------|
| Select Blog | Choose which blog to display articles from |
| Heading | Section title (e.g., "Latest Posts") |
| Number of articles | How many to show (3-20) |
| Show "View All" button | Adds a link to the full blog |
| Excerpt length | Characters to show in article preview (50-200) |
| Padding Top/Bottom | Adjust spacing |

---

### Blog Grid

Displays blog articles in a grid layout (used on blog pages).

| Setting | Description |
|---------|-------------|
| Articles per page | Number of articles to display (4-24) |

---

### Product Carousel

Showcases products from a collection in a horizontal carousel.

| Setting | Description |
|---------|-------------|
| Label | Small text above the carousel (e.g., "Our Top Products") |
| Collection | Select the collection to display |
| Placeholder Background Color | Color shown when product has no image |

---

### Picture Carousel

A simple image gallery carousel.

| Setting | Description |
|---------|-------------|
| Heading | Section title (optional) |
| Padding Top/Bottom | Adjust spacing |

**Blocks (add multiple "Image"):**

| Block Setting | Description |
|---------------|-------------|
| Image | Upload an image |
| Alt Text | Description for accessibility |

---

### Testimonials

Display customer quotes side by side.

| Setting | Description |
|---------|-------------|
| Background Color | Section background |

**Blocks (add multiple "Testimonial"):**

| Block Setting | Description |
|---------------|-------------|
| Testimonial Text | The quote |
| Author | Who said it |

---

### Categories

A grid of category cards with optional filter tabs.

| Setting | Description |
|---------|-------------|
| Collection | Link to a collection (optional) |
| Background Color | Section background (default: pink) |

**Blocks:**

- **Category Tab** - Filter buttons at the top (Label)
- **Category Item** - Individual cards (Image, Author, Title, Link)

---

### Image + Text Layouts

Three variations for combining images and text:

**Image Text** - Image on the left, text on the right

| Setting | Description |
|---------|-------------|
| Image | Upload image |
| Heading | Section heading |
| Content | Rich text content |
| Background Color | Section background |
| Padding Top/Bottom | Adjust spacing |

**Text Image** - Text on the left, image on the right (same settings as above, reversed layout)

**Text Text** - Two text columns side by side

| Setting | Description |
|---------|-------------|
| Content 1 | Left column (rich text) |
| Content 2 | Right column (rich text) |
| Background Color | Section background |
| Padding Top/Bottom | Adjust spacing |

**Image Image** - Two images side by side

| Setting | Description |
|---------|-------------|
| Image 1 | Left image |
| Image 2 | Right image |
| Background Color | Section background |
| Padding Top/Bottom | Adjust spacing |

---

### Video

Embed YouTube, Vimeo, or direct video files.

| Setting | Description |
|---------|-------------|
| Video URL | YouTube or Vimeo link |
| Custom Video URL | Direct MP4 link (overrides above) |
| Heading | Section title (optional) |
| Background Color | Section background |
| Max Width | Maximum width of video (600-1400px) |
| Padding Top/Bottom | Adjust spacing |

---

### Simple Block

A basic rich text content block.

| Setting | Description |
|---------|-------------|
| Content | Rich text content |
| Background Color | Section background |
| Padding Top/Bottom | Adjust spacing |

---

### Page Hero

A centered hero section for pages with heading, image, and description.

| Setting | Description |
|---------|-------------|
| Heading | Main title |
| Image | Hero image |
| Description | Subtitle/description text |
| Background Color | Section background |

---

### Team Section

Display a team member with circular photo and bio (used on About page).

| Setting | Description |
|---------|-------------|
| Team Member Image | Circular photo |
| Name | Person's name |
| Role | Their role/title |
| Bio | Biography (rich text) |
| Background Color | Section background |

---

### Contact Section

Simple contact information display.

| Setting | Description |
|---------|-------------|
| Heading | Section title (e.g., "CONTACT") |
| Subheading | Intro text (e.g., "We love to hear from you!") |
| Contact Information | Contact details (rich text) |

---

### Collection Header

Automatically displays at the top of collection pages. Shows the collection title, description, and optional image.

| Setting | Description |
|---------|-------------|
| Show Description | Toggle collection description visibility |
| Show Image | Toggle collection image visibility |

---

### Blog Header

Automatically displays at the top of blog pages. Shows the blog title.

| Setting | Description |
|---------|-------------|
| Background Color | Section background |

---

### Search Section

Displays search results when visitors search your store. This section is automatically used on the search results page.

| Setting | Description |
|---------|-------------|
| Products per page | Number of results to show |

---

### Product Main

The main product display section showing title, price, images, description, and add-to-cart button. Automatically used on product pages.

| Setting | Description |
|---------|-------------|
| Show vendor | Toggle product vendor/brand visibility |

---

### Product Related

Shows related products at the bottom of product pages.

| Setting | Description |
|---------|-------------|
| Heading | Section title (e.g., "You May Also Like") |
| Number of products | How many related products to show |

---

### Article Main

The main article display for blog posts. Shows title, author, date, featured image, and content.

| Setting | Description |
|---------|-------------|
| Show author | Toggle author name visibility |
| Show date | Toggle publish date visibility |

---

### Article Related

Shows related articles at the bottom of blog posts.

| Setting | Description |
|---------|-------------|
| Heading | Section title (e.g., "Related Articles") |
| Number of articles | How many related articles to show |

---

## Page Templates Reference

| Template | Use For |
|----------|---------|
| `page` | Standard pages (Contact, Privacy, etc.) |
| `page.about` | About page with team section |
| `product` | Standard shop products |
| `product.itinerary` | Travel itinerary products |
| `collection` | Standard collection pages |
| `collection.itineraries` | Itineraries collection |
| `article` | Individual blog post pages |
| `blog` | Blog listing pages |
| `search` | Search results page |
| `404` | Page not found error page |

**How to assign a template:**

1. **For Pages:** Edit the page → scroll down → look for "Theme template" dropdown on the right side → select your template → Save
2. **For Products:** Edit the product → scroll down → look for "Theme template" dropdown on the right side → select your template → Save
3. **For Collections:** Edit the collection → scroll down → look for "Theme template" dropdown on the right side → select your template → Save

---

## Pricing Notes

- When a product price is **$0**, it displays as **"FREE"** instead of $0.00
- Product vendor names are hidden by default

---

## Troubleshooting

### Theme editor not loading / blank page
- **Use Chrome or Safari** - the editor does not work in Firefox
- Clear your browser cache (Settings → Clear browsing data)
- Try incognito/private mode
- Check your internet connection
- Wait a moment and try again (Shopify servers may be busy)

### Images not uploading
- Check file size (max 20MB per image)
- Use JPG, PNG, or WebP format
- Compress large images (use tinypng.com or similar)
- Try a different browser

### 404 error when clicking menu links
- Verify the page/collection/product exists
- Check that the URL handle matches your menu link exactly
- Make sure the collection or page is published (not in draft)
- Check for typos in the link URL

### Template not showing in dropdown
- Refresh the theme editor (close the tab and reopen Customize)
- Make sure you saved recent changes
- Check that you're editing the correct theme (not a backup)

### Changes not appearing on live site
- Make sure you clicked **Save** in the theme editor
- Check that you're editing the published theme (not a draft/backup)
- Clear your browser cache or view in incognito mode
- Wait a few minutes for changes to propagate

### Accordion/content not displaying correctly
- Make sure you're using **Heading 5** format for accordion titles (not Heading 1-4)
- Check that content follows immediately after the heading
- Make sure there's no extra blank lines between heading and content

### Menu items not appearing
- Verify the menu exists (Content → Menus)
- Check that items are added to the correct menu (Main menu vs Footer menu)
- In theme editor, verify the Header/Footer is set to use the correct menu

---

## Quick Reference

### Key Concepts

- **Collections** = Product categories (Itineraries, Shop)
- **Products** = Individual items for sale
- **Blogs** = Content categories (articles, interviews)
- **Pages** = Static content (About, Contact, etc.)
- **Sections** = Content blocks in the theme editor
- **Templates** = Page layouts (assigned per page/product)
- **Blocks** = Repeatable items within a section (e.g., multiple testimonials)
- **Handle** = URL-friendly name (auto-generated from titles)

### Important URLs

- Admin: `https://your-store.myshopify.com/admin`
- Theme Editor: Online Store → Themes → Customize
- Products: Products (left sidebar)
- Blog Posts: Content → Blog posts
- Pages: Online Store → Pages
- Menus: Content → Menus

### Common Navigation Paths

| Task | Path |
|------|------|
| Edit homepage | Online Store → Themes → Customize |
| Add a product | Products → Add product |
| Add a blog post | Content → Blog posts → Add blog post |
| Add a page | Online Store → Pages → Add page |
| Edit navigation menus | Content → Menus |
| Change theme colors/fonts | Theme Editor → Theme settings (gear icon at bottom of sidebar) |
| Enable customer accounts | Settings → Customer accounts |
| View orders | Orders |

---

## Glossary

| Term | Definition |
|------|------------|
| **Admin** | The backend of your Shopify store where you manage everything (products, orders, content, settings) |
| **Article** | A single blog post within a blog |
| **Block** | A repeatable element within a section (e.g., each FAQ item in an accordion, each testimonial) |
| **Blog** | A container that holds multiple articles (e.g., "The Interview" blog holds all your interview articles) |
| **Collection** | A grouping of products, like a category (e.g., "Itineraries" collection contains all itinerary products) |
| **Handle** | A URL-safe version of a name. "Danish Riviera Trip" becomes `danish-riviera-trip`. Used in URLs and linking. |
| **Menu** | A navigation list of links that appears in your header or footer |
| **Metafield** | Custom data fields for products, pages, or other content (advanced feature) |
| **Page** | Static content that doesn't change often (About, Contact, Terms of Service) |
| **Product** | An item for sale, including both physical goods and digital products like itineraries |
| **Section** | A content block you can add, remove, and rearrange in the theme editor |
| **Template** | A page layout that determines which sections appear by default on a type of page |
| **Theme** | The design and layout of your entire online store |
| **Theme Editor** | The visual editor where you customize how your store looks (Online Store → Themes → Customize) |
| **Vendor** | The brand or manufacturer of a product |

---

## Getting Help

If you run into issues:

1. **Check the Troubleshooting section** above for common problems
2. **Preview before publishing** - Always preview changes before making them live
3. **Use your backup** - If something breaks, you can restore from your duplicate theme
4. **Clear your browser cache** - If things look wrong, try clearing cache or using incognito mode
5. **Contact support** - Reach out to your developer if you need additional help

---
---

# Appendix: Membership & Protected Content

> **⚠️ INCOMPLETE FEATURE WARNING**
> 
> The membership and paywall features described in this section were started but not completed. They may not work as intended and will likely require additional development and testing before use. **Do not rely on these features without first consulting your developer.**

---

## Overview

The theme includes code for a content protection system with three types of access control:

1. **Login-Protected Pages** - Content only visible to logged-in customers
2. **Membership-Protected Pages** - Content only visible to members with a specific tag
3. **Purchase-Protected Content (Paywalls)** - Content that unlocks after purchasing a product

---

## Related Templates

These templates exist but may not be fully functional:

| Template | Intended Use |
|----------|--------------|
| `page.login` | Pages requiring customer login |
| `page.membership` | Pages requiring active membership |
| `page.paywall` | Pages with purchase-gated content |

---

## Related Sections

### Membership Promo

A promotional banner encouraging visitors to become members.

| Setting | Description |
|---------|-------------|
| Heading | Main headline (e.g., "Become a Member") |
| Description | Benefits description |
| Button Text | Call-to-action text |
| Button Link | Link to membership/signup page |
| Background Color | Section background |

---

## How the System Was Designed to Work

### Enable Customer Accounts

For any of these features to work, customer accounts must be enabled:

1. Go to **Settings** (bottom left of admin)
2. Click **Customer accounts**
3. Choose **Optional** or **Required**
4. Save

### Login-Protected Pages

Pages that require customers to log in to view.

**To create:**
1. Go to **Online Store → Pages → Add page**
2. Add your title and content
3. Under "Theme template," select `page.login`
4. Save

**Intended behavior:**
- Logged-in customers see the full page content
- Non-logged-in visitors see a "Login Required" message with a login button

### Membership-Protected Pages

Pages that only members with an active subscription can view.

**To create:**
1. Go to **Online Store → Pages → Add page**
2. Add your title and content
3. Under "Theme template," select `page.membership`
4. Save

**Intended behavior:**
- Customers with the `member-active` tag see the full content
- Non-members see a "Membership Required" message

**Membership tags:**

The system looks for the customer tag `member-active` by default. This tag would typically be added automatically by a subscription app (like Recharge, Bold Subscriptions, or Seal Subscriptions).

To manually add a tag: **Customers → [Customer Name] → Tags → Add `member-active`**

### Purchase-Protected Content (Paywalls)

Content that unlocks after a customer purchases a specific product.

**Note:** This feature is disabled in the default templates.

---

## Troubleshooting (If Using These Features)

### Customers can't see protected content
- Verify customer accounts are enabled (Settings → Customer accounts)
- For membership pages: check the customer has the `member-active` tag
- Make sure the page is using the correct template
- These features may need additional development work

---

## Contact Your Developer

If you want to use these membership/paywall features, please contact your developer to:

1. Review and complete the implementation
2. Test all access control scenarios
3. Integrate with your chosen subscription/membership app
4. Ensure the user experience works correctly
