<template>
    <v-form>
        <v-container>
            <v-row v-shadow:offset="3" class="form-container">
                <h1 v-highlight="'green'" class="box-title">Isaac Ingles</h1>
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
    }),
    directives: {
        shadow: {
            bind(el, binding) {
                let blur = 10
                if(binding.arg === 'offset') {
                    el.style.boxShadow = `10px ${binding.value}px ${blur}px #222`
                } else {
                    el.style.boxShadow = `10px 10px ${blur}px #ccc`
                }
            }
        }, 
        highlight: {
            bind(el, binding){
                //this is basically the same one Max does
                el.style.backgroundColor = binding.value
                el.style.color = 'white'
            }
        }
    }
}
</script>

<style scoped>
    .form-container {
        padding: 10px;
        border-radius: 10px;
    }
    .box-title {
        width: 100%;
        padding: 10px;
        /* background: green;
        color: #fff; */
        
    }
</style>