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

      <!-- 热销榜，特价专区 -->
      <div class="scene">
        <div class="scene-list1 scene-list">
          <a href="javascript:;">
            <p class="scene-list-name">热销榜</p>
            <p class="scene-list-desc">集万千宠爱</p>
            <div class="scene-list-div">
              <span class="scene-list-div-span1">大家都在买</span>
              <span class="scene-list-div-span2">热销22.1万</span>
            </div>
          </a>
        </div>
        <div class="scene-list2 scene-list">
          <a href="javascript:;">
            <p class="scene-list-name">特价专区</p>
            <p class="scene-list-desc">超值好货</p>
            <div class="scene-list-div">
              <span class="scene-list-div-span1">限时降价</span>
              <span class="scene-list-div-span2">
                ￥158
                <s style="color:#71797f">￥186</s>
              </span>
            </div>
          </a>
        </div>
      </div>
      <!-- 热销榜，特价专区end -->

      <!-- Product Flower -->
      <div class="product" v-for="(value,i) of txt" :key="i">
        <h3>{{value.txt}}</h3>
        <div class="product-list">
          <div class="product-item" v-for="(value,i) of acticle" :key="i">
            <a href="javascript:;" class="product-item-a">
              <div class="product-item-pic">
                <img referrerpolicy="no-referrer" :src="value.imag" alt="">
              </div>
              <div class="product-item-info">
                <p class="product-item-info-name">{{value.sub}}</p>
                <p class="product-item-info-desc">{{value.descri}}</p>
                <div class="product-item-info-tags">
                  <span class="tags-promo">{{value.tagpromo}}</span>
                </div>
                <div class="product-item-info-promo">{{value.infopromo}}</div>
                <div class="product-item-info-bottom">
                  <div class="product-item-info-bottom-left">
                    <p class="product-item-info-prices">
                      <span>￥{{value.lastprice}}</span>
                      <s>￥{{value.price}}</s>
                    </p>
                    <p class="product-item-info-sales">已销售7.3万件</p>
                  </div>
                  <div class="product-item-info-bottom-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="product-more"></div>
      </div>
      <!-- Product Flower end -->
    

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
        seneImages2 : seneImages2,
        txt:[],
        acticle:[]
      }
    },
    mounted(){
      this.axios.get('/txt').then(res=>{
        // 接收服务器返回的数据并赋值属性category
        this.txt = res.data.results
        console.log(res.data.results)
      });
      this.axios.get('/acticle').then(res=>{
        // 接收服务器返回的数据并赋值属性category
        this.acticle = res.data.results
        console.log(res.data.results)
      });
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
.product-item-info-bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-item-info-bottom-right>span{
  width: 20px;
  height: 20px;
  background:url("../../image/tubiao/cart2.png") no-repeat center;
}
.product-item-info-sales{
  font-size: 0.71428571rem;
  color: #71797F;
}
.product-item-info-prices>s{
  font-size: 0.71428571rem;
  color: #71797F;
  margin-left: 0.42857143rem
}
.product-item-info-prices>span{
  color: #ff734c;
  font-size: 18px;
  font-weight: 500px;
}
.product-item-info-promo{
  padding: 10px 0 ;
  margin-top: 12px;
  font-size: 12px;
  border-top: 1px solid #e9ecf0;
  border-bottom: 1px solid #e9ecf0;
  color: #232628;
}
.tags-promo{
  background-color: #ff734c;
  color: #fff;
  font-size: 12px;
  border-radius: 10rem;
  padding: 0 0.28rem;
  margin-top: 6px;
}
.product-item-info-desc{
  color: #71797f;
  font-size: 12px;
}
.product-item-info{
  width: 180px;
  padding: 0 20px;
}
.product-item-info-desc{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-list{
  width: 375px;
  padding: 0 5px;
}
.product-item-info-name{
  font-size: 16px;
  color: #71797f;
  padding-top: 18px;
}
.product-item-pic>img{
  width: 170px;
}
.product-item-a{
  display: flex;
}
.product>h3{
  text-align: center;
  font-size:  1.14285714rem;
  font-family: 黑体;
  color: #333;
}
.scene-list-div-span2{
  font-size: 0.71rem;
  color: #333;
}
.scene-list-div-span1{
  border-radius: 1rem;
  background-color: #ff734c;
  color: #fff;
  width: 70px;
  text-align: center;
}
.scene-list-div>span{
  display: block;
}
.scene-list-div{
  width:160px ;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;
  font-size: 10px;
}
.scene-list-name{
  font-size: 14px;
  color: #333;
}
.scene-list-desc{
  font-size: 12px;
  margin-top: 3px;
  color: #71797f;
}
.scene-list2{
  background: url('https://img02.hua.com/m/home/img/m_home_special2.png') no-repeat center;
  background-size: 180px 150px;
}
.scene-list1{
  background: url('https://img02.hua.com/m/home/img/m_home_ranklist2.png') no-repeat;
  background-size: 180px 150px;
}
.scene{
  margin-top: 10px;
  padding:0 6px;
  display: flex;
}
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