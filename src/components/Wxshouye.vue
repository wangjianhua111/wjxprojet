<template>
  <div class="warp">
  <!-- 导航部分 -->
   <div class="nav-group">

     <div class="nav-left">
        <i></i>
        <span class="sp-l">广东旅划算</span>
     </div> 

     <div class="nav-right">
        <span class="sp-r">广东站 ∨</span> 
        <van-icon class="font-icon" name="search"/>
        <van-icon class="font-icon" name="wap-nav" />
        <!-- <van-actionsheet v-model="show"  :actions="actions" cancel-text="取消">
             
       </van-actionsheet>
        -->
     </div> 

   </div>

<!-- 轮播图部分 -->

    <van-swipe :autoplay="3000">
          <van-swipe-item> <a href="#"><img src ="../../static/images/t1.jpg" class="swie" /></a> </van-swipe-item>
          <van-swipe-item> <a href="#"><img src ="../../static/images/t2.jpg" class="swie" /></a> </van-swipe-item>
          <van-swipe-item> <a href="#"><img src ="../../static/images/t3.jpg" class="swie" /></a> </van-swipe-item>
          <van-swipe-item> <a href="#"><img src ="../../static/images/t4.jpg" class="swie" /></a> </van-swipe-item>

   </van-swipe>


        <div class="img-box">
          <a href="#"><img src="../../static/images/1.jpg" alt="">休闲生活</a>
          <a href="#"><img src="../../static/images/2.jpg" alt="">酒店别墅</a>
          <a href="#"><img src="../../static/images/3.jpg" alt="">前部产品</a>
          <a href="#"><img src="../../static/images/4.jpg" alt="">景区门票</a>
          <a href="#"><img src="../../static/images/5.jpg" alt="">风景怡人</a>
        </div>

        <div class="img-box">
          <a href="#"><img src="../../static/images/1.jpg" alt="">休闲生活</a>
          <a href="#"><img src="../../static/images/2.jpg" alt="">酒店别墅</a>
          <a href="#"><img src="../../static/images/3.jpg" alt="">前部产品</a>
          <a href="#"><img src="../../static/images/4.jpg" alt="">景区门票</a>
          <a href="#"><img src="../../static/images/5.jpg" alt="">风景怡人</a>
        </div>
     

 </div>
</template>

<script>
export default {
  name: "Wxshouye",
  data() {
    return {
      show: false,
      actions: [
        {
          name: "我的订单",
          callback: this.onClick
        },
        {
          name: "版本信息",
          subname: "描述信息"
        },
        // {
        //   name: "选项",
        //   loading: true
        // }
      ]
    };
  },

  methods: {
    onClick(item) {
      Toast(item.name);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.warp {
  width: 100%;
  height: 100%;
}

.nav-group {
  width: 100%;
  height: 40px;
}

.nav-left {
  float: left;
  height: 2rem;
  padding-left: 0.5rem;
  line-height: 2rem;
}

.nav-right {
  float: right;
  height: 40px;
  padding: 0 10px 0 0;
  line-height: 40px;
}

.nav-right .sp-r {
  padding-right: 1rem;
}

.nav-right .font-icon {
  padding-right: 1rem;
}
/* 轮播图图片部分 */
.warp .swie {
  height: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
  display: block;
}

.img-box {
  margin-top: 10px;
  height: 50px;
  font-size: 0.9rem;
}
.img-box a {
  width: 20%;
  padding: 0.35rem 0.5rem;
  box-sizing: border-box;
  text-align: center;
  float: left;
}
.img-box img {
  width: 100%;
  border-radius: 50%;
}
</style>

