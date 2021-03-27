<template>
  <v-footer absolute class="font-weight-medium secondary">
      <v-col></v-col>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>IUT Nantes</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>