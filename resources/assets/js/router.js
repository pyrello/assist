import { VueRouter } from './vue'
import store from './store'
import * as AdminLte from 'admin-lte'

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.noScroll)) {

        } else {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   path     the filename (basename) of the view to load.
 */
const BASE_PAGE_PATH = './pages/'
const loadPage = path => {
    return resolve => import(BASE_PAGE_PATH + path + '.vue')
}

// Todo: figure out why the above doesn't work.

const routes = [
    {
        name: 'home',
        path: '/',
        component: loadPage('Home'),
        redirect: '/clients',
    },

    {
        name: 'test',
        path: '/test',
        component: loadPage('Test'),
    },

    // Intake
    {
        name: 'intake',
        path: '/intake',
        component: loadPage('Intake'),
    },

    {
        name: 'intakeIndex',
        path: '/intakes',
        component: loadPage('intakes/Index'),
        meta: {
            breadcrumb: {
                label: 'Intakes',
            },
        },
    },

    {
        name: 'intakeShow',
        path: '/intakes/:intake_id',
        component: loadPage('intakes/Show'),
        meta: {
            breadcrumb: {
                label: '{{ id }} ({{ date }})',
                parent: 'intakeIndex',
                vuex: {
                    getter: 'intakes/byId',
                    param: 'intake_id',
                }
            },
        },
    },

    // abusers
    {
        name: 'abuserIndex',
        path: '/abusers',
        component: loadPage('abusers/Index'),
        meta: {
            breadcrumb: {
                label: 'Abusers'
            },
        },
    },
    // abuserShow
    {
        name: 'abuserShow',
        path: '/abusers/:abuser_id',
        component: loadPage('abusers/Show'),
        redirect: '/abusers/:abuser_id/profile',
        meta: {
            breadcrumb: {
                label: '{{ first_name }} {{ last_name }}',
                parent: 'abuserIndex',
                vuex: {
                    getter: 'abusers/byId',
                    param: 'abuser_id',
                },
            },
        },
        children: [
            // clientAbusers
            {
                name: 'abuserClient',
                path: 'clients',
                component: loadPage('abusers/abuse/Index'),
                meta: {
                    breadcrumb: {
                        label: 'Abusers',
                        parent: 'clientShow',
                    },
                },
            },
            // clientProfile
            {
                name: 'abuserProfile',
                path: 'profile',
                component: loadPage('abusers/Profile'),
                meta: {
                    breadcrumb: {
                        label: '{{ client.first_name }} {{ client.last_name }}',
                        // parent: 'clients',
                    },
                },
            },
        ],
    },
    // abuserEdit
    {
        name: 'abuserEdit',
        path: '/abusers/:abuser_id/edit',
        component: loadPage('abusers/Edit'),
        meta: {
            breadcrumb: {
                label: 'Editing {{ first_name }} {{ last_name }}',
                parent: 'abuserShow',
                vuex: {
                    getter: 'abusers/byId',
                    param: 'abuser_id',
                },
            },
        },
    },

    // Advocates
    {
        name: 'advocates',
        path: '/advocates',
        component: loadPage('advocates/Index'),
        meta: {
            breadcrumb: {
                label: 'Advocates',
            },
            requiresAdmin: true,
        },
    },
    {
        name: 'advocateAdd',
        path: '/advocates/add',
        component: loadPage('advocates/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Advocate',
                parent: 'advocates',
            },
            requiresAdmin: true,
        },
    },
    {
        name: 'advocateShow',
        path: '/advocates/:advocate_id',
        component: loadPage('advocates/Show'),
        meta: {
            breadcrumb: {
                label: '{{ first_name }} {{ last_name }}',
                parent: 'advocates',
                vuex: {
                    getter: 'advocates/byId',
                    param: 'advocate_id',
                }
            },
            requiresAdmin: true,
        },
    },
    {
        name: 'advocateEdit',
        path: '/advocates/:advocate_id/edit',
        component: loadPage('advocates/Edit'),
        meta: {
            breadcrumb: {
                label: 'Editing {{ first_name }} {{ last_name }}',
                parent: 'advocates',
                vuex: {
                    getter: 'advocates/byId',
                    param: 'advocate_id',
                }
            },
            requiresAdmin: true,
        },
    },

    // clientIndex
    {
        name: 'clientIndex',
        path: '/clients',
        component: loadPage('Search'),
        meta: {
            breadcrumb: {
                label: 'Clients'
            },
        },
    },

    {
        name: 'clientShow',
        path: '/clients/:client_id',
        component: loadPage('clients/Show'),
        redirect: '/clients/:client_id/profile',
        meta: {
            breadcrumb: {
                label: '{{ first_name }} {{ last_name }}',
                parent: 'clientIndex',
                vuex: {
                    getter: 'clients/ById',
                    param: 'intake_id',
                }
            }
        },
        children: [
            // clientAbusers
            {
                name: 'clientAbuser',
                path: 'abuse',
                component: loadPage('clients/abuse/Index'),
                meta: {
                    breadcrumb: {
                        label: 'Abusers',
                        parent: 'clientShow',
                    },
                },
            },
            // clientProfile
            {
                name: 'clientProfile',
                path: 'profile',
                component: loadPage('clients/Profile'),
                meta: {
                    breadcrumb: {
                        label: '{{ client.first_name }} {{ client.last_name }}',
                        // parent: 'clients',
                    },
                },
            },
            // activities
            {
                name: 'activities',
                path: 'activities',
                component: loadPage('clients/activities/Index'),
                meta: {
                    breadcrumb: {
                        label: 'Activities',
                        parent: 'ClientShow',
                    },
                },
            },
            {
                path: 'stays', component: loadPage('clients/incidents/shelter/Index'),
                children: [
                    { path: 'in', component: loadPage('clients/incidents/shelter/In') },
                    { path: ':stay_id/out', component: loadPage('clients/incidents/shelter/Out') },
                ],
            },

            // clientOutcomes
            {
                name: 'clientOutcomes',
                path: 'outcomes',
                component: loadPage('clients/outcomes/Index'),
                meta: {
                    breadcrumb: {
                        label: 'Outcomes',
                        parent: 'clientShow',
                    },
                },
            },

            // dependents
            {
                name: 'dependents',
                path: 'dependents',
                component: loadPage('clients/dependents/Index'),
                meta: {
                    breadcrumb: {
                        label: 'Dependents',
                        parent: 'ClientShow',
                    },
                },
            },
            // incidents
            {
                name: 'incidents',
                path: 'incidents',
                component: loadPage('clients/incidents/Index'),
                meta: {
                    breadcrumb: {
                        label: 'Incidents',
                        // parent: 'clientsShow',
                    },
                },
            },

            // clientNotes
            {
                name: 'clientNotes',
                path: 'notes',
                component: loadPage('clients/notes/Index'),
            },
        ],
    },

    // clientEdit
    {
        name: 'clientEdit',
        path: '/clients/:client_id/edit',
        component: loadPage('clients/Edit'),
        meta: {
            breadcrumb: {
                label: 'Editing {{ first_name }} {{ last_name }}',
                parent: 'clientShow',
                vuex: {
                    getter: 'clients/byId',
                    param: 'client_id',
                },
            },
        },
    },

    // abuserAdd
    {
        name: 'abuserAdd',
        path: '/clients/:client_id/abuse/add',
        component: loadPage('clients/abuse/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Abuser',
                parent: 'clientAbusers',
            },
        },
    },

    // activityAdd
    {
        name: 'activityAdd',
        path: '/clients/:client_id/activities/add',
        component: loadPage('clients/activities/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Activity',
                parent: 'activities',
            },
        },
    },

    // activityShow
    {
        name: 'activityShow',
        path: '/clients/:client_id/activities/:activity_id',
        component: loadPage('clients/activities/Show'),
        meta: {
            breadcrumb: {
                label: '{{ service.name }}',
                parent: 'activities',
                vuex: {
                    getter: 'clients/activities/byId',
                    param: 'activity_id',
                }
            }
        },
    },

    // activityEdit
    {
        name: 'activityEdit',
        path: '/clients/:client_id/activities/:activity_id/edit',
        component: loadPage('clients/activities/Edit'),
        meta: {
            breadcrumb: {
                label: 'Edit {{ service.name }}',
                parent: 'activityShow',
                vuex: {
                    getter: 'clients/activities/byId',
                    param: 'activity_id',
                },
            },
        },
    },

    // clientOutcomeAdd
    {
        name: 'clientOutcomeAdd',
        path: '/clients/:client_id/outcomes/add',
        component: loadPage('clients/outcomes/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Outcome',
                parent: 'clientOutcomes',
            },
        },
    },

    // clientOutcomeAdd
    {
        name: 'clientOutcomeEdit',
        path: '/clients/:client_id/outcomes/:outcome_id/edit',
        component: loadPage('clients/outcomes/Edit'),
        meta: {
            breadcrumb: {
                label: 'Edit Outcome',
                parent: 'clientOutcomes',
            },
        },
    },

    // dependentAdd
    {
        name: 'dependentAdd',
        path: '/clients/:client_id/dependents/add',
        component: loadPage('clients/dependents/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Dependent',
                parent: 'dependentIndex',
            },
        },
    },

    // dependentIndex
    {
        name: 'dependentIndex',
        path: '/dependents',
        component: loadPage('dependents/Index')
    },

    // dependentShow
    {
        name: 'dependentShow',
        path: '/dependents/:dependent_id',
        component: loadPage('dependents/Show'),
    },

    // dependentEdit
    {
        name: 'dependentEdit',
        path: '/dependents/:dependent_id/edit',
        component: loadPage('dependents/Edit'),
    },

    // incidentAdd
    {
        name: 'incidentAdd',
        path: '/clients/:client_id/incidents/add',
        component: loadPage('clients/incidents/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Incident',
                parent: 'incidents',
            },
        },
    },

    {
        name: 'incidentIndex',
        path: '/incidents',
        component: loadPage('incidents/Index'),
    },

    // incidentShow
    {
        name: 'incidentShow',
        path: '/incidents/:incident_id',
        component: loadPage('incidents/Show'),
        // children: [
        //     { path: 'stays', component: loadPage('clients/incidents/shelter/Index'),
        //         children: [
        //             { path: 'in', component: loadPage('clients/incidents/shelter/In') },
        //             { path: ':stay_id/out', component: loadPage('clients/incidents/shelter/Out') },
        //         ],
        //     },
        // ],
        meta: {
            breadcrumb: {
                label: '{{ type.name }}',
                parent: 'incidents',
                vuex: {
                    getter: 'clients/incidents/byId',
                    param: 'incident_id'
                },
            },
        },
    },

    // incidentShow
    {
        name: 'clientIncidentShow',
        path: '/clients/:client_id/incidents/:incident_id',
        component: loadPage('clients/incidents/Show'),
        // children: [
        //     { path: 'stays', component: loadPage('clients/incidents/shelter/Index'),
        //         children: [
        //             { path: 'in', component: loadPage('clients/incidents/shelter/In') },
        //             { path: ':stay_id/out', component: loadPage('clients/incidents/shelter/Out') },
        //         ],
        //     },
        // ],
        meta: {
            breadcrumb: {
                label: '{{ type.name }}',
                parent: 'incidents',
                vuex: {
                    getter: 'clients/incidents/byId',
                    param: 'incident_id'
                },
            },
        },
    },

    {
        name: 'incidentEdit',
        path: '/incidents/:incident_id/edit',
        component: loadPage('incidents/Edit'),
        meta: {

        },
    },



    // clientPhonesAdd
    {
        name: 'clientPhonesAdd',
        path: '/clients/:client_id/phones/add',
        component: loadPage('clients/phones/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Phone Number',
                parent: 'clientShow',
            },
        },
    },

    // clientPhonesEdit
    {
        name: 'clientPhonesEdit',
        path: '/clients/:client_id/phones/:phone_id/edit',
        component: loadPage('clients/phones/Edit'),
        meta: {
            breadcrumb: {
                label: 'Edit Phone Number',
                parent: 'clientShow',
            },
        },
    },

    // noteAdd
    {
        name: 'noteAdd',
        path: '/clients/:client_id/notes/add',
        component: loadPage('clients/notes/Add')
    },

    // noteShow
    {
        name: 'noteShow',
        path: '/clients/:client_id/notes/:note_id',
        component: loadPage('clients/notes/Show')
    },

    // noteEdit
    {
        name: 'noteEdit',
        path: '/clients/:client_id/notes/:note_id/edit',
        component: loadPage('clients/notes/Edit'),
    },

    // outcomes
    {
        name: 'outcomeIndex',
        path: '/outcomes',
        component: loadPage('outcomes/Index'),
        meta: {
            breadcrumb: {
                label: 'Outcomes',
            },
            requiresAdmin: true
        },
    },
    {
        name: 'outcomeAdd',
        path: '/outcomes/add',
        component: loadPage('outcomes/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Outcome',
                parent: 'outcomeIndex',
            },
            requiresAdmin: true
        },
    },
    {
        name: 'outcomeShow',
        path: '/clients/:client_id/outcomes/:outcome_id',
        component: loadPage('clients/outcomes/Show'),
    },
    {
        name: 'outcomeEdit',
        path: '/outcomes/:id/edit',
        component: loadPage('outcomes/Edit'),
        meta: {
            breadcrumb: {
                label: 'Editing Outcome',
                parent: 'outcomeIndex',
                vuex: {
                    getter: 'outcomes/byId',
                    param: 'outcome_id',
                },
            },
            requiresAdmin: true },
    },

    // Reports
    {
        path: '/reporting',
        children: [
            {
                name: 'reports',
                path: 'reports',
                component: loadPage('reporting/Index'),
                meta: {
                    breadcrumb: {
                        label: 'Reports',
                    },
                },
            },
            {
                name: 'profiles',
                path: 'profiles',
                component: loadPage('reporting/Profiles')
            },
        ],
        name: 'reporting',
        component: loadPage('reporting/Container'),
        redirect: '/reporting/reports',
    },
    // reportAdd
    {
        name: 'reportAdd',
        path: '/reporting/reports/add',
        component: loadPage('reporting/Add'),
        meta: {
            breadcrumb: {
                label: 'Add Report',
                parent: 'reports',
            },
        },
    },
    // reportShow
    {
        name: 'reportShow',
        path: '/reporting/reports/:id',
        component: loadPage('reporting/Show'),
        meta: {
            breadcrumb: {
                label: '{ profile.label }',
                parent: 'reports',
            },
        },
    },

    {
        name: 'reportProfileShow',
        path: '/reporting/profiles/:id',
        component: loadPage('reporting/Show')
    },

    // Not found
    {
        name: '404',
        path: '*',
        component: loadPage('404'),
    },
]

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    scrollBehavior,
    routes,
})

router.beforeEach((to, from, next) => {
    // Todo: figure out how to not hard-code this
    if ($(window).width() <= 767) {
        const $body = $('body')
        if ($body.hasClass('sidebar-open')) {
            $body.removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
        }
    }

    // Clean up sticky messages
    store.dispatch('messages/cleanSticky')

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        let user = JSON.parse(localStorage.getItem('user'))

        if (!user.is_admin) {
            console.warn('User is not allowed to view this page.', to)
            store.dispatch('messages/add', {
                type: 'danger',
                text: 'You are not allowed to view that page.',
                sticky: 1,
            })
            next(from.fullPath)
        }
    }
    next()
})

export default router