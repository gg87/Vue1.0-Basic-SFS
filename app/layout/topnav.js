var selectLang = Vue.extend({
    template: 
    '<div id="changeLanguage">'+
        '<button type="button"class="btn btn-secondary btn-sm" v-on:click="changeLanguage(\'it\')">{{ $t("message.BUTTON_LANG_IT") }}</button>'+
        '<button type="button" class="btn btn-secondary btn-sm" v-on:click="changeLanguage(\'en\')">{{ $t("message.BUTTON_LANG_EN") }}</button>'+
    '</div>',
    methods: {
        changeLanguage: function(lang){
            Vue.config.lang = lang;
        }
    }
});

Vue.component('topnav', {
    template: 
    '<nav class="navbar navbar-default">' +
        '<div class="container-fluid">' +
            '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">' +
                    '<span class="icon-bar"></span>' +
                    '<span class="icon-bar"></span>' +
                    '<span class="icon-bar"></span>' +
                '</button>' +
                '<a class="navbar-brand">' +
                    '<img class="brand" src="content/images/brand.png">' +
                '</a>' +
            '</div>' +
            '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
                '<ul class="nav navbar-nav">' +
                    '<li v-link="{ path: \'/users\', activeClass: \'active\' }">' +
                        '<a href="#">' +
                            '{{ $t("message.USER_LIST") }}' +
                        '</a>' +
                    '</li>' +
                    '<li v-link="{ path: \'/posts\', activeClass: \'active\' }">' +
                        '<a href="#">' +
                            '{{ $t("message.POST_LIST") }}' +
                        '</a>' +
                    '</li>' +
                '</ul>' +
                '<ul class="nav navbar-nav navbar-right">' +
                    '<li>' +
                        '<select-lang></select-lang>' +
                    '</li>' +
                '</ul>' +
            '</div>'+
        '</div>'+
    '</nav>',
    components: {
        'select-lang': selectLang
    }
});