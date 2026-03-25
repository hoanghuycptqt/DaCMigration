# Design System: DaC Migration Portal

**Based on:** Bosch Frontend Kit v2.2.0 (`@bosch/frontend.kit-npm`)
**Application:** DaC Migration Portal — Engineering artifact migration wizard
**Target Platform:** Desktop (Bosch Intranet)

---

## 1. Visual Theme & Atmosphere

The Bosch design language is **Corporate-Industrial Minimalism** — clean, structured, and confidence-inspiring. The aesthetic is engineered for **professional utility**, prioritizing clarity and efficiency over decorative flourishes. It feels like a precision instrument: functional surfaces, clear hierarchies, and no visual noise.

- **Mood:** Utilitarian, trustworthy, corporate-clean
- **Density:** Medium — generous whitespace with structured content blocks, not sparse but never cluttered
- **Aesthetic Philosophy:** Form follows function — every visual element serves a purpose. No gratuitous gradients, no glassmorphism, no trendy effects. Bosch's design language communicates reliability and engineering rigor
- **Surface Model:** Layered context system — the UI uses different surface tiers (primary → secondary → contrast → floating) to create visual hierarchy through background shifts rather than borders or shadows

---

## 2. Color Palette & Roles

### Brand Colors

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Bosch Signature Red** | `#ed0007` | Brand identity mark only — Bosch logo, critical alerts. Never used as a primary action color |
| **Pure White** | `#ffffff` | Primary surface background, text on dark fills |
| **Deep Black** | `#000000` | Primary text color on light surfaces |

### Action & Interaction Colors

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Bosch Corporate Blue** | `#007bc0` | Primary action color — CTA buttons, active links, interactive highlights. The anchor of the interaction palette |
| **Deepened Action Blue** | `#00629a` | Hover state for primary actions — darkened to signal responsiveness |
| **Midnight Action Blue** | `#004975` | Pressed state for primary actions — further darkened for tactile feedback |
| **Whisper Blue** | `#e8f1ff` | Lightest blue tint — focus indicator backgrounds, selected row highlights |
| **Sky Blue Wash** | `#d1e4ff` | Light blue accent — minor interactive element hover fills, subtle selected states |

### Signal Colors (Status Communication)

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Signal Success Green** | `#00884a` | Major success indicators — completed migrations, healthy services, passed checks |
| **Soft Success Green** | `#b8efc9` | Minor success backgrounds — success notification fills on light surfaces |
| **Signal Error Red** | `#ed0007` | Major error indicators — failed migrations, unhealthy services, validation errors |
| **Soft Error Red** | `#ffd9d9` | Minor error backgrounds — error notification fills on light surfaces |
| **Signal Warning Amber** | `#ffcf00` | Major warning indicators — caution states, degraded services, timeout alerts |
| **Soft Warning Amber** | `#ffdf95` | Minor warning backgrounds — warning notification fills |
| **Signal Info Blue** | `#007bc0` | Major informational indicators — in-progress, neutral status badges |
| **Soft Info Blue** | `#d1e4ff` | Minor informational backgrounds — info notification fills |

### Neutral Surface Colors

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Lightest Gray Canvas** | `#eff1f2` | Secondary surface background — sidebar, card areas on primary surfaces |
| **Pale Silver** | `#e0e2e5` | Neutral button fills, table header backgrounds, input borders |
| **Warm Steel** | `#c1c7cc` | Divider lines, disabled input borders, subtle separators |
| **Medium Graphite** | `#8a9097` | Placeholder text, secondary labels, muted icons |
| **Charcoal** | `#595e62` | Subdued text, caption labels |
| **Dark Slate** | `#2e3033` | Contrast surface backgrounds (dark header/sidebar) |
| **Near Black Ink** | `#1a1c1d` | Dark mode primary surface background |

### Highlight Colors (for Charts & Data Visualization)

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Data Purple** | `#9e2896` | Chart series 1, highlight category — used for purple accents in statistics views |
| **Data Blue** | `#007bc0` | Chart series 2, primary data line — aligns with corporate blue |
| **Data Turquoise** | `#18837e` | Chart series 3, secondary data — used for differentiation without visual clash |
| **Data Green** | `#00884a` | Chart series 4, tertiary data — aligns with success green for positive metrics |

---

## 3. Typography Rules

