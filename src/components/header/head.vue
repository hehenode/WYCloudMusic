<template>
  <header class='m-topbar'>
    <div class='top'>
      <h1 class='logo'></h1>
      <ul class='m-nav'>
        <li class='fst'>
          <a href="#">发现音乐</a>
          <div class='cor'></div>
        </li>
        <li>
          <a href="#">我的音乐</a>
          <div class='cor'></div>
        </li>
        <li>
          <a href="#">朋友</a>
          <div class='cor'></div>
        </li>
        <li>
          <a href="#">下载客户端</a>
          <span class='hot'></span>
        </li>
      </ul>
      <div class='search'>
        <input type="text" placeholder="音乐/视频/电台/用户" class='search-input'>
      </div>
      <a class='contribute'> 
        视频投稿
      </a>
      <div class='user'>
        <div class='user-head'>
          <img src="../../../static/images/cm2_btm_icn_account.png" alt="">
        </div>
        <span class='mask'></span>
      </div>
    </div>
    <div class="m-subnav">
    </div>
  </header>
</template>

<script>
export default {
  name: "head"
};
</script>

<style>
.m-topbar {
  background-color: #242424;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  margin: 0;
  padding: 0;
}

.m-nav li {
  padding: 0 19px;
  font-size: 0.28rem;
  list-style: none;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
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
  right: -24px;
}

.m-subnav {
  height: 5px;
  background-color: #c20c0c;
  border-bottom: 1px solid #c20c0c;
}

/* .triangle {
  border-top: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 7px solid #c20c0c;
  border-left: 6px solid transparent;
  position: absolute;
  bottom: 0;
} */

.search {
  background: #fff url("../../assets/images/topbar.png") no-repeat;
  background-position: 0 -99px;
  border-radius: 32px;
  width: 158px;
  height: 32px;
  position: relative;
  display: flex;
  align-items: center;
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
  background-position: 0 -140px;
  width: 90px;
  height: 32px;
  line-height: 32px;
  font-size: 0.24rem;
  color: #ccc;
  text-align: center;
  padding-left: 22px;
  box-sizing: border-box;
}

.user {
  display: flex;
  align-items: center;
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
</style>