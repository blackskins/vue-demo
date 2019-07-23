<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组建中使用 v-for 循环的话 ，一定要使用 key -->
      <mt-swipe-item v-for=" item in slideList" :key="item.imgUrl">
        <img class="slide-img" :src="item.imgUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 到 六宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
        <div class="mui-media-body">图片分享</div></a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品购买</div></a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div></a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div></a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div></a>
      </li>
		</ul> 
  </div>
</template>
<script>
// 导入Toast组件
import { Toast } from "mint-ui";
import { querySlide } from "../../api/home.js";
export default {
  data() {
    return {
      slideList: []
    };
  },
  created() {
    this.getSlide();
  },
  methods: {
    getSlide() {
      //获取轮播图的 方法
      this.$ajax.post(querySlide).then(
        function(res) {
          console.log(res);
          if (res.data.code == 0) {
            this.slideList = res.data.data;
          } else {
            // 失败
            Toast("轮播图请求失败");
          }
        }.bind(this)
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: pink;
    }
    &:nth-child(2) {
      background-color: red;
    }
    &:nth-child(3) {
      background-color: chartreuse;
    }
  }
}
.slide-img {
  width: 100%;
  height: 200px;
}

.mui-grid-view.mui-grid-9{
  background-color: #ffffff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>

