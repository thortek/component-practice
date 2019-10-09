<template>
  <v-app>
    <v-content  class="d-flex flex-column align-center">
      <person-grid :people="people"></person-grid>
     <!--  <v-btn @click="getData">Get Data!!</v-btn> -->
      <austin-wright></austin-wright>
      <thor-anderson></thor-anderson>
    </v-content>
  </v-app>
</template>

<script>
import PersonGrid from './components/PersonGrid'
import AustinWright from './developers/AustinWright.vue'
import ThorAnderson from './developers/ThorAnderson.vue'
//import { people } from './assets/people'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    PersonGrid,
    AustinWright,
    ThorAnderson
  },
  data: () => {
    return {
      people: [],
    }
  },
  created: function () {
    // `this` points to the vm instance
    //let vm = this
      fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  },
  methods: {
    getData() {
      let vm = this
      return axios.get('https://swapi.co/api/people').then(response => {
        vm.people = response.data.results
      }).catch(error => {throw error})
    }
  }
}
</script>