<template>
  <div>歌曲:{{current_music.name}}</div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "musicDetail",
  computed: {
    ...mapState(["current_music"])
  },
  methods: {
    ...mapMutations(["UPADTE_CURRENT_MUSIC"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.UPADTE_CURRENT_MUSIC({ name: to.params.name });
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.UPADTE_CURRENT_MUSIC({ name: to.params.name });
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>