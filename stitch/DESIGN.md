```markdown
# Design System Specification: Corporate-Industrial Minimalism

## 1. Overview & Creative North Star
**The Creative North Star: "The Precision Engineer"**

This design system moves beyond generic enterprise portals to deliver a "Digital Toolset" aesthetic. It is rooted in the heritage of industrial engineering—where every line has a purpose and every millimetre of whitespace is calculated. We reject the "template" look of modern SaaS in favor of a bespoke, editorial structure that reflects the rigor of the DaC Migration process.

The system is defined by **Structural Integrity**. We utilize intentional asymmetry, generous horizontal breathing room, and a strictly layered surface model to guide the user through complex migration workflows with absolute confidence.

---

## 2. Colors & Surface Logic
The palette is built on "Industrial Neutrals," punctuated by "Bosch Corporate Blue" for utility and "Signature Red" for high-stakes intervention.

### The "No-Line" Rule
**Prohibition:** 1px solid borders for sectioning are strictly forbidden. 
**The Standard:** Logical boundaries must be defined solely through background color shifts. Use `surface-container-low` (#f0f4fb) sitting on a `surface` (#f7f9ff) background to create definition. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tiers to create depth:
- **Base Level:** `surface` (#f7f9ff) — The primary canvas.
- **Sectioning:** `surface-container-low` (#f0f4fb) — For grouping related content areas.
- **Interactive Layers:** `surface-container-lowest` (#ffffff) — For cards or containers that require the highest focus.
- **Emphasis:** `surface-container-high` (#e4e8ef) — For sidebar backgrounds or utility panels.

### Signature Textures
To avoid a "flat" appearance, primary actions should utilize a subtle linear gradient:
- **Primary Action Gradient:** `primary-container` (#007bc0) to `primary` (#006199). This provides a "machined" feel that implies tactile durability.

---

## 3. Typography: The BoschSans Protocol
Typography is our primary tool for hierarchy. We use BoschSans (Inter-compatible) to convey engineering authority.

| Level | Token | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-md` | 2.75rem | Bold | Migration Status Overview / High-level metrics |
| **Headline** | `headline-sm` | 1.5rem | Bold | Major section headers and Wizard steps |
| **Title** | `title-md` | 1.125rem | Bold | Card titles and Modal headers |
| **Body** | `body-md` | 0.875rem | Regular | Primary data and instructional text |
| **Label** | `label-sm` | 0.6875rem | Bold | Form labels and Metadata (All Caps for utility) |

---

## 4. Elevation & Depth: The Layering Principle
We achieve hierarchy through **Tonal Layering** rather than traditional structural lines.

- **Ambient Shadows:** For floating elements (Modals/Popovers), use a shadow tinted with `on-surface` (#171c21). 
  - *Spec:* `box-shadow: 0 12px 32px rgba(23, 28, 33, 0.08);`
- **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use `outline-variant` (#bfc7d2) at **15% opacity**. Never use 100% opaque lines.
- **Glassmorphism:** Navigation sidebars should utilize `surface-container-high` (#e4e8ef) with a `backdrop-filter: blur(12px)`. This creates an integrated, modern industrial feel.

---

## 5. Components

### Buttons (Precision Triggers)
*All buttons use `DEFAULT` (0px) roundedness for a sharp, industrial look.*
- **Primary:** Gradient from `primary-container` to `primary`. White text. Use for "Commence Migration."
- **Secondary:** Transparent background with `primary` (#006199) Ghost Border. 
- **Integrated:** No background/border. Use for low-priority actions in a dense list.

### Navigation (The Control Center)
- **Contrast Header:** Fixed at the top. Use `inverse-surface` (#2c3136) with `on-primary` (#ffffff) text.
- **Collapsible Sidebar:** Use `surface-container-high` (#e4e8ef). Active states use a 4px left-accent bar in `primary-container` (#007bc0).

### Form Elements (Utility Inputs)
- **Text Fields:** Background `surface-container-lowest` (#ffffff). Bottom-only border using `outline` (#707882).
- **Validation:** 
  - *Error:* `error` (#ba1a1a) text with `error_container` (#ffdad6) soft background.
  - *Success:* `primary` (#006199) accent to indicate technical readiness.

### Data Presentation (Migration Tables)
- **No Dividers:** Separate rows using alternating backgrounds: `surface-container-lowest` and `surface-container-low`.
- **Hover State:** Apply `primary-fixed` (#cee5ff) at 30% opacity to highlight the active data row.

### Specialized: Wizard Stepper
- **Visuals:** A horizontal timeline using `outline-variant` (#bfc7d2) as the track. 
- **Active Step:** A solid square in `primary-container` (#007bc0) with `headline-sm` typography for the step number.

---

## 6. Do’s and Don’ts

### Do
- **Do** use `16` (5.5rem) spacing between major sections to emphasize "Industrial Minimalism."
- **Do** use `tertiary` (#be0004) only for destructive actions or critical system failures.
- **Do** rely on font weight (Bold vs Regular) to create hierarchy before relying on color.

### Don't
- **Don't** use rounded corners (`0px` is the standard for this system).
- **Don't** use drop shadows on buttons; depth is achieved via gradients and color shifts.
- **Don't** use "Grey" for text. Use `on-surface-variant` (#404750) for secondary info to maintain tonal warmth.
- **Don't** use cards with borders. Use the **Layering Principle** (Surface on Surface-Low) to define card boundaries.```