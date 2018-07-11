<template>
    <div class='container'>
       <div class='login'>
            <div class='l-title'>
                <div>手机号登录</div>
                <span class='zcls' title="关闭窗体"></span>
            </div>
       </div>
       <div class='m-mask'></div>
    </div>
</template>

<script>
export default {
  name: "popup"
};
</script>

<style>
.container {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
}

.login {
  z-index: 9998;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
}

.l-title {
  z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0 0;
  background: #2d2d2d;
  position: relative;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 15px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  height: 38px;
  line-height: 38px;
}

.l-title span {
  width: 10px;
  height: 10px;
  cursor: pointer;
  background-position: 0 -95px;
}

.m-mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  height: 100%;
  width: 100%;
  background: transparent;
}

.zcls {
  background: url("../../assets/images/layer.png") no-repeat 0 9999px;
}
</style>


