<script setup lang="ts">
// import type { Items } from '~/store/class'
import { useClassStore } from '~/store/class'
const router = useRouter()
const store = useClassStore()

// computed
const classes = computed(() => store.getClasses)
const isFetching = computed(() => store.isFetching)

// method
const onClick = (id: number): void => {
  if (id)
    router.push(`/class/${encodeURIComponent(id)}`)
}

const fetchClass = async() => {
  await store.getAvailableClass()
}

// mounted
onMounted(() => {
  fetchClass()
})
</script>

<template>
  <div h-full flex justify-center pt-4rem>
    <div>
      <h1 class="text-3xl sm:text-5xl font-bold capitalize mb-4 sm:mb-4 md:mb-8">
        my learn app
      </h1>
      <p class="mx-auto w-18rem sm:w-18rem md:w-4xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nihil rem voluptatem cum accusamus id eius laboriosam natus culpa, adipisci consectetur saepe a perferendis illo aperiam facere architecto quasi quia?
      </p>
      <div v-if="isFetching" class="flex flex-col sm:flex-col md:flex-row space-x-0 sm:space-x-0 md:space-x-4">
        <div v-for="i in 2" :key="i" class="placeholder mb-4 sm:mb-4 md:mb-0 w-18rem sm:w-18rem md:w-lg">
          <div rounded-xl h-6 bg-gray-400 mb-4 class="w-1/4" />
          <div v-for="idx in 3" :key="idx" rounded-xl h-3 bg-gray-400 mb-2 class="w-3/5" />
          <div class="w-1/4" h-4 bg-gray-400 mt-4 rounded-xl />
        </div>
      </div>
      <div v-else class="flex flex-col sm:flex-col md:flex-row space-x-0 sm:space-x-0 md:space-x-4">
        <div v-for="(item, i) in classes" :key="i" class="card mb-4 sm:mb-4 md:mb-0 w-18rem sm:w-18rem md:w-lg">
          <h2 text-2xl font-bold class="mb-2 text-gray-200 dark:text-gray-200">
            {{ item.name }}
          </h2>
          <p leading-normal class="mb-8 text-gray-200 dark:text-gray-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem, at optio
          </p>
          <button
            class="m-3 text-sm btn"
            @click="onClick(item.id)"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
      <!-- <div absolute bottom-5 right-0 left-0 text-center op30 fw300>
        <Footer />
      </div> -->
    </div>
  </div>
</template>
