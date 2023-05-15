<template>
  <div class="bg">
    <header><div>111</div></header>
    <h1>HelloWorld</h1>
    <div class="hello">
      <div class="content">
        <div class="button" @click="changeMsg">
        </div>
         <el-input v-model="msg"></el-input>
        <!-- <span v-for="item in msg" :key="item">{{ item }}</span> -->
        <span>{{msg}}</span>
      </div>
      <div>
        <img src="../assets/images/IMG_6025.jpg" alt="无图片">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: 'no change',
    };
  },
  methods: {
    changeMsg() {
      this.msg='changed'
    },
    addTwoNumber(){
      
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100%;
}

.hello {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid transparent;
  border-radius: 16px;
  background-clip: padding-box, border-box;
  // background-origin: padding-box, border-box;
  background-image: linear-gradient(145deg, #222, #222),
    linear-gradient(90deg, #8f41e9, #578aef);
  .content {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-color: whitesmoke;
    z-index: 100;
  }
  .button {
    z-index: 1;
    margin-top: 20px;
    margin-left: 20px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    // background:linear-gradient(145deg,#ccc,#f4f4f4);
    background-color: whitesmoke;
    box-shadow: 20px 20px 60px #ccc, -20px -20px 60px #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      transform: skew(45deg);
      transform: rotate(45deg);
      transform: scale(1.1, 0.9);
    }
  }
}
</style>
