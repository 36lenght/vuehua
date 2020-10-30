<template>
  <div style="margin-bottom:59px">
      <!-- 顶部广告 -->
      <div>
        <span class="home-topAdvertisement" @click="cancel()"></span>
        <a href="javascript:;">
          <img class="Advertisement" src="https://img02.hua.com/m/icon/mobile_banner_A.png" alt="">
        </a>
      </div>
      <!-- 顶部广告end -->

      <!-- 顶部标题 -->
      <div class="home-title">
        <div class="home-title-item1">
          <a href="javascript:;">
            <span></span>
          </a>
        </div>
        <div class="home-title-item2">
          <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt="">
        </div>
        <div class="home-title-item3">
          <a href="javascript:;">
            <span></span>
          </a>
        </div>
      </div>
      <!-- 顶部标题结束 -->

      <!-- 轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="(item,index) of data" :key="index">
          <img :src="item.url" alt="" style="width:100%;height:180px">
        </mt-swipe-item>
      </mt-swipe>
      <!-- 轮播图结束 -->
      
      <!-- 品牌 -->
      <div class="company-brand">
        <ul class="company-brand-ul" >
          <li class="company-brand-li" style="margin-left:3px" v-for="(value,index) of companys" :key="index">
            <span class="company-brand-span"></span>
            <p class="company-brand-p">{{value.title}}</p>
          </li>
        </ul>
      </div>
      <!-- 品牌end -->

      <!-- 分类01 -->
      <div class="home_classification">
        <ul class="home_classification_ul" >
          <li class="home_classification_li" v-for="(item,index) of classifications" :key="index">
            <a href="jacascript:;" class="home_classification_a">
              <img :src="item.image" alt="" class="home_classification_img">
              <p class="home_classification_p" >{{item.text}}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 分类01end -->
      
      <!-- 一秒选花 -->
      <div class="modetitle">
        <span class="modetitle_span">一秒选花</span>
      </div>
      <div class="sene-list">
        <div class="sene-item sene-item-img" v-for="(item,index) of seneImages" :key="index">
          <a href="javascript:;">
            <img :src="item.img" alt="">
            <span class="sene-item_span">{{item.text}}</span>
          </a>
        </div>
      </div>
      <div class="sene-list" style="margin-top:10px">
        <div class="sene-item sene-item-img" v-for="(item,index) of seneImages2" :key="index">
          <a href="javascript:;">
            <img :src="item.image" alt="">
            <span class="sene-item_span2">{{item.texts}}</span>
          </a>
        </div>
      </div>
      <!-- 一秒选花end -->
    
    

    <!-- 底部导航 -->
    <mt-tabbar id="tabbar" v-model="tabbar" fixed>
          <mt-tab-item id="tab1" class="font" href="/">
            首页
            <img src="../../image/tubiao/shouye_select.png" alt="" v-if="tabbar == 'tab1'" slot="icon">
            <img src="../../image/tubiao/shouye.png" alt="" v-else slot="icon">
            
          </mt-tab-item>
          <mt-tab-item id="tab2" class="font" href="/caidan">
            菜单
            <img src="../../image/tubiao/fenlei_select.png" alt="" v-if="tabbar == 'tab2'" slot="icon">
            <img src="../../image/tubiao/fenlei.png" alt="" v-else slot="icon">
          </mt-tab-item>
          <mt-tab-item id="tab3" class="font" href="/cart">
            购物车
            <img src="../../image/tubiao/cart_select.png" alt="" v-if="tabbar == 'tab3'" slot="icon">
            <img src="../../image/tubiao/cart.png" alt="" v-else slot="icon">
          </mt-tab-item>
          <mt-tab-item id="tab4" class="font" href="/my">
            我的
            <img src="../../image/tubiao/my_select.png" alt="" v-if="tabbar == 'tab4'" slot="icon">
            <img src="../../image/tubiao/my.png" alt="" v-else slot="icon">
          </mt-tab-item>
    </mt-tabbar>
    <!-- 底部导航end -->
  </div>
</template>
<script>
import NavFooter from '../components/NavFooter'
import swipeData from '../../example/data/swipe.json'
const swipes = swipeData.swipes
const companys = swipeData.companys
const classifications = swipeData.classifications
const seneImages = swipeData.seneImages
const seneImages2 = swipeData.seneImages2
export default {
    name: 'Home',
    data(){
      return{
        tabbar:'tab1',
        data:swipes,
        companys:companys,
        classifications:classifications,
        seneImages : seneImages,
        seneImages2 : seneImages2
      }
    },
    methods:{
      cancel(){
        // 获取元素
        let advEle = document.getElementsByClassName('home-topAdvertisement')[0];
        let imgEle = document.getElementsByClassName('Advertisement')[0]
        // 修改元素，点击图标，使自身和img消失
        // 添加display:none样式
        advEle.style.display = "none";
        imgEle.style.display = "none";
      }
    }
}
</script>
<style scoped>
.sene-item_span2{
  top: 12px;
  color: #333;
}
.sene-item_span{
  bottom: 5px;
  color: #fff;
}
.sene-item-img{
  border-radius: 4.5px;
}
.sene-item{
  position: relative;
  margin: 0 2.28px;
  overflow: hidden;
}
.sene-list{
  display: flex;
  padding: 0 6px;
}
.modetitle::before{
  content: "";
  display: inline-block;
  width: 0.21428571rem;
  height: 16px;
  background: #435448;
  margin-right: 0.42857143rem;
}
.modetitle{
  height: 40px;
  padding: 12px;
  display: flex;
  align-items: center;
}
.home_classification_a{
  display: inline-block;
  width: 100%;
}
.home_classification_li{
  width: 75px;
}
.home_classification_ul{
  padding: 15px 10px 8px;
  display: flex;
  justify-content: space-around;
}
.home_classification_p{
  margin: 0px;
  font-size: 14px;
  color: #444;
  font-family: 黑体;
  text-align: center;
}
.home_classification_img{
  margin-left:16px ;
  width: 36px;
  height: 36px;
}
.company-brand-p{
  font-size: 0.6rem;
  display: inline-block;
}
.company-brand-ul{
  display: flex;
  justify-content: space-between;
  padding: 0 7px;
}
.company-brand-span{
  margin-right:2px ;
  width: 14px;
  height: 14px;
  background: url("../../image/tubiao/company-duihao.png") no-repeat;
  vertical-align: middle;
}
.mint-swipe{
  height: 180px;
}
.home-title-item3 span{
  background:url("../../image/tubiao/kefu.png") no-repeat;
}
.home-title-item2 img{
  width: 150px;
  margin-top: 12px;
}
.home-title-item1 span{
  background:url("../../image/tubiao/sousuo_icon.png") no-repeat;
}
.home-title{
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 48px;
  background-color: #435448;
  box-sizing: border-box;
}
.home-topAdvertisement{
  width: 16px;
  height: 16px;
  background: url("../../image/tubiao/icon_cuowu.png") no-repeat;
  position: absolute;
  top: 15px;
  left: 15px;
}
.Advertisement{
  width: 100%;
}
</style>