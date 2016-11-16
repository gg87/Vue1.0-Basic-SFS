var _urlBase = 'http://localhost:3000';

var App = Vue.extend();

Vue.http.interceptors.push((request, next)  => {
    // modify request
    //console.log("start http");
    NProgress.start();
    // continue to next interceptor
    next((response) => {
        // modify response
        //console.log("stop http");
        NProgress.done();
    });
});
