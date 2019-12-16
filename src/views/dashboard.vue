<template>
  <v-content>
    <div class="blue-bg">
      <p class="p">Hi! {{currentUser.name}}</p>
      <p>Here is the schedule for the day. Try to follow them up (;</p>
    </div>
    <v-card shaped class="pt-6 pb-6 card">
      <v-row class="justify-space-between pr-12 pt-6">
      <h5 class="h5">TODAYS SCHEDULE</h5>
      <span>See all</span>
      </v-row>
      <v-card class="schedules">{{ schedules.schedule }}</v-card>
    </v-card>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["currentUser", "schedules"])
  }
};
</script>
<style scoped>
.blue-bg {
  padding-left: 10%;
  padding-top: 5%;
  padding-bottom: 10%;
  margin-bottom: -5%;
  height: 40%;
  background-color: #daf4f7;
}
.p {
  font-size: 35px;
}
.card{
  border-top-left-radius: 40px;
  height: 70%;
  border-top-right-radius: 40px;
}
.h5{
  margin-left: 4%;
}
.schedules{

}
</style>