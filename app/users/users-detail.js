var userDetails = Vue.extend({
  template:
    '<div id="userDetails">' +
    '<button type="button" class="btn btn-success top-right" v-link="{ name: \'userTodos\', params: { id: userId}}">{{ $t("message.SHOW_TODOS") }}</button>' +
    '<h4>{{ $t("message.USER_DETAIL") }}</h4>' +
    '<form>' +
    '<div class="form-group">' +
    '<label for="name">{{ $t("message.NAME") }}</label>' +
    '<input id="name" type="text" class="form-control" v-model="user.name">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="email">{{ $t("message.EMAIL") }}</label>' +
    '<div class="input-group">' +
    '<span class="input-group-addon">@</span>' +
    '<input id="email" class="form-control" type="text" v-model="user.email">' +
    '</div>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="username">{{ $t("message.USERNAME") }}</label>' +
    '<input id="username" type="text" class="form-control" v-model="user.username" name="username">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="phone">{{ $t("message.PHONE") }}</label>' +
    '<input id="phone" class="form-control" type="text" v-model="user.phone">' +
    '</div>' +
    '<button type="button" class="btn btn-primary" v-on:click="updateUser(user)">{{ $t("message.UPDATE_USER") }}</button>' +
    '<button type="button" class="btn btn-info" v-on:click="sayName(user.name, user.username)">{{ $t("message.SAY_NAME") }}</button>' +
    '</form>' +
    '</div>',
  data: function() {
    this.$http.get(_urlBase + '/users/' + this.$route.params.id).then(
      response => {
        console.log();
        // success callback
        // set data on vm
        //this.userId = this.$route.params.id;
        this.$set('user', response.data);
      },
      response => {
        // error callback
        console.log(response);
      }
    );
    return {
      user: {},
      userId: this.$route.params.id
    };
  },
  methods: {
    updateUser: function(user) {
      this.$http.put(_urlBase + '/users/' + this.$route.params.id, user).then(
        response => {
          // success callback
        },
        response => {
          // error callback
          console.log(response);
        }
      );
    },
    sayName: function(firstName, lastName) {
      customWidget.fullName(firstName, lastName);
    }
  },
  route: {
    data: function(transition) {
      document.title = 'User Details';
    }
  }
});
