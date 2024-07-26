<template>
  <section>
    <h3>Contador: {{ contador }}</h3>

    <button @click="contador++">+1</button>
    <button @click="contador--">-1</button>
  </section>
</template>

<script lang="ts" src="./MyContadorScript2"></script>

<style scoped>
h1 {
  color: red;
}
</style>
