import Vue from 'vue'
import Vuex from 'vuex'
// import 'babel-polyfill'
import { mount } from '@vue/test-utils'
import AbuserIndex from '../resources/assets/js/pages/abusers/Index'
import abusers from '../resources/assets/js/store/modules/abusers'

// Vue.use(Vuex)

// alternatively, you can instantiate Vue from the 'setup/index.js' file
Vue.config.productionTip = false

// describe('AbuserIndex.vue', () => {
    // let actions,
    //     getters,
    //     state,
    //     store
    //
    // beforeEach(() => {
    //     state = abusers.state
    //     actions = abusers.actions
    //     getters = abusers.getters
    //     store = new Vuex.Store({
    //         modules: {
    //             abusers
    //         },
    //     })
    // })
//
//     it('does stuff...', (done) => {
//         const wrapper = mount(AbuserIndex, { store })
        // console.log('wrapper vm', wrapper.vm)
        //
        // setTimeout(() => {
        //     console.log('abusers', wrapper.vm.all)
        //     done()
        // }, 1800)
        // const abusers = wrapper.vm.$store.modules.fetchAbusers()
        //     .then(() => {
        //         console.log('abusers', abusers)
        //         done()
        //     })
        //     .catch(done)
    // })
// })