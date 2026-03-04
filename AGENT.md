# AGENT.md - AI Agent Instructions

This file provides instructions for AI agents working on the Support Center Management System (SCMS) project.

## Project Overview

SCMS is a Next.js (App Router) application for managing a support center with multiple user roles: Public Users, Admin, Teacher, Student, and Parent. It communicates with a NestJS backend via REST APIs.

## Tech Stack

- **Package Manager**: pnpm
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Validation**: Zod
- **HTTP Client**: Axios or Fetch
- **State Management**: Zustand

## Route Structure

```
/app
├── /login              - Login page
├── /register           - Register page
├── /courses            - Public courses listing
├── /courses/[id]       - Course details page
├── /checkout/[id]     - Checkout page
├── /payment-success    - Payment success page
├── /payment-failed     - Payment failed page
└── /(dashboard)        - Dashboard layout group
    ├── /admin          - Admin dashboard
    │   ├── /dashboard
    │   ├── /rooms
    │   ├── /teachers
    │   ├── /classes
    │   ├── /students
    │   └── /enrollments
    ├── /teacher         - Teacher dashboard
    │   ├── /dashboard
    │   ├── /classes
    │   └── /attendance
    ├── /student         - Student dashboard
    │   ├── /dashboard
    │   ├── /schedule
    │   └── /my-enrollments
    └── /parent          - Parent dashboard
        └── /dashboard
```

## API Integration

All API calls should use the following endpoints:

- **Authentication**: `POST /auth/login`
- **Public Courses**: `GET /public/classes`, `GET /public/classes/:id`
- **Payment**: `POST /payments/create-session`, `GET /payments/verify`
- **Enrollments**: `GET /student/enrollments`
- **Dashboard**: `GET /dashboard/stats`

## Key Features

### Public Course Flow
- Courses listing page with cards showing: name, teacher, schedule, duration, price, available seats
- "Full" badge when no seats available
- Redirect to /login if not authenticated on enroll

### Checkout & Payment
- Checkout page with course summary, price, duration (30 days), student name
- "Proceed to Payment" button with loading state
- Payment success page must verify with backend (never trust query params alone)
- Payment failed page with retry option

### Authentication
- Login with email/password
- Store JWT (HTTP-only cookie preferred)
- Redirect based on role

### State Management (Zustand)
Global state for:
- Auth user, role, token
- Checkout state: selected course, payment status, loading state

## Access Control

- Protect `/checkout/[id]` route - only logged-in STUDENTS
- Protect payment success verification
- Hide enroll button if role ≠ STUDENT
- Prevent access to admin routes without ADMIN role

## UI/UX Requirements

- Clean checkout design
- Clear pricing visibility
- Prevent double payment submission
- Clear error handling
- Visible seat availability
- Responsive layout

Handle these states:
- Loading, Empty state, Payment processing, Payment success, Payment failure, Error state

## Badge Colors (Student Enrollments)

- Green → Active
- Red → Expired
- Yellow → Pending Payment

## Performance Requirements

- Courses page load < 3s
- Checkout load < 2s
- Payment verification instant feedback

## Out of Scope

- SMS notifications
- File uploads
- Grading system
- Multi-center support

## Code Style

- Use TypeScript for all files
- Use TailwindCSS for styling
- Use shadcn/ui components where possible
- Use Zod for form validation
- Use Zustand for global state
- Follow Next.js App Router conventions

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```
