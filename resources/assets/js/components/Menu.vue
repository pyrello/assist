<template>
    <div>
        <ul class="sidebar-menu">
            <router-link tag="li" to="/intake">
                <a class="bg-green" href="/intake"><i class="fas fa-inbox-in fa-fw"></i><span> Start Intake <i class="fas fa-chevron-right"></i></span></a>
            </router-link>
            <router-link tag="li" to="/clients">
                <a href="/search"><i class="fas fa-users fa-fw"></i><span> Clients</span></a>
            </router-link>
            <router-link tag="li" to="/abusers">
                <a href="/abusers"><i class="fas fa-frown fa-fw"></i><span> Abusers</span></a>
            </router-link>
            <router-link tag="li" to="/reporting">
                <a href="/reports"><i class="fas fa-chart-bar fa-fw"></i><span> Reports</span></a>
            </router-link>
        </ul>
        <!-- Todo: only show these links if the user has permission -->
        <template v-if="authUser && authUser.is_admin">
            <h3>Admin</h3>
            <ul class="sidebar-menu">
                <router-link tag="li" to="/advocates">
                    <a href="/advocates"><i class="fas fa-hands-helping fa-fw"></i><span> Advocates</span></a>
                </router-link>
                <!--<router-link tag="li" to="/funding">-->
                <!--<a href="/funding"><i class="fa fa-edit"></i><span>Funding Sources</span></a>-->
                <!--</router-link>-->
                <router-link tag="li" to="/outcomes">
                    <a href="/outcomes"><i class="fas fa-smile-plus"></i><span> Outcomes</span></a>
                </router-link>
                <!--<router-link tag="li" to="/services">-->
                <!--<a href="/services"><i class="fa fa-edit"></i><span>Services</span></a>-->
                <!--</router-link>-->
                <!--<router-link tag="li" to="/incident-types">-->
                <!--<a href="/incident-types"><i class="fa fa-edit"></i><span>Incident Types</span></a>-->
                <!--</router-link>-->
            </ul>
        </template>
    </div>
</template>