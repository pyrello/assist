<template>
    <div>
        <div class="row">
            <!-- First name -->
            <div class="col-xs-9 col-sm-5">
                <div class="form-group" :class="controlClasses('first_name')">
                    <label for="first_name" class="control-label">First Name</label>
                    <input type="text" class="form-control" id="first_name" placeholder="First Name" v-model.trim="model.first_name">
                    <!--<template v-if="$v.model.first_name.$dirty">-->
                    <!--<small class="help-block" v-if="!$v.model.first_name.required">Field is required</small>-->
                    <!--<small class="help-block" v-if="!$v.model.first_name.alpha">Only alpha characters are allowed</small>-->
                    <!--</template>-->
                </div>
            </div>

            <!-- Middle initial -->
            <div class="col-xs-3 col-sm-2 col-md-1">
                <div class="form-group" :class="controlClasses('middle_initial')">
                    <label class="control-label" for="middle_initial">M.I.</label>
                    <input type="text" id="middle_initial" class="form-control" placeholder="M.I." v-model.trim="model.middle_initial">
                </div>
            </div>

            <!-- Last name -->
            <div class="col-xs-12 col-sm-5 col-md-6">
                <div class="form-group" :class="controlClasses('last_name')">
                    <label class="control-label" for="last_name">Last Name</label>
                    <input type="text" id="last_name" class="form-control" placeholder="Last Name" v-model.trim="model.last_name">
                    <!--<template v-if="$v.model.last_name.$dirty">-->
                    <!--<small class="help-block" v-if="!$v.model.last_name.required">Field is required</small>-->
                    <!--</template>-->
                </div>
            </div>
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

        <!-- SSN (last 4) -->
        <div class="row">
            <div class="col-sm-4 col-md-3 col-lg-2">
                <div class="form-group" :class="controlClasses('last_four')">
                    <label for="last_four">SSN (Last 4)</label>
                    <input type="text" id="last_four" class="form-control" placeholder="1234" v-model="model.last_four" maxlength="4">
                    <template v-if="$v.last_four.$dirty">
                        <!--<small class="help-block" v-if="!$v.model.last_four.required">Field is required.</small>-->
                        <small class="help-block" v-if="!$v.last_four.minLength">Must be at least {{ $v.last_four.$params.minLength.min }} characters.</small>
                        <small class="help-block" v-if="!$v.last_four.numeric">Only numbers are allowed.</small>
                    </template>
                </div>
            </div>
        </div>

        <div class="checkbox">
            <label>
                <input type="checkbox" v-model="model.homeless"> Client is homeless
            </label>
        </div>
        <!-- Address -->
        <div :class="{ hidden: model.homeless }">

            <div class="row">
                <div class="col-xs-9 col-sm-10">
                    <div class="form-group" :class="controlClasses('address.street')">
                        <label class="control-label" for="address.street">Street Address</label>
                        <input type="text" class="form-control" placeholder="Street Address" id="address.street" v-model="model.address.street">
                        <!--<template v-if="$v.model.address.street.$dirty">-->
                        <!--<small class="help-block" v-if="!$v.model.address.street.required">Field is required</small>-->
                        <!--</template>-->
                    </div>
                </div>
                <div class="col-xs-3 col-sm-2">
                    <div class="form-group" :class="controlClasses('address.apt')">
                        <label class="control-label" for="address.apt">Apt #</label>
                        <input type="text" class="form-control" id="address.apt" v-model="model.address.apt">
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group" :class="controlClasses('address.state')">
            <label class="control-label" for="address.state">State<required-asterisk></required-asterisk></label>
            <select-state
                    v-model="model.address.state"
                    id="address.state"
                    placeholder="Select the state..."
            ></select-state>
        </div>

        <div class="row">
            <div class="col-xs-9 col-sm-10">

                <div class="form-group" :class="controlClasses('address.county')">
                    <label class="control-label" for="address.county">County<required-asterisk></required-asterisk> <i class="fas fa-spinner fa-spin" v-if="stateLoading"></i></label>
                    <select-county
                            v-model="model.address.county"
                            id="address.county"
                            :stateName.sync="model.address.state"
                            placeholder="Select the county..."
                    ></select-county>
                </div>
            </div>
            <div class="col-xs-3 col-sm-2">
                <div class="form-group" :class="controlClasses('address.zip')">
                    <label class="control-label" for="address.zip">ZIP</label>
                    <input type="text" class="form-control" placeholder="ZIP" id="address.zip" v-model="model.address.zip" @input="$v.address.zip.$touch()">
                    <template v-if="$v.address.zip.$dirty">
                        <!--<small class="help-block" v-if="!$v.model.address.zip.required">Field is required.</small>-->
                        <small class="help-block" v-if="!$v.address.zip.minLength">Must be at least {{ $v.address.zip.$params.minLength.min }} characters.</small>
                    </template>
                </div>
            </div>
        </div>
        <div class="form-group" :class="controlClasses('address.city')">
            <label class="control-label" for="address.city">City <i class="fas fa-spinner fa-spin" v-if="stateLoading"></i></label>
            <select-city
                    v-model="model.address.city"
                    id="address.city"
                    :stateName.sync="model.address.state"
                    valueField="name"
            ></select-city>
        </div>
        <!--/ Address -->

        <!-- Gender -->
        <div class="form-group" :class="controlClasses('gender')">
            <label class="control-label" for="gender">Gender</label>
            <select-gender v-model="model.gender"></select-gender>
        </div>

        <!-- Ethnicities -->
        <div class="form-group" :class="controlClasses('ethnicity_ids')">
            <label class="control-label" for="ethnicity">Ethnicity</label>
            <select-ethnicity v-model="model.ethnicity_ids"></select-ethnicity>
            <small class="help-block">For clients with multiple ethnicity, please select them in the order that the client identifies them.</small>
        </div>
    </div>
</template>

<script>
    import Client from '../../models/Client'
    import Localities from '../../mixins/localities'
    import RequiredAsterisk from '../RequiredAsterisk'
    import SelectEthnicity from '../controls/selects/Ethnicity.vue'
    import SelectGender from '../controls/selects/Genders.vue'
    import SelectCity from '../controls/selects/Cities.vue'
    import SelectCounty from '../controls/selects/Counties.vue'
    import SelectState from '../controls/selects/States.vue'
    import ValidationClasses from '../../mixins/validationClasses'

    export default {

        name: 'client-form-partial',

        components: {
            RequiredAsterisk,
            SelectCity,
            SelectCounty,
            SelectEthnicity,
            SelectGender,
            SelectState,
        },

        mixins: [ Localities, ValidationClasses ],

        props: [ 'value', '$v' ],

        data() {
            return {
                model: new Client()
            }
        },

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