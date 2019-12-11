<template>
    <v-app>
        <sidebar />
        <navbar />
        <router-view></router-view>
    </v-app>
</template>
<script>
import navbar from "../components/studentnav.vue"
import sidebar from "../components/studentsidebar.vue"
export default {
    components: {
        navbar,
        sidebar
    }
}
</script>