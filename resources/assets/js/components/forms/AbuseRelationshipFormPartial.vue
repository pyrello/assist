<template>
    <div>
        <div class="form-group" :class="controlClasses('relationship', 'relationship')">
            <label class="control-label" for="relationship">Relationship<required-asterisk></required-asterisk></label>
            <selectize
                    placeholder="Select the relationship..."
                    id="relationship"
                    v-model="relationship.relationship"
                    :all="abuserRelationshipTypes"
                    valueField="name"
            >
            </selectize>
        </div>

        <div class="form-group" :class="controlClasses('abuse_types', 'relationship')">
            <label class="control-label">Type of Abuse<required-asterisk></required-asterisk></label>
            <selectize
                    placeholder="Select the type of abuse..."
                    v-model="relationship.abuse_types"
                    :multiple="true"
                    :all="abuseTypes"
                    valueField="name"
            ></selectize>
        </div>

        <div class="checkbox checkbox-slider--b-flat">
            <label>
                <input type="checkbox" v-model="relationship.addExistingAbuser"><span><i class="fas fa-search"></i> Search for an existing abuser</span>
            </label>
        </div>
        <hr>

        <div :class="{ hidden: !relationship.addExistingAbuser }">
            <h4><i class="fas fa-search"></i> Find Existing Abuser</h4>
            <div class="form-group" :class="controlClasses('abuser_id', 'relationship')">
                <!--<label class="control-label">Select an existing abuser</label>-->
                <select-abuser v-model="relationship.abuser_id"></select-abuser>
            </div>
        </div>

        <div :class="{ hidden: relationship.addExistingAbuser }">
            <h4><i class="fas fa-plus"></i> Add New Abuser</h4>
            <abuser-form v-model="abuser" :$v="$v.abuser"></abuser-form>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { defined } from '../../common'
    import ValidationClasses from '../../mixins/validationClasses'
    import Abuser from '../../models/Abuser'
    import AbuseRelationship from '../../models/AbuseRelationship'
    import SelectAbuser from '../controls/selects/Abusers'
    import RequiredAsterisk from '../RequiredAsterisk'
    import AbuserForm from './AbuserFormPartial'

    export default {

        name: 'abuse-relationship-form-partial',

        components: {
            AbuserForm,
            RequiredAsterisk,
            SelectAbuser,
        },

        mixins: [ ValidationClasses ],

        props: [ 'value', '$v' ],

        data() {
            return {
                relationship: new AbuseRelationship(),
                abuser: new Abuser(),
            }
        },

        computed: {
            ...mapGetters('abuserRelationshipTypes', {
                abuserRelationshipTypes: 'all',
            }),
            ...mapGetters('abuseTypes', {
                abuseTypes: 'all',
            }),
        },

        watch: {
            abuser() {
                if (this.abuser && this.abuser.isDirty()) {
                    this.$emit('input', {
                        abuser: this.abuser,
                        relationship: this.relationship,
                    })
                }
            },

            relationship() {
                if (this.relationship && this.relationship.isDirty()) {
                    this.$emit('input', {
                        abuser: this.abuser,
                        relationship: this.relationship,
                    })
                }
            },

            value: {
                deep: true,
                handler(value) {
                    if (defined(value)) {
                        this.relationship = value.relationship
                        this.abuser = value.abuser
                    }
                }
            },
        },
    }
</script>
