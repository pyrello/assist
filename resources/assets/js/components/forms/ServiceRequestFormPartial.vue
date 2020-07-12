<template>
    <div>
        <!-- Advocate -->
        <div class="form-group" :class="controlClasses('advocate_id')">
            <label class="control-label" for="advocate_id">Advocate <required-asterisk></required-asterisk></label>
            <select-advocate v-model="model.advocate_id"></select-advocate>
        </div>

        <div class="form-group" :class="controlClasses('requested_service_id')">
            <label class="control-label" for="requested_service_id">Service Requested <required-asterisk></required-asterisk></label>
            <select-service v-model="model.requested_service_id"></select-service>
        </div>

        <checkbox-slider :class="controlClasses('service_provided')" label="The service was provided" v-model="model.service_provided"></checkbox-slider>
        <hr>
        <div :class="{ hidden: !model.service_provided }">
            <label>When was the service provided?</label>
            <div class="form-group" :class="controlClasses('started_at')">
                <label class="control-label" for="started_at">Start <required-asterisk></required-asterisk></label>
                <input-date id="started_at" v-model="model.started_at" :end="'now'" enable-time="true"></input-date>
            </div>

            <div class="form-group" :class="controlClasses('ended_at')">
                <label class="control-label" for="ended_at">End <required-asterisk></required-asterisk></label>
                <input-date id="ended_at" v-model="model.ended_at" :start="model.started_at" :end="'now'" enable-time="true"></input-date>
            </div>

            <div class="form-group" :class="controlClasses('funding_source_id')">
                <label class="control-label" for="funding_source_id">Funding Source <required-asterisk></required-asterisk></label>
                <select-funding v-model="model.funding_source_id"></select-funding>
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
        </div>

        <div :class="{ hidden: model.service_provided }">
            <div class="form-group" :class="controlClasses('why_not_provided')">
                <label class="control-label" for="why_not_provided">Why was the service not provided?</label>
                <selectize
                        id="why_not_provided"
                        :all="serviceNotProvidedReasons"
                        v-model="model.why_not_provided"
                        placeholder="Select the reason..."
                        valueField="id"
                        valueType="number"
                ></selectize>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { defined } from '../../common'
    import CheckboxSlider from '../../components/controls/CheckboxSlider'
    import SelectAdvocate from '../../components/controls/selects/Advocates.vue'
    import SelectFunding from '../../components/controls/selects/Funding'
    import SelectService from '../../components/controls/selects/Services'
    import Localities from '../../mixins/localities'
    import ValidationClasses from '../../mixins/validationClasses'
    import Activity from '../../models/Activity'
    import SelectCity from '../controls/selects/Cities'
    import SelectState from '../controls/selects/States'
    import RequiredAsterisk from '../RequiredAsterisk'

    export default {

        name: 'service-request-form-partial',

        components: {
            CheckboxSlider,
            RequiredAsterisk,
            SelectAdvocate,
            SelectCity,
            SelectFunding,
            SelectService,
            SelectState,
        },

        mixins: [ Localities, ValidationClasses ],

        props: [ 'value', '$v' ],

        data() {
            return {
                model: new Activity()
            }
        },

        computed: {
            ...mapGetters('serviceNotProvidedReasons', {
                serviceNotProvidedReasons: 'all',
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
                if (defined(value)) {
                    this.model = value
                }
            }
        },
    }
</script>