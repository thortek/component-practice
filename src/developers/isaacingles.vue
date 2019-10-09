<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                     <v-text-field
                        v-model.lazy="userData.firstname"
                        id="firstname"
                        label="First Name"
                        v-model="firstname" 
                        required
                        :rules='nameRules'
                    >
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
        //using fun ES6 stuff
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters.'
        ]
    })
}
</script>

<style scoped>

</style>