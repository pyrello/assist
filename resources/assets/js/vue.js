import Vue from 'vue'
window.Vue = Vue
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuelidate)

const axios = require('axios');

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vuex = Vuex
window.bus = new Vue()

// if (window.Laravel && Laravel.apiBaseUrl) {
    axios.defaults.baseURL = Laravel.apiBaseUri
    Vue.http.options.root = Laravel.apiBaseUri
// }

export default Vue

export {
    axios,
    VueResource,
    VueRouter,
    Vuex,
}
