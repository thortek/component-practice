<template>
    <v-row>
        <v-col cols="12">
            <h1>This is my addition</h1>
            <v-form v-model="valid">
                <v-text-field
                    :rules="nameRules"
                    v-model="name"
                    label="Your name"
                    required
                ></v-text-field>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
          function(value) {
              if(value) {
                  return;
              } else {
                  return "name is Required";
              }
          }
          /*
          value => value?true:"Name is Required"          }
          OR
          v => !!v || "Name is Required"
          v => v.lendth <= 10 || "Name must be less than 10 charactors"
          */

      ]
    }),

}
</script>

<style scoped>

</style>