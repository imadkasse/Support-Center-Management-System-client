# Support Center Management System (SCMS)

## Product Requirements Document (PRD)

---

# 1. Overview

This document defines the requirements for the Support Center Management System (SCMS), built using Next.js (App Router).

The frontend will provide interfaces for:

- Public Users (Course browsing)
- Admin
- Teacher
- Student
- Parent

The frontend communicates with a NestJS backend via REST APIs.

This document does NOT define backend logic.

---

# 2. Tech Stack

- pnpm
- Next.js (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui
- Zod (validation)
- Axios or Fetch
- Zustand (state management)

---

# 3. Application Structure

## 3.1 Route Structure

/app
/login
/register
/courses
/courses/[id] ← Course Details Page
/checkout/[id] ← Checkout Page
/payment-success
/payment-failed
/(dashboard)
/admin
/dashboard
/rooms
/teachers
/classes
/students
/enrollments
/teacher
/dashboard
/classes
/attendance
/student
/dashboard
/schedule
/my-enrollments
/parent
/dashboard

---

# 4. Public Course Flow

---

## 4.1 Courses Listing Page (/courses)

Purpose:
Display available classes for enrollment.

Each Course Card Displays:

- Course name
- Teacher name
- Day & time
- Duration
- Price (monthly)
- Available seats
- “View Details” button

Rules:

- Show "Full" badge if no seats available
- If user not logged in → redirect to /login when clicking enroll

---

## 4.2 Course Details Page (/courses/[id])

Purpose:
Provide detailed information about a specific class.

Displays:

- Course title
- Teacher
- Schedule (day & time)
- Room (optional display)
- Monthly price
- Available seats
- Short description
- Enrollment rules
- Start policy (rolling monthly)

Actions:

- “Enroll Now” button
  → Redirect to /checkout/[id]

UI Requirements:

- Clear pricing section
- Highlight remaining seats
- Mobile responsive
- Show expired / full state clearly

---

# 5. Checkout & Online Payment Flow

---

## 5.1 Checkout Page (/checkout/[id])

Purpose:
Confirm enrollment before payment.

Displays:

- Course summary
- Monthly price
- Subscription duration (30 days)
- Total amount
- Student name (auto-filled)
- Payment method section

Button:

- “Proceed to Payment”

Validations:

- Class not full
- No duplicate active enrollment
- User must be logged in as STUDENT

On Submit:

- Call backend to create payment session
- Redirect to payment gateway

Loading:

- Disable button during request
- Show spinner

---

## 5.2 Payment Redirection

Frontend receives:

- paymentUrl OR
- clientSecret (if embedded payment form)

Behavior:

- Redirect to external payment page OR
- Render secure payment component

---

## 5.3 Payment Success Page (/payment-success)

Purpose:
Confirm successful enrollment.

On Load:

- Call backend to verify payment

Displays:

- Success message
- Course name
- Subscription start date
- Expiry date
- “Go to Dashboard” button

Security:

- Must verify payment with backend
- Do NOT trust query params alone

---

## 5.4 Payment Failed Page (/payment-failed)

Displays:

- Payment failed message
- Retry payment button
- Return to course page option

---

# 6. Authentication Flow

## 6.1 Login Page

Fields:

- Email
- Password

Behavior:

- Submit credentials
- Store JWT (HTTP-only cookie preferred)
- Redirect based on role

---

# 7. Admin Interface Requirements

(unchanged except payment visibility update)

---

## 7.1 Enrollment Management Update

Admin Enrollment Table Columns:

- Student
- Class
- Payment Status (PAID / UNPAID)
- Subscription Status
- Expiry Date
- Actions

Admin Can:

- View payment confirmation status
- Manually override status if necessary

---

# 8. Teacher Interface Requirements

(unchanged)

---

# 9. Student Interface Requirements

---

## 9.1 Student Dashboard

Cards:

- Active Subscriptions
- Days Remaining
- Upcoming Classes

---

## 9.2 My Enrollments Page

Table:

- Course
- Start Date
- End Date
- Subscription Status
- Payment Status

Badge Colors:

- Green → Active
- Red → Expired
- Yellow → Pending Payment

---

# 10. Parent Interface Requirements

(unchanged)

---

# 11. UI/UX Requirements

- Clean checkout design
- Clear pricing visibility
- Prevent double payment submission
- Clear error handling
- Visible seat availability
- Responsive layout

States to Handle:

- Loading
- Empty state
- Payment processing
- Payment success
- Payment failure
- Error state

---

# 12. State Management

Global:

- Auth user
- Role
- Token

Checkout State:

- Selected course
- Payment status
- Loading state

Preferred:

- Zustand

---

# 13. API Integration Requirements

Authentication:
POST /auth/login

Public Courses:
GET /public/classes
GET /public/classes/:id

Payment:
POST /payments/create-session
GET /payments/verify

Enrollments:
GET /student/enrollments

Dashboard:
GET /dashboard/stats

---

# 14. Access Control (Frontend Level)

- Protect checkout route
- Protect payment success verification
- Hide enroll button if role ≠ STUDENT
- Prevent access to admin routes without ADMIN role

---

# 15. Performance Requirements

- Courses page load < 3s
- Checkout load < 2s
- Payment verification instant feedback

---

# 16. Out of Scope

- SMS notifications
- File uploads
- Grading system
- Multi-center support

---

# 17. Future Enhancements

- Discount codes
- Multiple course bundles
- Installment payments
- Invoice generation
- Payment history export
- PWA install

---

# 18. Final Goal

The frontend must:

- Allow users to browse courses easily
- Provide a smooth enrollment experience
- Handle online payment securely
- Be intuitive for non-technical users
- Support daily real-world usage

Focus: usability + reliable enrollment flow.
