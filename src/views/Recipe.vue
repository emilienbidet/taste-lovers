<template>
  <v-container>
    <v-card class="mx-auto my-12 white" max-width="1000px" elevation="2">
      <v-container class="mt-5">
        <v-img
        height="250"
        contain
        :src="recipe.image"
      ></v-img>
      </v-container>

      <v-card-title class="justify-center mb-10">{{ this.recipe.title }}</v-card-title>

      <v-card-text>
        <v-row>
          <v-col>
            <v-row class="justify-center primary--text font-weight-bold"
              >Servings</v-row
            >
            <v-row class="justify-center">
              <v-col
                class="col-6 primary--text justify-center d-flex align-center"
              >
                <v-icon class="mr-2">$serving</v-icon>
                {{ this.recipe.servings }}
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row class="justify-center primary--text font-weight-bold"
              >Time</v-row
            >
            <v-row class="justify-center">
              <v-col
                class="col-6 primary--text justify-center d-flex align-center">
                <v-icon class="mr-2">$clock</v-icon>
                {{ this.recipe.readyInMinutes }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text> 

      <v-card-title class="justify-center">Ingredients</v-card-title>

      <IngredientsList :ingredients="recipe.extendedIngredients" />

      <v-card-title class="justify-center">Instructions</v-card-title>

      <v-card-text class="primary--text" id="description">
        
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn color="accent" text>Add to Favorites</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import IngredientsList from "@/components/IngredientsList";

export default {
  name: "Recipe",
  components: {
    IngredientsList,
  },
  data: () => ({
    recipe: {},
    ingredients: [
      "recipe1",
      "recipe2",
      "recipe3",
      "recipe4",
      "recipe5",
      "recipe6",
    ],
  }),
  mounted() {
    this.fetchRecipe();
  },
  methods: {
    fetchRecipe() {
      fetch('https://api.spoonacular.com/recipes/'+ this.$route.params.id +'/information?instructionsRequired=true&includeNutrition=false&apiKey='+'454f05438c534518998e1e8b638110f9')
        .then(res => {
          res.json()
            .then(res => {
              console.log(res);
              this.recipe = res;
              document.querySelector('#description').innerHTML = this.recipe.instructions;
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
