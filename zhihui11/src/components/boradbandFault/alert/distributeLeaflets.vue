<template>
  <div class="demo incomingHistory">            <!-- 派单 -->
    <div class="popover-head">
      <span class="title">派单</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <div class="option">
        <div class="option-left">
          <el-input size="small" v-model="pre_1" class="number_input"></el-input>
          <span class="smallface">主叫号码</span>

        </div>
        <div class="option-right">
          <el-input size="small" v-model="pre_2" class="number_input"></el-input>
          <span class="smallface">业务号码</span>
        </div>
      </div>

      <div class="option">
        <div class="option-left">
          <el-input size="small" v-model="pre_3" class="number_input"></el-input>
          <span class="smallface">专线编号</span>

        </div>
        <div class="option-right">
          <el-input size="small" v-model="pre_4" class="number_input"></el-input>
          <span class="smallface">联系人</span>
        </div>
      </div>

      <div class="option">
        <div class="option-left">
          <el-input size="small" v-model="pre_5" class="number_input"></el-input>
          <span class="smallface">主联系电话</span>

        </div>
        <div class="option-right">
          <el-input size="small" v-model="pre_6" class="number_input"></el-input>
          <span class="smallface">备联系电话</span>
        </div>
      </div>

      <div class="option">
        <div class="option-left">
          <el-date-picker
            v-model="pre_datetime_start"
            type="datetime"
            placeholder="选择预约开始时间"
            size="small"
            class="date_input">
          </el-date-picker>
          <el-tooltip effect="dark" content="预约开始时间" placement="top-start">
            <span class="smallface">预开</span>
          </el-tooltip>
        </div>
        <div class="option-right">
          <el-date-picker
            v-model="pre_datetime_end"
            type="datetime"
            placeholder="选择预约结束时间"
            size="small"
            class="number_input">
          </el-date-picker>
          <el-tooltip effect="dark" content="预约结束时间" placement="top-start">
            <span class="smallface">预结</span>
          </el-tooltip>
        </div>
      </div>

      <div class="option">
        <div class="option-left">
          <el-input size="small" v-model="pre_7" class="number_input"></el-input>
          <span class="smallface">故障现象大类</span>
        </div>
        <div class="option-right">
          <el-input size="small" v-model="pre_8" class="number_input"></el-input>
          <span class="smallface">故障现象小类</span>
        </div>
      </div>

      <div class="option">
        <div class="option-left">
          <el-input size="small" v-model="pre_9" class="number_input"></el-input>
          <span class="smallface">品牌标识</span>
        </div>
        <div class="option-right">
          <el-input size="small" v-model="pre_10" class="number_input"></el-input>
          <span class="smallface">操作员工号</span>
        </div>
      </div>

      <div class="option_checkbox">
        <el-checkbox v-model="checked1"><span class="checkboxface">服务承诺区域</span></el-checkbox>
        <el-checkbox v-model="checked2"><span class="checkboxface">紧急</span></el-checkbox>
        <el-checkbox v-model="checked3"><span class="checkboxface">短信发送</span></el-checkbox>
      </div>

      <div class="option">
          <div class="option-left">
            <el-input size="small" v-model="pre_11" class="number_input"></el-input>
            <span class="smallface">客户星级</span>
          </div>
          <div class="option-right"></div>
      </div>

      <div class="option">
        <div class="option_op">
          <el-input size="small" v-model="pre_12" class="number_input2"></el-input>
          <span class="smallface">故障地址</span>
        </div>
      </div>

      <div class="option">
        <div class="option_op">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="输入备注"
            v-model="pre_remark"
            resize="none"
            class="number_input2"></el-input>
          <span class="smallface">备注</span>
        </div>
      </div>

      <div class="option top5">
        <div class="option_op">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="输入预处理信息"
            v-model="pre_msg"
            resize="none"
            class="number_input2"></el-input>
          <span class="smallface">预处理信息</span>
        </div>
      </div>


    </div>

    <div class="popover-bottom">
      <div class="option">
        <el-button class="leftwid">预处理</el-button>
        <el-button>预处理归档</el-button>
        <el-button>归档后回访</el-button>
        <el-button type="primary" class="buttonclick">工单派发</el-button>
        </div>

    </div>




  </div>
