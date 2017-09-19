<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">提醒短信查询</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <!--<div class="box-top">-->
        <div class="option">
          <span class="wordtype">开始日期</span>
          <div class="left10">
            <el-date-picker
              v-model="remind_sms_date_start"
              type="date"
              placeholder="选择日期"
              format="yyyy-MM-DD"
            style="width:120px;">
            </el-date-picker>
          </div>
          <span class="wordtype left15">结束日期</span>
          <div class="left10">
            <el-date-picker
              v-model="remind_sms_date_end"
              type="date"
              format="yyyy-MM-DD"
              placeholder="选择日期"
              style="width:120px;">
            </el-date-picker>
          </div>
          <span class="wordtype left15">同合同号码</span>
          <div class="floatleft left10">
            <el-select v-model="pre_same_contract_number" placeholder="请选择" style="width:180px;">
              <el-option
                v-for="(item,key) in assetVOS"
                v-if="item.productName=='移动电话'"
                :key="key"
                :label="item.productName + ' ' + item.integrationNum"
                :value="item.integrationNum">
              </el-option>
            </el-select>
          </div>
          <el-button type="primary" @click="search()" class="left15">查询</el-button>
        </div>

        <div class="table-head">
          <div class="head-item "><span>提醒类型</span></div>
          <div class="head-item "><span>提醒时间</span></div>
          <div class="head-item big"><span>提醒内容</span></div>
        </div>
        <div class="table-box">
          <div class="table-list" v-for="item in queryAlarmInfo">
            <div class="head-item "><span>{{item.type}}</span></div>
            <div class="head-item "><span>{{item.endTime | timeLimit}}</span></div>
            <div class="head-item big"><span>{{item.message}}</span></div>
          </div>
        </div>
      <!--</div>-->
    </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 900px;
    height: 448px;
    background: #F0FAFF;
    margin-left: -350px;
    margin-top: -220px;
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
    padding: 20px 12.5px;
    width: calc(100% - 25px);
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  /*---------↓*/

  .option{
    width:100%;
    height:50px;
    /*background:#00ff00;*/
    margin-top:0px;
    float:left;
  }
  .wordtype{
    font-size:12px;
    line-height:40px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:left;

  }
  .left10{
    margin-left:10px;
    float:left;
  }
  .left15{
    margin-left:15px;
    float:left;
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
    flex: 4;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 270px;
    overflow: auto;
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list{
    width: 100%;
    display: flex;
    min-height: 20px;
    float: left;
    line-height: 20px;
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
        remind_sms_date_start:'',
        remind_sms_date_end:'',

        pre_same_contract_number:'',

        same_contract_number:[{              //卡查询 查询类型 --类型   （主要|基于此的选择将显示不同的块）
          value:'111',
          label:'第一个'
        },{
          value:'222',
          label:'第二个'
        }],

      };
    },
    created(){
      if(this.personMessage.productName=='移动电话'){
        this.pre_same_contract_number=this.personMessage.integrationNum;
        let data = new Date();
        this.remind_sms_date_start=data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay();
        this.remind_sms_date_end=data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay();
      }else{
        this.pre_same_contract_number='';
        let data = new Date();
        this.remind_sms_date_start=data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay();
        this.remind_sms_date_end=data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay();
      }
    },
    activated(){
    },
    computed:{
      ...mapGetters([
        'assetVOS','personMessage','businessCallNumber','queryAlarmInfo'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert','queryAlarmInfoActions'
      ]),
      search(){
        let data={
            'number':'',
            'startDate':'',
            'endDate':''
        };
        data.number=this.pre_same_contract_number;
        if(typeof this.remind_sms_date_start == 'string'){
          let mouth = '';
          let day = '';
          if(this.remind_sms_date_start.split('-')[1]<10){
            mouth = '0'+this.remind_sms_date_start.split('-')[1];
          }else{
            mouth = this.remind_sms_date_start.split('-')[1];
          }
          if(this.remind_sms_date_start.split('-')[2]<10){
            day = '0'+this.remind_sms_date_start.split('-')[2];
          }else{
            day = this.remind_sms_date_start.split('-')[2];
          }
          data.startDate=this.remind_sms_date_start.split('-')[0]+mouth+day;
        }else{
          let mouth = '';
          let day = '';
          if(this.remind_sms_date_start.getMonth()<10){
            mouth = '0'+this.remind_sms_date_start.getMonth();
          }else{
            mouth = this.remind_sms_date_start.getMonth();
          }
          if(this.remind_sms_date_start.getDay()<10){
            day = '0'+this.remind_sms_date_start.getDay();
          }else{
            day = this.remind_sms_date_start.getDay();
          }
          data.startDate=this.remind_sms_date_start.getFullYear()+mouth+day;
        }
        if(typeof this.remind_sms_date_end == 'string'){
          let mouth = '';
          let day = '';
          if(this.remind_sms_date_end.split('-')[1]<10){
            mouth = '0'+this.remind_sms_date_end.split('-')[1];
          }else{
            mouth = this.remind_sms_date_end.split('-')[1];
          }
          if(this.remind_sms_date_end.split('-')[2]<10){
            day = '0'+this.remind_sms_date_end.split('-')[2];
          }else{
            day = this.remind_sms_date_end.split('-')[2];
          }
          data.endDate=this.remind_sms_date_end.split('-')[0]+mouth+day;
        }else{
          let mouth = '';
          let day = '';
          if(this.remind_sms_date_end.getMonth()<10){
            mouth = '0'+this.remind_sms_date_end.getMonth();
          }else{
            mouth = this.remind_sms_date_end.getMonth();
          }
          if(this.remind_sms_date_end.getDay()<10){
            day = '0'+this.remind_sms_date_end.getDay();
          }else{
            day = this.remind_sms_date_end.getDay();
          }
          data.endDate=this.remind_sms_date_end.getFullYear()+mouth+day;
        }
        this.queryAlarmInfoActions(data);
      }
    }
  };
</script>
