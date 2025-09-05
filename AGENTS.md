# Agent Guidelines for Nim Project

## Commands

- **Build**: `npm run build`
- **Dev server**: `npm run dev`
- **Lint**: `npm run lint`
- **Start**: `npm run start`
- **No test framework configured** - add tests using Jest/Playwright if needed

## Code Style

- **Formatting**: Prettier (single quotes, no semicolons, trailing commas, 2-space indent, 80 char width)
- **Linting**: ESLint with Next.js config + Prettier integration
- **TypeScript**: Strict mode enabled, use interfaces for component props
- **Imports**: Use `@/` path alias, group React imports first, then third-party, then local
- **Components**: Named exports, 'use client' directive when needed, no default exports
- **Styling**: Tailwind CSS with `cn()` utility for conditional classes
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Error handling**: Use try/catch for async operations, throw descriptive errors
- **Animations**: Use motion/react for animations, prefer Motion-Primitives components
- **No comments**: Keep code self-documenting, avoid inline comments unless complex logic
