<template>
  <div class="mobile-scheme">             <!-- -----痛痒点 块 -推荐方案 - 移动--- -->
    <div class="scheme-block">
      <div class="scheme-title"><span class="bigface">4G乐享家分享计划159元套餐</span></div>
      <span class="typeface floatleft top12">每月享100M光宽带+共享2G国内流量+天翼高清+2张副卡（各5G本地流量）！
        玩游戏、看视频更流畅！多终端上网更流畅！赠送的手机卡可做为语音/上网使用，
        4G流量更快、更稳!超大流量放心用!每日仅需支付5.3元</span>
    </div>

    <div class="scheme-block">
      <div class="scheme-title"><span class="bigface">4G乐享家分享计划159元套餐</span></div>
      <span class="typeface floatleft top12">每月享100M光宽带+共享2G国内流量+天翼高清+2张副卡（各5G本地流量）！
        玩游戏、看视频更流畅！多终端上网更流畅！赠送的手机卡可做为语音/上网使用，
        4G流量更快、更稳!超大流量放心用!每日仅需支付5.3元</span>
    </div>

    <div class="scheme-block">
      <div class="scheme-title"><span class="bigface">4G乐享家分享计划159元套餐</span></div>
      <span class="typeface floatleft top12">每月享100M光宽带+共享2G国内流量+天翼高清+2张副卡（各5G本地流量）！
        玩游戏、看视频更流畅！多终端上网更流畅！赠送的手机卡可做为语音/上网使用，
        4G流量更快、更稳!超大流量放心用!每日仅需支付5.3元</span>
    </div>

    <div class="scheme-block">
      <div class="scheme-title"><span class="bigface">4G乐享家分享计划159元套餐</span></div>
      <span class="typeface floatleft top12">每月享100M光宽带+共享2G国内流量+天翼高清+2张副卡（各5G本地流量）！
        玩游戏、看视频更流畅！多终端上网更流畅！赠送的手机卡可做为语音/上网使用，
        4G流量更快、更稳!超大流量放心用!每日仅需支付5.3元</span>
    </div>

  </div>
</template>

<style scoped>

  /*字体相关---*/
  .titleface{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .blueface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .bigface{
    font-size:16px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#F71818;
  }

  /*字体相关---完*/

  /* 颜色相关----*/
  .red{  color:#F44848;  }
  .blue{  color:#33A0FF;  }
  .top12{margin-top:12px;}

  /* 颜色相关----完*/


  /* 公共----*/
  .lh40{  line-height:40px;  }
  .lh39{  line-height:39px;  }
  .lh30{  line-height:30px;  }
  .lh28{  line-height:28px;  }
  .lh24{  line-height:24px;  }
  .lh22{  line-height:22px;  }
  .lh18{  line-height:18px;  }

  .floatleft{ float:left;}
  .floatright{ float:right;}

  .left20{ margin-left:20px;}
  .right20{ margin-right:20px;}

  /* 公共----完*/

  .mobile-scheme{
    flex:1;
    overflow-x: hidden;
    overflow-y: auto;

    padding-right:2px;  /*防止跟滚动条冲突*/

    /*display:flex;*/
    /*flex-direction:column;*/
  }



  .scheme-block{
    height:auto;
    width:calc(100% - 18px);
    padding:10px 9px;
    border:1px solid #B2DBFF;
    border-radius: 5px;
    margin-top:10px;
    /*background: url("../../../assets/img/linearBg.jpg") center top repeat;*/
    background:#F2FBFF;

    cursor:pointer;
    float:left;

  }

  .scheme-title{
    width:100%;
  }




</style>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {


      };
    },
    computed:{

    },
    methods: {

      ...mapActions([
        'popoverAlert'
      ]),




    }
  };
</script>
