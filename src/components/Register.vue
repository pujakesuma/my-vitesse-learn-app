<script setup lang="ts">
const onSubmit = () => {
  console.log(attendeeFullName)
  console.log(attendeeEmail)
}
// const classId = $ref('')
const attendeeFullName = $ref<string>('')
const attendeeEmail = $ref<string>('')

// field validation
const handleName = computed(() => attendeeFullName.length > 3)
const handleEmail = computed(() => attendeeEmail.length > 3)

</script>

<template>
  <form class="flex flex-col space-y-4" @submit.prevent="onSubmit">
    <input
      id="attendeeFullName"
      v-model="attendeeFullName"
      placeholder="Nama Lengkap"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="onSubmit"
    >
    <input
      id="attendeeEmail"
      v-model="attendeeEmail"
      placeholder="Email"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="onSubmit"
    >
    <button
      p="x-4 y-3"
      class="btn text-sm rounded-full"
      :disabled="!handleName && !handleEmail"
      type="submit"
    >
      Daftar
    </button>
  </form>
</template>
