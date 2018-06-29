<template>
  <div id="app">
    <top-header></top-header>
  </div>
</template>

<script>
import topHeader from "./components/header/head";
export default {
  name: "App",
  components: {
    topHeader
  }
};
</script>

<style>
@import "./style/common.css";
</style>
