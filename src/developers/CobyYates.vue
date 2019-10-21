<template>
    <v-app>
        <v-content>
            <v-card class="mx-auto" max-width="400">
        <v-img class="white--text" height="200px" src="https://avatars1.githubusercontent.com/u/27262239?s=460&v=4">
            <v-card-title class="align-end fill-height">Coby Yates</v-card-title>
        </v-img>

    <v-card-text>
      <span>Student</span><br>
    </v-card-text>

    <v-card-actions>
      <a href="https://github.com/CobyYates"><v-btn text color="orange">GitHub</v-btn></a>
      <a href="https://coberapps.com"><v-btn text color="orange">GitHub</v-btn></a>
    </v-card-actions>
  </v-card>

 <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>

    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
        </v-content>
    </v-app>
</template>

<script>
   export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>

</style>