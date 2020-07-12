import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import FetchRecord from '../../../resources/assets/js/store/crud/FetchRecord'
import { examplePerson } from '../../setup/Person'
import mutations from '../../../resources/assets/js/store/crud/mutations'

describe('store > crud > mutations.js', () => {
    let store,
        testPerson,
        localVue

    describe('clearAll', () => {

        it('should reset the state of all', () => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            store = new Vuex.Store({
                state: {
                    all: {},
                },
                mutations,
            })
            store.commit('clearAll')
            expect(store.state.all).to.be.an('object').that.is.empty
        })
    })

    describe('deleteItem', () => {

        beforeEach(() => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            testPerson = {
                ...examplePerson(),
                id: 1,
            }
            store = new Vuex.Store({
                state: {
                    all: [],
                },
                mutations,
            })
        })

        it('should remove the item from all based on its id', () => {
            store.commit('receiveItem', testPerson)
            store.commit('deleteItem', 1)
            expect(Object.keys(store.state.all).length).to.equal(0)
        })
    })

    describe('receiveItem', () => {

        beforeEach(() => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            testPerson = {
                ...examplePerson(),
                id: 1,
            }
            store = new Vuex.Store({
                state: {
                    all: [],
                },
                mutations,
            })
        })

        it('should receive an item into state.all', () => {
            expect(store.state.all.length).to.equal(0)
            store.commit('receiveItem', testPerson)
            expect(store.state.all.length).to.equal(1)
            expect(store.state.all[0]).to.deep.include(testPerson)
        })

        it('should not add a duplicate entry', () => {
            store.commit('receiveItem', testPerson)
            expect(store.state.all.length).to.equal(1)
            expect(store.state.all[0]).to.deep.include(testPerson)
            store.commit('receiveItem', testPerson)
            expect(store.state.all.length).to.equal(1)
        })

        it('should update an existing record', () => {
            // Receive the person
            store.commit('receiveItem', testPerson)

            expect(store.state.all[0]).to.deep.include(testPerson)

            // Update person details
            testPerson.first_name = 'Dick'
            testPerson.last_name = 'Whitman'

            // Receive the person again
            store.commit('receiveItem', testPerson)

            // Existing record should be updated
            expect(store.state.all[0]).to.deep.include(testPerson)
        })
    })

    describe('setCurrentId', () => {

        it('should set state.currentId to what is passed in', () => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            store = new Vuex.Store({
                state: {
                    currentId: 0,
                },
                mutations,
            })
            expect(store.state.currentId).to.equal(0)
            store.commit('setCurrentId', 5)
            expect(store.state.currentId).to.equal(5)
        })
    })

    describe('setFetched', () => {

        it('should set a fetch record', done => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            store = new Vuex.Store({
                state: {
                    fetched: {},
                },
                mutations,
            })

            const request = new Promise((resolve, reject) => {
                setTimeout(resolve, 200)
            })
                .then(() => {
                    store.commit('setFetched', 'test', request)
                    expect(Object.keys(store.state.fetched).length).to.equal(1)
                    expect(store.state.fetched).to.have.property('test')
                    expect(store.state.fetched.test).to.be.an.instanceof(FetchRecord)
                    done()
                })
        })
    })

    describe('setFetching', () => {
        it('should set last fetched to a provided timestamp', () => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            store = new Vuex.Store({
                state: {
                    fetching: false,
                },
                mutations,
            })

            store.commit('setFetching', true)
            expect(store.state.fetching).to.equal(true)
        })
    })

    describe('setFilters', () => {
        let filters

        beforeEach(() => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            store = new Vuex.Store({
                state: {
                    filters: [
                        {
                            key: 'gender',
                            value: 'male',
                        },
                    ],
                },
                mutations,
            })

            filters = [
                {
                    key: 'ethnicity',
                    value: 'Caucasian',
                },
                {
                    key: 'state',
                    value: 'Iowa',
                },
            ]
        })

        it('should add filters to state', () => {

            expect(store.state.filters.length).to.equal(1)
            store.commit('setFilters', filters, false)
            expect(store.state.filters.length).to.equal(3)
        })
    })

    describe('setState', () => {

        beforeEach(() => {
            localVue = createLocalVue()
            localVue.use(Vuex)
            store = new Vuex.Store({
                state: {
                    testExists: 'item',
                },
                mutations,
            })
        })

        it('should set the state of the key that was provided', () => {
            store.commit('setState', {
                key: 'testExists',
                value: 'another item',
            })

            expect(store.state.testExists).to.equal('another item')
        })

        it('should set nothing if the state key does not exist', () => {
            store.commit('setState', {
                key: 'testNothing',
                value: 'another item',
            })

            expect(store.state).to.not.have.property('testNothing')
        })
    })
})