import * as common from '../resources/assets/js/common'
import { blankPerson, examplePerson } from './setup/Person'

describe('common.js functions', () => {
    describe('copy function', () => {
        let testEmptyTarget,
            testExistingTarget,
            testSubject,
            testSubjectOriginal

        beforeEach(() => {
            testEmptyTarget = Object.create(null)
            testExistingTarget = {
                ...blankPerson(),
                first_name: 'Chad',
                test_existing_field: 0,
            }
            testSubject = {
                ...blankPerson(),
                first_name: 'Devin',
                last_name: 'Townsend',
                test_add_field: 'yep',
            }
            testSubjectOriginal = {
                ...blankPerson(),
                first_name: 'Devin',
                last_name: 'Townsend',
            }
        })

        it('makes a copy of the subject', () => {
            const copy = common.copy(testSubject)
            // Contents are the same
            expect(copy).to.deep.equal(testSubject)
            // Not the same object
            expect(copy).to.not.equal(testSubject)
            expect(copy.first_name).to.equal(testSubject.first_name)
        })

        it('removes references when copying properties that are objects', () => {
            const ref = {
                test_field: 'fun',
            }

            testSubject.ref = ref
            const copy = common.copy(testSubject)

            // Contents are the same
            expect(copy).to.deep.equal(testSubject)
            // testSubject.ref and ref are the same object reference
            expect(testSubject.ref).to.equal(ref)
            // copy.ref is not a reference to ref
            expect(copy.ref).to.not.equal(ref)
            // copy.ref and testSubject.ref are not the same object reference
            expect(copy.ref).to.not.equal(testSubject.ref)
        })

        it('overwrites properties on the subject', () => {
            common.copy(testSubject, testExistingTarget)

            expect(testExistingTarget.first_name).to.equal('Devin')
        })

        it('adds properties from the subject that do not exist on the target', () => {
            common.copy(testSubject, testExistingTarget)

            expect(testExistingTarget.test_add_field).to.equal('yep')
        })

        it('preserves properties on the target when they do not exist on the subject', () => {
            common.copy(testSubject, testExistingTarget)

            expect(testExistingTarget.test_existing_field).to.equal(0)
        })
    })

    describe('defined function', () => {
        it('determines whether a variable is defined', () => {
            const defined = 'something'
            const notDefined = undefined
            const definedCheck = common.defined(defined)
            const undefinedCheck = common.defined(notDefined)
            expect(definedCheck).to.equal(true)
            expect(undefinedCheck).to.equal(false)
        })
    })

    describe('dataDelete function', () => {
        let testObject

        beforeEach(() => {
            testObject = {
                something: 'real',
                abuser: {
                    ...blankPerson(),
                    first_name: 'Matt',
                    last_name: 'Lauer',
                }
            }
        })

        it('deletes a nested property', () => {
            common.dataDelete(testObject, 'abuser.last_name')

            expect(testObject.abuser).to.not.have.property('last_name')
        })

        it('preserves other nested properties', () => {
            common.dataDelete(testObject, 'abuser.last_name')

            expect(testObject.abuser).to.have.property('first_name')
        })

        it('removes empty objects when the last property is deleted', () => {
            testObject.abuser = {
                first_name: 'Matt',
            }

            common.dataDelete(testObject, 'abuser.first_name')

            expect(testObject).to.not.have.property('abuser')
        })

        it('should handle arrays', () => {
            testObject.abuser.client_ids = [14, 31, 46]

            common.dataDelete(testObject, 'abuser.client_ids.1')

            expect(testObject.abuser.client_ids.length).to.equal(2)
            expect(testObject.abuser.client_ids).to.not.have.members([31])
        })
    })

    describe('dataGet function', () => {
        let testObject

        beforeEach(() => {
            testObject = {
                something: 'real',
                abuser: {
                    ...blankPerson(),
                    first_name: 'Matt',
                    last_name: 'Lauer',
                }
            }
        })

        it('retrieves nested properties', () => {
            const name = common.dataGet(testObject, 'abuser.first_name')

            expect(name).to.equal('Matt')
        })

        it('preserves existing structure', () => {
            const copy = common.copy(testObject)
            common.dataGet(testObject, 'abuser.first_name')

            expect(testObject).to.deep.equal(copy)
        })
    })

    describe('dataSet function', () => {
        let testObject

        beforeEach(() => {
            testObject = {
                something: 'real',
                abuser: {
                    ...blankPerson(),
                    first_name: 'Matt',
                    last_name: 'Lauer',
                }
            }
        })

        it('sets a nested property', () => {
            common.dataSet(testObject, 'abuser.first_name', 'John')

            expect(testObject.abuser.first_name).to.equal('John')
        })

        it('adds properties that do not already exist', () => {
            common.dataSet(testObject, 'relationship.type', 'Father')

            expect(testObject).to.have.property('relationship')
            expect(testObject.relationship).to.have.property('type')
            expect(testObject.relationship.type).to.equal('Father')
        })

        it('preserves existing nested properties when more deeply nested properties are added', () => {
            common.dataSet(testObject, 'abuser.hobbies.softball', 'yes')

            expect(testObject.abuser.first_name).to.equal('Matt')
        })
    })

    describe('equalOrEmpty function', () => {

        it('returns false if items are not equal', () => {
            const a = blankPerson()
            const b = common.copy(a)
            b.first_name = 'Todd'
            const check = common.equalOrEmpty(a, b)

            expect(check).to.equal(false)
        })

        it('returns true if items are equal', () => {
            const a = blankPerson()
            const b = common.copy(a)
            const check = common.equalOrEmpty(a, b)

            expect(check).to.equal(true)
        })

        it('returns true if both items are empty', () => {
            const a = null
            const b = 0
            const check = common.equalOrEmpty(a, b)

            expect(check).to.equal(true)
        })
    })

    describe('jsonClone function', () => {
        let original,
            ref

        beforeEach(() => {
            ref = blankPerson()
            original = {
                ref
            }
        })

        it('clones the object', () => {
            const clone = common.jsonClone(original)
            expect(clone).to.deep.equal(original)
            expect(clone).to.not.equal(original)
            expect(clone.ref).to.not.equal(original.ref)
            expect(clone.ref.first_name).to.equal(original.ref.first_name)
        })
    })

    describe('stringifyObject', () => {
        let testObject = {
            test: 'thing',
        }
        it('converts an object into a string', () => {
            const test = common.stringifyObject(testObject)
            expect(typeof test).to.equal('string')
        })
    })
})
