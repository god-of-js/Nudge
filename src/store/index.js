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
    fields: 0
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
            console.log(doc.data())
          });
        });
    },
    addFields({ commit }) {
      console.log('us')

      commit("addFields")
    },
    makeAdmin({ commit }, data) {
      commit("makeAdmin", data)
    }
  },
  modules: {}
});
export default store;