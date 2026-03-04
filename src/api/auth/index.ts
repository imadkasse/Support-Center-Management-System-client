import apiClient from "@/api"
import type { AuthResponse, LoginCredentials, RegisterData, User } from "@/types"

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/auth/login", credentials)
    return response.data
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/auth/register", data)
    return response.data
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>("/auth/me")
    return response.data
  },

  logout: async (): Promise<void> => {
    await apiClient.post("/auth/logout")
  },
}

export default authApi
