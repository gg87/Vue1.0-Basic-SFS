Vue.filter('nCompletedTodo', function (todos) {
    var count = 0;
    for(var i in todos) {
        var todo = todos[i];
        if(todo.completed)
            count++;
    }
    return count;
});

// esempio filtro a due vie
//Vue.filter('nCompletedTodo', {
//  read: function () {},
//  write: function () {}
//});

var myFilter = Vue.filter('nCompletedTodo');