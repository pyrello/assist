<template>
    <div class="overlay-background">
        <div class="overlay">
            <form role="form" @submit.prevent="process">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Intake</h1>
            </header>
            <div class="section">

                <!-- Start: Intake -->
                <!-- Intake Date -->
                <div class="row">
                    <div class="col-sm-4 col-md-3 col-lg-2">
                        <div class="form-group" :class="controlClasses('date', 'intake')">
                            <label class="control-label" for="intake.date">Intake Date <required-asterisk></required-asterisk></label>
                            <input-date label="Intake Date" id="intake.date" v-model="intake.date" end="now" @change="$v.intake.date.$touch()"></input-date>
                        </div>
                    </div>
                </div>

                <!-- Advocate -->
                <div class="form-group" :class="controlClasses('advocate_id', 'intake')">
                    <label class="control-label" for="intake.advocate_id">Advocate <required-asterisk></required-asterisk></label>
                    <!--<p class="form-control-static">[Current Advocate] <a href="#change-date"><i class="fa fa-pencil-square"></i> Change</a></p>-->
                    <select-advocate v-model="intake.advocate_id" id="intake.advocate_id" @input="$v.intake.advocate_id.$touch()"></select-advocate>
                </div>

                <!-- Referred by -->
                <div class="form-group" :class="controlClasses('referred_by_id', 'intake')">
                    <label class="control-label" for="intake.referred_by_id">Referred By</label>
                    <selectize
                            :all="referralSources"
                            v-model="intake.referred_by_id"
                            label="Referred By"
                            placeholder="Select the source of the referral..."
                            valueField="id"
                            valueType="number"
                    ></selectize>
                </div>

                <!-- End: Intake -->

                <div class="row">
                    <div class="col-xs-3">

                        <ul id="intake-tabs" class="nav nav-tabs tabs-left" role="tablist">
                            <li class="active"><a :class="{ 'text-warning': $v.client.$invalid, 'text-success': !$v.client.$invalid }" href="#personal" data-toggle="tab"><i class="fas fa-address-card fa-fw"></i> <required-asterisk v-if="$v.client.$invalid"></required-asterisk><span class="hidden-xs">Personal: <span v-if="client.isDirty()"><em v-if="client.first_name"> {{ client.first_name }}</em><em v-if="client.last_name"> {{ client.last_name }}</em></span><span v-else>Anonymous</span></span></a></li>
                            <li v-if="!isDependent"><a class="" href="#household" data-toggle="tab"><i class="fas fa-home fa-fw"></i> <span class="hidden-xs">Household</span></a></li>
                            <li v-for="(dependent, i) in dependents" v-if="!isDependent"><a :class="{ 'text-warning': $v.dependents.$each[i].$invalid, 'text-success': !$v.dependents.$each[i].$invalid }" :href="'#dependent-'+(i+1)" data-toggle="tab"><i class="fas fa-child fa-fw"></i> <required-asterisk v-if="$v.dependents.$each[i].$invalid"></required-asterisk><span class="hidden-xs">Dependent<span v-if="dependent.name">: {{ dependent.name }}</span><span v-else> {{ i+1 }}</span></span></a></li>
                            <li v-for="(phone, i) in phones"><a :class="{ 'text-warning': $v.phones.$each[i].$invalid, 'text-success': !$v.phones.$each[i].$invalid }" :href="'#phone-' + (i + 1)" data-toggle="tab"><i class="fas fa-mobile fa-fw"></i> <span class="hidden-xs">Phone<span v-if="phone.number">: {{ phone.number | phone }}</span><span v-else> {{ i + 1 }}</span></span></a></li>
                            <li v-for="(incident, i) in incidents"><a class="" :href="'#incident-' + (i + 1)" data-toggle="tab"><i class="fas fa-exclamation-triangle"></i> <required-asterisk v-if="$v.incidents.$each[i].$invalid"></required-asterisk><span class="hidden-xs">Incident</span></a></li>
                            <li v-for="(abuse, index) in abuses"><a :class="{ 'text-warning': $v.abuses.$each[index].$invalid, 'text-success': !$v.abuses.$each[index].$invalid }" :href="'#abuse-'+(index+1)" data-toggle="tab"><i class="fas fa-frown fa-fw"></i> <required-asterisk v-if="$v.abuses.$each[index].$invalid"></required-asterisk><span class="hidden-xs">Abuser<template v-if="abuse.abuser && (abuse.abuser.first_name || abuse.abuser.last_name)">: <span v-if="abuse.abuser.first_name">{{ abuse.abuser.first_name }}</span><span v-if="abuse.abuser.last_name"> {{ abuse.abuser.last_name }}</span></template><span v-else> {{ index+1 }}</span></span></a></li>
                            <li v-for="(note, i) in notes"><a class="" :href="'#note-' + (i + 1)" data-toggle="tab"><i class="fas fa-sticky-note fa-fw"></i> <span class="hidden-xs">Note<template v-if="note.isDirty()">: {{ note.content | truncate(20) }}</template><template v-else> {{ i + 1 }}</template></span></a></li>
                            <!-- Add buttons -->
                            <li v-if="(!dependents.length || dependents[dependents.length-1].isDirty()) && !isDependent"><a class="btn btn-primary btn-sm add-tab" href="#add-phone-number" @click.prevent="addDependent()"><i class="fas fa-plus visible-inline-xs hidden"></i> <i class="fas fa-child fa-fw"></i><span class="hidden-xs"> Add dependent</span></a></li>
                            <li v-if="!phones.length || phones[phones.length-1].isDirty()"><a class="btn btn-primary btn-sm add-tab" href="#add-phone-number" @click.prevent="addPhone()"><i class="fas fa-plus visible-inline-xs hidden"></i> <i class="fas fa-mobile fa-fw"></i><span class="hidden-xs"> Add phone</span></a></li>
                            <li v-if="!incidents.length || incidents[incidents.length-1].isDirty()"><a class="btn btn-primary btn-sm add-tab" href="#add-incident" @click.prevent="addIncident()"><i class="fas fa-plus visible-inline-xs hidden"></i> <i class="fas fa-exclamation-triangle fa-fw"></i><span class="hidden-xs"> Add incident</span></a></li>
                            <li v-if="!abuses.length || abuses[abuses.length-1].abuser.isDirty()"><a class=" btn btn-primary btn-sm add-tab" href="#add-abuser" @click.prevent="addAbuse()"><i class="fas fa-plus visible-inline-xs hidden"></i> <i class="fas fa-frown fa-fw"></i><span class="hidden-xs"> Add abuser</span></a></li>
                            <li v-if="!notes.length || notes[notes.length-1].isDirty()"><a class="btn btn-primary btn-sm add-tab" href="#add-note" @click.prevent="addNote()"><i class="fas fa-plus visible-inline-xs hidden"></i> <i class="fas fa-sticky-note fa-fw"></i><span class="hidden-xs"> Add note</span></a></li>
                        </ul>
                    </div>

                    <div class="col-xs-9">
                        <div class="tab-content vertical-tabs-panes">

                            <div class="intake-section tab-pane active" id="personal">
                                <h2>Personal</h2>
                                <checkbox-slider label="This client is a dependent of another client" v-model="isDependent"></checkbox-slider>
                                <div :class="{ hidden: !isDependent }">
                                    <hr>
                                    <div class="form-group" :class="controlClasses('parent_id', 'client')">
                                        <label class="control-label">Who is their parent/guardian?</label>
                                        <select-client v-model="client.parent_id" exclude="dependents"></select-client>
                                    </div>
                                    <hr>
                                </div>
                                <client-form v-model="client" :$v="$v.client"></client-form>
                            </div>

                            <div v-for="(phone, i) in phones" :id="'phone-'+(i+1)" class="tab-pane intake-section">
                                <h2>Phone {{ i+1 }}</h2>
                                <phone-form v-model="phones[i]" :$v="$v.phones.$each[i]"></phone-form>
                            </div>

                            <!-- Household -->
                            <div class="intake-section tab-pane" id="household">
                                <h2>Household</h2>
                                <div class="form-group" :class="controlClasses('size', 'household')">
                                    <label class="control-label">Size</label>
                                    <input type="number" class="form-control" v-model.number="household.size">
                                    <small class="help-block">Including the client.</small>
                                </div>
                                <div class="form-group" :class="controlClasses('annual_income', 'household')">
                                    <label class="control-label" for="household.annual_income">Income</label>
                                    <div class="input-group">
                                        <span class="input-group-addon">$</span>
                                        <input type="text" class="form-control" id="household.annual_income" aria-label="Amount (to the nearest dollar)" v-model="household.annual_income">
                                        <span class="input-group-addon">.00</span>
                                    </div>
                                </div>
                            </div>
                            <!--/ Household -->

                            <!-- Dependents -->
                            <div v-for="(dependent, i) in dependents" class="intake-section tab-pane" :id="'dependent-'+(i+1)">
                                <h2>Dependent {{ i+1 }}</h2>
                                <dependent-form v-model="dependents[i]" :$v="$v.dependents.$each[i]"></dependent-form>
                            </div>

                            <div v-for="(incident, index) in incidents" class="intake-section tab-pane" :id="'incident-'+(index+1)">
                                <h2>Incident</h2>

                                <div class="form-group" :class="controlClasses('date', incident, $v.incidents.$each[index])">
                                    <label class="control-label" for="intake.date">Date Occurred</label>
                                    <input-date id="date" v-model="incident.date"></input-date>
                                </div>

                                <!-- Incident Types -->
                                <div class="form-group" :class="controlClasses('incident_type_id', incident, $v.incidents.$each[index])">
                                    <label class="control-label" for="incident_type_id">Type of Incident <required-asterisk></required-asterisk></label>
                                    <selectize
                                            :all="incidentTypes"
                                            v-model="incident.incident_type_id"
                                            id="incident_type_id"
                                            placeholder="Select the type of incident..."
                                            valueField="id"
                                            valueType="number"
                                    ></selectize>
                                </div>

                                <div class="form-group" :class="controlClasses('state', incident, $v.incidents.$each[index])">
                                    <label class="control-label" for="state">State </label>
                                    <select-state v-model="incident.state"></select-state>
                                </div>

                                <div class="form-group" :class="controlClasses('city', incident, $v.incidents.$each[index])">
                                    <label class="control-label" for="city">City <i class="fa fa-refresh fa-spin" v-if="stateLoading"></i></label>
                                    <select-city
                                            v-model="incident.city"
                                            :stateName.sync="incident.state"
                                    ></select-city>
                                </div>

                                <!-- Note -->
                                <div class="form-group" :class="controlClasses('note', incident)">
                                    <label class="control-label" for="note">Add a Note</label>
                                    <textarea class="form-control" id="note" name="model.note" v-model.trim="incident.note"></textarea>
                                </div>
                            </div>

                            <div v-for="(abuse, i) in abuses" class="intake-section tab-pane" :id="'abuse-'+(i+1)">
                                <h2>Abuser</h2>
                                <abuse-relationship-form v-model="abuses[i]" :$v="$v.abuses.$each[i]"></abuse-relationship-form>
                            </div>

                            <div v-for="(note, index) in notes" class="intake-section tab-pane" :id="'note-'+(index+1)">

                                <!-- Note -->
                                <div class="form-group" :class="feedbackClasses('note')">
                                    <label class="control-label" :for="'note'+index">Notes</label>
                                    <textarea class="form-control" :id="'note'+index" :name="'note'+index" v-model.trim="notes[index].content"></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <footer class="section">
                <p v-if="$v.$invalid">
                    <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                </p>

                <button type="submit" class="btn btn-success btn-lg" :disabled="$v.$invalid"><i class="fas fa-save"></i> Save</button>
                <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
            </footer>
        </form>
            <pre>{{ $data }}</pre>
        </div>
    </div>
