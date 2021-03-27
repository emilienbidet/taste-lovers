<template>
  <v-flex class="d-flex align-center pa-3">
    <div class="mr-5">
      <v-img
        :src="'https://spoonacular.com/cdn/ingredients_100x100/'+ this.ingredient.image"
        contain
        height="100px"
        width="100px"
      ></v-img>
    </div>
    <div class="primary--text">
      {{ this.ingredient.original }} 
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "IngredientCard",
  props: {
    ingredient: Object,
  },
};
</script>
