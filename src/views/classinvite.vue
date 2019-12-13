<template>
  <v-content class="content">
    <div class="mx-auto pl-2 pr-2 width">
      <v-simple-table class="list" v-if="this.listOfUniversities !=  false">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Universities</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="university in universities" :key="university.name">
            <tr>
              <td @click="faculties(university.name)">{{ university.name }}</td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-simple-table class="list" v-if="this.listOfFaculties != false">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Faculties</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="faculty in faculty" :key="faculty.faculty">
            <tr>
              <td @click="departments(faculty.faculty)">{{ faculty.faculty}}</td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-simple-table class="list" v-if="this.listOfDepartments != false">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Departments</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="department in department" :key="department.department">
            <tr>
              <td @click="years(department.department)">{{ department.department}}</td>
              <td>
                <v-icon>mdi-school-outline</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-simple-table class="list" v-if="this.listOfYears != false">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="year in year" :key="year.year">
            <tr @click="joinClass(year.classId)">
              <td>{{ year.year}}</td>
              <td>Click to join class</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-content>
</template>
<script>
import { db } from "@/plugins/firebase.js";
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      listOfUniversities: true,
      listOfFaculties: false,
      listOfDepartments: false,
      listOfYears: false
    };
  },
  computed: {
    ...mapState(["universities", "faculty", "department", "year"])
  },
  beforeCreate() {
    this.$store.dispatch("getUniversities");
  },
  methods: {
    //get faculties from database
    faculties(name) {
      this.listOfUniversities = false;
      this.listOfFaculties = true;
      db.collection("faculties")
        .where("university", "==", name)
        .get()
        .then(query => {
          query.forEach(fac => {
            const facultyData = fac.data();
            this.$store.dispatch("setFaculty", facultyData);
          });
        });
    },
    departments(name) {
      this.listOfFaculties = false;
      this.listOfDepartments = true;
      db.collection("department")
        .where("faculty", "==", name)
        .get()
        .then(query => {
          query.forEach(dept => {
            const departmentData = dept.data();
            this.$store.dispatch("setDepartment", departmentData);
          });
        });
    },
    years(dept) {
      this.listOfDepartments = false;
      this.listOfYears = true;
      db.collection("class")
        .where("department", "==", dept)
        .get()
        .then(classic => {
          classic.forEach(year => {
            const yearData = year.data();
            this.$store.dispatch("setYears", yearData);
          });
        });
    },
    joinClass(id) {
      const year = this.$store.state.year[0];
      const vueApp = this;
      db.collection("users")
        .where("userId", "==", this.$store.state.currentUser.userId)
        .get()
        .then(user => {
          user.forEach(student => {
            const studentData = student.data();
            const department = year.department;
            const university = year.university;
            const faculty = year.faculty;
            const years = year.year;
            studentData.yearId = id;
            studentData.department = department;
            studentData.university = university;
            studentData.faculty = faculty;
            studentData.year = years;
            console.log(studentData)
            this.$store.dispatch("enterClass", { studentData, vueApp });
          });
        });
    }
  }
};
</script>
<style scoped>
.width {
  width: 50% !important;
}
.content {
  background-color: white;
}
.list {
  display: flex;
  flex-direction: column-reverse;
}
</style>