<template>
    <div>
        <div class="form-group" :class="controlClasses('date')">
            <label class="control-label" for="intake.date">Date Occurred <required-asterisk></required-asterisk></label>
            <input-date id="date" v-model="model.date"></input-date>
        </div>

        <!-- Incident Types -->
        <div class="form-group" :class="controlClasses('incident_type_id')">
            <label class="control-label" for="incident_type_id">Type of Incident <required-asterisk></required-asterisk></label>
            <selectize
                    :all="incidentTypes"
                    v-model="model.incident_type_id"
                    id="incident_type_id"
                    placeholder="Select the type of incident..."
                    valueField="id"
                    valueType="number"
            ></selectize>
        </div>

        <div class="form-group" :class="controlClasses('state')">
            <label class="control-label" for="state">State <required-asterisk></required-asterisk></label>
            <select-state v-model="model.state"></select-state>
        </div>

        <div class="form-group" :class="controlClasses('city')">
            <label class="control-label" for="city">City <required-asterisk></required-asterisk> <i class="fa fa-refresh fa-spin" v-if="stateLoading"></i></label>
            <select-city
                    v-model="model.city"
                    :stateName.sync="model.state"
            ></select-city>
        </div>

        <!-- Note -->
        <div class="form-group" :class="{ 'has-success': model.note !== '' }">
            <label class="control-label" for="note">Add a Note</label>
            <textarea class="form-control" id="note" name="model.note" v-model.trim="model.note"></textarea>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { defined } from '../../common'
    import Localities from '../../mixins/localities'
    import ValidationClasses from '../../mixins/validationClasses'
    import Incident from '../../models/Incident'
    import SelectCity from '../controls/selects/Cities'
    import SelectState from '../controls/selects/States'
    import RequiredAsterisk from '../RequiredAsterisk'

    export default {

        name: 'incident-form-partial',

        components: {
            RequiredAsterisk,
            SelectCity,
            SelectState,
        },

        mixins: [ Localities, ValidationClasses ],

        props: [ 'value', '$v'/*, 'date', 'incident_type_id', 'state', 'city', 'note'*/ ],

        data() {
            return {
                model: new Incident()
            }
        },

        computed: {
            ...mapGetters('incidentTypes', {
                incidentTypes: 'all',
            }),
        },

        // Watchers
        watch: {
            model() {
                // console.log('IncidentFormPartial', 'watch', 'model')
                if (this.model.isDirty()) {
                    this.$emit('input', this.model)
                }
            },

            value(value) {
                // console.log('value is changing', value)
                if (defined(value)) {
                    this.model = value
                }
            }
        },
    }
</script>