</template>

<script>
    import { alpha, maxLength, minLength, minValue, numeric, required, requiredIf } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../common'
    import CheckboxSlider from '../components/controls/CheckboxSlider'
    import SelectAdvocate from '../components/controls/selects/Advocates.vue'
    import SelectCity from '../components/controls/selects/Cities.vue'
    import SelectClient from '../components/controls/selects/Clients'
    import SelectState from '../components/controls/selects/States.vue'
    import AbuseRelationshipForm from '../components/forms/AbuseRelationshipFormPartial'
    import ClientForm from '../components/forms/ClientFormPartial'
    import DependentForm from '../components/forms/DependentFormPartial'
    import HouseholdForm from '../components/forms/HouseholdFormPartial'
    import PhoneForm from '../components/forms/PhoneFormPartial'
    import RequiredAsterisk from '../components/RequiredAsterisk'
    import Localities from '../mixins/localities'
    import ValidationClasses from '../mixins/validationClasses'
    import Abuser from '../models/Abuser'
    import AbuseRelationship from '../models/AbuseRelationship'
    import Client from '../models/Client'
    import Dependent from '../models/Dependent'
    import Household from '../models/Household'
    import Incident from '../models/Incident'
    import Intake from '../models/Intake'
    import Model from '../models/Model'
    import Note from '../models/Note'
    import Phone from '../models/Phone'

    export default {

        name: 'intake-add',

        components: {
            CheckboxSlider,
            AbuseRelationshipForm,
            ClientForm,
            DependentForm,
            HouseholdForm,
            PhoneForm,
            RequiredAsterisk,
            SelectAdvocate,
            SelectCity,
            SelectClient,
            SelectState,
        },

        mixins: [ Localities, ValidationClasses ],

        // Data
        data() {
            return {
                intake: new Intake(),
                client: new Client(),
                household: new Household(),
                // clientRelationship: new Model({
                //     parent_id: null,
                // }),
                abuses: [ /* {
                    abuser: new Abuser(),
                    relationship: new AbuseRelationship()
                } */ ],
                dependents: [ /*new Dependent()*/ ],
                incidents: [ /*new Incident()*/ ],
                phones: [ /*new Phone()*/ ],
                notes: [ /*new Note()*/ ],
                addNewAbuser: false,
                editIntakeDate: false,
                editAdvocate: false,
                isDependent: false,
            }
        },

        computed: {
            ...mapGetters('abuserRelationshipTypes', {
                abuserRelationshipTypes: 'all',
            }),
            ...mapGetters('abuseTypes', {
                abuseTypes: 'all',
            }),
            ...mapGetters('incidentTypes', {
                incidentTypes: 'all',
            }),
            ...mapGetters('phoneTypes', {
                phoneTypes: 'all',
            }),
            ...mapGetters('referralSources', {
                referralSources: 'all',
            }),

            primaryPhone: {
                get() {
                    if (this.phones.length) {
                        const primary = this.phones.find(item => item.primary)
                        return this.phones.indexOf(primary)
                    }
                },
                set(newValue) {
                    if (this.phones.length && this.phones.length >= newValue-1) {
                        this.phones.map(item => item.primary = false)
                        this.phones[newValue].primary = true
                    }
                }
            },
        },

        validations: {
            intake: {
                advocate_id: {
                    numeric,
                    minValue: minValue(1),
                    required,
                },
                date: {
                    required
                },
                referred_by_id: {
                    numeric,
                }
            },
            client: {
                first_name: {
                    alpha,
                },
                middle_initial: {
                    alpha,
                },
                last_four: {
                    maxLength: maxLength(4),
                    minLength: minLength(4),
                    numeric,
                },
                address: {
                    county: {
                        required,
                    },
                    state: {
                        required,
                    },
                    zip: {
                        minLength: minLength(5),
                    },
                },
                parent_id: {
                    requiredIf: requiredIf(function() {
                        console.log('this', this)
                        return this.isDependent
                    }),
                },
            },
            household: {
                annual_income: {
                    numeric,
                },
                size: {
                    numeric,
                },
            },

            dependents: {
                $each: {
                    name: {
                        required,
                    },
                },
            },

            phones: {
                $each: {
                    number: {
                        minLength: minLength(10),
                        numeric,
                        required,
                    },
                    ext: {
                        numeric,
                    },
                    type: {
                        required,
                    },
                }
            },

            abuses: {
                $each: {
                    relationship: {
                        relationship: {
                            required,
                        },

                        abuse_types: {
                            required,
                        },

                        abuser_id: {
                            requiredIf: requiredIf(function(abuseRelationship) {
                                // console.log('add existing abuser', abuseRelationship.addExistingAbuser)
                                return abuseRelationship.addExistingAbuser
                            })
                        },
                    },
                }
            },

            incidents: {
                $each: {
                    incident_type_id: {
                        minValue: minValue(1),
                        numeric,
                        required,
                    },
                    date: {
                        required,
                    },
                    city: {
                        required,
                    },
                    state: {
                        required,
                    },
                }
            }
        },

        // Hooks
        created() {
            this.$nextTick(() => {
                this.setAuthUser()
            })
        },

        // beforeRouteLeave(to, from, next) {
        //     this.reset()
        //     next()
        // },

        // Watchers
        watch: {
            authUser() {
                this.setAuthUser()
            },
            isDependent() {
                if (!this.isDependent) {
                    this.$set(this.client, 'parent_id', null)
                }
            },
            '$route': 'setAuthUser',
        },

        methods: {
            ...mapActions('intakes', {
                createIntake: 'create',
            }),

            initIntake() {

            },
            
            addAbuse() {
                const next = this.abuses.length+1
                this.abuses.push({
                    relationship: new AbuseRelationship(),
                    abuser: new Abuser(),
                })
                this.$nextTick(() => {
                    $(`#intake-tabs a[href="#abuse-${next}"]`).tab('show')
                })
            },

            addDependent() {
                const next = this.dependents.length+1
                this.dependents.push(new Dependent())
                this.$nextTick(() => {
                    this.dependents[this.dependents.length-1].update({ advocate_id: this.authUser.id })
                    $(`#intake-tabs a[href="#dependent-${next}"]`).tab('show')
                })
            },

            addIncident() {
                const next = this.incidents.length+1
                this.incidents.push(new Incident())
                this.$nextTick(() => {
                    $(`#intake-tabs a[href="#incident-${next}"]`).tab('show')
                })
            },

            addNote() {
                const next = this.notes.length+1
                this.notes.push(new Note())
                this.$nextTick(() => {
                    $(`#intake-tabs a[href="#note-${next}"]`).tab('show')
                })
            },

            addPhone() {
                const primary = !this.phones.length
                const next = this.phones.length+1
                this.phones.push(new Phone())
                this.$nextTick(() => {
                    $(`#intake-tabs a[href="#phone-${next}"]`).tab('show')
                })
            },

            // autoSave: _.debounce(function () {
            //     const payload = {
            //         data: this.intake
            //     }
            //
            //     payload.data.data = {}
            //
            //     if (this.client.isDirty()) {
            //         payload.data.data.client = this.client
            //     }
            //
            //     if (this.household.isDirty()) {
            //         payload.data.data.household = this.household
            //     }
            //
            //     console.log('Autosaving...', this.intake)
            //     // Todo: check form is valid
            //     if (this.intake.id !== null) {
            //         // The intake has already been saved.
            //         console.log('updating')
            //     }
            //     else {
            //         console.log('creating')
            //         // The intake needs to be created.
            //         this.createIntake(payload)
            //             .then(created => {
            //                 // Todo: update the ID of the intake object.
            //                 console.log('created', created)
            //                 this.intake.fill(created)
            //             })
            //     }
            // }, 1000),

            process() {
                // If the form is valid

                // Todo: check form is valid
                if (!this.$v.$invalid) {
                    const payload = {
                        data: this.intake.getAttributes(),
                    }

                    payload.data.client = this.client.getChanges()

                    if (!this.client.parent_id) {
                        // Default fields, get everything
                        payload.data.household = this.household.getAttributes()
                    }

                    if (this.dependents.length) {
                        payload.data.dependents = this.dependents.map(dependent => {
                            return dependent.getChanges()
                        })
                    }

                    if (this.abuses.length) {
                        // Todo: Add validation so that at least one field gets filled in
                        payload.data.abuses = this.abuses.map(abuse => {
                            // console.log('abuse', abuse)
                            return {
                                abuser: abuse.abuser.getChanges(),
                                ...abuse.relationship.getChanges(),
                            }
                        })
                    }

                    // Default fields, get everything
                    if (this.incidents.length) {
                        payload.data.incidents = this.incidents.map(incident => {
                            return incident.getAttributes()
                        })
                    }

                    // Default fields, get everything
                    if (this.phones.length) {
                        payload.data.phones = this.phones.map(phone => {
                            return phone.getAttributes()
                        })
                    }

                    if (this.notes.length) {
                        payload.data.notes = this.notes.map(note => {
                            return note.getAttributes()
                        })
                    }

                    // console.log('payload', payload)

                    this.createIntake(payload)
                        .then(created => {
                            this.addMessage('Successfully added intake')
                            this.$nextTick(() => {
                                $(`#intake-tabs a[href="#personal"]`).tab('show')
                            })
                            this.$router.push('/intakes/' + created.intake.id)
                        })
                        .catch(error => {
                            if (defined(error.body) && defined(error.body.message)) {
                                this.addMessage({
                                    text: error.body.message,
                                    type: 'danger',
                                })
                            }
                        })
                }
                // Otherwise, scroll to the top and show an error message.
                else {
                    window.scrollTo(0, 0)
                    this.addMessage({
                        text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                        type: 'danger',
                        sticky: 1,
                    })
                }
            },

            removeNumber(index) {
                this.phones.splice(index)
            },

            sanitizePhoneNumbers() {
                this.phones.forEach(item => item.number = item.number.replace(/\D+/g, ''))
            },

            reset() {
                this.resetData()
                this.$v.$reset()
            },

            resetData() {
                this.intake = new Intake()
                this.client = new Client()
                this.household = new Household()
                this.dependents = []
                this.incidents = []
                this.abuses = []
                this.phones = []
                this.notes = []
            },

            setAuthUser() {
                this.intake.update({ 'advocate_id': this.authUser.id })
                this.client.update({ 'advocate_id': this.authUser.id })
            },
        },
    }
</script>