- **Font Family:** `BoschSans` — a proprietary sans-serif typeface loaded via `@font-face` with regular (400) and bold (700) weights, plus italic variants for both
- **Heading Character:** Bold weight (700), minimal letter-spacing, hierarchical sizing from `2em` (h1) downward. Headlines are direct and unadorned — no decorative transformations
- **Body Character:** Regular weight (400), comfortable reading line-height (1.15 base). Clean and efficient — optimized for scanning technical content
- **Monospace:** System monospace stack (`monospace, monospace`) for code blocks, JSON previews, log output, and RST raw views
- **Icon System:** Material Symbols Outlined (loaded via Google Fonts CDN). All icons use the `material-symbols-outlined` class with `FILL 0, wght 400, GRAD 0, opsz 24` settings. Example icons used throughout:
  - Navigation: `home`, `add_circle`, `folder_open`, `dashboard`, `list_alt`, `monitoring`, `bar_chart`, `group`, `favorite`
  - Actions: `refresh`, `check_circle`, `cancel`, `error`, `warning`, `settings`, `help`, `logout`
  - Service-specific: `dns`, `database`, `mail`, `code`, `air`

---

## 4. Component Stylings

> **Key convention:** All components use `border-radius: 0` (sharp corners) throughout the application, consistent with Bosch's engineering-precision aesthetic. No rounded buttons, cards, or inputs.

### Buttons
- **Primary (Major Accent):** Filled with Corporate Blue (`#007bc0`), white text, `border-radius: 0`. Hover deepens to `#00629a`, pressed to `#004975`. Disabled: gray fill (`#c1c7cc`) with muted text (`#8a9097`)
- **Secondary (Minor Accent / Ghost):** Transparent fill with Corporate Blue border and text. On hover, fills with Corporate Blue and white text. Ghost-style buttons for secondary actions (e.g., "Check Now" on System Health)
- **Neutral:** Lightest Gray fill (`#eff1f2`), black text. For non-priority actions like "Cancel" or "Back"
- **Integrated:** Fully transparent, text-only with underline behavior. Used for inline links and navigation triggers

### Cards / Containers
- **Primary surface cards:** White background, `border-radius: 0`, left accent border (4px colored left edge indicating status). Separation achieved through background contrast with the parent surface (secondary gray `#f0f4fb`)
- **Floating elements:** White background with subtle shadow (`0 8px 24px rgba(0,0,0,0.12)`) — used for dropdowns, popovers, tooltips, modal overlays
- **Contrast panels:** Dark backgrounds — header uses `#2e3033`, footer uses `#212121`

### Inputs / Forms
- **Text Fields:** Clean with subtle border styling. Error/success/warning states indicated by colorized bottom border and notification text below the field
- **Validation states:** Red border + red icon for errors, green for success, amber for warnings
- **Dropdowns & Select:** Standard styling with Bosch-UI caret icons (`ui-ic-down`)

### Notifications / Alerts
- **Banner notifications:** Full-width at top, with icon + text content + optional close button
- **Inline notifications:** Attached to form fields for validation messages
- **Signal levels:**
  - Info: Soft Info Blue background, black text
  - Success: Soft Success Green background, black text
  - Warning: Soft Warning Amber background, black text
  - Error: Soft Error Red background, black text
  - Major variants: saturated color fill with white text for higher emphasis

### Tables
- **Container:** White background, `border-radius: 0`, `1px solid` subtle border
- **Header:** Transparent background with 2px solid bottom border, uppercase 11px labels with 0.06em letter-spacing. Bold weight, `--on-surface` color
- **Rows:** White background, 1px bottom border separators. No alternating colors — hover highlight only (`#f5f7fa`)
- **Sortable columns:** Caret icon indicators
- **Filter bar:** Inline within table container, subtle bottom border separator
- **Pagination:** Bottom row with page info and navigation

### Progress Indicators
- **Linear bar:** Inner bar fills proportionally with configurable `data-progress` attribute
- **Step indicators:** Vertical stepper with numbered/icon dots connected by lines — ideal for the migration wizard flow

### Modals / Dialogs
- **Overlay:** Semi-transparent black backdrop
- **Content:** White floating card centered, with close button, confirm/cancel action buttons
- **Scrollable body** when content exceeds viewport

### Side Navigation
- **Layout:** Fixed left panel, 240px wide, white background, right border. Extends from below header to bottom of viewport (no gap)
- **Items:** Uppercase labels, 0.04em letter-spacing, 48px item height. 3px transparent left border becomes Corporate Blue when active
- **Active state:** Light blue tinted background `rgba(0, 123, 192, 0.06)`, bold weight, Corporate Blue text and left border
- **Hover state:** Light gray background, Corporate Blue text
- **Section dividers:** "ADMINISTRATION" label in 10px uppercase, bold, muted color

