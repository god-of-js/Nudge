<template>
  <v-content class="content">
    <div class="form">
      <v-form action="submit" @submit="createClass" ref="form">
        <v-autocomplete :items="universities" label="University" v-model="university" required></v-autocomplete>
        <v-text-field
          label="Faculty(Make sure your Faculty is as accurate as possible)"
          v-model="faculty"
        />
        <v-text-field
          label="Department(Make sure your department is as accurate as possible)"
          v-model="department"
        />
        <v-autocomplete :items="years" label="Year of study" v-model="year" required></v-autocomplete>
        <v-btn type="submit" color="#3b28c7" :loading="loading">Create Class</v-btn>
      </v-form>
    </div>
  </v-content>
</template>
<script>
import { db } from "@/plugins/firebase.js";
export default {
  data: () => {
    return {
      universities: [
        "Abia State University",
        " Abubakar Tafawa Balewa University",
        " Achievers University, Owo",
        " Adamawa State University",
        " Adekunle Ajasin University",
        " Adeleke University",
        " Afe Babalola University",
        " Ahmadu Bello University",
        " Ajayi Crowther University",
        " Akwa Ibom State University",
        " Al-Hikmah University",
        " Al-Qalam University, Katsina",
        " Ambrose Alli University",
        " American University of Nigeria",
        " Babcock University",
        " Bauchi State University",
        " Bayero University Kano",
        " Baze University",
        " Bells University of Technology",
        " Benson Idahosa University",
        " Benue State University",
        " Bingham University",
        " Borno State University",
        " Bowen University",
        " Caleb University",
        " Caritas University",
        " Chrisland University",
        " Chukwuemeka Odumegwu Ojukwu University",
        " Clifford University",
        " Coal City University",
        " Covenant University",
        " Crawford University",
        " Crescent University, Abeokuta",
        " Cross River University of Technology",
        " Crown Hill University",
        " Delta State University, Abraka",
        " Dominican University, Ibadan",
        " Eastern Palm University",
        " Ebonyi State University",
        " Edo University",
        " Edwin Clark University",
        " Ekiti State University, Ado Ekiti",
        " Eko University of Medical and Health Sciences",
        " Elizade University",
        " Enugu State University of Science and Technology",
        " Evangel University Akaeze",
        " Federal University of Agriculture, Abeokuta",
        " Federal University of Petroleum Resources",
        " Federal University of Technology, Akure",
        " Federal University of Technology, Minna",
        " Federal University of Technology, Owerri",
        "  Federal University, Birnin Kebbi",
        " Federal University, Dutse",
        " Federal University, Dutsin-Ma",
        " Federal University, Gashua",
        " Federal University, Gusau",
        " Federal University, Kashere",
        " Federal University, Lafia",
        " Federal University, Lokoja",
        " Federal University, Ndufu-Alike ",
        " Federal University, Otuoke",
        " Federal University, Oye-Ekiti",
        " Federal University, Wukari",
        " Fountain University",
        "  Gombe State University",
        " Gombe State University of Science and Technology",
        " brahim Badamasi Babangida University",
        " Igbinedion University Okada",
        "  Imo State University",
        "  Kaduna State University",
        " Kano University of Science and Technology",
        " Kebbi State University of Science and Technology",
        "  Kings University",
        " Kogi State University",
        " Kwara State University",
        " Ladoke Akintola University of Technology",
        "  Lagos State University",
        "  Landmark University",
        "  Lead City University",
        " Madonna University, Okija",
        " Nasarawa State University",
        "  Niger Delta University",
        " Nile University of Nigeria",
        " Nnamdi Azikiwe University",
        " Northwest University Kano",
        " Obafemi Awolowo University",
        " Ondo State University of Science and Technology",
        " Osun State University",
        " Pan African University",
        " Plateau State University",
        "  Redeemer's University",
        " Rivers State University of Science and Technology",
        " Sokoto State University",
        "  Taraba State University",
        " Umaru Musa Yar'Adua University",
        " University of Abuja",
        "  University of Africa",
        " University of Agriculture, Makurdi",
        " University of Benin",
        " University of Calabar",
        " University of Ibadan",
        " University of Ilorin",
        " University of Jos",
        " University of Lagos",
        " University of Maiduguri",
        " University of Medical Sciences",
        " University of Nigeria",
        " University of Port Harcourt",
        " University of Uyo",
        " Usmanu Danfodio University",
        " Veritas University",
        " Western Delta University",
        " Yobe State University"
      ],
      years: [
        "100 Level",
        "200 Level",
        "300 Level",
        "400 Level",
        "500 Level",
        "600 Level",
        "700 Level"
      ],
      university: null,
      faculty: null,
      department: null,
      year: null,
      loading: false
    };
  },
  methods: {
    createClass(e) {
      e.preventDefault();
      this.loading = !this.loading;
      const university = {
        name: this.university
      };
      const classInfo = {
        university: this.university,
        department: this.department,
        year: this.year,
        faculty: this.faculty,
        classId: this.$store.state.currentUser.userId,
        departmentId: `${this.department} ${this.faculty} ${this.university}`,
        facultyId: `${this.faculty} ${this.university}`
      };
      const facultyInfo = {
        university: this.university,
        faculty: this.faculty,
        facultyId: `${this.faculty} ${this.university}`
      };
      const departmentinfo = {
        university: this.university,
        department: this.department,
        faculty: this.faculty,
        departmentId: `${this.department} ${this.faculty} ${this.university}`,
        facultyId: `${this.faculty} ${this.university}`
      };
      if (
        classInfo.university == null ||
        classInfo.department == null ||
        classInfo.faculty == null ||
        classInfo.year == null
      ) {
        alert("Try filling up all fields");
        this.loading = !this.loading;
      } else {
        db.collection("universities")
          .doc(`${this.university}`)
          .set(university);
        db.collection("faculties")
          .doc(`${this.faculty} ${this.university}`)
          .set(facultyInfo);
        db.collection("department")
          .doc(`${this.department} ${this.faculty} ${this.university}`)
          .set(departmentinfo);
        db.collection("class")
          .doc(this.$store.state.currentUser.userId)
          .set(classInfo);
              var data = this.$store.state.currentUser;
              data.yearId = this.$store.state.currentUser.userId;
              data.isAdmin = true;
              data.university = classInfo.university;
              data.department = classInfo.department;
              data.faculty = classInfo.faculty;
              data.year = classInfo.year;
              window.localStorage.setItem('currentUser', JSON.stringify(data))
              this.$store.dispatch("makeAdmin", data);
        db.collection("users")
          .doc(this.$store.state.currentUser.userId)
          .set(data)
          .then(() => {
            this.loading = !this.loading;
            this.$refs.form.reset();
            this.$router.push("/dashboard");
          })
          .catch(e => {
            prompt(e);
            this.loading = !this.loading;
          });
      }
    }
  }
};
</script>
<style  scoped>
.form {
  margin: auto;
  margin-top: 5%;
  width: 50%;
}
.content {
  background-color: white;
}
</style>