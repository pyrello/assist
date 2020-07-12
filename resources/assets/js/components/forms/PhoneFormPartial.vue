<template>
    <div>
        <div class="form-group" :class="controlClasses('number')">
            <label class="control-label">Number<required-asterisk></required-asterisk></label>
            <phone-input class="form-control" v-model="model.number"></phone-input>
        </div>
        <div class="form-group" :class="controlClasses('ext')">
            <label class="control-label">Ext.</label>
            <input type="text" class="form-control" id="ext" v-model="model.ext">
        </div>
        <div class="form-group" :class="controlClasses('type')">
            <label class="control-label">Type</label>
            <select class="form-control" v-model="model.type">
                <option v-for="type in phoneTypes">{{ type }}</option>
            </select>
        </div>
        <div class="checkbox" :class="controlClasses('primary')">
            <label>
                <input type="checkbox" name="primary_phone" v-model="model.primary"> Primary
            </label>
            <small class="help-block">Making this the primary phone number will unset any other phone number as the primary number</small>
        </div>
        <div class="checkbox" :class="controlClasses('safe')">
            <label>
                <input type="checkbox" v-model="model.safe"> Safe?
            </label>
        </div>
        <!--<pre>{{ model }}</pre>-->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import PhoneInput from '../../components/controls/Phone'
    import Phone from '../../models/Phone'
    import ValidationClasses from '../../mixins/validationClasses'
    import RequiredAsterisk from '../RequiredAsterisk'

    export default {

        name: 'phone-form-partial',

        components: {
            PhoneInput,
            RequiredAsterisk,
        },

        mixins: [ ValidationClasses ],

        props: [ 'value', '$v' ],

        data() {
            return {
                model: new Phone()
            }
        },

        computed: {
            ...mapGetters('phoneTypes', {
                phoneTypes: 'all',
            }),
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