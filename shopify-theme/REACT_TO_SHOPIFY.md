# React Developer's Guide to Shopify

Quick reference for React developers new to Shopify development.

## 🧠 Mental Model

### React → Shopify Translation

| React Concept | Shopify Equivalent | Notes |
|--------------|-------------------|-------|
| `Component` | `Section` or `Snippet` | Sections are full components, snippets are smaller reusable pieces |
| `Page Component` | `Template` | Templates define page layouts |
| `Props` | `Section Settings` | Configured in theme editor via schema |
| `useState` | N/A | Everything is server-rendered, no client state |
| `useEffect` | N/A | No lifecycle hooks, everything renders on page load |
| `Context` | Global Objects | `customer`, `product`, `collection` are globally available |
| `import` | `{% render %}` | Include snippets/sections |
| `JSX` | `Liquid` | Template language (similar syntax) |
| `npm install` | Theme files | Everything is in the theme folder |
| `npm run dev` | `shopify theme dev` | Development server |

## 📁 File Structure

```
shopify-theme/
├── templates/          # Like React page components
│   ├── index.json      # Homepage (like pages/index.jsx)
│   ├── product.json    # Product page
│   └── page.about.json # About page
│
├── sections/           # Like React components
│   ├── header.liquid   # Header component
│   └── footer.liquid   # Footer component
│
├── snippets/           # Like small utility components
│   └── card.liquid     # Reusable card component
│
└── assets/             # Like public/ folder
    └── theme.css        # Global styles
```

## 🔤 Liquid Syntax (vs JSX)

### Variables
```liquid
{%- comment -%} Liquid {%- endcomment -%}
{{ product.title }}

{%- comment -%} React {%- endcomment -%}
{product.title}
```

### Conditionals
```liquid
{%- comment -%} Liquid {%- endcomment -%}
{% if customer %}
  <p>Welcome, {{ customer.name }}</p>
{% else %}
  <p>Please log in</p>
{% endif %}

{%- comment -%} React {%- endcomment -%}
{customer ? (
  <p>Welcome, {customer.name}</p>
) : (
  <p>Please log in</p>
)}
```

### Loops
```liquid
{%- comment -%} Liquid {%- endcomment -%}
{% for product in collection.products %}
  <div>{{ product.title }}</div>
{% endfor %}

{%- comment -%} React {%- endcomment -%}
{collection.products.map(product => (
  <div>{product.title}</div>
))}
```

### Including Components
```liquid
{%- comment -%} Liquid {%- endcomment -%}
{% render 'card', title: product.title, image: product.image %}

{%- comment -%} React {%- endcomment -%}
<Card title={product.title} image={product.image} />
```

## 🎨 Sections (Like Components)

### Section File Structure

```liquid
{%- comment -%} sections/my-section.liquid {%- endcomment -%}

{%- comment -%} The component code {%- endcomment -%}
<div class="my-section">
  <h2>{{ section.settings.heading }}</h2>
  <p>{{ section.settings.description }}</p>
</div>

{%- comment -%} Styles (like styled-components) {%- endcomment -%}
{% stylesheet %}
  .my-section {
    padding: 2rem;
  }
{% endstylesheet %}

{%- comment -%} Schema = Props definition (like TypeScript interface) {%- endcomment -%}
{% schema %}
{
  "name": "My Section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Default Heading"
    },
    {
      "type": "textarea",
      "id": "description",
      "label": "Description"
    }
  ]
}
{% endschema %}
```

**In React, this would be:**
```tsx
interface MySectionProps {
  heading?: string;
  description?: string;
}

export function MySection({ heading = "Default Heading", description }: MySectionProps) {
  return (
    <div className="my-section">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}
```

## 📄 Templates (Like Page Components)

### Template File Structure

```json
// templates/page.about.json
{
  "sections": {
    "hero": {
      "type": "page-hero",
      "settings": {
        "heading": "About Us"
      }
    },
    "content": {
      "type": "page-content",
      "settings": {}
    }
  },
  "order": ["hero", "content"]
}
```

**In React, this would be:**
```tsx
// pages/about.tsx
export default function AboutPage() {
  return (
    <>
      <PageHero heading="About Us" />
      <PageContent />
    </>
  );
}
```

## 🔄 Data Flow

### React
```tsx
// Data flows down via props
function Parent() {
  const data = fetchData();
  return <Child data={data} />;
}
```

