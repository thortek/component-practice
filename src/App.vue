<template>
  <v-app>
    <v-content>
      <person-grid :people="people"></person-grid>
     <!--  <v-btn @click="getData">Get Data!!</v-btn> -->
     <tanner-thelin></tanner-thelin>
    </v-content>
  </v-app>
</template>

<script>
import PersonGrid from './components/PersonGrid'
import TannerThelin from './components/developers/TannerThelin.vue';
//import { people } from './assets/people'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    PersonGrid,
    TannerThelin
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
      }).catch(error => console.error(error))
    }
  }
}
</script>
