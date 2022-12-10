import 'typeface-open-sans'
import store from './store'
import Vue, { axios } from './vue'

require('admin-lte')

window.axios = axios

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// if (Laravel && Laravel.csrfToken) {
    Vue.http.interceptors.push((request, next) => {
        request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

        next();
    })
// }

Vue.http.interceptors.push((request, next) => {
    next(response => {
        if (response.status === 401) {
            window.location.href = '/login'

            return
        }

        return response
    })
})

axios.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {
        store.dispatch('messages/add', {
            type: 'warning',
            text: 'Your authorization token has expired, it is being refreshed. If your session has expired, you will need to log in again.'
        })

        setTimeout(() => {
            window.location.href = '/login'
        }, 700)
    }
    else if (error.response.status === 403) {
        store.dispatch('messages/add', {
            type: 'danger',
            text: 'You are not allowed to perform this action. Please ask an administrator if you need assistance.',
        })

        window.scrollTo(0, 0)
    }
})

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
