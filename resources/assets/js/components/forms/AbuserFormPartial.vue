<template>
    <div>
        <div class="row">
            <!-- First name -->
            <div class="col-xs-6">
                <div class="form-group" :class="controlClasses('first_name')">
                    <label for="first_name" class="control-label">First Name</label>
                    <input type="text" class="form-control" id="first_name" placeholder="First Name" v-model.trim="model.first_name">
                </div>
            </div>

            <!-- Last name -->
            <div class="col-xs-6">
                <div class="form-group" :class="controlClasses('last_name')">
                    <label class="control-label" for="last_name">Last Name</label>
                    <input type="text" id="last_name" class="form-control" placeholder="Last Name" v-model.trim="model.last_name">
                </div>
            </div>
        </div>

        <!-- Date of Birth -->
        <div class="row">
            <div class="col-sm-4 col-md-3 col-lg-2">
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
            <small class="help-block">For abusers with multiple ethnicity, please select them in the order that the client identifies them.</small>
        </div>

        <!-- Eye Color -->
        <div class="form-group" :class="controlClasses('eye_color')">
            <label class="control-label" for="eye_color">Eye Color</label>
            <selectize
                    placeholder="Select the eye color..."
                    id="eye_color"
                    v-model="model.eye_color"
                    :all="eyeColors"
                    valueField="name"
            >
                <!--<option v-for="item in eyeColors">{{ item.name }}</option>-->
            </selectize>
        </div>

        <!-- Hair Color -->
        <div class="form-group" :class="controlClasses('hair_color')">
            <label class="control-label" for="hair_color">Hair Color</label>
            <selectize
                    placeholder="Select the hair color..."
                    id="hair_color"
                    v-model="model.hair_color"
                    :all="hairColors"
                    valueField="name"
            >
                <!--<option v-for="item in hairColors">{{ item.name }}</option>-->
            </selectize>
        </div>

        <!-- Hair Length -->
        <div class="form-group" :class="controlClasses('hair_length')">
            <label class="control-label" for="hair_length">Hair Length</label>
            <selectize
                    placeholder="Select the hair length..."
                    id="hair_length"
                    v-model="model.hair_length"
                    :all="hairLengths"
                    valueField="name"
            >
                <!--<option v-for="item in hairLengths">{{ item.name }}</option>-->
            </selectize>
        </div>

        <!-- Height -->
        <div class="form-group" :class="controlClasses('height')">
            <label class="control-label" for="height">Height</label>
            <select class="form-control" id="height" v-model="model.height">
                <option value="">- Unknown -</option>
                <option v-for="inches in heights" :value="inches">{{ inches | height }}</option>
            </select>
        </div>

        <!-- Weight -->
        <div class="form-group" :class="controlClasses('weight')">
            <label class="control-label" for="weight">Weight</label>
            <input type="text" class="form-control" id="weight" v-model="model.weight">
            <small class="help-block">Leave blank if not known.</small>
        </div>

        <!-- Identifying Features -->
        <div class="form-group" :class="controlClasses('identifying_features')">
            <label class="control-label" for="identifying_features">Identifying Features</label>
            <textarea class="form-control" id="identifying_features" name="model.identifying_features" v-model.trim="model.identifying_features"></textarea>
        </div>

        <!-- Vehicle -->
        <div class="form-group" :class="controlClasses('vehicle')">
            <label class="control-label" for="vehicle">Vehicle</label>
            <textarea class="form-control" id="vehicle" name="model.vehicle" v-model.trim="model.vehicle"></textarea>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { defined } from '../../common'
    import Abuser from '../../models/Abuser'
    import SelectEthnicity from '../controls/selects/Ethnicity'
    import SelectGender from '../controls/selects/Genders.vue'
    import ValidationClasses from '../../mixins/validationClasses'

    export default {

        name: 'abuser-form-partial',

        components: {
            SelectEthnicity,
            SelectGender,
        },

        mixins: [ ValidationClasses ],

        props: [ 'value', '$v' ],

        data() {
            return {
                model: new Abuser()
            }
        },

        computed: {
            ...mapGetters('eyeColors', {
                eyeColors: 'all',
            }),
            ...mapGetters('hairColors', {
                hairColors: 'all',
            }),
            ...mapGetters('hairLengths', {
                hairLengths: 'all',
            }),

            heights() {
                const heights = []
                for (let $i = 54; $i <= 90; $i++) {
                    heights.push($i);
                }

                return heights
            },
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