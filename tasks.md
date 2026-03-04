# Project Milestones - School Management Platform

This document outlines the milestones and tasks required to complete the School Management Platform frontend application.

---

## Milestone 1: Project Setup & Foundation

- [x] Install and configure shadcn/ui
- [x] Install Zod for validation
- [x] Install Zustand for state management
- [x] Configure environment variables (.env.local)
- [x] Set up API client/axios instance with interceptors
- [x] Create base layout and theme

---

## Milestone 2: Authentication System

- [x] Create login page (/login)
  - [x] Email input field
  - [x] Password input field
  - [x] Submit button with loading state
  - [x] Form validation with Zod
- [x] Create register page (/register)
  - [x] Email, password, firstName, lastName fields
  - [x] Role selection (extract from response)
  - [x] Form validation with Zod
- [x] Implement JWT storage (cookie)
- [x] Create auth store with Zustand
  - [x] User state
  - [x] Role state
  - [x] Token state
  - [x] Login/logout actions
- [x] Create auth context/provider
- [x] Implement role-based redirect after login
- [x] Create protected route wrapper component
- [x] Create logout functionality

---

## Milestone 3: Public Course Pages

- [ ] Create courses listing page (/courses)
  - [ ] Fetch courses from API
  - [ ] Display course cards with course name, teacher, schedule, duration, price, available seats
  - [ ] Show 'Full' badge when no seats available
  - [ ] Handle loading/empty/error states
  - [ ] Redirect to /login if not authenticated on enroll
- [ ] Create course details page (/courses/[id])
  - [ ] Fetch course details from API
  - [ ] Display course title, teacher, schedule, room, price, seats, description
  - [ ] 'Enroll Now' button (redirects to /checkout/[id])
  - [ ] Hide enroll button if role is not STUDENT
  - [ ] Mobile responsive design

---

## Milestone 4: Checkout & Payment Flow

- [ ] Create checkout page (/checkout/[id])
  - [ ] Protect route - only STUDENTS
  - [ ] Display course summary, price, duration, student name
  - [ ] 'Proceed to Payment' button with loading state
  - [ ] Validations: class not full, no duplicate enrollment
- [ ] Implement payment handling (paymentUrl or clientSecret)
- [ ] Create payment success page (/payment-success)
  - [ ] Verify payment with backend
  - [ ] Display success message, course name, dates
- [ ] Create payment failed page (/payment-failed)
  - [ ] Display failed message with retry option

---

## Milestone 5: Student Dashboard & Enrollments

- [ ] Create student dashboard (/student/dashboard)
  - [ ] Active Subscriptions card
  - [ ] Days Remaining card
  - [ ] Upcoming Classes card
- [ ] Create my-enrollments page (/student/my-enrollments)
  - [ ] Table with course, start/end dates, status, payment status
  - [ ] Badge colors: Green (Active), Red (Expired), Yellow (Pending)
- [ ] Create student schedule page (/student/schedule)

---

## Milestone 6: Admin Dashboard & Management

- [ ] Create admin dashboard (/admin/dashboard)
  - [ ] Statistics: active students, enrolled, classes, revenue
- [ ] Create rooms management (/admin/rooms) - CRUD
- [ ] Create teachers management (/admin/teachers) - CRUD
- [ ] Create classes management (/admin/classes) - CRUD
- [ ] Create students management (/admin/students) - CRUD with reactivate
- [ ] Create enrollments management (/admin/enrollments)
  - [ ] Table with payment status, subscription status, actions
  - [ ] Manual payment status override

---

## Milestone 7: Teacher Dashboard & Attendance

- [ ] Create teacher dashboard (/teacher/dashboard)
- [ ] Create teacher classes page (/teacher/classes)
- [ ] Create attendance page (/teacher/attendance)
  - [ ] Bulk mark attendance (PRESENT/ABSENT)
  - [ ] Submit attendance records

---

## Milestone 8: Parent Dashboard

- [ ] Create parent dashboard (/parent/dashboard)
  - [ ] Children attendance summary
  - [ ] Children subscription status

---

## Milestone 9: UI/UX Improvements & Polish

- [ ] Consistent styling across all pages
- [ ] Loading skeletons/spinners
- [ ] Toast notifications
- [ ] Error handling improvements
- [ ] Mobile responsiveness
- [ ] Accessibility improvements

---

## Milestone 10: Testing & Performance

- [ ] Performance optimization
  - [ ] Courses page load under 3 seconds
  - [ ] Checkout load under 2 seconds
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Bug fixes

---

## Milestone 11: Documentation & Deployment

- [ ] README.md with setup instructions
- [ ] Environment variables documentation
- [ ] Production build verification
- [ ] Deploy to hosting platform

---

## Summary

| Milestone | Description | Status |
|-----------|-------------|--------|
| 1 | Project Setup & Foundation | ✅ Completed |
| 2 | Authentication System | ✅ Completed |
| 3 | Public Course Pages | Not Started |
| 4 | Checkout & Payment Flow | Not Started |
| 5 | Student Dashboard & Enrollments | Not Started |
| 6 | Admin Dashboard & Management | Not Started |
| 7 | Teacher Dashboard & Attendance | Not Started |
| 8 | Parent Dashboard | Not Started |
| 9 | UI/UX Improvements & Polish | Not Started |
| 10 | Testing & Performance | Not Started |
| 11 | Documentation & Deployment | Not Started |

Total Estimated Duration: 25-34 days
