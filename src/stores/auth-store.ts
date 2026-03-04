import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User, UserRole } from "@/types"

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  
  // Actions
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  login: (user: User, token: string) => void
  logout: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      
      setToken: (token) => set({ token }),

      login: (user, token) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("accessToken", token)
        }
        set({ user, token, isAuthenticated: true, isLoading: false })
      },

      logout: () => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          localStorage.removeItem("user")
        }
        set({ user: null, token: null, isAuthenticated: false, isLoading: false })
      },

      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated }),
    }
  )
)

// Helper function to check if user has specific role
export function hasRole(requiredRole: UserRole): boolean {
  const { user } = useAuthStore.getState()
  return user?.role === requiredRole
}

// Helper function to check if user is admin
export function isAdmin(): boolean {
  return hasRole("ADMIN")
}

// Helper function to check if user is teacher
export function isTeacher(): boolean {
  return hasRole("TEACHER")
}

// Helper function to check if user is student
export function isStudent(): boolean {
  return hasRole("STUDENT")
}

// Helper function to check if user is parent
export function isParent(): boolean {
  return hasRole("PARENT")
}
