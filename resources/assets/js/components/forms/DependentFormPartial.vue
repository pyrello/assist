<template>
    <div>
        <div class="form-group" :class="controlClasses('name')">
            <label class="control-label">Name <required-asterisk></required-asterisk></label>
            <input type="text" class="form-control" v-model.trim="model.name">
        </div>

        <!-- Date of Birth -->
        <div class="row">
            <div class="col-sm-5 col-md-4 col-lg-3">
                <div class="form-group" :class="controlClasses('birth_date')">
                    <label class="control-label" for="birth_date">Birth Date</label>
                    <input-date label="Date of Birth" id="birth_date" v-model="model.birth_date" end="now"></input-date>
                </div>
            </div>
        </div>

        <!-- Gender -->
        <div class="form-group" :class="controlClasses('gender')">
            <label class="control-label" for="gender">Gender</label>
            <select-gender v-model="model.gender"></select-gender>
        </div>

        <!-- Ethnicity -->
        <div class="form-group" :class="controlClasses('ethnicity_ids')">
            <label class="control-label" for="ethnicity">Ethnicity</label>
            <select-ethnicity v-model="model.ethnicity_ids"></select-ethnicity>
            <small class="help-block">For dependents with multiple ethnicity, please select them in the order that the client identifies them.</small>
        </div>

        <!-- Housing Status -->
        <div class="form-group" :class="controlClasses('housing_status')">
            <label class="control-label" for="housing_status">Housing Status</label>
            <selectize v-model="model.housing_status" :all="housingStatuses"></selectize>
        </div>
        <!--<pre>{{ model }}</pre>-->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Dependent from '../../models/Dependent'
    import SelectEthnicity from '../controls/selects/Ethnicity'
    import SelectGender from '../controls/selects/Genders'
    import RequiredAsterisk from '../RequiredAsterisk'
    import ValidationClasses from '../../mixins/validationClasses'

    export default {

        name: 'dependent-form-partial',

        components: {
            RequiredAsterisk,
            SelectEthnicity,
            SelectGender,
        },

        mixins: [ ValidationClasses ],

        props: [ 'value', '$v' ],

        data() {
            return {
                model: new Dependent()
            }
        },

        computed: {
            ...mapGetters('housingStatuses', {
                housingStatuses: 'all',
            }),
        },

        // Watchers
        watch: {
            model() {
                if (this.model.isDirty()) {
                    this.$emit('input', this.model)
                }
            },

            value(value) {
                this.model = value
            }
        },
    }
</script>