### Shopify
```liquid
{%- comment -%} Data is globally available {%- endcomment -%}
{%- comment -%} No need to pass props - customer, product, collection are always available {%- endcomment -%}

{%- comment -%} In any template/section {%- endcomment -%}
{% if customer %}
  <p>Welcome, {{ customer.name }}</p>
{% endif %}

{%- comment -%} On product page {%- endcomment -%}
<h1>{{ product.title }}</h1>
<p>{{ product.price | money }}</p>
```

## 🎯 Key Differences

### 1. No Client-Side State
- **React:** `useState`, `useReducer`, Context
- **Shopify:** Everything is server-rendered. No state management needed.

### 2. No API Calls
- **React:** `fetch()`, `axios`, `useQuery`
- **Shopify:** Data is already available via global objects (`product`, `customer`, etc.)

### 3. No Build Step
- **React:** `npm run build`, webpack, Vite
- **Shopify:** Files are uploaded directly. Shopify compiles Liquid on the fly.

### 4. No Routing
- **React:** React Router, file-based routing
- **Shopify:** URLs are determined by Shopify structure:
  - `/products/handle` → Product page
  - `/collections/handle` → Collection page
  - `/pages/handle` → Page
  - `/blogs/handle` → Blog

### 5. Configuration vs Code
- **React:** Everything in code
- **Shopify:** Much is configured in Shopify Admin:
  - Products → Admin UI
  - Collections → Admin UI
  - Pages → Admin UI
  - Theme settings → Theme Customizer

## 🛠️ Development Workflow

### React
```bash
npm install
npm run dev
# Edit code → Hot reload
```

### Shopify
```bash
shopify theme dev
# Edit files → Auto-sync to Shopify
# Preview at http://127.0.0.1:9292
```

## 📦 Common Patterns

### Conditional Rendering
```liquid
{%- comment -%} Liquid {%- endcomment -%}
{% if section.settings.show_title %}
  <h1>{{ section.settings.title }}</h1>
{% endif %}

{%- comment -%} React {%- endcomment -%}
{showTitle && <h1>{title}</h1>}
```

### Mapping Over Items
```liquid
{%- comment -%} Liquid {%- endcomment -%}
{% for item in collection.products limit: 4 %}
  <div>{{ item.title }}</div>
{% endfor %}

{%- comment -%} React {%- endcomment -%}
{collection.products.slice(0, 4).map(item => (
  <div>{item.title}</div>
))}
```

### Default Values
```liquid
{%- comment -%} Liquid {%- endcomment -%}
{{ section.settings.heading | default: 'Default Heading' }}

{%- comment -%} React {%- endcomment -%}
{heading || 'Default Heading'}
```

## 🎨 Styling

### React
```tsx
// CSS Modules, styled-components, Tailwind, etc.
<div className="card">Content</div>
```

### Shopify
```liquid
{%- comment -%} Option 1: Utility classes (like Tailwind) {%- endcomment -%}
<div class="text-center py-8 px-6">Content</div>

{%- comment -%} Option 2: Stylesheet tag {%- endcomment -%}
{% stylesheet %}
  .card {
    padding: 2rem;
  }
{% endstylesheet %}

{%- comment -%} Option 3: External CSS file {%- endcomment -%}
{{ 'theme.css' | asset_url | stylesheet_tag }}
```

## 🔍 Debugging

### React
```tsx
console.log(data);
// React DevTools
// Browser console
```

### Shopify
```liquid
{%- comment -%} Output variables {%- endcomment -%}
{{ customer.id }}
{{ product.handle }}

{%- comment -%} Check if object exists {%- endcomment -%}
{% if customer %}
  <p>Customer exists</p>
{% else %}
  <p>No customer</p>
{% endif %}
```

## 🚀 Key Takeaways

1. **No State Management** - Everything is server-rendered
2. **Global Data** - `customer`, `product`, `collection` are always available
3. **Configuration Over Code** - Much is done in Shopify Admin
4. **Liquid is Like JSX** - Similar syntax, different context
5. **Sections = Components** - Reusable, configurable blocks
6. **Templates = Pages** - Define page layouts
7. **No Build Step** - Upload files directly

## 📚 Resources

- [Shopify Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Theme Architecture](https://shopify.dev/docs/storefronts/themes/architecture)
- [Section Schema](https://shopify.dev/docs/api/liquid/objects/section)

---

**Remember:** Shopify is more like a CMS with templating than a React app. You're configuring content in the admin, and the theme displays it. Much less code, more configuration!
