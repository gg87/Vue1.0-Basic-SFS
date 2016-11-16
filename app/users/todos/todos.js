var userTodos = Vue.extend({
    template:
    '<div id="todos">' +
        '<button type="button" class="btn btn-success top-right" v-link="{ name: \'userDetails\', params: { id: userId}}">{{ $t("message.BACK_TO_USER") }}</button>' +
        '<h4>' +
            'TODO: '+
            '{{todos | nCompletedTodo}}' +
            '/' +
            '{{todos.length}}' +
        '</h4>' +
        '<div v-for="todo in todos" class="checkbox disabled">'+
            '<label>' +
                '<input type="checkbox" v-model="todo.completed" disabled>' +
                '{{todo.title}}' +
            '</label>' +
        '</div>'+
    '</div>',
    data: function() {
        this.$http.get(_urlBase + '/todos?userId='+ this.$route.params.id).then((response) => {
            // success callback
             // set data on vm
             this.$set('todos', response.data);
          }, (response) => {
            // error callback
              console.log(response);
          });  
        return {
            todos: [],
            userId: this.$route.params.id
        }
    },
    route: {
        data: function(transition){
            document.title = 'User Todos';
        }
    }
});