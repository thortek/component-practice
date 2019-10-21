<template>
<div>
  <v-card
    class="mx-auto pa-2 ma-2 card"
    v-gray-mode
  >
    <v-card-title class="pl-2">Logan Uibel - Form Input</v-card-title>
    <v-card-action>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

     <v-textarea
          label="Add a Comment"
          rows="1"
        ></v-textarea>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
    </v-card-action>

  </v-card>
</div>

</template>




<script>
  export default {
    data: () => ({
      name: "Logan Uibel",
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
    },
    directives: {
      'gray-mode': {
        bind(el, binding, vnode) {
          el.style.backgroundColor = '#e0e0e0';
        }
    }
  }
}

</script>



<style scoped>


</style>