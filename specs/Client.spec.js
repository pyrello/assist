import Client from '../resources/assets/js/models/Client'

describe('Client', () => {
    let client

    beforeEach(() => {
        client = new Client()
    })

    describe('isMinimallyViable method', () => {
        it('should return false if first_name, last_name, or birth_date empty', () => {
            expect(client.isMinimallyViable()).to.equal(false)
        })

        it('should return true if first_name, last_name, and birth_date are not empty', () => {
            client.assign({
                first_name: 'Sally',
                last_name: 'Wilkins',
                birth_date: '10-29-1984',
            })

            expect(client.isMinimallyViable()).to.equal(true)
        })
    })
})