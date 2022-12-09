/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

import { mapActions, mapGetters } from 'vuex'
import Client from './models/Client'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

sync(store, router)

// Import components
import Messages from './components/Messages.vue'
import SidebarMenu from './components/Menu.vue'

// Import directives
import { VueMaskDirective } from 'v-mask'

// Import filters
import * as datetimeFilters from './filters/datetime'
import * as textFilters from './filters/text'
import phone from './filters/phone'
import * as measurementFilters from './filters/measurement'

// Import mixins
import AuthMixin from './mixins/auth'
import MessagesMixin from './mixins/messages'
// import HookLogging from './mixins/hookLogging'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('add-button', resolve => require(['./components/buttons/AddButton.vue'], resolve))
Vue.component('grid', resolve => require(['./components/Grid.vue'], resolve))
Vue.component('input-date', resolve => require(['./components/controls/Flatpickr.vue'], resolve))
Vue.component('selectize', resolve => require(['./components/controls/selects/Selectize.vue'], resolve))
Vue.component('client-link', resolve => require(['./components/links/Client'], resolve))

Vue.directive('mask', VueMaskDirective)

Vue.mixin(AuthMixin)
Vue.mixin(MessagesMixin)
// Vue.mixin(HookLogging)

Vue.filter('prettyDate', datetimeFilters.prettyDate)
Vue.filter('prettyDatetime', datetimeFilters.prettyDatetime)
Vue.filter('prettyTime', datetimeFilters.prettyTime)
Vue.filter('markdown', textFilters.markdown)
Vue.filter('truncate', textFilters.truncate)
Vue.filter('phone', phone)
Vue.filter('height', measurementFilters.height)

/**
 * Experimental
 */
import Repository from './plugins/vue-model-repository'

// const repository = new Repository({
//     models: {
//         clients: {
//             collection: 'clients',
//             model: Client,
//             vuex: {
//                 name: 'clients',
//                 commit: 'receiveItem',
//             }
//         }
//     }
// })

// Vue.use(Repository)

/**
 * Initialize Vue app
 * @type {vuejs.Vue | *}
 */
const app = new Vue({
    el: '#app',
    components: {
        Messages,
        SidebarMenu,
    },

    computed: {
        ...mapGetters('messages', {
            messages: 'all',
        }),
        // ...mapGetters('breadcrumbs', {
        //     breadcrumbs: 'all',
        // }),
    },

    watch: {
        '$route': (value) => {
            console.log('>^< Route changed =>', value.path)
        }
    },

    // Hooks
    created() {
        if (window.Laravel && window.Laravel.data) {
            // Set current auth user
            this.$store.commit('auth/setCurrent', window.Laravel.data.authUser)
            // Pre-load the list of states
            this.$store.dispatch('locations/setStates', window.Laravel.data.states)
            // Pre-load some lists of categories
            this.$store.commit('abuserRelationshipTypes/receiveItems', window.Laravel.data.abuserRelationshipTypes)
            this.$store.commit('abuseTypes/receiveItems', window.Laravel.data.abuseTypes)
            this.$store.commit('ethnicity/receiveItems', window.Laravel.data.ethnicity)
            this.$store.commit('eyeColors/receiveItems', window.Laravel.data.eyeColors)
            this.$store.commit('fundingSources/receiveItems', window.Laravel.data.fundingSources)
            this.$store.commit('hairColors/receiveItems', window.Laravel.data.hairColors)
            this.$store.commit('hairLengths/receiveItems', window.Laravel.data.hairLengths)
            this.$store.commit('housingStatuses/receiveItems', window.Laravel.data.housingStatuses)
            this.$store.dispatch('incidentTypes/init', { payload: window.Laravel.data.incidentTypes })
            this.$store.commit('genders/receiveItems', window.Laravel.data.genders)
            this.$store.commit('phoneTypes/receiveItems', window.Laravel.data.phoneTypes)
            this.$store.commit('referralSources/receiveItems', window.Laravel.data.referralSources )
            this.$store.dispatch('services/init', { payload: window.Laravel.data.services })
            this.$store.commit('serviceNotProvidedReasons/receiveItems', window.Laravel.data.serviceNotProvidedReasons )
        }
    },

    methods: {
        window(prop) {
            if (window.hasOwnProperty(prop)) {
                return window[prop]
            }
            return undefined
        },
    },

    // repository,
    router,
    store,
});
