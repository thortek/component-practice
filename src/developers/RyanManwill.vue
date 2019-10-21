<template>
    <v-row v-rotate:cw="3">
        <v-col cols="12">
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
                  return "Name is Required";
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
    directives: {
        'rotate': {
            bind(el, binding, vnode) {
                if(binding.arg === 'ccw') {
                    el.style.transform = `rotate(-${binding.value}deg)`;
                } else if(binding.arg === 'cw') {
                    el.style.transform = `rotate(${binding.value}deg)`;            
                }
            }
        }
    },
}
</script>

<style scoped>

</style>