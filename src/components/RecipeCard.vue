<template>
  <v-card class="mx-auto my-12 white" max-width="374" elevation="2">
    <v-img
      height="250"
      :src="recipe.image"
    ></v-img>

    <v-card-title class="justify-center">{{ recipe.title }}</v-card-title>

    <v-card-text>
      <v-row>
        <v-col>
            <v-row class="justify-center primary--text font-weight-bold"
              >Servings</v-row
            >
            <v-row class="justify-center">
              <v-col
                class="col-6 primary--text justify-center d-flex align-center">
                <v-icon class="mr-2">$serving</v-icon>
                {{ recipe.servings }}
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
                {{ recipe.readyInMinutes }}
              </v-col>
            </v-row>
          </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn color="accent" text @click="details"> Details </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ['recipe'],
  data: () => ({
  }),

  methods: {
    details() {
      window.localStorage.setItem('recipe', JSON.stringify(this.recipe));
      this.$router.push({ name: 'recipe', params: { id: this.recipe.id } })
    }
  },
};
</script>
