<template>
  <v-app>
    <v-content  class="d-flex flex-column align-center">
      <person-grid :people="people"></person-grid>
     <!--  <v-btn @click="getData">Get Data!!</v-btn> -->
      <austin-wright></austin-wright>
    </v-content>
  </v-app>
</template>

<script>
import PersonGrid from './components/PersonGrid'
import AustinWright from './components/AustinWright.vue';
//import { people } from './assets/people'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    PersonGrid,
    AustinWright
  },
  data: () => {
    return {
      people: [],
    }
  },
  created: function () {
    // `this` points to the vm instance
    let vm = this
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