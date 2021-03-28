<template>
  <v-app>
    <v-system-bar color="accent" app></v-system-bar>
    <v-app-bar color="background" app fixed elevate-on-scroll>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-sm-and-up"
        ></v-app-bar-nav-icon>
      <a href="/" class="text-decoration-none primary--text">
        <v-toolbar-title>
          <v-icon left>$main</v-icon>
          {{ this.$webSiteName }}
        </v-toolbar-title>
      </a>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in group" :key="item.title"
          :href="item.path" text>
          <v-icon left>${{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" left temporary absolute class="background">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title primary--text">
            {{ this.$webSiteName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Your<strong class="accent"> best friend </strong>to find recipes!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-for="item in group" :key="item.title" :href="item.path">
            <v-list-item-icon><v-icon>${{ item.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="background">
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: "App",

  components: {Footer},

  data: () => ({
    drawer: false,
    favorites: {
      
    },
    group: [
      { title: "Favorites", path: "/favorites", icon: "favorite" },
      { title: "Explore", path: "/explore", icon: "explore" },
      { title: "Suprise me", path: "/suprise", icon: "suprise" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
