<template>
  <div class="service-synergy">             <!-- -----服务协同 块--- -->

    <div class="service-title">
      <i class="iconfont icon-jishiben handling-img blue"></i>
      <span class="plate-title lh24 left4 floatleft">服务协同</span>

        <i class="iconfont icon-weixin handling-img2-weixin"></i>
        <i class="iconfont icon-lianjie1 handling-img2-link"></i>
      <div class="clickbutton width105 height24 bk-change-normal1" @click="routingModeSelectionTurn()"><span class="smallface2">路由器设置方式</span></div>
      <div class="clickbutton width87 height24 right10 bk-change-normal1" @click="qqBootSmsTurn()"><span class="smallface2">QQ引导短信</span></div>

    </div>

    <div class="service-content">
            <span class="smallface lh18 left10">
              如需在线帮助，可以添加手机QQ公众号：中国电信，点击优惠帮助-在线客服，为您提供在线服务。
              如需在线帮助，可以添加手机QQ公众号：中国电信，点击优惠帮助-在线客服，为您提供在线服务。
              如需在线帮助，可以添加手机QQ公众号：中国电信，点击优惠帮助-在线客服，为您提供在线服务。

            </span>
    </div>

  </div>
</template>

<style scoped>
  /*字体相关---*/
  .plate-title{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .small-title{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
    margin-left:10px; /*通用字距离左边默认为10px 修改额外添加 */
  }
  .smallface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
  }
  .smallface2{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    line-height:24px;
    color:#333;
    text-align:center;
    display: block;

  }

  .blue{
    color:#33A0FF;
  }

  .left4{  margin-left:4px;  }
  .floatleft{  float:left;  }


  .lh18{  line-height:18px;  }
  .lh24{  line-height:24px;  }

  /*字体相关---完*/

  /* 颜色相关----*/

  /* 颜色相关----完*/


  /* 公共----*/
  .left10{  margin-left:10px;  }
  .right10{  margin-right:10px;  }
  .width87{ width:87px; }
  .width105{ width:105px; }
  .height24{height:24px;}


  .service-synergy{
    flex:1;

    display: flex;
    flex-direction:column;
  }

  .service-title{
    flex:35;
  }
  .service-content{
    flex:70;
    margin-top:5px;
    /*background: #888;*/
    overfloat-x:hidden;
    overflow-y: auto;
  }


  .handling-img{
    float:left;
    font-size:20px;
    /*background:#1c8de0;*/
  }

  .handling-img2-weixin{
    float:left;
    color:#04d102;
    font-size:24px;
    margin-left:16px;
  }
  .handling-img2-link{
    float:left;
    color:#7688D8;
    font-size:24px;
    margin-left:10px;
  }

  .clickbutton{
    border:1px solid #67b7ff;
    border-radius:5px;
    float:right;
    cursor: pointer;
    position: relative;
  }



  .bk-change-normal1{
    background: url("../../../assets/img/linearBg.jpg") center top repeat;
  }



</style>
<script>
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {




      };
    },
    computed:{

    },
    methods: {
//      ...mapActions([
//        'popoverAlert'
//      ]),
      ...mapActions([
          'popoverAlert'
      ]),


      qqBootSmsTurn(){
          this.popoverAlert('vQqBootSms')
      },
      routingModeSelectionTurn(){
          this.popoverAlert('vRoutingModeSelection')
      }



    }
  };
</script>
