"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/stores"
import type { User, UserRole } from "@/types"

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  hasRole: (role: UserRole) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { user, isAuthenticated, isLoading, setUser, setToken, logout: storeLogout } = useAuthStore()
  const [mounted, setMounted] = useState(false)

  // Handle client-side hydration
  useEffect(() => {
    setMounted(true)
    
    // Check for stored user and token on mount
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user")
      const storedToken = localStorage.getItem("accessToken")
      
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser))
        setToken(storedToken)
      }
    }
  }, [setUser, setToken])

  const hasRole = (requiredRole: UserRole): boolean => {
    return user?.role === requiredRole
  }

  const logout = () => {
    storeLogout()
    router.push("/login")
  }

  // Prevent flash of unauthenticated content
  if (!mounted) {
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        hasRole,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
