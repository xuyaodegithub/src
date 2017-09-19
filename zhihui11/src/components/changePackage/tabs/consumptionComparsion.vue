<template>
  <div class="consumption-comparsion">             <!-- -----消费对比 块--- -->

    <div class="msg-title">
      <i class="iconfont icon-lifangti handling-img blue top2"></i>
      <span class="titleface lh24 left5 floatleft">消费对比</span>

      <div class="select-block">

        <span class="typeface deep-blue left5">添加对比</span>
        <i class="iconfont icon-iconjia handling-img2 blue left20"></i>

        <el-checkbox v-model="checked_difference" class="top5"><span class="typeface">展示差异项</span></el-checkbox>
      </div>

    </div>

    <div class="msg-content">
        <v-consumption-comparsion-form></v-consumption-comparsion-form>
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
  .close{
    font-size:20px;
    color:#8A8A8A;
    margin-left:10px;
    margin-top:2px;
    cursor:pointer;
  }

  /*字体相关---完*/

  /* 颜色相关----*/
  .red{  color:#F44848;  }
  .blue{  color:#33A0FF;  }
  .deep-blue{ color:#1476CC};

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
  .top5{margin-top:5px;}
  .left4{ margin-left:4px;}
  .left5{ margin-left:5px;}
  .left20{ margin-left:20px;}

  /* 公共----完*/

  .consumption-comparsion{
    flex:1;
    padding:9px 14px;
    /*flex-shrink: 0;*/

    display: flex;
    flex-direction:column;
  }


  .handling-img{
    /*float:left;*/
    font-size:18px;
  }
  .handling-img2{
    font-size:10px;
  }

  .msg-title{
    /*flex:28;*/
    height:22px;
    /*background:#f3cc31;*/
    user-select: none;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .select-block{
    flex:1;

    display: flex;
    flex-direction:row-reverse;
    align-items: center;

  }

  ::-webkit-scrollbar
  {
    width: 7px;
    height: 7px;
    background-color: #F5F5F5;
  }

  .msg-content{
    flex:370;
    /*height:330px;*/
    /*width:calc(100% - 10px);*/
    width:590px;
    margin-top:5px;
    /*overflow-x: auto;*/
    /*overflow-y: hidden;*/
    overflow: auto;

    display:flex;
    flex-direction:row;

  }



</style>
<script>
  import { mapActions } from 'vuex'
  import vConsumptionComparsionForm from "../tabs/consumptionComparsionForm.vue"

  export default {
    data() {
      return {
        isclose:'0',


      };
    },
    computed:{

    },
    methods: {

      ...mapActions([
        'popoverAlert'
      ]),

      toclose(){
//        this.show = !this.show;
        this.isclose='1'

      }

    },
    components:{
      vConsumptionComparsionForm,
    }
  };
</script>
