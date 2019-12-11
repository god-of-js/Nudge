<template>
  <v-content>
    <div class="blue-bg">
      <p class="p">Hi! {{currentUser.name}}</p>
      <p>Here is the schedule for the day. Try to follow them up (;</p>
    </div>
    <div></div>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>
<style scoped>
.blue-bg {
  padding-left: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #daf4f7;
}
.p {
  font-size: 35px;
}
</style>