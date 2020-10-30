<template>
  <div >
    caidan
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
  </div>
</template>

<script>
export default {
  name: 'caidan',
  data(){
    return{
      tabbar:'tab2'
    }
  }
}
</script>