<template>
  <section>
    <h3>Contador: {{ contador }}</h3>

    <button @click="contador++">+1</button>
    <button @click="contador--">-1</button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const contador = ref(props.value ?? 15)

    return {
      contador
    }
  }
})
</script>

<style scoped>
h1 {
  color: red;
}
</style>
