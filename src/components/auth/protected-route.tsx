"use client"

import { useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-provider"
import type { UserRole } from "@/types"

interface ProtectedRouteProps {
  children: ReactNode
  allowedRoles?: UserRole[]
  redirectTo?: string
}

export function ProtectedRoute({ 
  children, 
  allowedRoles,
  redirectTo = "/login" 
}: ProtectedRouteProps) {
  const router = useRouter()
  const { user, isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    // If still loading, wait
    if (isLoading) return

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      router.push(`${redirectTo}?redirect=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    // If roles are specified and user doesn't have allowed role
    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
      // Redirect to appropriate dashboard based on role
      switch (user.role) {
        case "ADMIN":
          router.push("/admin/dashboard")
          break
        case "TEACHER":
          router.push("/teacher/dashboard")
          break
        case "STUDENT":
          router.push("/student/dashboard")
          break
        case "PARENT":
          router.push("/parent/dashboard")
          break
        default:
          router.push("/")
      }
    }
  }, [isAuthenticated, isLoading, user, allowedRoles, redirectTo, router])

  // Show nothing while checking auth or redirecting
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Check role access
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return null
  }

  return <>{children}</>
}
