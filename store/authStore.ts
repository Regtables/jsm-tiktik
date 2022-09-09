import create from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'

interface User {
  userName: string,
  image: string,
  _id: string
}

const authStore = (set: any) => ({
  userProfile: null,

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null })
}) 

const useAuthStore = create(
  persist(authStore, {
    name: 'auth'
  })
)

export default useAuthStore 