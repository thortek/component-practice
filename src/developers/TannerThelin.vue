<template>
  <v-card>
    <v-card-title>Tanner Thelin</v-card-title>
    <v-card-text>This is an example component added by Tanner Thelin</v-card-text>

    <v-card-actions>
      <v-text-field
          v-model="name"
          label="Name"
          data-vv-name="name"
        ></v-text-field>
    </v-card-actions>

  </v-card>

</template>

<script>
export default {
  data: () => ({
    user: {
      userName: "Tanner Thelin",
      github: "tannerthelin"
    }
  })
};
</script>

<style>

</style> 