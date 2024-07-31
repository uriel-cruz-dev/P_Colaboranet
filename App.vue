<template>
  <v-app>
    <v-main>
      <v-container>
        <AutocompleteSearch />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AutocompleteSearch from './components/AutocompleteSearch.vue';

export default {
  components: {
    AutocompleteSearch
  }
};
</script>
