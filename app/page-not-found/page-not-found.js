var pageNotFound = Vue.extend({
    template: 
    '<div>' +
        '<h2>Page Not Found</h2>' +
    '</div>' +
    '<button type="button" v-link="{ path: \'/users\' }">' +
        'Back to Homepage' +
    '</button>'
});