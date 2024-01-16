import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    logout() {
      this.user = null
    },
  },
  persist: true,
})