<template>
  <div class="bg">
    <!-- <BasicLayout /> -->
    <h1>Home Page</h1>
    <html style="overflow: visible">
      <head>
        <title>表单控件合集</title>
      </head>
      <body>
        <div class="header">网站头部</div>
        <!-- 粘性约束元素 -->
        <div class="article">
          <!-- sticky 元素 -->
          <h2 class="title">彻底理解粘性定位 - position: sticky</h2>
          <div class="content">
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>

            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>

            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>

            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>

            <p>彻底理解粘性定位</p>
            <p>彻底理解粘性定位</p>
          </div>
        </div>
        <div class="footer">网站底部</div>
        <form>
          <fieldset>
            <legend>Table</legend>
            <label>input your name:</label><br />
            <input type="text" name="iyn" value="hh" /><br /><br />
            <label>please write your dream:</label><br />
            <textarea name="yyyyy" maxlength="300"></textarea><br />
            <button>nice!</button><br />
            <input type="submit" value="提交" /><br /><br />
            <select name="city">
              <option value="贵阳">贵阳</option>
              <option value="伦敦">伦敦</option>
              <option value="巴黎">巴黎</option>
              <option value="大连">大连</option></select
            ><br />
            <input type="radio" name="xmc" checked />xmc<br />
            <input type="radio" name="wjl" />wjj
          </fieldset>
          <!-- <fieldset>
                  <textarea name="xxxxxx" id="" cols="30" rows="10"></textarea>
                </fieldset> -->
        </form>
        <p id="id">id选择器</p>
        <p class="class">类选择器</p>
        <p xx="title">属性选择器</p>
        <p xx="title">属性选择器</p>

        <el-divider></el-divider>
        <div class="border-box">
          <div class="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            ratione necessitatibus numquam sunt nihil quos saepe sit facere.
            Alias accusamus voluptate accusantium facere fugiat animi temporibus
            adipisci! Corporis, accusamus tempora.
          </div>
        </div>
        <div class="box">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>

        <div class="float-box">
          <div class="left"></div>
          <div class="right"></div>
          <div class="clear"></div>
        </div>
      </body>
    </html>
  </div>
</template>
<script>
import BasicLayout from "fromCom/BasicLayout.vue";
export default {
  name: "Home",
  components: {
    BasicLayout,
  },
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    // console.log("mounted.....");
    // 使用Promise方法调用fetchData函数
    // this.fetchData()
    //   .then((data) => {
    //     console.log("获取到的数据为：", data); // 打印获取到的数据
    //   })
    //   .catch((error) => {
    //     console.error("发生错误：", error); // 打印错误信息
    //   });
  },
  created() {
    console.log("created.....");

    // this.loadData((data) => {
    //   console.log("第一次加载数据：", data);
    //   this.loadMoreData(data, (moreData) => {
    //     console.log("第二次加载数据：", moreData);
    //   });
    // });

    const synchronous = () => {
      const promise = Promise.resolve(0);
      console.log(promise === 0);
      // return 'synchronous'
    };

    const aysnchronous = async () => {
      const promise = await Promise.resolve(0);
      console.log(promise === 0);
      // return 'aysnchronous'
    };

    console.log(synchronous());
    console.log(aysnchronous());
    console.log("end______");

    //   const callbackFunction = (msg) => {
    //     console.log( msg + 'callbackFunction')
    //   };

    //   const printMsg = (data, callback) => {
    //      data = data + "printMsg";
    //     callback(data);
    //   };

    //  printMsg("hello", callbackFunction);

    // //地狱回调
    // setTimeout(function () {
    //   //第一层
    //   console.log("小锁"); //等3秒打印张三在执行下一个回调函数
    //   setTimeout(function () {
    //     //第二层
    //     console.log("李四"); //等2秒打印李四在执行下一个回调函数
    //     setTimeout(function () {
    //       //第三层
    //       console.log("王五"); //等一秒打印王五
    //     }, 1000);
    //   }, 2000);
    // }, 3000);

    function resolveCallback(name, flag = true) {
      return new Promise((resolve, reject) => {
        // 处理异步任务
        setTimeout(() => {
          if (flag) {
            resolve(name);
          } else {
            reject("失败");
          }
        }, 1000);
      });
    }
    // resolveCallback("张三")
    //   .then((res) => {
    //     console.log(res);
    //     return resolveCallback("李四");
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     return resolveCallback("王五");
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((res) => {
    //     //捕捉失败的回调结果
    //     console.log(res);
    //   });

    // let p1 = resolveCallback("张三");
    // let p2 = resolveCallback("李四");
    // let p3 = resolveCallback("王五");
    // let p = Promise.all([p1, p2, p3])
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((res) => {
    //     console.log("失败");
    //   });
  },
  methods: {
    // // 定义一个返回Promise对象的函数
    // fetchData() {
    //   return new Promise((resolve, reject) => {
    //     // 模拟异步操作，3秒后返回结果
    //     setTimeout(() => {
    //       const data = { name: "John", age: 30 };
    //       resolve(data); // 成功时调用resolve并传递数据
    //       // 如果发生错误，可以调用reject并传递错误信息
    //     }, 3000);
    //   });
    // },
    // loadData(callback) {
    //   setTimeout(() => {
    //     const data = { name: "John", age: 30 };
    //     callback(data);
    //   }, 2000);
    // },
    // loadMoreData(data, callback) {
    //   setTimeout(() => {
    //     const moreData = { email: "john@example.com", phone: "123-456-7890" };
    //     const result = Object.assign({}, data, moreData);
    //     callback(result);
    //   }, 2000);
    // },
  },
};
</script>
<style lang="less" scoped>
.bg {
  width: 100%;
}
[xx="title"] {
  color: red;
  // transition: all,1s;
}
// #id{
//   color: blue;
// }
#id + p {
  font-size: 22px;
}
#id ~ p {
  font-style: oblique;
}
.class::before {
  color: red;
}
.border-box {
  border: 4px solid transparent;
  border-radius: 16px;
  position: relative;
  background-color: #222;
  background-clip: padding-box; /*important*/
}

.border-box::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  margin: -4px;
  border-radius: inherit; /*important*/
  background: linear-gradient(to right, #8f41e9, #578aef);
}

.title {
  position: sticky;
  top: 0;
  background-color: #fff;
}
.box{
  background: lawngreen;
  // width: 150px;
  height: 400px;
  display: inline-block;
  // flex-direction: column;
  // flex-wrap: wrap;
}
.box1 {
  background: red;
  height: 100px;
  width: 150px;
  // margin-bottom: 50px;
  // padding-bottom: 50px;
  
}
.box2 {
  // padding-top: 50px;
  background-color: blue;
  height: 100px;
  width: 150px;
  // margin-bottom: 50px;
  // margin-top: 50px;
}
.box3 {
  background-color: yellow;
  height: 100px;
  width: 150px;
  // margin-top: 50px;
  // float: left;
  // border-right: 50px;
  // position: absolute;
  // display: inline-block;
}
.box4{
  background-color: gray;
  height: 100px;
  width: 150px;
  // float: left;
  margin-top: 50px;
}
.float-box{
  margin: 10px;
  background-color: red;
  width: 200px;
  // overflow: hidden;
}
.left{
  float: left;
  width: 50px;
  height: 50px;
  background-color: #8f41e9;
}
.right{
  // float: left;
  width: 100px;
  height: 100px;
  background-color: #578aef;
  overflow: hidden;

}
.clear{
  // clear: both;
}
</style>