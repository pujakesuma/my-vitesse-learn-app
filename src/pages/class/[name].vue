<script setup lang="ts">
import { useClassStore } from '~/store/class'
const props = defineProps<{ name: string }>()
const router = useRouter()
const store = useClassStore()

const idClass = parseInt(props.name)
const isFetching = computed(() => store.isFetching)
const detail = computed(() => store.getDetailClass)

// mounted
onMounted(() => {
  store.fetchDetail(idClass)
})
</script>

<template>
  <div h-full flex justify-center pt-4rem>
    <div v-if="isFetching" class="flex flex-col sm:flex-col md:flex-row space-x-0 sm:space-x-0 md:space-x-4">
      <div class="placeholder mb-4 sm:mb-4 md:mb-0 w-18rem sm:w-18rem md:w-lg">
        <div rounded-xl h-6 bg-gray-400 mb-4 class="w-1/4" />
        <div v-for="idx in 3" :key="idx" rounded-xl h-3 bg-gray-400 mb-2 class="w-3/5" />
        <div class="w-1/4" h-4 bg-gray-400 mt-4 rounded-xl />
      </div>
    </div>
    <div>
      <h2 class="text-3xl font-bold">
        {{ detail.name }}
      </h2>
      <p>
        {{ detail.description }}
      </p>
      <div v-for="(mentor, i) in detail.mentors" :key="i">
        <div>
          {{ mentor.name }}
        </div>
        <p>
          {{ mentor.description }}
        </p>
      </div>
      <div>
        <button
          class="btn m-3 text-sm mt-8"
          @click="router.back()"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>