### Tabs
- **Tab bar:** Horizontal row, selected tab gets `-selected` class with active blue indicator
- **Disabled tabs:** Grayed out, non-interactive

---

## 5. Layout Principles

- **Surface Context Layering:** The entire layout system is built on nested surface contexts (`-primary`, `-secondary`, `-contrast`, `-floating`). Each context automatically adjusts all child component colors — this is the fundamental design mechanism. Components don't set their own colors; they inherit from their surface context
- **Structure:** Classic admin layout — fixed header, collapsible left sidebar navigation, scrollable main content area, minimal footer
- **Spacing Strategy:** Consistent use of rem-based spacing. Generous padding within containers, tighter spacing between related elements. The system favors whitespace over borders for element separation
- **Grid:** Content area uses a responsive container (`e-container`) with fluid margins
- **Breakpoints:**
  - Tablet and up: `min-width: 768px`
  - Desktop and up: `min-width: 1194px`
- **Shadow Model:** Minimal — shadows are reserved exclusively for floating elements (dropdowns, tooltips, modals). The default shadow is `rgba(0,0,0,0.25)`. Dark mode uses a pure black shadow for deeper contrast. Flat surfaces never have shadows
- **Dark Mode Support:** Full dark mode system available via `-dark-mode` class on root. All surface contexts and component states automatically invert. Primary dark surface: Near Black Ink (`#1a1c1d`)

---

## 6. Application Shell & Navigation

### 6.1 Global Header (All Roles)
- **Layout:** Fixed top bar, full width, height 56px, z-index 200
- **Surface:** Dark Slate background (`#2e3033`), white text. 6px Bosch-red supergraphic bar at bottom edge
- **Left section:** Bosch logo (SVG, Signature Red) + vertical separator + "DaC Migration Portal" text
- **Right section:** User identity area with:
  - **Avatar circle:** 36px, Corporate Blue background, white initials (first letter of first name + first letter of last name, ignoring parenthetical department codes like "(MS/EET22)"). Example: "Truong Hoang Huy (MS/EET22)" → "TH"
  - **User name:** Displayed next to avatar in white text
  - **Dropdown chevron:** Material Symbols `expand_more` icon
  - **Dropdown menu (on click):** White floating panel anchored to user trigger button. Width matches trigger button width (dynamic). Contains:
    - User info section: name (bold), email, role badge ("USER" blue or "ADMIN" purple)
    - Separator line
    - Menu items with Material Symbols icons: Settings (`settings`), Help (`help`)
    - Separator line  
    - Logout item (red danger style) with `logout` icon

### 6.2 Left Sidebar Navigation

**User Role — Menu Items:**
1. `home` **HOME** — Migration type selection (path: `/`)
2. `add_circle` **NEW MIGRATION** — Starts wizard (path: `/wizard`)
3. `folder_open` **MY SPACE** — List of user's own migrations (path: `/requests`)

**Admin Role — Additional items below "ADMINISTRATION" divider:**
4. `dashboard` **DASHBOARD** — Overview with summary cards (path: `/admin`)
5. `list_alt` **ALL REQUESTS** — All users' migrations (path: `/admin/requests`)
6. `monitoring` **MONITORING** — Real-time DAG executions (path: `/admin/monitoring`)
7. `bar_chart` **STATISTICS** — Charts and analytics (path: `/admin/statistics`)
8. `group` **USERS** — Manage users and roles (path: `/admin/users`)
9. `favorite` **SYSTEM HEALTH** — Service health checks (path: `/admin/health`)

> **Note:** Settings and Help are accessed via the header user dropdown menu, not the sidebar. No bottom section in sidebar.

**Visual:** Fixed left panel, white background. Active item highlighted with Corporate Blue 3px left border + light blue tinted background. Admin section separated by a horizontal divider with "ADMINISTRATION" label in 10px uppercase muted text.

### 6.3 Footer (All Roles)
- **Position:** Fixed at bottom of viewport, full width, z-index 200
- **Surface:** Dark charcoal background (`#212121`)
- **Left:** Copyright text: "© 2026 Robert Bosch GmbH — DaC Migration Portal v0.1" in 11px muted white (`rgba(255,255,255,0.5)`)
- **Right:** Legal links row: "Legal Notice", "Data Protection", "Terms of Service" in 11px white (`rgba(255,255,255,0.6)`), hover → full white
- **Content padding:** `var(--space-4) var(--space-8)` (16px vertical, 32px horizontal)
- **Note:** Main content area has `72px` bottom padding to compensate for the fixed footer

