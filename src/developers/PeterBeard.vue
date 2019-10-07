<template>
  <v-card>
    <v-card-title>Peter Beard</v-card-title>
    <v-card-text>This is a component added by Peter Beard</v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: {
      userName: "Peter Beard",
      github: "Gibriil"
    }
  })
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>