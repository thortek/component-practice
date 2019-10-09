<template>
  <v-card>
    <v-card-title>Peter Beard</v-card-title>
    <v-card-text>This is a component added by Peter Beard</v-card-text>
    <v-card-action>
      <label for="userMessage">Send type message for Peter:</label>
      <textarea id="userMessage" v-model="userInput"></textarea>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: {
      userName: "Peter Beard",
      github: "Gibriil"
    },
    userInput: null
  })
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>