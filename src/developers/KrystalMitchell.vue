<template>
    <v-app id="app">
    <v-container>
        <v-layout>
        
        <v-card hover v-box-shadow:offset.blur="15">
            <v-card hover>
            
            <v-card-media
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeU5XE2kJmWfuNebcOieRaotnvrZcc6xgt78M4TEHn21DoNzA-"
                height="150px"
            >
            </v-card-media>

            <v-card-title>
                <h2>Krystal Mitchell</h2>
                
            </v-card-title>
            <div class="container">
            <h2>Krystal's Tasks</h2>
            <ul class="list-unstyled">
                <li v-for="todo in todos">
                <label>
                    <input type="checkbox" v-model="todo.done" />
                    <span v-bind:class="{'done': todo.done}">{{todo.text}}</span>
                </label>
                </li>
            </ul>
        <p>
            <input type="text" v-model="todoText" placeholder="add new todo here" />
            <button v-on:click="addTodo()" class="btn btn-primary btn-sm">Add</button>
        </p>
            </div>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
    </v-app>

</template>

<script>
export default {
    data: {
		todoText: '',
		todos: [
			{text: 'Add Form Imput', done: true},
			{text: 'Push It Upstream', done: false},
      {text: 'Add A New Custon Task', done: false},
		]
    },
    methods: {
		addTodo: function() {
			var newTodo = this.todoText.trim();
			if (!newTodo) {return;}
			this.todos.push(
				{text: newTodo, done: false}
			);
			this.todoText = '';
		}
	}
}

Vue.directive('box-shadow', {
    bind(el, binding) {
        let blur = 0
        if (binding.modifiers['blur']) {
            blur = 5
        }
        if (binding.arg == 'offset') {
            el.style.boxShasow = `3px ${binding.value}px ${blur}px #222`;
        }
    }
 })
 
</script>

<style scoped>
.done {
	text-decoration: line-through;
	color: grey;
}
ul {
  text-decoration: none;
}
</style>