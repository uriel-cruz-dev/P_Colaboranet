<template>
  <v-autocomplete
    v-model="selected"
    :items="nombres"
    item-value="name"
    item-text="name"
    label="Select"
    multiple
    chips
    clearable
    return-object
    @change="clearSearch"
    class="my-autocomplete"
  >
    <template v-slot:item="data">
      <v-list-item>
        <v-list-item-avatar>
          <img :src="data.item.image" alt="avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ data.item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ data.item.group }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      nombres: [] // Aquí cargaremos los datos desde JSON
    };
  },
  mounted() {
    // Cargar datos desde el archivo JSON en la carpeta public
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.nombres = data;
      });
  },
  methods: {
    clearSearch() {
      this.selected = [];
    }
  }
};
</script>

<style scoped>
.my-autocomplete .v-autocomplete__content .v-list-item {
  background-color: #2a2a2a; /* Fondo oscuro */
  color: #ffffff; /* Texto blanco */
}

.my-autocomplete .v-autocomplete__content .v-list-item-avatar img {
  border-radius: 50%; /* Redondear imágenes */
}

.my-autocomplete .v-autocomplete__content {
  background-color: #1e1e1e; /* Fondo oscuro */
}

.my-autocomplete .v-autocomplete__content .v-list-item-title {
  font-weight: bold;
}

.my-autocomplete .v-autocomplete__content .v-list-item-subtitle {
  color: #a0a0a0; /* Color gris claro para el subtítulo */
}

.v-autocomplete {
  background-color: #1e1e1e; /* Color de fondo negro */
  color: #ffffff; /* Color de texto blanco */
}
</style>
