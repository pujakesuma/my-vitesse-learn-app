import { acceptHMRUpdate, defineStore } from 'pinia'
import classApi from '~/api/modules/class'

export interface Items {
  id: number
  name: string
}

interface Mentors extends Items {
  description: string
}

interface Detail extends Items {
  mentors: Array<Mentors>
  description: string
}

export const useClassStore = defineStore('classes', {
  state: () => ({
    classes: [] as Items[],
    detailClasses: {} as Detail,
    loading: false,
  }),
  getters: {
    getClasses(): Items[] {
      return this.classes
    },
    isFetching(): boolean {
      return this.loading
    },
  },
  actions: {
    async getAvailableClass() {
      this.loading = true
      try {
        const res = await classApi.getAvailableClasses()
        this.classes = res.data.items
        this.loading = false
      }
      catch (err) {
        this.loading = false
        console.error(err)
        throw err
      }
    },
    async getDetailClass(id: number) {
      try {
        const res = await classApi.getDetailClass({ id })
        this.detailClasses = res.data
      }
      catch (err) {
        console.error(err)
        throw err
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useClassStore, import.meta.hot))
