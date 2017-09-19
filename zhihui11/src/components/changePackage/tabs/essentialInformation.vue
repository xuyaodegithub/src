<template>
  <div class="essential-information">             <!-- -----基本信息 块--- -->

    <div class="msg-title">
      <i class="iconfont icon-jishi handling-img blue"></i>
      <span class="titleface lh24 left5 floatleft">基本信息</span>

      <div class="select-block">
        <el-select v-model="pre_select_number" placeholder="请选择" class="select-number" size="small">
          <el-option
            v-for="item in select_number"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

    </div>
    <div class="msg-content">
      <div class="block-big">
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">客户类型</span>
          </div>
          <div class="block-content">
            <span class="typeface">家庭客户</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">在网年限</span>
          </div>
          <div class="block-content">
            <span class="typeface">8年</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">销售品</span>
          </div>
          <div class="block-content">
            <span class="typeface">乐享4G 129元套餐</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title1">
            <span class="typeface">同合同号近三月平均消费</span>
          </div>
          <div class="block-content1">
            <span class="typeface">160元</span>
          </div>
        </div>

      </div>
      <div class="block-big">
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">套餐类型</span>
          </div>
          <div class="block-content">
            <span class="typeface">单</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">UIM卡类型</span>
          </div>
          <div class="block-content">
            <span class="typeface">4G非NFC通用卡</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">手机终端类型</span>
          </div>
          <div class="block-content">
            <span class="typeface">无</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title1">
            <span class="typeface">是否开通4G</span>
          </div>
          <div class="block-content1">
            <span class="typeface">是</span>
          </div>
        </div>

      </div>
      <div class="block-big">
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">C网是否有协议</span>
          </div>
          <div class="block-content2">
            <span class="typeface">无</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">靓号保底</span>
          </div>
          <div class="block-content2">
            <span class="typeface"></span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title">
            <span class="typeface">上网活跃天数</span>
          </div>
          <div class="block-content2">
            <span class="typeface">20天/月</span>
          </div>
        </div>
        <div class="block-small">
          <div class="block-title1">

          </div>
          <div class="block-content3">

          </div>
        </div>

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

  .essential-information{
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
    flex-direction:row;
    align-items:center;

  }
  .select-block{
    flex:1;

    display: flex;
    flex-direction:row-reverse;
    align-items:center;
  }

  .select-number{
    /*float:right;*/
    width:195px;
  }

  .msg-content{
    flex:170;
    margin-top:10px;
    /*background:#eee;*/
    border:1px solid #D1EAFD;

    display: flex;
    flex-direction:row;
  }
  .block-big{
    flex:155;
    /*background:#8bb4e7;*/

    display: flex;
    flex-direction:column;
  }
  .block-small{
    flex:36;

    display: flex;
    flex-direction:row;

  }
  .block-title{
    flex:79;
    background:#F0F8FE;
    border-right:1px solid #D1EAFD;
    border-bottom:1px solid #D1EAFD;
    padding:3px;

    display: flex;
    align-items: center;
    /*justify-content:center;*/
  }
  .block-title1{
    flex:79;
    background:#F0F8FE;
    border-right:1px solid #D1EAFD;
    padding:3px;

    display: flex;
    align-items: center;
  }
  .block-content{
    flex:79;
    background:#fff;
    border-right:1px solid #D1EAFD;
    border-bottom:1px solid #D1EAFD;
    padding:3px;

    display: flex;
    align-items: center;
  }
  .block-content1{
    flex:79;
    background:#fff;
    border-right:1px solid #D1EAFD;
    padding:3px;

    display: flex;
    align-items: center;
  }
  .block-content2{
    flex:79;
    background:#fff;
    border-bottom:1px solid #D1EAFD;
    padding:3px;

    display: flex;
    align-items: center;
  }
  .block-content3{
    flex:79;
    background:#fff;
    padding:3px;

    display: flex;
    align-items: center;
  }


</style>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {

        pre_select_number:'',
        select_number:[{
          value:'one',
          label:'13398789998 - 移动号码'
        },{
          value:'two',
          label:'13398333355 - 移动号码'
        }]


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
