import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import FilterView from './Components/FilterView.vue'
import workers from './Components/workers.vue'

Vue.use(VueI18n);
import {messages} from './main';

window.i18n = new VueI18n({
    locale: 'ru',
    messages
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    template: '<App/>',
    components: {App}
});
new Vue({
    el: '#filterView',
    i18n,
    template: '<filterView/>',
    components: {FilterView}
});
new Vue({
    el: '#workers',
    i18n,
    template: '<workers/>',
    components: {workers}
});

