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

## API Integration

### Base URL
```
http://localhost:5000/api/v1
```

All API calls should include the JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/login | User login |
| POST | /auth/register | User registration |

### Rooms Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /rooms | Create a new room |
| GET | /rooms | Get all rooms (paginated) |
| GET | /rooms/:id | Get room by ID |
| PUT | /rooms/:id | Update room |
| DELETE | /rooms/:id | Delete room |

### Teachers Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /teachers | Create a new teacher |
| GET | /teachers | Get all teachers (paginated) |
| GET | /teachers/:id | Get teacher by ID |
| PUT | /teachers/:id | Update teacher |
| DELETE | /teachers/:id | Delete teacher |

### Classes Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /classes | Create a new class |
| GET | /classes | Get all classes (paginated) |
| GET | /classes/:id | Get class by ID |
| PUT | /classes/:id | Update class |
| DELETE | /classes/:id | Delete class |

### Students Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /students | Create a new student |
| GET | /students | Get all students (paginated) |
| GET | /students/:id | Get student by ID |
| PUT | /students/:id | Update student |
| DELETE | /students/:id | Delete student |
| POST | /students/:id/reactivate | Reactivate a student |

### Enrollments Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /enrollments | Create a new enrollment |
| GET | /enrollments | Get all enrollments (paginated) |
| GET | /enrollments/:id | Get enrollment by ID |
| PUT | /enrollments/:id | Update enrollment |
| POST | /enrollments/:id/confirm-payment | Confirm payment for enrollment |
| DELETE | /enrollments/:id | Cancel enrollment |

### Attendances Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /attendances | Create attendance record |
| POST | /attendances/bulk | Bulk create attendance records |
| GET | /attendances/class/:id | Get attendance by class |
| GET | /attendances/student/:id | Get attendance by student |
| GET | /attendances/:id | Get attendance by ID |

### Dashboard Endpoints

#### Admin Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /dashboards/admin/stats | Get all admin statistics |
| GET | /dashboards/admin/total-active-students | Get total active students |
| GET | /dashboards/admin/total-enrolled-students | Get total enrolled students |
| GET | /dashboards/admin/active-classes | Get active classes |
| GET | /dashboards/admin/full-capacity-classes | Get full capacity classes |
| GET | /dashboards/admin/expired-subscriptions | Get expired subscriptions |
| GET | /dashboards/admin/monthly-revenue | Get monthly revenue |

#### Student Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /dashboards/student/enrolled-classes | Get enrolled classes |
| GET | /dashboards/student/weekly-schedule | Get weekly schedule |
| GET | /dashboards/student/subscription-status | Get subscription status |
| GET | /dashboards/student/days-remaining | Get days remaining |

#### Parent Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /dashboards/parent/students-attendance | Get students attendance |
| GET | /dashboards/parent/students-subscription | Get students subscription |

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

- using the Arabic 
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
