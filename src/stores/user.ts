import { defineStore } from 'pinia'
interface User{
  userName:string
}
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {
      userName:''
    }
  }),
  getters: {
    getUser: (state) => state.user
  },
  actions: {
    setuser(user:User) {
      this.user=user
    }
  }
})
