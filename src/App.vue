<template>
  <div>
    <top-header></top-header>
    <popup></popup>
    <router-view></router-view>
  </div>
</template>

<script>
import topHeader from "./components/header/head";
import popup from "./components/popup/popup";
export default {
  name: "App",
  components: {
    topHeader,
    popup
  }
};
</script>

<style>
@import "./style/common.css";
</style>
