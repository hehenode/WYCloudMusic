<template>
  <div>歌曲:{{name}}</div>
</template>


<script>
export default {
  name: "musicDetail",
  data() {
    return {
      name: ""
    };
  },
  created() {
    console.log(this.$route);
    this.name = this.$route.params.name;
  },
  // watch: {
  //   $route(to, from) {
  //     this.name = to.params.name;
  //   }
  // },
  beforeRouteUpdate(to, from, next) {
    this.name = to.params.name;
    console.log(next);
    next();
  }
};
</script>