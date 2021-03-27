<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md6 v-for="ingredient in ingredients" :key="ingredient.original">
        <IngredientCard :ingredient="ingredient" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import IngredientCard from "@/components/IngredientCard.vue";
export default {
  name: "IngredientsList",
  props: {
    ingredients: Array,
  },
  components: {
    IngredientCard,
  },
  methods: {},
};
</script>