import { createModel } from '../../../js/store/model'
import Vue from '../../../js/vue'

const abusers = createModel('abusers')

const actions = abusers.actions

Vue.config.productionTip = false;

const app = new Vue({
    store: {
        modules: {
            abusers,
        }
    }
}).$mount()

describe('abuser', () => {
    describe('actions', () => {
        it('fetches all the abusers', done => {

        })
    })
    it('should fetch abusers', function () {
        app.$store.modules.abusers.dispatch('fetchAbusers')
        expect(typeof cm.data).toBe('function')
    });
    // it('can fetch abusers with error', () => {
    //
    // })
})