</template>

<style scoped>
  .red{color:#F44848}
  .blue{color:#33A0FF}
  .top5{margin-top:5px}
  .demo{
    width: 600px;
    height:637px;
    background: #F0FAFF;
    margin-left: -200px;
    margin-top: -300px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-head i{          /*头关闭按钮*/
    float: right;
    color: #A1C1E2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }
  .popover-head .title{
    margin-left: 15px;
    font-weight: bold;
  }
  .popover-head .small-title{
    font-size: 12px;
    color: #999999;
    font-weight: normal;
  }
  .popover-main{
    padding: 10px 69px 15px 37px;
    width: calc(100% - 106px);
    /*padding: 15px 37px 15px 37px;*/
    /*width: calc(100% - 74px);*/
    height:515px;
    border-bottom:1px solid #c5e2f0;
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-bottom{
    padding:10px 17px 20px 17px;
    width:calc(100% - 34px);
    height:63px;
  }
  /*---------↓*/

  .option{
    /*background:#00ff00;*/
    width:100%;
    float:left;
    display:flex;
    flex-direction:row;
  }
  .option_op{
    flex:1;
  }
  .option2{
    width:100%;
    float:left;
    margin-top:12px;

  }
  .option_checkbox{
    /*background:#00ff00;*/
    width:100%;
    float:left;
    margin-top:12px;
    margin-left:50px;
  }
  .option-left{
    /*background:#888;*/
    flex:1;
    padding-right:30px;
    float:right;
  }
  .option-right{
    /*background:#555;*/
    flex:1;
  }
  .wordtype{
    font-size:12px;
    line-height:18px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    /*color:#F44848;*/
    float:left;
    /*background: #333;*/
  }
  .smallface{
    font-size:12px;
    line-height:40px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:right;

  }

  .buttonclick{
    display:block;
    margin:0 auto;
  }

  .number_input{
    width:150px;
    float:right;
    margin-top:5px;
    margin-left:10px;

  }
  .number_input2{
    width:413px;
    float:right;
    margin-top:5px;
    margin-left:10px;

  }

  .date_input{
    width:160px;
    float:right;
    margin-top:5px;
    margin-left:10px;
    /*margin-right:-20px;*/

  }

  .checkboxface{
    font-size:12px;
    line-height:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:right;
    margin-top:3px;
    margin-right:30px;
  }

  .leftwid{
    margin-left:calc(15%);
  }
  /*---------↑*/
  .table-head{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #F1F4F7;
    border: 1px solid #E7ECF1;
  }
  .table-head .head-item{
    width: 100%;
    flex: 1;
  }
  .table-head .big{
    width: 100%;
    flex: 2;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 29px;
    overflow: auto;
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #ffffff;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list .head-item{
    width: 100%;
    flex: 1;
  }
  .table-list .head-item .blue{
    color: #1476CC;
    cursor: pointer;
  }
  .table-list .big{
    width: 100%;
    flex: 2;
  }
  .table-list .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }
  .popover-main .title{
    margin: 15px 0 12px 0;
    font-weight: 500;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        pre_1:'',pre_2:'',pre_3:'',pre_4:'',pre_5:'',
        pre_6:'',pre_7:'',pre_8:'',pre_9:'',pre_10:'',
        pre_11:'',pre_12:'',

        pre_datetime_start:'',
        pre_datetime_end:'',

        checked1:true,
        checked2:'',
        checked3:'',

        pre_remark:'',
        pre_msg:'',

      };
    },
    computed:{
      ...mapGetters([
        ''
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ])
    }
  };
</script>
