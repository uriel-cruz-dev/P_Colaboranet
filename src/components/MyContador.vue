<template>
  <section>
    <h3>Contador: {{ contador }}</h3>

    <button @click="contador++">+1</button>
    <button @click="contador--">-1</button>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  value?: number
}

const props = defineProps<Props>()

const contador = ref(props.value ?? 15)
</script>

<style scoped>
h1 {
  color: red;
}
</style>
