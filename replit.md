# Nia Express - E-commerce Shopping Service Platform

## Overview

Nia Express is a web application that facilitates shopping from Portuguese e-commerce stores for customers in Mozambique. The platform serves as an intermediary service, allowing users to browse partner stores (Zara, Mango, H&M, ASOS, etc.), select products, and arrange for shipping from Portugal to Mozambique at a fixed rate of 1400 MT/kg with a 5-day delivery timeframe. The application provides a user-friendly interface targeting ages 18-65+ with clear pricing transparency and simple navigation, inspired by premium e-commerce platforms like ASOS and Zara combined with service marketplaces like Uber and Airbnb.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for utility-first styling
- shadcn/ui component library (New York variant) with Radix UI primitives

**Design System:**
- Custom Tailwind configuration with HSL-based color system supporting light/dark modes
- Typography using Poppins/Inter for primary text and Playfair Display for serif accents
- Consistent spacing system based on 4px increments (4, 6, 8, 12, 16, 20, 24)
- Component-based architecture with reusable UI components in `client/src/components/ui/`
- Responsive grid layouts: 2-3-5 column grids for store logos, 1-2-3 columns for promotional cards

**Key Frontend Features:**
- Hero section with animated partner store logo carousel and prominent pricing badge
- 6-step visual process guide with numbered cards and icon representations
- Store gallery with 10+ partner stores featuring hover effects (lift and scale)
- Dynamic promotional cards with discount percentages and countdown indicators
- FAQ section using accordion components for collapsible content
- WhatsApp integration button for direct customer communication

**Component Organization:**
- Page components in `client/src/pages/` (home.tsx, not-found.tsx)
- Reusable UI components from shadcn/ui in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/` (use-mobile.tsx, use-toast.ts)
- Shared utilities in `client/src/lib/` (utils.ts for className merging, queryClient.ts)

### Backend Architecture

**Technology Stack:**
- Node.js with Express.js server framework
- TypeScript for type-safe server code
- ESBuild for server bundling with selective dependency bundling
- HTTP server with JSON middleware and raw body capture for webhook support

**API Structure:**
- RESTful API endpoints prefixed with `/api`
- Routes defined in `server/routes.ts`:
  - GET `/api/stores` - Fetch all partner stores
  - GET `/api/promotions` - Fetch active promotional offers
  - GET `/api/faqs` - Fetch frequently asked questions
  - GET `/api/steps` - Fetch service workflow steps
  - GET `/api/config` - Fetch application configuration (pricing, delivery, WhatsApp)

**Data Layer:**
- In-memory storage implementation via `server/storage.ts` with IStorage interface
- Type definitions in `shared/schema.ts` for Store, Promotion, FAQ, Step interfaces
- Prepared for database integration with Drizzle ORM setup

**Server Organization:**
- Main entry point: `server/index.ts` with Express app configuration
- Request logging middleware with timestamp and duration tracking
- Static file serving from `dist/public` directory via `server/static.ts`
- Development mode Vite integration via `server/vite.ts` with HMR support
- Build script (`script/build.ts`) handles both client (Vite) and server (ESBuild) builds

### Data Storage Solutions

**Current Implementation:**
- In-memory storage with hardcoded data for stores, promotions, FAQs, and steps
- Storage interface (`IStorage`) designed for easy migration to database backend

**Database Preparation:**
- Drizzle ORM configured with PostgreSQL dialect
- Database configuration in `drizzle.config.ts` pointing to `shared/schema.ts`
- User authentication schema defined with username/password fields
- Neon Database serverless adapter included in dependencies
- Migration folder structure prepared at `./migrations`
- Connection via `DATABASE_URL` environment variable

**Schema Design:**
- Users table with UUID primary keys, unique usernames, and password hashing support
- Zod validation schemas via drizzle-zod for runtime type checking
- Shared schema types exported for use across client and server

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI primitives for accessible component foundations (accordion, dialog, dropdown, popover, toast, etc.)
- Embla Carousel for logo carousel functionality
- Lucide React for icon components
- React Icons (specifically `react-icons/si` for WhatsApp icon)
- class-variance-authority for component variant management
- tailwind-merge and clsx for conditional className composition

**Development Tools:**
- Replit-specific plugins for development experience (runtime error overlay, cartographer, dev banner)
- PostCSS with Tailwind CSS and Autoprefixer for CSS processing
- TypeScript with strict mode enabled and ESNext module resolution

**Backend Services:**
- Express session management with connect-pg-simple for PostgreSQL session storage
- CORS support prepared for cross-origin requests
- Date-fns for date manipulation and formatting

**Planned Integrations:**
- WhatsApp Business API for customer communication (number configured: 351000000000)
- PostgreSQL database via Neon serverless for production data storage
- Session-based authentication system with Passport.js dependencies included

**Build and Deployment:**
- Vite for optimized production builds with code splitting
- ESBuild for server bundling with selective dependency externalization
- Environment-based configuration for development vs production modes
- Build output: client assets to `dist/public`, server bundle to `dist/index.cjs`