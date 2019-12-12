<template>
  <v-content class="content">
    <div class="img mt-6">
      <v-row align="center" justify="center">
        <v-img src="../assets/clip-education.png" aspect-ratio="1" max-width="350" max-height="200"></v-img>
      </v-row>
      <div class="buttons">
        <v-btn color="#3b28c7" class="btns" to="/createclass">
          <span class="span">Register your class as an Admin</span>
        </v-btn>
        <v-btn color="#3b28c7" class="btns" to="classinvite">
          <span class="span">Enter your class as an Student</span>
        </v-btn>
        <v-btn color="#3b28c7" class="btns" to="/dashboard">
          <span class="span">Personal Scheduling</span>
        </v-btn>
      </div>
    </div>
  </v-content>
</template>
<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    reg(e) {
      e.preventDefault();
      this.loading = !this.loading;
    }
  }
};
</script>
<style scoped>
.content{
  overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: white;
  overflow: hidden;
  margin-bottom: 0%;
}
.span {
  color: white;
}
.buttons {
  margin-left: 32%;
  margin-bottom: 5%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.btns {
  margin-top: 2%;
  margin-bottom: 2%;
  width: 500px;
}
@media screen and (max-width: 320px) and (max-height: 568px) {
  .buttons {
    margin-left: 3% !important;
    margin-bottom: 10%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 200px;
  }
}
@media screen and (min-width: 359px) and (max-width: 360px) and (max-height: 640px){
  .buttons {
    margin-left: 10% !important;
    margin-bottom: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 300px;
  }
}
@media screen and (max-width: 380px) and (min-width: 374px){
  .buttons {
    margin-left: 9.5% !important;
    margin-bottom: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 300px;
  }
}
@media screen and (max-width: 380px) and (max-height: 812px) {
  .buttons {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 300px;
  }
}
@media screen and (max-width: 411px) {
  .buttons {
    margin-left: 14%;
    margin-bottom: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 300px;
  }
}
@media screen and (max-width: 414px) {
  .buttons {
    margin-left: 14%;
    margin-bottom: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 300px;
  }
}
@media screen and (max-width: 768px) {
  .buttons {
    margin-left: 25%;
    margin-bottom: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 400px;
    padding: 5%;
  }
}
@media screen and (max-width: 1024px) {
  .buttons {
    margin-left: 28%;
    margin-bottom: 20%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .btns {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 500px;
    padding: 5%;
  }
}
</style>