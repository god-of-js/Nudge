<template>
  <div id="app">
    <homenav />
    <router-view></router-view>
  </div>
</template>
<script>
import homenav from "@/components/homeNav";
export default {
  components: {
    homenav
  }
};
</script>
<style  scoped>
#app {
  margin: 0%;
  overflow: hidden;
}
</style>