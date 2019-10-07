<template>
  <v-card
    class="mx-auto"
  >
    <v-card-title>Logan Uibel</v-card-title>
    <v-card-text>Git Practice Assignment</v-card-text>
    <v-card-action>
    <v-text-field
            p 2
            v-model="firstname"
            :rules="nameRules"
            label="First"
            required
          ></v-text-field>
    </v-card-action>

  </v-card>
</template>



<script>
export default {
    data: () => ({
        id: {
        name: "Logan Uibel",
    }
  })
};
</script>



<style scoped>

}

</style>