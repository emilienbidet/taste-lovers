<template>
  <v-footer class="font-weight-medium secondary">
    <v-row>
      <v-col class="text-center primary--text" cols="12">
        <strong>IUT Nantes</strong> -
        <a href="https://emilienbidet.fr/" title="Emilien Bidet" class="text-decoration-none primary--text accent primary--text">Emilien Bidet</a> - 
        {{ new Date().getFullYear() }}
      </v-col>
      <v-col class="text-center primary--text" cols="12">
        Icons made by <a href="https://www.freepik.com" title="Freepik" class="accent primary--text">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" class="accent primary--text">www.flaticon.com</a>
      </v-col>
    </v-row>
    
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>