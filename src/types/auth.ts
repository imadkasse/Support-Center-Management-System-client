export type UserRole = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT"

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  role: UserRole
  createdAt?: string
  updatedAt?: string
}

export interface AuthResponse {
  access_token: string
  refresh_token?: string
  user: User
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
  role?: UserRole
}
