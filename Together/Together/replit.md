# Underground Frequencies - Dark Nature Music Platform

## Overview

Together Music is a minimalist music platform featuring an Apple-inspired aesthetic with black background and clean typography. The application showcases a React frontend with atmospheric visual effects, built using shadcn/ui components and Tailwind CSS. The platform features autoplay background music, SoundCloud integration, responsive design, and a curated playlist system. The site maintains a professional, minimalist design with atmospheric tree imagery and glitch effects, providing an immersive audio experience for visitors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Design System**: Dark nature theme with custom color palette (forest-green, earth-brown, underground-rust, deep-black)

### Styling and Theming
- **CSS Framework**: Tailwind CSS with PostCSS processing
- **Typography**: Custom Google Fonts (Creepster, Fontdiner Swanky, Roboto Mono)
- **Color Scheme**: Dark underground aesthetic with nature-inspired colors
- **Custom Effects**: Glitch animations, organic morphing shapes, and cave-like visual elements

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Placeholder for connect-pg-simple (PostgreSQL session store)
- **Development**: Hot reload with tsx for development server

### Data Layer
- **Database**: PostgreSQL (configured via Drizzle)
- **Schema**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Validation**: Zod schemas for type-safe data validation

### Project Structure
- **Monorepo Design**: Shared code between client and server in `/shared`
- **Path Aliases**: TypeScript path mapping for clean imports
- **Asset Management**: Dedicated attached_assets directory for static files

### Development Environment
- **Build Tool**: Vite with React plugin and custom development features
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Features**: Replit integration with runtime error overlay and cartographer plugin

## External Dependencies

### UI and Component Libraries
- **@radix-ui/***: Comprehensive collection of accessible UI primitives
- **shadcn/ui**: Pre-built component library built on Radix UI
- **class-variance-authority**: Utility for creating variant-based component APIs
- **cmdk**: Command palette component for enhanced UX

### Database and Backend
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Frontend State and Data
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation resolvers for React Hook Form
- **wouter**: Lightweight routing library for React

### Styling and Animation
- **tailwindcss**: Utility-first CSS framework
- **clsx**: Utility for constructing className strings
- **date-fns**: Date utility library for formatting
- **embla-carousel-react**: Carousel component for media displays

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting for development
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **@jridgewell/trace-mapping**: Source map utilities for debugging