---

## 7. Shared Pages (User & Admin)

### 7.1 Login Page
- **Layout:** Full-screen white surface, centered vertically and horizontally
- **Content:**
  - Bosch logo (large, centered)
  - App title "DaC Migration Portal" (h1, bold)
  - Subtitle: "Migrate engineering artifacts to Doc-as-Code repositories" (body, charcoal)
  - Single button: "Sign in with Bosch ID" (Major Accent blue, full-width within card, `boschicon-bosch-ic-login` icon)
- **Behavior:** Clicking button redirects to Azure AD OAuth2/OIDC flow. On success, redirect to Home.

### 7.2 Home / Migration Type Selection
- **Layout:** Page title "Start a Migration" + 7 migration type cards in a 2-column grid (or 3 on wide screens)
- **Recommended order banner:** Soft Info Blue notification banner at top: "Recommended order: SW Architecture → Requirements → DSD → TestSpec"
- **Each card contains:**
  - Order badge: circle with number (1–7), Signal Info Blue fill, white text — top-left corner
  - Icon: relevant Bosch-Icon (e.g., `boschicon-bosch-ic-structure` for SW Arch, `boschicon-bosch-ic-document` for Requirements, `boschicon-bosch-ic-document-test` for TestSpec)
  - Title: migration type name (bold)
  - Subtitle: source tool name in Charcoal (e.g., "From DOORS via ReqIF")
  - Export mode tag: "Automated" (minor signal success green badge) or "Manual Upload" (minor signal neutral blue badge)
  - Description: 1-line summary of what this migration does
- **Card interaction:** Hover → subtle blue border glow. Click → navigates to Migration Wizard pre-filled with this type at Step 1.
- **Below cards:** "View My Requests →" link (integrated button style) for quick access

### 7.3 Migration Wizard (All 7 Types)

**Global Wizard Layout:**
- **Top:** Horizontal stepper bar showing all steps. Each step: circle with step number + label below. States:
  - **Completed:** Success Green circle, white checkmark icon, green label
  - **Active:** Corporate Blue circle, white number, blue label (bold)
  - **Upcoming:** Pale Silver circle, Charcoal number, gray label
  - **Failed/Error:** Signal Error Red circle, white "!" icon
  - Steps connected by horizontal lines (green for completed segments, gray for upcoming)
- **Center:** White card panel on secondary gray background — contains the active step's form
- **Bottom:** Action bar with "Back" (neutral button, left) + "Next" or "Submit" (major accent button, right). "Save Draft" (minor accent button, center) appears from Step 2 onward.
- **Contextual help:** Each form field has a tooltip icon (`boschicon-bosch-ic-info-i`) — hover reveals explanation popover

---

#### 7.3.1 Step 1: Select Migration Type
- **Content:** Same 7 cards as Home page but in a compact single-select radio-card layout
- **Pre-filled** if user clicked a card from Home
- **Validation:** One type must be selected to proceed

#### 7.3.2 Step 2: Repository & Branch
- **Repository selection:**
  - Toggle between two modes via Tab Navigation: "Browse Repositories" | "Manual URL"
  - **Browse mode:** Searchable dropdown/combo box (`boschicon-bosch-ic-search` icon). Fetches from GitHub Enterprise API. Shows: `owner/repo-name` with last-updated date
  - **Manual mode:** Text input for full GitHub URL with URL validation
  - Validation indicator: green checkmark if repo is accessible, red error if not
- **Branch selection:**
  - Dropdown listing existing branches from selected repo
  - "Create New Branch" option at bottom of dropdown (opens inline text field for branch name + base branch selector)
  - New branch: auto-prefixed with `migration/` suggestion

#### 7.3.3 Step 3: Source Configuration
Content varies by migration type:

**Type 1 — SW Architecture:**
- Text input: "SW Package Name (SwPkg)" — required
- Two sub-options via Tab Navigation:
  - "Fill Template in UI" → opens editable table with columns: need_type, title, element_class (dropdown: SwArchPkg/SwArchSubPkg/SwArchCpt), long_name_en, responsible, proxy_responsible, supplier, safety_classification, implements, sw_arch_clearing_id, exported_interfaces, imported_interfaces, description, parent_element, parent_element_class, dir
  - "Upload Pre-filled Excel" → file upload zone accepting `.xlsx`
- "Add Row" button (minor accent) below table

**Type 2 — DOORS Requirements:**
- Text input: "SW Package Name (SwPkg)" — required
- Section "DOORS Module Information" — editable table:
  - Columns: Module Name, DOORS Path, Baseline Version
  - "Add Module" button to add rows
