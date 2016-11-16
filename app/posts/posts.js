var postList = Vue.extend({
    template:
    '<div id="posts">' +
        '<div class="panel panel-default" v-for="post in posts">'+
            '<div class="panel-heading">' +
                '{{post.title}}' +
            '</div>'+
            '<div class="panel-body">' +
                '<p>{{post.body}}</p>'+
                //'<button v-link="{ path: \'/user/\' + post.userId}">{{ $t("message.GO_TO_USER") }}</button>' +
                '<button v-link="{ name: \'userDetails\', params: { id: post.userId}}">{{ $t("message.GO_TO_USER") }}</button>' +
            '</div>' +
        '</div>' +
    '</div>',
    data: function() {
        this.$http.get(_urlBase + '/posts').then((response) => {
            // success callback
             // set data on vm
             this.$set('posts', response.data);
          }, (response) => {
            // error callback
              console.log(response);
          });  
        return {
            posts: []
        }
    },
    route: {
        data: function(transition){
            document.title = 'Posts';
        }
    }
});