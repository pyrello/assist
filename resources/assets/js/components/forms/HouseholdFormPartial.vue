<template>
    <div>
        <div class="form-group" :class="controlClasses('size')">
            <label class="control-label">Size<required-asterisk></required-asterisk></label>
            <input type="number" class="form-control" v-model.number="model.size">
            <small class="help-block">Including the client.</small>
        </div>
        <div class="form-group" :class="controlClasses('annual_income')">
            <label class="control-label" for="household.annual_income">Income</label>
            <div class="input-group">
                <span class="input-group-addon">$</span>
                <input type="text" class="form-control" id="household.annual_income" aria-label="Amount (to the nearest dollar)" v-model="model.annual_income">
                <span class="input-group-addon">.00</span>
            </div>
        </div>
        <!--<pre>{{ { model } }}</pre>-->
    </div>
</template>

<script>
    import Household from '../../models/Household'
    import RequiredAsterisk from '../RequiredAsterisk'
    import ValidationClasses from '../../mixins/validationClasses'

    export default {

        name: 'household-form-partial',

        components: {
            RequiredAsterisk,
        },

        mixins: [ ValidationClasses ],

        props: [ 'value', '$v' ],

        data() {
            return {
                model: new Household()
            }
        },

        // Watchers
        watch: {
            model() {
                if (this.model && this.model.isDirty()) {
                    this.$emit('input', this.model)
                }
            },

            value(value) {
                this.model = value
            }
        },
    }
</script>