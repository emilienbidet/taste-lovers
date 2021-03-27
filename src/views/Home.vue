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

    <RecipesList :recipes="recipes" />
  </div>
</template>

<style scoped>
.banner {
  height: 350px;
}
</style>

<script>
import RecipesList from "@/components/RecipesList.vue";
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
    this.getRandom();
  },
  watch: {
    searchAuto(val) {
      val && val !== this.select && this.querySelections(val);
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
    querySelections(v) {
      this.loading = true;
      setTimeout(() => {
        let url =
          "https://api.spoonacular.com/recipes/autocomplete?number=5&apiKey=" +
          "454f05438c534518998e1e8b638110f9";
        url += "&query=" + encodeURI(v);
        fetch(url)
          .then((res) => {
            res
              .json()
              .then((res) => {
                this.items = res
                  .map((v) => v.title)
                  .filter((e) => {
                    return (
                      (e || "").toLowerCase().indexOf((v || "").toLowerCase()) >
                      -1
                    );
                  });
                  this.loading = false;
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    },
    search() {
      let url =
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
        "454f05438c534518998e1e8b638110f9" +
        "&number=8&addRecipeInformation=true";
      url +=
        this.select != ""
          ? "&titleMatch=" + encodeURI(this.select)
          : "";
      url +=
        this.intolerences.length != 0
          ? "&intolerances=" + encodeURI(this.intolerences.join(","))
          : "";
      url += this.mealTypes != "" ? "&type=" + encodeURI(this.mealTypes) : "";
      url += this.diets != "" ? "&diet=" + encodeURI(this.diets) : "";
      fetch(url)
        .then((res) => {
          res
            .json()
            .then((res) => {
              this.recipes.splice(0);
              res.results.forEach((recipe) => {
                this.recipes.push(recipe);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRandom() {
      fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=" +
          "454f05438c534518998e1e8b638110f9" +
          "&number=8&addRecipeInformation=true"
      )
        .then((res) => {
          res
            .json()
            .then((res) => {
              res.recipes.forEach((recipe) => {
                this.recipes.push(recipe);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>