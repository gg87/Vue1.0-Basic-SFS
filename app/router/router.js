// Load the plugin
Vue.use(VueRouter);

var router = new VueRouter();

// Redirect certain routes to other routes
router.redirect({
    '/': '/users'
})

router.map({
    '*': {
      component: pageNotFound
    },
    '/users': {
        component: userList,
//        subRoutes: {
//            '/:id': { component: userDetails }
//        }
    },
    '/user/:id': {
        name: 'userDetails',
        component: userDetails
    },
    '/user/:id/todos': {
        name: 'userTodos',
        component: userTodos
    },
    '/posts': {
        component: postList
    }
});

router.start(App, '#app');