<template>
  <v-content>
    <div class="dflex">
      <v-container class="image">
        <v-row align="center" justify="center">
          <v-img
            src="../assets/clip-education.png"
            aspect-ratio="1"
            max-width="350"
            max-height="200"
          ></v-img>
        </v-row>
        <v-container class="form">
          <v-form class="vform">
            <v-text-field v-model="email" label="E-mail"></v-text-field>
            <v-text-field v-model="password" label="Password"></v-text-field>
            <v-row>
              <v-btn tile class="btns" color="#3b28c7" :loading="loading">
                <span class="span">Login</span>
              </v-btn>
              <v-btn class="btns" color="white" text to="/register">
                <span class="spans">Register</span>
              </v-btn>
            </v-row>
          </v-form>
        </v-container>
      </v-container>
      <v-container class="right">
        <v-row align="center" justify="center" class="margin">
          <v-img
            src="../assets/clip-list-is-empty.png"
            aspect-ratio="1"
            max-width="350"
            max-height="200"
          ></v-img>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>
<script>
// import { auth } from '@/plugins/firebase.vue'
export default {
  data: () => {
    return {
      password: null,
      email: null,
      loading: false
    };
  },
  methods: {
    // reg(e) {
    //   e.preventDefault();
    //   this.loading = !this.loading;
    //     auth
    //       .createUserWithEmailAndPassword(this.email, this.password)
    //       .then(result => {
    //         let vueApp = this; //because *this* is not available in the store
    //       })
    //       .catch(e => {
    //         this.loading = !this.loading;
    //         prompt(e);
    //       });
    // }
  }
};
</script>
<style scoped>
.login {
  display: flex;
  padding-top: 5%;
  justify-items: end;
}
.image {
  margin-top: 0%;
  margin-bottom: 0%;
  margin-left: 0%;
  margin-right: 0%;
  height: cover !important;
  width: 150%;
  background-color: white;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
}
.right {
  /* padding-bottom: 50% !important; */
  height: cover !important;
  width: 150%;
  background-color: #3b28c7;
}
.margin {
  margin-top: 10%;
}
.dflex {
  display: flex;
  overflow-y: hidden;
  position: fixed;
  margin: 0%;
  margin-right: 0%;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
  padding-top: 0% !important;
  padding-bottom: 0% !important;
  padding-left: 0% !important;
  padding-right: 0% !important;
}
.form {
  margin-top: 4%;
}
.btns {
  margin-left: 27%;
  margin-top: 5%;
  width: 50%;
}
.span {
  color: white;
}
.spans {
  color: #3b28c7;
}
@media screen and (max-width: 320px) and (max-height: 568px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 0% !important;
    padding-left: 5%;
    padding-right: 5%;
  }
  .form {
    margin-top: -10% !important;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 10% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 150%;
    background-color: #3b28c7;
  }
}
@media screen and (max-width: 350px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 0% !important;
    padding-left: 5%;
    padding-right: 5%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 15% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 150%;
    background-color: #3b28c7;
  }
}
@media screen and (max-width: 360px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 5% !important;
    padding-left: 5%;
    padding-right: 5%;
  }
  .form {
    margin-top: 0%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 10% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 150%;
    background-color: #3b28c7;
  }
}
@media screen and (max-width: 376px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 14% !important;
    padding-left: 5%;
    padding-right: 5%;
  }
  .form {
    margin-top: 0%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 10% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 150%;
    background-color: #3b28c7;
  }
}
@media screen and (max-width: 411px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 23% !important;
    padding-left: 5%;
    padding-right: 5%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 150%;
    background-color: #3b28c7;
  }
  .form {
    margin-top: 10%;
  }
}
@media screen and (max-width: 411px) and (max-height: 823px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 40%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 150%;
    background-color: #3b28c7;
  }
  .form {
    margin-top: 10%;
  }
}
@media screen and (max-width: 600px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 40%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 150%;
    background-color: #3b28c7;
  }
  .form {
    margin-top: 10%;
  }
}
@media screen and (max-width: 768px) {
  .image {
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0% !important;
    margin-right: 0% !important;
    height: cover !important;
    width: 150%;
    background-color: white;
    padding-top: 40%;
    padding-left: 5%;
    padding-right: 5%;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
  }
  .btns {
    margin-left: 0%;
    margin-top: 5%;
    width: 100% !important;
  }
  .right {
    /* padding-bottom: 50% !important; */
    display: none;
    height: cover !important;
    width: 190%;
    background-color: #3b28c7;
  }
  .form {
    margin-top: 10%;
  }
  .dflex {
    display: flex;
    overflow: hidden;
    position: fixed;
    margin: 0%;
    margin-right: 0%;
    width: 100%;
    height: 100%;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    padding-top: 0% !important;
    padding-bottom: 0% !important;
    padding-left: 0% !important;
    padding-right: 0% !important;
  }
}
</style>