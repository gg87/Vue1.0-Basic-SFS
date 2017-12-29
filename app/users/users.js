// Define some components
var userList = Vue.extend({
  template:
    '<div>' +
    '<table class="table">' +
    '<tr>' +
    '<th>{{ $t("message.ID") }}</th>' +
    '<th>{{ $t("message.NAME") }}</th>' +
    '<th>{{ $t("message.EMAIL") }}</th>' +
    '</tr>' +
    '<template v-for="user in users" track-by="id">' +
    '<tr class="userRow" v-on:click="goToDetails(user.id)">' +
    '<td>{{user.id}}</td>' +
    '<td>{{user.name}}</td>' +
    '<td>{{user.email}}</td>' +
    '</tr>' +
    '</template>' +
    '</table>' +
    '</div>',
  data: function() {
    this.$http.get(_urlBase + '/users').then(
      response => {
        // success callback
        // set data on vm
        this.$set('users', response.data);
      },
      response => {
        // error callback
        console.log(response);
      }
    );
    return {
      users: []
    };
  },
  ready: function() {},
  methods: {
    goToDetails: function(userID) {
      router.go('/user/' + userID);
    }
  },
  route: {
    data: function(transition) {
      document.title = 'Users';
    }
  }
});
