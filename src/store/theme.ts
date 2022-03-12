import { defineStore } from 'pinia'

const theme = defineStore({
  // The id here must be a unique ID
  id: 'theme',
  state: () => {
    return {
      themeType: 'white',
      themeColor: '#fff',
    }
  },
  // Equivalent to vuex getter
  getters: {
    getThemeType: state => state.themeType,
    getThemeColor: state => state.themeColor,
  },
  // pinia abandons mutations and only uses actions
  actions: {
    // Actions can be made asynchronous with async
    setThemeType(type: string) {
      this.themeType = type
    },
  },
})

export default theme
