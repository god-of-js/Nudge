<template>
  <v-content>
    <div class="dflex">
      <v-container class="form">
        <v-form class="vform" action="submit" @submit="reg">
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="schedule" label="Schedule or Class" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="location" label="Location" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="weekday" label="Days" class="ml-4 mr-4"></v-text-field>
            <v-text-field v-model="time" label="Time" class="ml-4 mr-4"></v-text-field>
          </v-row>
          <v-btn tile class="btns mb-12" color="#3b28c7" :loading="loading" type="submit">
            <span class="span">Set Schedule</span>
          </v-btn>
        </v-form>
      </v-container>
    </div>
  </v-content>
</template>
<script>
// import { db } from "@/plugins/firebase.js";
export default {
  data: () => {
    return {
      schedulei: null,
      locationi: null,
      timei: null,
      dayi: null,
      loading: false
    };
  },
  methods: {
    reg(e) {
      e.preventDefault();
      this.loading = !this.loading;

      // .catch(e => {
      //   this.loading = !this.loading;
      //   prompt(e);
      // });
    }
  }
};
</script>
<style scoped>
.form {
  margin-top: 4%;
}
.btns {
  margin-left: 27%;
  margin-top: 5%;
  width: 50%;
}

@media screen and (max-width: 320px) and (max-height: 568px) {
  .form {
    margin-top: -10% !important;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 10% !important;
  }
}
@media screen and (max-width: 350px) {
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 15% !important;
  }
}
@media screen and (max-width: 360px) {
  .form {
    margin-top: 0%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 10% !important;
  }
}
@media screen and (max-width: 376px) {
  .form {
    margin-top: 0%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 10% !important;
  }
}
@media screen and (max-width: 411px) {
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }

  .form {
    margin-top: 10%;
  }
}
@media screen and (max-width: 411px) and (max-height: 823px) {
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }

  .form {
    margin-top: 10%;
  }
}
@media screen and (max-width: 600px) {
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }
  .form {
    margin-top: 10%;
  }
}
@media screen and (max-width: 768px) {
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }
  .form {
    margin-top: 10%;
  }
}
</style>