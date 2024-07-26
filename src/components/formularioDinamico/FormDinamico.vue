<template>
  <section>
    <select name="selectOrigen" id="" v-model="origenSeleccionado">
      <option value="" disabled selected>Seleccione un pais</option>
      <option value="Mexico">México</option>
      <option value="Canada">Canadá</option>
      <option value="Alemania">Alemania</option>
      <option value="E.U.A.">E.U.A</option>
      <option value="Otro">Otro..</option>
    </select>
  </section>
  <section>
    <input
      v-if="mostrarInputOrigen"
      type="text"
      name="pais"
      id="origen_pais"
      placeholder="Pais de origen"
    />
  </section>
  <section>
    <p>{{ origen }}</p>
  </section>
</template>

<script lang="ts" src="./FormDinamico"></script>