- Status indicator: "System will automatically export ReqIF from DOORS" (minor signal info banner)

**Type 3 — DNG Requirements:**
- Text input: "SW Package Name (SwPkg)" — required
- Text input: "Context URL (GC Configuration)" — required, with URL validation
- Dynamic list "DNG Module URLs":
  - Text input per URL + "Add Module URL" button
  - At least 1 URL required

**Type 4 — DOORS DSD:**
- Same as Type 2 but labeled "DOORS DSD Module Information"
- Status indicator: "System will automatically export ReqIF from DOORS"

**Type 5 — DNG DSD:**
- Same as Type 3 but labeled for DSD context

**Type 6 — Rhapsody DSD:**
- Text input: "SW Package Name (SwPkg)" — required
- Editable table "Rhapsody Modules":
  - Columns: Module Name, Target Folder, Rhapsody Version on SDOM
  - "Add Module" button

**Type 7 — TestSpec:**
- Text input: "Excel Directory Name (excelDirName)" — required
- Editable table "Test Spec Modules":
  - Columns: Module Name, Target Folder, UT Spec Version, SWQT Spec Version, SysQT Spec Version
  - "Add Module" button

#### 7.3.4 Step 4: File Upload / Auto Export
Content varies by export mode:

**Automated types (Type 2, 4 — DOORS):**
- No file upload needed
- Progress panel showing automated steps:
  1. "Exporting ReqIF from DOORS..." → spinner → green checkmark on complete
  2. "Parsing ReqIF to JSON..." → spinner → green checkmark
  3. "Exporting linking information..." → spinner → green checkmark
- Each step shows elapsed time. On failure: red error icon + error message + "Retry" button
- User waits; "Next" button is disabled until all automated steps complete

**Manual upload types (Type 3, 5, 6, 7):**
- **Drag-and-drop file upload zone:**
  - Dashed border area with `boschicon-bosch-ic-upload` icon centered
  - Text: "Drag files here or click to browse"
  - Accepted formats shown below (varies by type):
    - DNG (3, 5): `.reqif`, `.reqifz`, `.png`, `.jpg`
    - Rhapsody (6): `.json`, `.png`, `.jpg`
    - TestSpec (7): `.xlsm`
  - Max 50MB per file badge
- **Uploaded files list:**
  - Each file row: file icon, filename, file size, progress bar (during upload), status (✓ uploaded / ✗ error), delete button
  - Batch upload supported — multiple files at once
- **Validation:** File type and size checked before upload. Invalid files: inline error notification

**Type 1 (SW Architecture):**
- No file upload step — if user filled the template in Step 3, it's already captured. If they uploaded Excel, that was captured in Step 3
- This step may show: "Template data ready ✓" confirmation or a preview of the uploaded Excel data

#### 7.3.5 Step 5: Mapping Builder
The visual mapping builder — the core UX innovation replacing manual JSON editing.

**Layout:** Full-width table within the wizard pane.

**For DNG-based types (Type 3, 5) — Two target columns:**

| Source Module (read-only) | Git Path (editable) | RST File Prefix (editable) |
|---|---|---|
| Module_A | `data/requirements/SwPkg/` | `REQ_ModA` |
| Module_B | `data/requirements/SwPkg/` | `REQ_ModB` |

- Source column: secondary gray background, parsed module names from ReqIF JSON
- Git Path: text input with directory autocomplete (from GitHub API file tree)
- RST Prefix: text input for RST file prefix convention

**For DOORS-based types (Type 2, 4) — One target column + sw_arch.json:**

| Source Module (read-only) | Git Path (editable) |
|---|---|
| Module_X | `data/requirements/SwPkg/` |
| Module_Y | `data/requirements/SwPkg/` |

- Additional section below: "SW Architecture Mapping (sw_arch.json)" — separate table:
  - Columns: Module Name (read-only) | SWARCH DaC ID (editable text input)

**For Rhapsody (Type 6):**
| Source Module (read-only) | Git Path (editable) |
|---|---|
| RhapModule1 | `data/rhapsody/SwPkg/` |

**For TestSpec (Type 7):**
- Different mapping format — "Excel Mapping":

| Target Directory (editable) | Files (multi-select from uploaded files) |
|---|---|
| `module1/ut/` | module1_ut_spec.xlsm |
| `module1/swqt/` | module1_swqt_spec.xlsm |

