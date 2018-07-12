<template>
  <header class='m-topbar'>
    <div class='top'>
      <h1 class='logo'></h1>
      <ul class='m-nav'>
        <li class='fst'>
          <router-link to="/findMusic">发现音乐</router-link>
          <div class='cor'></div>
        </li>
        <li v-for="item in top_fst">
          <router-link to="/findMusic">{{item}}</router-link>
          <div class='cor'></div>
        </li>
        <li>
          <router-link to="/detail/呵呵">下载客户端</router-link>
          <span class='hot'></span>
        </li>
        <li>
          <router-link :to="{path:`/detail/${get_idx_todos(0)}`}">{{get_idx_todos(0)}}</router-link>
          <span class='cor'></span>
        </li>
        <li>
          <router-link :to="{path:`/detail/${get_idx_todos(1)}`}">{{get_idx_todos(1)}}</router-link>
          <span class='cor'></span>
        </li>
      </ul>
      <div class='search'>
        <input type="text" placeholder="音乐/视频/电台/用户" v-bind:disabled="isButtonDisabled" v-model="todos" class='search-input'>
      </div>
      <a class='contribute'> 
        视频投稿
      </a>
      <div class='user'>
        <div class='user-head'>
          <img src="../../../static/images/cm2_btm_icn_account.png" alt="">
        </div>
        <span class='mask'></span>
        <div class='user-action'>
          <ul>
            <li>
              <i class='icn icn-hm'></i>
              <a href="">我的主页</a>
            </li>
            <li>
              <i class='icn icn-msg'></i>
              <a href="">我的消息</a>
            </li>
            <li>
              <i class='icn icn-lv'></i>
              <a href="">我的等级</a>
            </li>
            <li>
              <i class='icn icn-mbr'></i>
              <a href="">vip会员</a>
            </li>
          </ul>
          <ul class='ltb'>
            <li>
              <i class='icn icn-st'></i>
              <a href="">个人设置</a>
            </li>
          </ul>
          <ul>
            <li>
              <i class='icn icn-ex'></i>
              <a href="">退出</a>
            </li>
          </ul>
          <i class="arr"></i>
        </div>
      </div>
    </div>
    <div class="m-subnav frist-btn">
      <ul>
        <li>
          <a class='z-slt' href="#">推荐</a>
        </li>
        <li>
          <a href="#">排行榜</a>
        </li>
        <li>
          <a href="#">歌单</a>
        </li>
        <li>
          <a href="#">主播电台</a>
        </li>
        <li>
          <a href="#">歌手</a>
        </li>
        <li>
          <a href="#">新碟上架</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "topHeader",
  data() {
    return {
      isButtonDisabled: null,
      top_fst: ["我的音乐", "朋友"]
    };
  },
  computed: {
    todos: {
      get() {
        return this.$store.state.todos;
      },
      set(value) {
        this.async_set_todos(value);
      }
    },
    ...mapGetters(["get_idx_todos"])
  },
  methods: {
    ...mapMutations(["SET_TODOS"]),
    ...mapActions(["async_set_todos"])
  }
};
</script>

<style>
.m-topbar {
  background-color: #242424;
}
.top {
  display: flex;
  align-items: center;
  width: 1100px;
  height: 1.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  margin: 0 auto;
}
.logo {
  background: #242424 url("../../assets/images/topbar.png") no-repeat;
  background-position: 0 0;
  width: 176px;
  height: 70px;
}
.m-nav {
  display: flex;
  align-content: center;
  height: 70px;
  line-height: 70px;
}

.m-nav li {
  padding: 0 19px;
  font-size: 0.28rem;
  position: relative;
  display: flex;
  justify-content: center;
}

.m-nav li:hover {
  background-color: #000;
}

.m-nav li:hover a {
  color: #fff;
}

.m-nav li a {
  text-decoration: none;
  color: #ccc;
}

.m-nav .fst a {
  color: #fff;
}

.fst {
  background-color: #000;
}

.fst .cor {
  display: block;
}

.cor {
  display: none;
  background: #000 url("../../assets/images/topbar.png") no-repeat;
  background-position: -226px 0;
  left: 50%;
  top: 64px;
  width: 12px;
  height: 6px;
  margin-left: -6px;
  position: absolute;
}

.hot {
  background: #242424 url("../../assets/images/topbar.png") no-repeat;
  background-position: -192px 0;
  width: 26px;
  height: 13px;
  position: absolute;
  top: 21px;
  right: -20px;
}

.search {
  background: #fff url("../../assets/images/topbar.png") no-repeat;
  background-position: 0 -99px;
  border-radius: 32px;
  width: 158px;
  height: 32px;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
}

.search-input {
  position: absolute;
  margin-left: 30px;
  font-size: 0.24rem;
  width: 118px;
  height: 16px;
  line-height: 16px;
  border: 0;
  outline: none;
}

.contribute {
  background: #242424 url("../../assets/images/topbar.png") no-repeat;
  background-position: 0 -180px;
  width: 90px;
  height: 32px;
  line-height: 32px;
  font-size: 0.24rem;
  color: #ccc;
  padding-left: 22px;
  margin-left: 12px;
  box-sizing: border-box;
}

.contribute:hover {
  background-position: 0 -140px;
}

.user {
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;
  margin-left: 20px;
}

.user:hover .user-action {
  display: block;
}

.user-head {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #ccc;
  position: relative;
  overflow: hidden;
}

.user-head img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0;
  top: 3px;
}

.mask {
  background: #242424 url("../../assets/images/topbar.png") no-repeat;
  background-position: right -59px;
  width: 12px;
  height: 10px;
  margin-left: 10px;
}

.user-action {
  display: none;
  position: absolute;
  top: 50px;
  left: -65px;
  width: 158px;
  background: #2b2b2b;
  border: 1px solid #202020;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

.user-action:hover {
  display: block;
}

.arr {
  background: url("../../assets/images/toplist.png") no-repeat;
  position: absolute;
  top: -8px;
  left: 50%;
  width: 14px;
  height: 8px;
  margin-left: -7px;
  background-position: -20px 0;
}

.ltb {
  border: 1px solid #232323;
  border-width: 1px 0;
}

.user-action li {
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
}

.user-action a {
  color: #ccc;
  height: 34px;
  line-height: 34px;
}

.user-action .icn {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.user-action li:hover {
  background: #343434;
}

.user-action li:hover a {
  color: #fff;
}

.user-action li:hover .icn {
  background-color: #343434;
}

.icn {
  background: #2b2b2b url("../../assets/images/toplist.png") no-repeat;
}

.icn-hm {
  background-position: 0 -140px;
}

.icn-msg {
  background-position: -20px -120px;
}

.icn-lv {
  background-position: 0 -100px;
}

.icn-mbr {
  background-position: 0 -221px;
}

.icn-st {
  background-position: 0 -140px;
}

.icn-ex {
  background-position: 0 -200px;
}

.m-subnav {
  height: 5px;
  background-color: #c20c0c;
  border-bottom: 1px solid #c20c0c;
}

.frist-btn {
  height: 34px;
}

.m-subnav ul {
  display: flex;
  width: 1100px;
  height: 34px;
  margin: 0 auto;
  padding-left: 180px;
  box-sizing: border-box;
}

.m-subnav ul li {
  display: flex;
  align-items: center;
}

.m-subnav ul li:hover a {
  background: #9b0909;
}

.m-subnav ul a {
  color: #fff;
  text-decoration: none;
  height: 20px;
  padding: 0 13px;
  margin: 0 17px;
  border-radius: 20px;
  line-height: 21px;
  display: inline-block;
}

.z-slt {
  background: #9b0909;
}
</style>