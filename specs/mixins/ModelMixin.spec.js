import { shallowMount as shallow, createLocalVue } from '@vue/test-utils'
import { defined, has } from '../../resources/assets/js/common'
import InitClient from '../../resources/assets/js/mixins/initClient'
import { examplePerson } from '../setup/Person'
import TestComponent from '../setup/TestComponent'
import clients from '../../resources/assets/js/store/modules/clients'
import Vuex from 'vuex'

Vue.use(Vuex)

// alternatively, you can instantiate Vue from the 'setup/index.js' file
Vue.config.productionTip = false

describe('initClient mixin', (done) => {
    let actions,
        getters,
        state,
        store,
        localVue

    clients.actions.fetch = (store, params) => {

        store.commit('setFetching', true)
        console.log('mock fetch action')

        setTimeout(() => {
            if (params) {

                // if (has(params, 'forceRefresh')) {
                //     refresh = params.forceRefresh
                //     console.log('Forcing refresh of fetched content')
                //     Vue.delete(params, 'forceRefresh')
                // }

                if (has(params, 'id')) {
                    if (defined(params.id) && params.id) {
                        // Only allow requests by id that are defined to prevent unintended fetches
                        return { data: examplePerson() }
                    }
                    // Id is not valid, delete it and pass to fetchC ollection
                    delete params.id
                }
            }

            return {data: [examplePerson(), examplePerson(), examplePerson()] }
        }, 500)
    }

    beforeEach(() => {
        // state = clientModule.state
        // actions = clientModule.actions
        // getters = clientModule.getters
        store = new Vuex.Store({
            modules: {
                clients,
            },
        })
        localVue = createLocalVue()
    })

    it('does stuff...', (done) => {
        const $route = {
            path: '/clients/1',
            params: {
                client_id: 1,
            }
        }
        const wrapper = shallow(TestComponent, {
            localVue,
            mixins: [InitClient],
            mocks: {
                $route
            },
            store,
        })
        wrapper.vm.fetchCurrentClient()
            .then(() => {
                console.log('clientData', wrapper.vm.clientData)
                console.log('clientModel', wrapper.vm.clientModel)
                done()
            })
    })
})