**Common mapping features:**
- Row validation: green checkmark icon if both sides filled, red "!" if any field empty
- Top-right toolbar:
  - "Export Mapping JSON" (minor accent button, `boschicon-bosch-ic-export` icon) — downloads current mapping as JSON
  - "Import Mapping JSON" (minor accent button, `boschicon-bosch-ic-import` icon) — opens file picker to load a previously exported mapping
- Summary bar at bottom: "X of Y modules mapped" with progress indicator
- Validation gate: all modules must have a complete mapping before "Next" is enabled

**Type 1 (SW Architecture):**
- No mapping step — skip directly to Review. Stepper shows this step as "Skipped" (gray, dash icon)

#### 7.3.6 Step 6: Review & Confirm
- **Read-only summary** of all configured data organized in sections:

**Summary Card Layout:**
- **Migration Type:** badge with type name and icon
- **Repository:** `owner/repo-name` (clickable link to GitHub)
- **Branch:** branch name (green "New" tag if just created)
- **SW Package / Directory:** value entered
- **Files Uploaded:** count + total size (expandable list)
- **Mapping:** condensed table preview (first 5 rows + "and X more..." link)
- **Additional Config:** DNG URLs, DOORS module info, sw_arch.json preview — whatever is applicable

- **Edit buttons:** Each section has a pencil icon button (`boschicon-bosch-ic-edit`) to jump back to that wizard step
- **Estimated time:** "Typical migration time: 5–15 minutes" informational banner

#### 7.3.7 Step 7: Execute or Schedule
Two options presented as radio cards:

**Option A: "Execute Now"**
- Description: "Start the migration immediately"
- Shows queue status: "X migrations currently running, Y in queue"
- If at concurrency limit: warning banner "Migration will be queued and start when a slot is available"

**Option B: "Schedule for Later"**
- Date picker (calendar widget) + Time picker
- Must be a future date/time
- Description: "Migration will automatically start at the scheduled time"

- **Submit button:** "Start Migration" or "Schedule Migration" (major accent button)
- **Confirmation dialog** appears as a modal:
  - Title: "Confirm Migration"
  - Body: "You are about to trigger [Type] migration to [repo]/[branch]. This action will modify the target repository."
  - Buttons: "Cancel" (neutral) + "Confirm & Start" (major accent)

#### 7.3.8 Step 8: Monitor Progress
After triggering, user is taken to the **Request Detail View** (same as accessing from My Requests). See Section 7.5.

---

### 7.4 My Requests (User Role: own requests only / Admin: own requests)
- **Page title:** "My Migration Requests"
- **Summary cards row** (4 cards):
  - Total Migrations (count, `boschicon-bosch-ic-bar-chart` icon)
  - Running (`boschicon-bosch-ic-refresh`, Signal Info Blue text)
  - Completed (`boschicon-bosch-ic-checkmark`, Success Green text)
  - Failed (`boschicon-bosch-ic-alert-error`, Error Red text)

- **Filters toolbar:**
  - Migration Type: dropdown (All / 7 types)
  - Status: multi-select dropdown (DRAFT, SCHEDULED, QUEUED, PRECHECKING, RUNNING, VALIDATING, COMPLETED, FAILED, ROLLED_BACK)
  - Date Range: from/to date pickers
  - Search: text input "Search by repository or branch" (`boschicon-bosch-ic-search` icon)

- **Request table:**

| Column | Content |
|---|---|
| ID | Auto-increment number |
| Type | Migration type badge (icon + short name) |
| Repository | `owner/repo` truncated with tooltip for full URL |
| Branch | Branch name |
| Status | Color-coded status badge (see status color mapping below) |
| Started | Date/time or "—" if not started |
| Duration | Elapsed time or "—" |
| Actions | Icon buttons: View Details, Retry (if failed), Rollback (if completed) |

- **Status badge colors:**
  - DRAFT: Pale Silver fill, black text
  - SCHEDULED: Data Purple fill, white text
  - QUEUED: Soft Info Blue fill, black text
  - PRECHECKING: Signal Info Blue fill, white text
  - RUNNING: Signal Info Blue fill, white text, with animated pulse
  - VALIDATING: Soft Warning Amber fill, black text
  - COMPLETED: Signal Success Green fill, white text
  - FAILED: Signal Error Red fill, white text
  - ROLLED_BACK: Charcoal fill, white text

- **Pagination:** Page indicator at bottom with page numbers + "Items per page" dropdown (10/25/50)
- **Click row** → navigates to Request Detail View

### 7.5 Request Detail View
- **Page title:** "Migration Request #[ID]" + status badge
- **Breadcrumb:** My Requests > Request #[ID]

