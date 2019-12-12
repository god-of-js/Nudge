<template>
  <v-content>
    <v-container>
      <v-form @submit="uploadSchedule" action="submit" v-model="valid">
        <v-row>
          <v-text-field v-model="sch1" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc1" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day1" required></v-autocomplete>
          <v-text-field v-model="time1" label="Time format(00(hrs):00(sec))" class="mr-4 ml-4" type="time"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields == 1">
          <v-text-field v-model="sch2" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc2" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day2" required></v-autocomplete>
          <v-input v-model="time2" label="Time format(00(hrs):00(sec))"  type="time" class="mr-4 ml-4"></v-input>
        </v-row>
        <v-row v-if="this.$store.state.fields > 2">
          <v-text-field v-model="sch3" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc3" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day3" required></v-autocomplete>
          <v-text-field v-model="time3" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 3">
          <v-text-field v-model="sch4" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc4" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day4" required></v-autocomplete>
          <v-text-field v-model="time4" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 4">
          <v-text-field v-model="sch5" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc5" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day5" required></v-autocomplete>
          <v-text-field v-model="time5" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 5">
          <v-text-field v-model="sch6" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc6" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day6" required></v-autocomplete>
          <v-text-field v-model="time6" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 6">
          <v-text-field v-model="sch7" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc7" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day7" required></v-autocomplete>
          <v-text-field v-model="time7" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 7">
          <v-text-field v-model="sch8" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc8" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day8" required></v-autocomplete>
          <v-text-field v-model="time8" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 8">
          <v-text-field v-model="sch9" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc9" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day9" required></v-autocomplete>
          <v-text-field v-model="time9" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 9">
          <v-text-field v-model="sch10" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc10" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day10" required></v-autocomplete>
          <v-text-field v-model="time10" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 10">
          <v-text-field v-model="sch11" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc11" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day11" required></v-autocomplete>
          <v-text-field v-model="time11" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 11">
          <v-text-field v-model="sch12" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc12" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day12" required></v-autocomplete>
          <v-text-field v-model="time12" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 12">
          <v-text-field v-model="sch13" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc13" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day13" required></v-autocomplete>
          <v-text-field v-model="time13" label="Time format(00(hrs):00(sec))" type="time" class="mr-4 ml-4"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 13">
          <v-text-field v-model="sch14" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc14" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day14" required></v-autocomplete>
          <v-text-field v-model="time14" label="Time format(00(hrs):00(sec))" class="ml-4 mr-4" type="time"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 14">
          <v-text-field v-model="sch15" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc15" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day15" required></v-autocomplete>
          <v-text-field v-model="time15" label="Time format(00(hrs):00(sec))" class="ml-4 mr-4" type="time"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.fields > 15">
          <v-text-field v-model="sch16" label="Schedule" class="ml-4 mr-4"></v-text-field>
          <v-text-field v-model="loc16" label="Location" class="ml-4 mr-4"></v-text-field>
          <v-autocomplete :items="weekday" label="Day" v-model="day16" required></v-autocomplete>
          <v-text-field v-model="time16" label="Time format(00(hrs):00(sec))" class="ml-4 mr-4" type="time"></v-text-field>
        </v-row>
        <v-row class="justify-space-around">
          <v-btn color="#3b28c7" type="submit" :loading="loading">
            <span class="whittxt">Submit fields</span>
          </v-btn>
          <v-btn color="primary" @click="addFields()">Add fields</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </v-content>
</template>
<script>
import { db } from "@/plugins/firebase.js";
export default {
  data() {
    return {
        dateRules: ["^(0?[1-9]|1[012]):[0-5][0-9]$"],
      loading: false,
      valid: false,
      sch1: "",
      loc1: "",
      day1: 0,
      time1: "",
      sch2: "",
      loc2: "",
      day2: "",
      time2: 0,
      sch3: "",
      loc3: "",
      day3: "",
      time3: 0,
      sch4: "",
      loc4: "",
      day4: "",
      time4: 0,
      sch5: "",
      loc5: "",
      day5: "",
      time5: 0,
      sch6: "",
      loc6: "",
      day6: "",
      time6: 0,
      sch7: "",
      loc7: "",
      day7: "",
      time7: 0,
      sch8: "",
      loc8: "",
      day8: "",
      time8: 0,
      sch9: "",
      loc9: "",
      day9: "",
      time9: 0,
      sch10: "",
      loc10: "",
      day10: "",
      time10: 0,
      sch11: "",
      loc11: "",
      day11: "",
      time11: 0,
      sch12: "",
      loc12: "",
      day12: "",
      time12: 0,
      sch13: "",
      loc13: "",
      day13: "",
      time13: 0,
      sch14: "",
      loc14: "",
      day14: "",
      time14: 0,
      sch15: "",
      loc15: "",
      day15: "",
      time15: 0,
      sch16: "",
      loc16: "",
      day16: "",
      time16: 0,
      weekday: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    };
  },
  methods: {
    uploadSchedule(e) {
      e.preventDefault();
      this.loading = !this.loading;
      let schedule = {};
      const fields = this.$store.state.fields;
      for (let i = 1; i <= fields; i++) {
        schedule["sche" + i] = this["sche" + i];
        schedule["loc" + i] = this["loc" + i];
        schedule["day" + i] = this["day" + i];
        schedule["time" + i] = this["time" + i];
      }
      let obj = { fields, schedule };
      db.collection("schedule")
        .doc(this.$store.state.currentUser.class.classId)
        .set(obj)
        .catch(e => {
          this.loading = !this.loading;
          prompt(e);
        });
    },
    addFields() {
      this.$store.dispatch("addFields");
    }
  }
};
</script>
<style scoped>
.whittxt {
  color: white;
}
</style>