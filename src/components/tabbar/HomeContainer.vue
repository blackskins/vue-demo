<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组建中使用 v-for 循环的话 ，一定要使用 key -->
      <mt-swipe-item v-for=" item in slideList" :key="">
        <img class="slide-img" :src="item.imgUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <h3>HomeContainer</h3>
  </div>
</template>
<script>
// 导入Toast组件
import { Toast } from 'mint-ui';
export default {
  data(){
    return{
      slideList:[]
    }
  },
  created(){
    this.getSlide()
  },
  methods:{
    getSlide(){//获取轮播图的 方法
      this.$http.post('https://social-client.weishangshouji.cn/comm/queryshlow?token=89b1496a071e42bdba986a44dd20eaad')
      .then(res=>{
        console.log(res.body)
        if(res.body.code ==0){
          this.slideList = res.body.data
        }else{
          // 失败
          Toast('轮播图请求失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;

    .mint-swipe-item{
      &:nth-child(1){
        background-color: pink;
      }
      &:nth-child(2){
        background-color: red;
      }
      &:nth-child(3){
        background-color: chartreuse;
      }
    }
  }
  .slide-img{
    width: 100%;
    height: 200px;
  }
</style>