**Top section — Request Summary Card:**
- Two-column layout:
  - Left: Type, Repository (link), Branch, SW Package, Triggered by (user name), Created at
  - Right: Status badge (large), Started at, Completed at, Duration, Scheduled at (if applicable)

**Middle section — Progress Stepper:**
- Vertical stepper showing migration lifecycle:
  1. **Queued** — waiting for concurrency slot
  2. **Prechecking** — calling Windows server precheck APIs
  3. **Running** — Airflow DAG active (sub-steps from DAG tasks shown as nested items)
  4. **Validating** — post-migration validation
  5. **Completed** / **Failed**
- Each step: icon + label + timestamp + duration
- Active step: blue with loading spinner
- Failed step: red with error message displayed inline

**Airflow tasks sub-stepper (within "Running" step):**
- Lists individual DAG task instances with their status (pending/running/completed/failed/skipped)
- Each task: click to expand and show task log

**Log Viewer panel:**
- Collapsible section: "View Logs" accordion
- Dark contrast background (`-contrast`), monospace font
- Auto-scrolling with pause button
- Search within logs (`boschicon-bosch-ic-search`)
- Download logs button (`boschicon-bosch-ic-download`)

**Action buttons (bottom of page):**
- **If FAILED:** "Retry Migration" button (major accent) — triggers re-queue with confirmation dialog
- **If COMPLETED:** "Preview RST Output" button (minor accent) + "Rollback Migration" button (major signal error, `boschicon-bosch-ic-undo`)
- **If RUNNING:** disabled buttons with "Migration in progress..." label

### 7.6 RST Preview Page
- **Breadcrumb:** My Requests > Request #[ID] > RST Preview
- **File tree panel (left, 25% width):**
  - Tree view of generated RST files in the target branch (fetched from GitHub API)
  - Folder expand/collapse with arrows
  - Click a `.rst` file to load its preview on the right
- **Preview panel (right, 75% width):**
  - **Tab Navigation** at top: "Rendered HTML" | "Raw RST"
  - **Rendered HTML tab:** RST content rendered to HTML via docutils/rst2html. White surface, standard document styling
  - **Raw RST tab:** Syntax-highlighted RST source in a monospace code block on dark contrast background
- **Read-only** — no editing capability

### 7.7 Rollback Confirmation
- Triggered from Request Detail View
- **Modal dialog:**
  - Title: "Rollback Migration #[ID]"
  - Warning banner (major signal warning): "This will create revert commits for all changes made by this migration. This action cannot be undone."
  - Summary: Repository, Branch, number of commits to revert
  - Buttons: "Cancel" (neutral) + "Confirm Rollback" (major signal error red button)
- After confirmation: progress indicator → result notification (success/fail banner)

---

## 8. Admin-Only Pages

### 8.1 Admin Dashboard (Overview)
- **Page title:** "Administration Dashboard"
- **Summary cards row** (4 clickable cards):

| Card | Value | Icon | Color | Links to |
|---|---|---|---|---|
| Total Requests | Count of all migrations from all users | `boschicon-bosch-ic-bar-chart` | Corporate Blue | All Requests page |
| Active Migrations | Currently running + queued count | `boschicon-bosch-ic-refresh` | Signal Info Blue (animated) | Monitoring page |
| Success Rate | Percentage (last 30 days) | `boschicon-bosch-ic-chart-check` | Success Green | Statistics page |
| System Health | "All Healthy" or "X issues" | `boschicon-bosch-ic-health` | Success Green (healthy) / Error Red (issues) | System Health page |

- **Below cards — Quick insights section:**
  - Mini chart: "Migrations this week" (small bar chart, last 7 days)
  - Recent activity list: last 5 migration events (user, type, status, time ago)

### 8.2 All Requests Page (Admin Only)
- **Page title:** "All Migration Requests"
- Same table layout as "My Requests" (Section 7.4) but with additional features:

**Additional columns:**
| Column | Content |
|---|---|
| User | Triggered by (user display name + NTID) |

**Additional filters:**
- User: searchable dropdown of all registered users
- Sortable by any column (click column header, caret icon toggles asc/desc)

**Additional actions:**
- "Export as CSV" button (minor accent, `boschicon-bosch-ic-export`) — top right of table

### 8.3 Real-Time Monitoring Page (Admin Only)
- **Page title:** "Real-Time Migration Monitoring"

