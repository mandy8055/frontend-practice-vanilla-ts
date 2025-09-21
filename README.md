# frontend-practice-vanilla-ts

> **Build lightning-fast component development skills for technical interviews**

[![Deploy to GitHub Pages](https://github.com/mandy8055/frontend-practice-vanilla-ts/actions/workflows/deploy.yml/badge.svg)](https://github.com/mandy8055/frontend-practice-vanilla-ts/actions/workflows/deploy.yml)
A systematic approach to mastering frontend fundamentals through repeated practice with vanilla HTML, CSS, and TypeScript. Perfect for interview preparation and skill building.

## 🎯 Goals

- **Build muscle memory** for common UI patterns and styling
- **Increase development speed** through consistent practice
- **Master core fundamentals** without framework dependencies
- **Prepare for technical interviews** with real coding scenarios
- **Track progress** and maintain practice streaks

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Managed automatically with Volta (see setup below)
- **Volta**: For seamless Node.js version management
- **pnpm**: Package manager (pinned via Volta)

### Setup

1. **Install Volta** (one-time setup):

   ```bash
   # macOS/Linux
   curl https://get.volta.sh | bash

   # Or with package managers:
   # brew install volta        (macOS)
   ```

2. **Clone and setup project**:

   ```bash
   git clone https://github.com/mandy8055/frontend-practice-vanilla-ts.git
   cd frontend-practice-vanilla-ts

   # Volta automatically switches to pinned Node.js version (22.19.0)
   # Install dependencies
   pnpm install
   ```

3. **Start development server**:

   ```bash
   pnpm dev
   ```

   This starts Vite dev server at `http://localhost:3000` with:

   - ⚡ Instant TypeScript compilation
   - 🔥 Hot module replacement
   - 📁 Clean workspace (no compiled `.js` files)

### Create Your First Component

```bash
# Create a new component from template
pnpm new-component 01-cta-button

# Component will be created at: components/01-cta-button/
# - index.html (references script.ts directly)
# - script.ts (TypeScript code)
# - styles.css (component styles)

# Visit: http://localhost:3000/components/01-cta-button/
```

## 📚 Practice System

### Core Philosophy

1. **Start simple** - Build individual components before complex applications
2. **Time-bound practice** - Each component has a target completion time (5-15 minutes)
3. **Repetition builds speed** - Practice the same component multiple times
4. **TypeScript-first** - Build with modern tooling and type safety
5. **Progressive complexity** - Components are ordered from simple to complex

### Memorized Values (Practice these until automatic)

#### Colors

```css
/* CSS Variables (recommended) */
:root {
  --primary: #3b82f6; /* Primary blue */
  --success: #10b981; /* Success green */
  --danger: #ef4444; /* Danger red */
  --warning: #f59e0b; /* Warning orange */
  --gray: #6b7280; /* Neutral gray */
  --dark: #1f2937; /* Dark gray */
  --light: #f9fafb; /* Light gray */
}
```

#### Spacing

```css
/* rem values for consistency */
0.5rem  /* 8px  - Tiny gaps */
1rem    /* 16px - Standard padding */
1.5rem  /* 24px - Medium spacing */
2rem    /* 32px - Large padding */
3rem    /* 48px - Big gaps */
4rem    /* 64px - Extra large spacing */
```

#### Other Values

```css
/* Border radius */
border-radius: 4px, 8px, 12px;

/* Font sizes */
font-size: 0.875rem (14px), 1rem (16px), 1.125rem (18px), 1.5rem (24px),
  2rem (32px);

/* Transitions */
transition: all 0.2s ease;

/* Shadows */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
```

## 🏗️ Component Practice Order

### Phase 1: Basic Components (1-8)

1. **CTA Button** - Primary, secondary, danger states (5 min)
2. **Loader Spinner** - Simple rotating animation (7 min)
3. **Card Component** - Container with shadow and padding (6 min)
4. **Form Input Field** - With validation states (8 min)
5. **Submit Form** - Register/login form with validation (12 min)
6. **Navigation Bar** - Logo + navigation links (10 min)
7. **Modal Dialog** - Overlay with close functionality (10 min)
8. **Dropdown/Select** - Custom styled dropdown (12 min)

### Phase 2: Interactive Components (9-16)

9. **Progress Bar** - Percentage-based indicator (6 min)
10. **Toggle Switch** - On/off states (8 min)
11. **Tabs Component** - Content switching (10 min)
12. **Rating Component** - Star rating system (9 min)
13. **Search Bar** - With icons and functionality (7 min)
14. **Toast Notification** - Success/error messages (8 min)
15. **Tooltip** - Hover information display (6 min)
16. **Avatar/Profile Picture** - With fallback initials (5 min)

### Phase 3: Complex Components (17-24)

17. **Accordion** - Expand/collapse content (10 min)
18. **Badge/Chip** - Status indicators (5 min)
19. **Pagination** - Page navigation (12 min)
20. **Breadcrumb** - Navigation path (8 min)
21. **Dark Mode Toggle** - Theme switching (15 min)
22. **Shimmer Loading** - Skeleton placeholders (10 min)
23. **Empty State** - No data display (6 min)
24. **Data Table** - Sortable columns (15 min)

## 🛠️ Available Commands

```bash
# Development
pnpm dev              # Start Vite dev server with TypeScript compilation
pnpm build            # Build for production
pnpm preview          # Preview production build

# Component Management
pnpm new-component <name>    # Create new component from template

# Examples
pnpm new-component 01-cta-button
pnpm new-component test-modal
```

## 📁 Project Structure

```
frontend-practice-vanilla-ts/
├── components/                    # Your practice components
│   ├── 01-cta-button/            # Component folder
│   │   ├── index.html            # Component HTML (references script.ts)
│   │   ├── styles.css            # Component styles
│   │   └── script.ts             # Component TypeScript
│   └── ...
├── template/                     # Component templates
│   └── component-starter/        # Base template
├── docs/                         # Documentation and notes
├── scripts/                      # Build scripts
│   └── create-component.ts       # Component scaffolding
├── dist/                         # Production build output
├── index.html                    # Practice portfolio dashboard
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies & scripts (with Volta pinning)
└── README.md                     # This file
```

## 📊 Tracking Progress

### Portfolio Dashboard

Visit your main page (`http://localhost:3000`) to see:

- ✅ Completed components
- 📈 Total practice sessions
- 🔥 Practice streak
- 🎯 Component-specific practice counts

### Manual Tracking

Update the `practiceCount` in `index.html` after each practice session to track your repetitions.

## 🎨 Practice Workflow

### Daily Practice Routine

1. **Start dev server**: `pnpm dev`
2. **Choose a component** from your current phase
3. **Set a timer** for the target time
4. **Build from scratch** using memorized values
5. **Focus on speed**, not perfection
6. **Repeat** until you can build it confidently within the time limit
7. **Move to next component** only after mastering the current one

### Speed Building Tips

- **Don't think about colors** - use your CSS variables immediately
- **Use consistent spacing** - stick to your rem values
- **Build patterns, not pixels** - focus on structure over perfect alignment
- **Time yourself** - track improvement over multiple attempts
- **Practice daily** - even 15-20 minutes builds significant muscle memory
- **Use TypeScript** - build muscle memory for type annotations

## 🔧 Technology Stack

- **Vite** - Lightning-fast dev server with native TypeScript support
- **TypeScript** - Type safety and modern JavaScript features
- **Volta** - Automatic Node.js version management
- **pnpm** - Fast, efficient package manager
- **CSS3** - Modern styling with custom properties
- **ES Modules** - Native module system support

## 🚀 Development Features

- ⚡ **Instant TypeScript compilation** - No build step required
- 🔥 **Hot Module Replacement** - Changes reflect immediately
- 📁 **Clean workspace** - No compiled `.js` files in your project
- 🔧 **Modern tooling** - Industry-standard development setup
- 🌍 **GitHub Pages ready** - `pnpm build` creates deployable files

## 🌐 Deployment

### GitHub Pages

```bash
# Build for production
pnpm build

# The dist/ folder contains your built site
# Configure GitHub Pages to serve from /dist or use GitHub Actions
```

### Local Preview

```bash
# Preview the production build
pnpm preview
```

## 🎯 Learning Resources

### Documentation Structure

- `docs/` - Store your learnings, patterns, and insights

### Recommended Practice

- **Start with Phase 1** - master basic components first
- **Practice in order** - components build on each other
- **Repeat frequently** - same component multiple times until automatic
- **Time everything** - build speed awareness
- **Focus on fundamentals** - avoid fancy libraries or frameworks
- **Use TypeScript** - build type-thinking habits for interviews

## 🔄 Version Management

This project uses [Volta](https://volta.sh/) for automatic Node.js version management:

- **Pinned Node.js**: 22.19.0 (automatically activated in this project)
- **Pinned pnpm**: 9.0.0
- **Automatic switching** - Volta handles version switching when you `cd` into the project

### Manual Setup (without Volta)

If you prefer not to use Volta:

- Node.js >= 22.19.0
- pnpm >= 9.0.0

## 📄 License

MIT License - feel free to use this system for your own practice and share with others!
