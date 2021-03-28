<template>
  <div class="home">
    <v-container class="d-flex align-center text-center banner light" fluid>
      <v-row justify="center">
        <img
          src="@/assets/icons/burger.png"
          alt="burger"
          width="50"
          height="50"
        />
        <h1 class="text-h3 primary--text col-12">Favorites</h1>
        <h2 class="text-subtitle-1 primary--text col-12">All your<strong class="accent"> favorites </strong>recipes!</h2>
      </v-row>
    </v-container>
    <v-container>
      <v-divider class="mb-8 mt-5"></v-divider>
    </v-container>
    
    <RecipesList :recipes="recipes"/>
  </div>
</template>

<style scoped>
.banner {
  height: 350px;
}
</style>

<script>
import { getFavorites } from '@/controllers/FavoritesRecipes';
import RecipesList from "@/components/RecipesList.vue";
export default {
  name: "Favorites",
  data: () => ({
    recipes: [],
  }),
  components: {
    RecipesList,
  },
  mounted() {
    this.getRecipes();
  },
  methods: {
    getRecipes() {
      this.recipes = getFavorites();
    },
  },
};
</script>