**Section 1: Currently Running (top)**
- Card per running DAG execution:
  - Header: Migration type badge + Request ID + user name
  - Repository + Branch
  - DAG Run ID
  - Progress bar showing task completion (e.g., "3 of 7 tasks completed")
  - Elapsed time (live updating)
  - Button: "View Details" → navigates to Request Detail View
  - Button: "View Logs" → inline expandable log panel

**Section 2: Migration Queue (bottom)**
- Table of QUEUED migrations waiting for a concurrency slot:
  - Columns: Position in queue (#), Request ID, User, Type, Repository, Queued since
  - Concurrency info banner: "X of Y slots in use" (minor signal info)

### 8.4 Statistics Page (Admin Only)
- **Page title:** "Migration Statistics"
- **Date range selector:** From/To date pickers + quick presets ("Last 7 days", "Last 30 days", "Last 3 months", "All time") — top of page

**Charts grid (2 columns):**

| Chart | Type | Colors Used |
|---|---|---|
| Migrations over time | Line chart (daily/weekly/monthly toggle) | Corporate Blue line |
| Success vs Failure rate | Stacked area chart | Success Green + Error Red |
| Breakdown by migration type | Horizontal bar chart | Each type gets one highlight color (Purple, Blue, Turquoise, Green, + shades) |
| Most active users | Horizontal bar chart (top 10) | Corporate Blue bars |

- Each chart in its own white card on secondary gray page background
- Hover tooltips on data points showing exact values

### 8.5 User Management Page (Admin Only)
- **Page title:** "User Management"
- **Search bar:** "Search users by name or NTID" (`boschicon-bosch-ic-search`)

**User table:**
| Column | Content |
|---|---|
| Name | Display name |
| NTID | Bosch employee NTID |
| Email | Email address |
| Role | Dropdown: USER / ADMIN (editable inline by admin) |
| Status | Toggle switch: Active (green) / Blocked (red) |
| Last Login | Date/time or "Never" |
| Total Migrations | Count |
| Actions | "View Requests" link |

- **Role change:** Inline dropdown. On change → confirmation dialog: "Change [Name]'s role from USER to ADMIN?"
- **Block/Unblock:** Toggle switch. On toggle → confirmation dialog: "Block [Name]? They will not be able to log in."
- Blocked users: row has subtle red-tinted background

### 8.6 System Health Page (Admin Only)
- **Page title:** "System Health"
- **Manual refresh button:** "Check Now" (ghost button with `refresh` Material Symbols icon + Corporate Blue border) — top right of page header
- **Auto-refresh indicator:** "Auto-checking every 60s" label in muted text, right of button

**Summary Bar (below header):**
- Horizontal banner with left accent border (4px)
- **All healthy:** Green left border, green background tint (`#e7f5e9`), `verified` icon, "All systems operational" text
- **Issues detected:** Red left border, red background tint (`#fdecea`), `warning` icon, "X service(s) require attention" text
- Counts row below: "✓ N Healthy" (green) + "✗ N Unhealthy" (red) with corresponding icons

**Service List (table-style layout):**

| Column | Width | Content |
|---|---|---|
| **STATUS** | 140px | Colored dot (10px circle with 3px glow ring) + "Healthy" / "Unhealthy" label |
| **SERVICE** | flex | Material Symbols icon (contextual: `dns`, `database`, `mail`, `code`, `air`) + service name |
| **RESPONSE TIME** | 220px | Progress bar track (6px height, gray background) with blue fill proportional to response time (max 300ms scale). Yellow fill (`--signal-warning`) if >150ms. Numeric value in ms beside bar |
| **LAST CHECKED** | 120px | Relative timestamp (e.g., "2 min ago") in muted text |

**Service rows:**
- White background, 1px bottom borders, hover highlight (`#f9fafb`)
- **Unhealthy rows:** Light red tinted background (`#fef8f8`)
- **Error banner:** Full-width sub-row spanning all columns when a service is unhealthy — light red background with `error` icon + error message text in Error Red
- Rows sorted: unhealthy services appear first

**Monitored services:**

| Service | Icon | Endpoint checked |
|---|---|---|
| Windows Server — Precheck | `dns` | Server ping at 10.0.1.25:8443 |
| Airflow Server | `air` | REST API ping |
| Windows Server — ReqIF Parser | `dns` | API endpoint ping |
| Windows Server — Postcheck | `dns` | API endpoint ping |
| Windows Server — DOORS Export | `dns` | API endpoint ping |
| GitHub Enterprise | `code` | API v3 ping |
| MySQL Database | `database` | JDBC connection check |
| SMTP Server | `mail` | Connection check |
