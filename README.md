# frontend-practice-vanilla-ts

> **Build lightning-fast component development skills for technical interviews**

A systematic approach to mastering frontend fundamentals through repeated practice with vanilla HTML, CSS, and TypeScript. Perfect for interview preparation and skill building.

## 🎯 Goals

- **Build muscle memory** for common UI patterns and styling
- **Increase development speed** through consistent practice
- **Master core fundamentals** without framework dependencies
- **Prepare for technical interviews** with real coding scenarios
- **Track progress** and maintain practice streaks

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/mandy8055/frontend-practice-vanilla-ts.git
cd frontend-practice-vanilla-ts

# Install dependencies
pnpm install

# Start development environment
pnpm dev
```

This will start:

- 🔄 TypeScript compiler in watch mode
- 🌐 Live server at `http://localhost:3000` (or similar port)

### Create Your First Component

```bash
# Create a new component from template
pnpm new-component 01-cta-button

# Navigate to the component
cd components/01-cta-button

# Open index.html in your browser and start coding!
```

## 📚 Practice System

### Core Philosophy

1. **Start simple** - Build individual components before complex applications
2. **Time-bound practice** - Each component has a target completion time (5-15 minutes)
3. **Repetition builds speed** - Practice the same component multiple times
4. **Vanilla-first** - No frameworks, just HTML/CSS/TypeScript fundamentals
5. **Progressive complexity** - Components are ordered from simple to complex

### Memorized Values (Practice these until automatic)

#### Colors

```css
/* Backgrounds */
#FFFFFF  /* Pure white */
#F9FAFB  /* Light gray */
#1F2937  /* Dark gray */
#111827  /* Near black */

/* Actions */
#3B82F6  /* Primary blue */
#10B981  /* Success green */
#EF4444  /* Danger red */
#F59E0B  /* Warning orange */
#6B7280  /* Neutral gray */
```

#### Spacing (rem values)

```css
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
4px, 8px, 12px

/* Font sizes */
0.875rem (14px), 1rem (16px), 1.125rem (18px), 1.5rem (24px), 2rem (32px)
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
pnpm dev              # Start TypeScript compiler + live server
pnpm compile          # Watch TypeScript compilation
pnpm compile-once     # Compile TypeScript once
pnpm serve            # Start live server only

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
│   │   ├── index.html            # Component HTML
│   │   ├── style.css             # Component styles
│   │   └── script.ts             # Component TypeScript
│   └── ...
├── templates/                     # Component templates
│   └── component-starter/        # Base template
├── docs/                         # Documentation and notes
├── scripts/                      # Build scripts
│   └── create-component.ts       # Component scaffolding
├── dist/                         # Compiled TypeScript
├── index.html                    # Practice portfolio dashboard
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
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

1. **Choose a component** from your current phase
2. **Set a timer** for the target time
3. **Build from scratch** using memorized values
4. **Focus on speed**, not perfection
5. **Repeat** until you can build it confidently within the time limit
6. **Move to next component** only after mastering the current one

### Speed Building Tips

- **Don't think about colors** - use your memorized hex codes immediately
- **Use consistent spacing** - stick to your rem values
- **Build patterns, not pixels** - focus on structure over perfect alignment
- **Time yourself** - track improvement over multiple attempts
- **Practice daily** - even 15-20 minutes builds significant muscle memory

## 🔧 Customization

### Adding New Components

1. Add component info to the `components` array in `index.html`
2. Create the component: `pnpm new-component your-component`
3. Practice and track your progress!

### Modifying Templates

Edit files in `templates/component-starter/` to customize the base template for new components.

## 📚 Learning Resources

### Documentation Structure

- `docs/` - Store your learnings, patterns, and insights

### Recommended Practice

- **Start with Phase 1** - master basic components first
- **Practice in order** - components build on each other
- **Repeat frequently** - same component multiple times until automatic
- **Time everything** - build speed awareness
- **Focus on fundamentals** - avoid fancy libraries or frameworks

## 📄 License

MIT License - feel free to use this system for your own practice and share with others!
