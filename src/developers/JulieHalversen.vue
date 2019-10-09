<template>
<div>
    <v-app>
        <h1>Julie Halversen</h1>
    </v-app>

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="firstname"
              label="First name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
  
        </v-row>
      </v-container>
    </v-form>

</div>
</template>

<script>
export default {
data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
  })
}
</script>

<style scoped>

</style>