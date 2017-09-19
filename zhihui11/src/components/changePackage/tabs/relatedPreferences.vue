<template>
  <div class="related-preferences">             <!-- -----相关优惠 块--- -->

    <div class="msg-title">
      <span class="typeface lh24 right20 floatleft">相关优惠</span>
      <span class="blueface lh24 right20 floatleft">天翼手机产品介绍及优惠活动汇总</span>
      <span class="blueface lh24 right20 floatleft">开通4G功能并预存话费送分享礼包</span>
      <span class="blueface lh24 right20 floatleft">存折计划</span>
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

  /* 公共----完*/

  .related-preferences{
    flex:1;

    display: flex;
    flex-direction:column;
  }


  .msg-title{
    flex:1;
    /*background:#f3cc31;*/

    display: flex;
    align-items:center;

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
