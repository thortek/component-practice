<template>
  <v-card>
    <v-card-title>Peter Beard</v-card-title>
    <v-card-text>This is a component added by Peter Beard</v-card-text>
    <v-card-action>
      <v-textarea
        v-model="userInput"
        :auto-grow="true"
        :clearable="true"
        :label="'Send type message for Peter:'"
        :solo="true"
        :rules="validation"
      ></v-textarea>
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
    userInput: null,
    validation: [
      value =>
        !value.match(/[<>]{1,}/g) || "Input must not contain code characters"
    ]
  })
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>