import Model from '../resources/assets/js/models/Model'
import { blankPerson, examplePerson } from './setup/Person'

class TestPersonModel extends Model {
    defaults() {
        return blankPerson()
    }
}

describe('Model', () => {
    let model

    describe('constructor', () => {

        beforeEach(() => {
            model = new TestPersonModel(examplePerson())
        })

        it('creates functional properties for model', () => {
            expect(model).to.have.property('_original')
            expect(model).to.have.property('_attributes')
            expect(model).to.have.property('_changed')
        })

        it('sets same properties on _original and _attributes', () => {
            expect(model._original).to.deep.equal(model._attributes)
        })

        it('sets all default properties', () => {
            Object.keys(blankPerson()).forEach(key => {
                expect(model).to.have.property(key)
            })
        })

        it('sets all attribute properties and values', () => {
            expect(model).to.deep.include(examplePerson())
        })

        it('has no changes yet', () => {
            expect(Object.keys(model.getChanges()).length).to.equal(0)
        })
    })

    describe('get method', () => {

        beforeEach(() => {
            model = new TestPersonModel(examplePerson())
        })

        it('should return the value that is set on this._attributes', () => {
            Object.keys(examplePerson()).forEach(key => {
                expect(model.get(key)).to.equal(model._attributes[key])
            })
        })
    })

    describe('set method', () => {
        beforeEach(() => {
            model = new TestPersonModel(examplePerson())
        })

        it('should set the value at the attribute on the property', () => {
            model.set('first_name', 'Peggy')
            expect(model.first_name).to.equal('Peggy')
        })
    })

    describe('assign method', () => {

        beforeEach(() => {
            model = new Model(blankPerson())
        })

        it('it fills in all provided properties', () => {
            model.assign(examplePerson())

            console.log('model', model)
            expect(model).to.deep.include(examplePerson())
            console.log('model attributes', model._attributes)
            expect(model._attributes).to.deep.include(examplePerson())
        })

        it('does not cause changes to be registered', () => {
            model.assign(examplePerson(), true)

            expect(model.getChanges()).to.be.empty
        })
    })

    describe('has method', () => {
        beforeEach(() => {
            model = new TestPersonModel(examplePerson())
        })

        it('should return true if an attribute exists', () => {
            expect(model.has('first_name')).to.equal(true)
        })

        it('should return false if an attribute does not exist', () => {
            expect(model.has('donkey')).to.equal(false)
        })
    })

    describe('registerAttribute method', () => {

        it('should add a property to the object and reference the corresponding value on this._attributes', () => {
            model = new TestPersonModel()
            model._attributes.house = 'big'
            expect(model).to.not.have.property('house')
            model.registerAttribute('house')
            expect(model).to.have.property('house', 'big')
        })
    })

    // describe('defineArray method', () => {
    //
    //     it('should add an empty array to this._attributes and reference it from the object', () => {
    //         model = new Model()
    //         model.defineArray('dogs')
    //
    //         expect(model.dogs).to.be.an('array').and.to.deep.equal(model._attributes.dogs)
    //     })
    // })
    //
    // describe('defineObject method', () => {
    //
    //     it('should add an empty object to this._attributes and reference it from the object', () => {
    //         model = new Model()
    //         model.defineObject('dogs')
    //         expect(model.dogs).to.be.an('object').and.to.deep.equal(model._attributes.dogs)
    //     })
    // })

    // describe('handleChange method', () => {
    //
    //     beforeEach(() => {
    //         model = new Model(blankPerson())
    //     })
    //
    //     it('returns false if trackChanges is false', () => {
    //         // Todo: how to check this?
    //         model.trackChanges = false
    //
    //         expect(model.handleChange('first_name')).to.equal(false)
    //     })
    //
    //     it('does not add changes if there is no difference', () => {
    //         model._original.first_name = 'Bill'
    //         model._attributes.first_name = 'Bill'
    //
    //         model.handleChange('first_name')
    //
    //         expect(model.changed).to.not.have.property('first_name')
    //     })
    //
    //     it('adds changes if there is a difference', () => {
    //         model._original.first_name = 'Steve'
    //         model._attributes.first_name = 'Bill'
    //
    //         model.handleChange('first_name')
    //
    //         expect(model.changed).to.have.property('first_name')
    //     })
    //
    //     it('removes changes when there is no longer a difference', () => {
    //         model._original.first_name = 'Steve'
    //         model._attributes.first_name = 'Bill'
    //         model.handleChange('first_name')
    //
    //         expect(model.changed).to.have.property('first_name')
    //
    //         model._attributes.first_name = 'Steve'
    //         model.handleChange('first_name')
    //
    //         expect(model.changed).to.not.have.property('first_name')
    //     })
    //
    //     it('should handle additions to an array', () => {
    //         model.fill({
    //             animals: [],
    //         })
    //         console.log('model attributes', model._attributes)
    //
    //         model._attributes.animals.push(1)
    //
    //
    //         expect(model.changed).to.not.have.property('animals')
    //
    //         model.handleChange('animals')
    //
    //         console.log('changed', model.changed)
    //
    //         expect(model.changed).to.have.property('animals')
    //         expect(model.changed.animals).to.have.members([1])
    //     })
    // })

    // describe('isChanging method', () => {
    //
    //     beforeEach(() => {
    //         model = new Model(blankPerson())
    //     })
    //
    //     it('should return true if there is a difference', () => {
    //         model._original.first_name = 'Steve'
    //         model._attributes.first_name = 'Bill'
    //
    //         expect(model.isChanging('first_name')).to.equal(true)
    //     })
    //
    //     it('should return false if there is not a difference', () => {
    //         model._original.first_name = 'Bill'
    //         model._attributes.first_name = 'Bill'
    //
    //         expect(model.isChanging('first_name')).to.equal(false)
    //     })
    // })

    describe('isDirty method', () => {

        beforeEach(() => {
            model = new Model(blankPerson())
        })

        it('returns true if there are changes', () => {
            model.first_name = 'Burt'

            expect(model.getChanges()).to.have.property('first_name', 'Burt')
            expect(model.isDirty()).to.equal(true)
        })

        it('returns false if there are no changes', () => {
            expect(Object.keys(model.getChanges()).length).to.equal(0)
            expect(model.isDirty()).to.equal(false)
        })
    })

    // describe('setAttribute method', () => {
    //
    //     beforeEach(() => {
    //         model = new Model(blankPerson())
    //     })
    //
    //     it('should set attribute when it does not already exist', () => {
    //         model.setAttribute('height', { data: { height: "6'5\""}})
    //
    //         expect(model).to.have.property('height', "6'5\"")
    //     })
    //
    //     it('should set attribute when is already exists', () => {
    //         model.height = "5'10\""
    //         expect(model).to.have.property('height', "5'10\"")
    //         model.setAttribute('height', { data: { height: "6'5\""}})
    //
    //         expect(model).to.have.property('height', "6'5\"")
    //     })
    // })

    // describe('guessDefaultForValue', () => {
    //     beforeEach(() => {
    //         model = new Model(blankPerson())
    //     })
    //
    //     it('should return an empty string for a string', () => {
    //         expect(model.guessDefaultForValue('Bill')).to.equal('')
    //     })
    //
    //     it('should return 0 for a number', () => {
    //         expect(model.guessDefaultForValue(20)).to.equal(0)
    //     })
    //
    //     it('should return the value for a boolean', () => {
    //         let boolean = true
    //         expect(model.guessDefaultForValue(boolean)).to.equal(boolean)
    //         boolean = false
    //         expect(model.guessDefaultForValue(boolean)).to.equal(boolean)
    //     })
    //
    //     it('should return a blank array for an array', () => {
    //         expect(model.guessDefaultForValue([1, 2, 3, "h"])).to.be.an('array').that.is.empty
    //     })
    //
    //     it('should return a blank object for an object', () => {
    //         expect(model.guessDefaultForValue(blankPerson())).to.be.an('object').and.to.deep.equal({})
    //     })
    //
    //     it('should return null otherwise', () => {
    //         expect(model.guessDefaultForValue(undefined)).that.is.null
    //         expect(model.guessDefaultForValue(null)).that.is.null
    //     })
    // })
})