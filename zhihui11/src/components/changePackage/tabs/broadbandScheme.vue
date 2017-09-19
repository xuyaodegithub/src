<template>
  <div class="broadband-scheme">             <!-- -----痛痒点 块 -推荐方案 - 宽带--- -->


    <div class="scheme-block">
      <div class="scheme-title"><span class="bigface">网龄提速活动</span></div>
      <span class="typeface top12 floatleft">宽带为在网5年以上的老用户，可以享受20M包一年或两年提速至100M</span>
    </div>

    <div class="scheme-block">
      <div class="scheme-title"><span class="bigface">百兆宽带+itv</span></div>
      <span class="typeface top12 floatleft">100M宽带，赠送一部天翼高清，到期后天翼高清按10元/月收取</span>
    </div>

    <div class="scheme-block">
      <div class="scheme-title"><span class="bigface">百兆宽带+itv</span></div>
      <span class="typeface top12 floatleft ">100M宽带，赠送一部天翼高清，到期后天翼高清按10元/月收取
      100M宽带，赠送一部天翼高清，到期后天翼高清按10元/月收取
        100M宽带，赠送一部天翼高清，到期后天翼高清按10元/月收取
        100M宽带，赠送一部天翼高清，到期后天翼高清按10元/月收取
      </span>
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
  .top5{margin-top:5px;}
  .top12{margin-top:12px;}

  /* 公共----完*/

  .broadband-scheme{
    flex:1;
    /*background:#eee;*/
    overflow-x: hidden;
    overflow-y: auto;

    padding-right:2px;  /*防止跟滚动条冲突*/

    /*display: flex;*/
    /*flex-direction:column;*/

  }

  .scheme-block{
    /*min-height: 30px;*/
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
