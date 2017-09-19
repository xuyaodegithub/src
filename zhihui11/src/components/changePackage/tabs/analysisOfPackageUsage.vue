<template>
  <div class="analysis-of-package-usage">             <!-- -----客户前三个月套餐使用分析 块--- -->

    <div class="msg-title">
      <i class="iconfont icon-xianxingshangsheng handling-img blue"></i>
      <span class="titleface lh24 left5 floatleft">客户前三个月套餐使用分析</span>
    </div>
    <div class="msg-content">
      <div class="form-detail">

      </div>
      <div class="form-induce">
        <span class="typeface">客户套餐费有超出，</span>
        <span class="typeface red">流量</span>
        <span class="typeface"> 使用居多</span>
      </div>

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

  .top2{margin-top:2px;}
  .left4{ margin-left:4px;}
  .left5{ margin-left:5px;}

  /* 公共----完*/

  .analysis-of-package-usage{
    flex:1;
    padding:9px 14px;

    display: flex;
    flex-direction:column;
  }


  .handling-img{
    float:left;
    font-size:18px;
  }

  .msg-title{
    flex:28;
    /*background:#f3cc31;*/
    user-select: none;

    display: flex;
    align-items:center;
  }

  .msg-content{
    flex:170;
    margin-top:5px;
    /*background:#eee;*/

    display:flex;
    flex-direction:column;
  }

  .form-detail{
    flex:133;
    background:#eee;
  }
  .form-induce{
    flex:26;

    display:flex;
    flex-direction:row;

    align-items: center;
    justify-content: center;
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
