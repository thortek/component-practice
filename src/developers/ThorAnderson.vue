<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <v-text-field v-model="firstname" label="First name" required
                    :rules='nameRules'>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        firstname: '',
        nameRules: [
            v =>  !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters'
        ]
    })
}
</script>

<style scoped>

</style>