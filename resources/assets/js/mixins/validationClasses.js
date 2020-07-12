import { dataGet, defined, has } from '../common'
import Model from '../models/Model'

export default {
    methods: {
        /**
         * Set the classes to show feedback for whether form controls
         * are required and/or valid.
         *
         * @param prop
         * @param model
         * @param $validation
         * @param log
         * @returns {boolean|string}
         */
        controlClasses(prop, model = 'model', $validation, log = false) {

            // Check if the log flag was sent as an earlier argument
            if (typeof model === 'boolean') {
                log = model
                model = 'model'
            } else if (typeof $validation === 'boolean') {
                log = $validation
                $validation = undefined
            }

            if (log) console.log({ prop, model })

            // If validation is not defined and the this.$v object is defined
            if (!defined($validation) && this.$v) {
                $validation = this.$v

                // Try accessing the validation using the model
                if (typeof model === 'string') {
                    if (log) console.log('Checking if we can use model in validation', model)
                    if (has($validation, model)) {
                        $validation = $validation[model]
                    }
                }
            }

            // Try accessing the validation using the prop
            $validation = _.get($validation, prop)

            if (log) console.log('$validation', $validation)

            // See if we can grab the model
            if (typeof model === 'string') {
                model = this[model]
            }

            // Otherwise, see if we can use the default one
            else if (!model) {
                model = this.model
            }

            if (log) console.log('[controlClasses]', 'model', model)

            // If we don't have a model, we can't process this
            if (!model || !model instanceof Model) {
                console.warn('Unable to find model for checking control classes.', prop)
                return true
            }

            if (log) console.log('changed', model.getChanges(prop), defined(model.getChanges(prop)))

            let check = false,
                valid = true,
                required = false,
                value = _.get(model, prop),
                changed = defined(model.getChanges(prop)),
                empty = !defined(value) || value === null || !((typeof value === 'string' || typeof value === 'number') && value !== '') || (prop === 'id' && !value)

            if (log) console.log('empty', value, !defined(value), value === null, typeof value === 'string', typeof value === 'number', value !== '', !((typeof value === 'string' || typeof value === 'number') && value !== ''))

            // Validation is defined
            if (defined($validation)) {

                if (log) console.log('validation is defined')


                if (log) console.log('required', defined($validation.required), $validation.required)
                // Check if the field is required
                if (defined($validation.required) || defined($validation.requiredIf)) {
                    // check = true
                    required = true
                }

                // Valid if validation passes
                valid = !$validation.$invalid
            }

            if (log) console.log({ check, valid, value, changed, required, empty })

            if (required) {
                check = true

                if (empty) {
                    if (log) console.log('empty and required = invalid')
                    valid = false
                }
            } else {
                check = changed
            }

            if ((model.exists && !changed) && (!required || valid)) {
                if (log) console.log('Model exists and prop has not changed.')
                return ''
            }

            if (log) console.log('final', { check, valid })

            if (!check) {
                return ''
            }

            return {
                'has-warning': !valid,
                'has-success': valid
            }
        },

        feedbackClasses(prop, $validation = undefined, model = 'model', log = false) {

            if (typeof $validation === 'boolean') {
                log = $validation
                $validation = undefined
            }

            if (log) console.log('prop', prop)

            if (typeof model === 'String') {
                model = this[model]
            } else if (!model) {
                model = this.model
            }

            if (!model) {
                return true
            }

            if (log) console.log('$validation', $validation)
            if (typeof $validation === 'string' && this.$v) {
                const $vname = $validation
                $validation = dataGet(this.$v, $vname)

                if (!defined($validation)) {
                    $validation = dataGet(this.$v.model, $vname)
                }

                if (!defined($validation)) {
                    console.warn(`Validation for ${$vname} is not defined`)
                }
            }

            if (log) console.log('$validation', $validation)

            let check = false,
                valid = false,
                value = _.get(model, prop),
                changed = defined(dataGet(model.changed, prop)),
                required = false,
                empty = _.isUndefined(value) || (typeof value === 'string' || typeof value === 'number') && value !== ''
            // This clause needs to be separate from the next check
            // because of the case where validation may be defined but
            // not required. We still want it to show up as valid.

            // Validation is defined
            if (defined($validation)) {

                if (log) console.log('validation is defined')

                // Valid if validation passes
                valid = !$validation.$invalid

                if (log) console.log('required', defined($validation.required), $validation.required)
                // Check if the field is required
                if (defined($validation.required)) {
                    required = true
                }
            }

            if (log) console.log({ check, valid, value, changed, required, empty })


            if (required) {
                check = true

                if (empty) {
                    valid = false
                }
            }

            if (log) console.log('final', { check, valid })

            if (!check) {
                return ''
            }

            return {
                'has-warning': !valid,
                'has-success': valid
            }
        },
    }
}