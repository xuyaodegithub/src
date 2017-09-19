<template>
  <div class="stop-machine-record">
           <!-- -----停复机记录查询 块-----  -->
    <div class="miscel-block-top">
      <span class="typeface lh40">开始日期</span>
      <div class="left10">
        <el-date-picker
          v-model="remind_sms_date_start"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <span class="typeface lh40 distance15">结束日期</span>
      <div class="left10">
        <el-date-picker
          v-model="remind_sms_date_end"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <span class="typeface lh40 distance15">历史合同号</span>
      <div class="left10">
        <el-select v-model="pre_same_contract_number" placeholder="请选择">
          <el-option
            v-for="item in select_history_contract"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" class="floatleft left15" @click="search()">查询</el-button>
    </div>
    <div class="miscel-block-bottom">      <!--停复机 表格 -->
      <div class="table-head">
        <div class="item-list">欠费金额</div>
        <div class="item-list">限制类型</div>
        <div class="item-list">状态</div>
        <div class="item-list-big">停复机时间</div>
        <div class="item-list">停复机原因</div>
        <div class="item-list">处理人</div>

      </div>
      <div class="table-body">
        <div class="table-list" v-for="item in queryCallLimitList">
          <div class="item-list">{{item.oweCharge}}</div>
          <div class="item-list">{{item.kindCode}}</div>
          <div class="item-list">{{item.state}}</div>
          <div class="item-list-big">{{item.stateDate}}</div>
          <div class="item-list">{{item.remarks}}</div>
          <div class="item-list">{{item.operatorCode}}</div>
        </div>
      </div>

      <div class="table-page">
        <div class="page-showing">
          <span class="smallface floatleft left5">显示</span>
          <span class="smallface floatleft left5">1</span>
          <span class="smallface floatleft left5">-</span>
          <span class="smallface floatleft left5">10</span>
          <span class="smallface floatleft left5">条，共</span>
          <span class="smallface floatleft left5">143</span>
          <span class="smallface floatleft left5">条</span>
        </div>

        <div class="page-paging">
          <i class="iconfont icon-dL img-icon gray right5"></i>
          <i class="iconfont icon-toLeft img-icon gray right5"></i>
          <span class="smallface floatleft right5">第</span>
          <input type="text" name="page-input" class="page-input" />

          <span class="smallface floatleft right5">页，共</span>
          <span class="smallface floatleft right5">15</span>
          <span class="smallface floatleft right5">页</span>

          <i class="iconfont icon-toRight img-icon gray right5"></i>
          <i class="iconfont icon-dR img-icon gray right5"></i>
        </div>
      </div>

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
    float:left;
  }
  .distance15{
    margin-left:15px;
  }


  .smallface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .gray{
    color:#8A8A8A;
  }
  .right5{margin-right:5px;}
  .left5{margin-left:5px;}


  .lh40{
    line-height:40px;
  }
  .lh39{
    line-height:39px;
  }
  .lh30{
    line-height:30px;
  }
  .lh24{
    line-height:24px;
  }

  /*字体相关---完*/

  /* 颜色相关----*/

  .color-ash{
    background:#F0F0F0;
  }
  .color-blue{
    background:#F4FAFF;
    border:1px solid #67B7FF;
  }
  .color-red{
    background:#FFF9F3;
    border:1px solid #FA9126;
  }

  .red{
    color:#F44848;
  }
  .blue{
    color:#1476cc;
  }

  /* 颜色相关----完*/


  /* 公共----*/
  .left10{
    margin-left:10px;
    float:left;
  }
  .left15{
    margin-left:15px;
    float:left;
  }
  .floatleft{
    float:left;
  }
  /* 公共----完*/

  .stop-machine-record{
    flex:1;

    display:flex;
    flex-direction:column;
  }

  .miscel-block-top{
    flex:48;
  }
  .miscel-block-bottom{
    flex:190;
    background:#fff;
    margin-top:5px;

    display:flex;
    flex-direction:column;
  }

  .miscel-block-bottom .table-head{
    flex:28;
    line-height: 24px;
    width:100%;
    background:#F1F4F7;
    color: #333333;
    float:left;
    display: flex;
    flex-direction: row;
    align-items:center;
  }

  .miscel-block-bottom .table-body{
    flex:120;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .miscel-block-bottom .item-list{
    flex:1;
    padding-left:5px;
  }
  .miscel-block-bottom .item-list-big{
    flex:1.5;
    padding-left:5px;
  }
  .miscel-block-bottom .table-list{
    height:28px;
    line-height: 28px;
    border-left: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    color: #333333;
    width:100%;
    float:left;
    display: flex;
    flex-direction: row;
  }
  .miscel-block-bottom .table-list .active{
    color: #1476CC;
  }

  .miscel-block-bottom .table-page{
    flex:24;
    margin-top:10px;

    /*background:#eee;*/
  }

  .page-showing{
    float:left;
    width:auto;
  }

  .page-paging{
    float:right;
    width:auto;

  }

  .img-icon{
    float:left;
    font-size:16px;
    cursor:pointer;
  }
  .page-input{
    width:36px;
    height:24px;
    border:1px solid #D9D9D9;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color:#1D9BD9;
    background:#fff;
    font-size:14px;
    line-height:28px;
    text-align:center;
    float:left;
    margin-top:-5px;
    margin-right:5px;
  }

</style>
<script>

  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        remind_sms_date_start:'',     //充值交费日期
        remind_sms_date_end:'',

        pre_same_contract_number:'',   //历史合同号 初始默认
        select_history_contract:[],

      };
    },
    created(){
//      let data = new Date();
//      this.remind_sms_date_start=data.getFullYear()+'-'+(data.getMonth()-1)+'-'+'1';
//      this.remind_sms_date_end=data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay();
//      this.pre_same_contract_number=this.personMessage.billAccountNum;
    },
    activated(){
      let data = new Date();
      this.remind_sms_date_start=data.getFullYear()+'-'+(data.getMonth()-1)+'-'+'1';
      this.remind_sms_date_end=data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay();
      this.pre_same_contract_number=this.personMessage.billAccountNum;
    },
    computed:{
      ...mapGetters([
        'assetVOS','personMessage','businessCallNumber','queryRechargeList','queryCallLimitList'
      ])
    },
    methods: {
      ...mapActions([                                   //0000000000000
        'popoverAlert','queryCallLimitListActions'
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
        this.queryCallLimitListActions(data);
      }
    }
  };
</script>
