<template>
  <div class="home">
    <v-container class="d-flex align-center text-center banner light" fluid>
      <!-- Main banner -->
      <v-row justify="center">
        <img
          src="@/assets/icons/burger.png"
          alt="burger"
          width="50"
          height="50"
        />
        <h1 class="text-h3 primary--text col-12">{{ this.$webSiteName }}</h1>
        <h2 class="text-subtitle-1 primary--text col-12">
          Search over<strong class="accent"> 360.000 </strong>recipes!
        </h2>
        <div class="col-5 col-sm-4 col-md-3 col-lg-2 d-flex align-center">
          <v-combobox
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="searchAuto"
            cache-items
            placeholder="nutella pasta"
            filled
            rounded
            dense
            hide-no-data
            append-outer-icon="$.search"
            @click:append-outer="search"
          >
          </v-combobox>
        </div>
      </v-row>
    </v-container>
    <!-- Filters bar -->
    <v-container>
      <v-divider class="mb-8 mt-5"></v-divider>
    </v-container>
    <v-row justify="space-around">
      <v-col class="col-10 col-sm-8 col-md-7 col-lg-3 col-xl-2">
        <v-row>
          <v-select
            v-model="intolerences"
            :items="this.$itemsItolerences"
            label="intolerences"
            multiple
            rounded
            filled
            dense
            autofocus
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span v-if="index === 1" class="grey--text caption">
                (+{{ intolerences.length - 1 }} others)
              </span>
            </template>
          </v-select>
        </v-row>
      </v-col>
      <v-col class="col-10 col-sm-8 col-md-7 col-lg-3 col-xl-2">
        <v-row>
          <v-select
            v-model="mealTypes"
            :items="this.$itemsMealTypes"
            label="meal types"
            rounded
            filled
            dense
            autofocus
            clearable
          >
          </v-select>
        </v-row>
      </v-col>
      <v-col class="col-10 col-sm-8 col-md-7 col-lg-3 col-xl-2">
        <v-row>
          <v-select
            v-model="diets"
            :items="this.$itemsDiets"
            label="diets"
            rounded
            filled
            dense
            autofocus
            clearable
          >
          </v-select>
        </v-row>
      </v-col>
    </v-row>
    <v-container>
      <v-divider class="mb-5 mt-4"></v-divider>
    </v-container>
    <!-- RecipesList -->
    <RecipesList :recipes="recipes"/>
  </div>
</template>

<style scoped>
.banner {
  height: 350px;
}
</style>

<script>
import RecipesList from "@/components/RecipesList.vue";
import * as SpoonacularRecipes from "@/controllers/SpoonacularRecipes.js";
export default {
  name: "Home",
  data: () => ({
    select: null,
    loading: false,
    items: [],
    searchAuto: null,
    intolerences: [],
    mealTypes: "",
    diets: "",
    recipes: [],
  }),
  components: {
    RecipesList,
  },
  mounted() {
    this.getRandomRecipes();
  },
  watch: {
    searchAuto(val) {
      val && val !== this.select && this.getAutocomplete(val);
    },
    intolerences() {
      this.search();
    },
    mealTypes() {
      this.search();
    },
    diets() {
      this.search();
    },
  },
  methods: {
    getAutocomplete(v) {
      this.loading = true;
      SpoonacularRecipes.getAutocompleteRecipes(5, v)
        .then((res) => {
          this.items = res;
        })
        .catch(() => {
          this.items = [];
        })
        .finally(() => {
          this.loading = false;
        });
    },
    search() {
      SpoonacularRecipes.getFilteredRecipes(8, this.select, this.intolerences, this.mealTypes, this.diets)
        .then((res) => {
          this.recipes = res;
        })
        .catch(() => {
          this.recipes = [];
        })
        .finally();
    },
    getRandomRecipes() {
      SpoonacularRecipes.getRandomRecipes(8)
        .then((res) => {
          this.recipes = res;
        })
        .catch(() => {
          this.recipes = [];
        })
        .finally();
    },
  },
};
</script>