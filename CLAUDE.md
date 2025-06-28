# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Interactive Procrastination Guide** - a React TypeScript application that helps users overcome procrastination through a structured 30-day program. The app includes progress tracking, daily checklists, emergency techniques, learning trap detection, and journaling features.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting (important - always run before committing)
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Core Technologies
- **React 19.1.0** with TypeScript
- **Vite 6.3.5** for build tooling
- **React Router DOM 7.6.2** for routing
- **LocalStorage** for data persistence (no backend)

### Code Organization

**Feature-based structure** with custom hooks managing state and persistence:

```
src/
├── components/         # Feature-based components
│   ├── tracker/        # 30-day progress tracking
│   ├── checklist/      # Task management
│   ├── emergency-kit/  # Procrastination-breaking techniques
│   ├── learning-trap/  # Assessment system
│   ├── journal/        # Progress journaling
│   └── common/         # Shared components (Navigation)
├── hooks/              # Custom hooks for state management
├── types/              # TypeScript definitions
├── utils/              # Storage utilities
└── data/               # Static configuration
```

### Key Patterns

**State Management**: Each feature uses custom hooks that combine:
- React state (`useState`)
- LocalStorage persistence (`useEffect`)
- Business logic encapsulation

**Data Persistence**: All user data persists to localStorage using utilities in `src/utils/storage.ts`. The storage system includes:
- Generic `saveData`/`loadData` functions
- Automatic serialization/deserialization
- Data migration support (see `useTracker.ts`)

**Component Architecture**:
- Container components handle state and business logic
- Presentation components focus on UI rendering
- Form components manage user input
- Each component has co-located CSS files

### TypeScript Configuration

- **Strict mode enabled** - all code must be properly typed
- **Target: ES2020** with modern JavaScript features
- **JSX: react-jsx** (React 17+ transform)
- **Unused locals/parameters detection** - clean up unused code

### Important Development Notes

1. **Always run `npm run lint`** before committing changes
2. **No external state management** - use custom hooks pattern instead of Redux/Zustand
3. **LocalStorage-first** - all data persists locally, no backend integration
4. **Feature isolation** - keep feature-specific code within respective component folders
5. **Type safety** - leverage TypeScript interfaces in `src/types/index.ts`

### Storage System

User data is managed through custom hooks with localStorage persistence:
- `useTracker` - 30-day progress tracking with day completion status
- `useChecklist` - Daily/weekly task management
- `useJournal` - Progress reflection entries
- Storage utilities handle serialization and provide migration paths

When modifying data structures, ensure backward compatibility or implement migration logic in the respective hooks.