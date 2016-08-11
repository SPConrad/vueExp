new Vue({
    /*el: '#app',
    data: {
        message: 'Hello Vue.js!',
        todos: [
	        { text: 'Learn javascript'},
	        { text: 'Learn vue.js'},
	        { text: 'Build something awesome'}
        ]
    },
    methods: {
    	reverseMessage: function(){
    		this.message = this.message.split('').reverse().join('');
    	}
    }*/

    el: '#app',
    data: {
    	newTodo: '',
    	todos: [
    		{ text: 'Add some todos' }
    	]
    },
    methods: {
    	addTodo: function() {
    		var text = this.newTodo.trim();
    		if (text) {
    			this.todos.push({ text: text })
    			this.newTodo = '';
    		}
    	},
    	removeTodo: function(index){
    		this.todos.splice(index, 1);
    	},
    	removeAll: function(){
    		this.todos.forEach(function(e){
    			this.todos.splice(e);
    		}, this);
    	}
    }
})