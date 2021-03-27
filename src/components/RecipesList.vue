<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
export default {
  name: "RecipesList",
  props: {
    recipes: Array,
  },
  components: {
    RecipeCard,
  },
  methods: {},
};
</script>