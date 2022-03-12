<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div class="flex-col">
    <div class="mb-2">
      {{ count }}
    </div>
    <div>
      <button class="btn" @click="inc()">
        +
      </button>
      <button class="btn" @click="dec()">
        -
      </button>
    </div>
  </div>
</template>
