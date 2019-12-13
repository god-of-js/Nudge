import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "../plugins/firebase.js";

Vue.use(Vuex);
auth.onAuthStateChanged(user => {

  //if user exists commit setscurrentUser else  null
  user
    ? (async () => {
      store.dispatch("getUserProfile", user.uid);
    })()
    : null;
});
const store = new Vuex.Store({
  state: {
    currentUser: null,
    fields: 0,
    universities: [],
    faculty: [],
    department: [],
    year: [],
    classDetails: []
  },
  mutations: {
    setCurrentUser: (state, val) => {
      state.currentUser = val
    },
    addFields: (state) => {
      state.fields++
    },
    makeAdmin: (state, data) => {
      state.currentUser = data
    },
    searchUniversity: (state, data) => {
      state.universities = data
    },
    setFaculty: (state, faculties) => {
      state.faculty = faculties
    },
    setDepartment: (state, departments) => {
      state.department = departments
    },
    setYears: (state, years) => {
      state.year = years
    },
    setUserClassDetails: (state, studentData) =>  {
      state.classDetails = studentData
    }
    
  },
  actions: {
    createUserProfile({ commit }, { vueApp, user }) {
      const userData = {
        name: vueApp.name,
        email: vueApp.email,
        userId: user.uid,
        is_online: false
      }
      db.collection("users").doc(user.uid).set(userData)
      vueApp.$router.push("/preregister")
      commit("createUserProfile", userData)
    },
    getUserProfile({ commit }, uid) {
      db.collection("users").where("userId", "==", uid)
        .get()
        .then(query => {
          query.forEach(doc => {
            window.localStorage.setItem('currentUser', JSON.stringify(doc.data()))
            commit("setCurrentUser", doc.data());
          });
        });
    },
    addFields({ commit }) {
      commit("addFields")
    },
    makeAdmin({ commit }, data) {
      commit("makeAdmin", data)
    },
    getUniversities({ commit }) {
      const universities = [];
      db
        .collection("universities")
        .get()
        .then(result => {
          result.forEach(doc => {
            // const data = doc.data();
            universities.push(doc.data())
            commit("searchUniversity", universities)
          })
        })

    },
    setFaculty({ commit }, facultyData) {
      const faculties = [];
      faculties.push(facultyData)
      commit("setFaculty", faculties)
    },
    setDepartment({ commit }, departmentData) {
      const departments = [];
      departments.push(departmentData)
      commit("setDepartment", departments)
    },
    setYears({ commit }, yearData) {
      const years = [];
      years.push(yearData)
      commit("setYears", years)
    },
    enterClass({commit }, {studentData, vueApp}) {
      // const year = state.year
      
   
      db.collection("users").doc(studentData.userId).set(studentData)
    commit("setUserClassDetails", studentData)
    vueApp.$router.push("/dashboard")
    }
  },
  modules: {}
});
export default store;