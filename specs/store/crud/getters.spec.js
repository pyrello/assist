import getters from '../../../resources/assets/js/store/crud/getters'
import { stringifyObject } from '../../../resources/assets/js/common'
import { examplePerson } from '../../setup/Person'

describe('store > crud > getters.js', () => {

    let state = {}

    describe('all', () => {

        it('should return all items in state.all', () => {

            state.all = [
                {
                    ...examplePerson(),
                    id: 1,
                },
                {
                    ...examplePerson(),
                    id: 2,
                    first_name: 'Franz',
                },
                {
                    ...examplePerson(),
                    id: 4,
                }
            ]

            const all = getters.all(state)

            expect(all).to.deep.equal(state.all)
        })
    })

    describe('byId', () => {
        it('should return an item with a matching id', () => {
            const testItem = {
                    ...examplePerson(),
                    first_name: 'Trisha',
                    id: 3,
                }
            state = {
                all: [
                    {
                        ...examplePerson(),
                        id: 1,
                    },
                    ...[testItem]
                ],
            }

            expect(getters.byId(state)(3)).to.deep.equal(testItem)
        })
    })

    describe('current', () => {

        it('should return the item indicated by state.currentId', () => {

            state.all = [
                {
                    ...examplePerson(),
                    id: 1,
                },
                {
                    ...examplePerson(),
                    id: 2,
                    first_name: 'Franz',
                },
                {
                    ...examplePerson(),
                    id: 4,
                }
            ]

            state.currentId = 2

            const current = getters.current(state)

            expect(current).to.have.property('id', 2)
            expect(current).to.have.property('first_name', 'Franz')
        })
    })

    describe('currentFilter', () => {

        it('should return the filter that currently determines what items are shown', () => {

            const params = {
                page: 3,
                q: 'ver',
            }

            state.currentFilter = stringifyObject(params)
            expect(getters.currentFilter(state)).to.equal(state.currentFilter)
        })
    })

    describe('fetching', () => {

        it('should return the value of state.fetching', () => {
            state.fetching = true
            expect(getters.fetching(state)).to.equal(state.fetching)
            state.fetching = false
            expect(getters.fetching(state)).to.equal(state.fetching)
        })
    })

    describe('links', () => {
        it('should return state.links', () => {
            state.links = {
                next: '/path/to/next',
                prev: '/path/to/prev'
            }

            expect(getters.links(state)).to.deep.equal(state.links)
        })
    })

    describe('meta', () => {
        it('should return state.meta', () => {
            state.meta = {
                start: 20,
                end: 39,
                total: 550,
            }

            expect(getters.meta(state)).to.deep.equal(state.meta)
        })
    })

    describe('paginated', () => {

        it('should return the results that match the ids in state.currentFilter', () => {

            const params = {
                    page: 3,
                    q: 'ver',
                },
                filterSignature = stringifyObject(params),
                testItems = [
                    {
                        ...examplePerson(),
                        id: 2,
                        first_name: 'Franz',
                    },
                    {
                        ...examplePerson(),
                        id: 4,
                    },
                ]

            state = {
                all: [
                    {
                        ...examplePerson(),
                        id: 1,
                    },
                    {
                        ...examplePerson(),
                        first_name: 'Trisha',
                        id: 3,
                    },
                    ...testItems
                ],
                currentFilter: filterSignature,
                filtered: {
                    [filterSignature]: [2, 4]
                }
            }

            expect(getters.paginated(state)).to.deep.equal(testItems)
        })

    })
})