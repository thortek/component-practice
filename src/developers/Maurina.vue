<template>
    <div>
    <v-card
      max-width="344"
      class="mx-auto"
    >
      <v-card-title>Maurina Davis</v-card-title>
      <v-card-text>Fall is here!</v-card-text>
    </v-card>
    <v-form>
      <v-container>
        <v-row>
  
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="first"
              label="First Name"
              outlined
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="last"
              label="Last Name"
              outlined
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
    first: 'John',
    last: 'Doe',
   
  })
}

</script>

<style scoped>

</style>