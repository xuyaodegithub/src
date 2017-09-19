<template>
  <div class="balance-change">
             <!-- -----余额变动查询 块-----  -->
    <div class="miscel-block-top">
      <span class="typeface lh40">月份</span>
      <div class="left10">
        <el-date-picker
          v-model="lshf_date_month"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </div>
      <el-button @click="lastMouth()" class="month_to">上一个月</el-button>
      <el-button @click="nextMouth()" class="month_to">下一个月</el-button>
      <span class="typeface lh40 distance15">历史合同号</span>
      <div class="left10">
        <el-select v-model="pre_select_history_contract" placeholder="请选择">
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
    <div class="miscel-block-bottom">      <!--余额变动 表格 -->
      <div class="table-head">
        <div class="item-list-big">时间</div>
        <div class="item-list-big">余额类型</div>
        <div class="item-list">上月余额</div>
        <div class="item-list">收入</div>
        <div class="item-list">支出</div>
        <div class="item-list">支出账期</div>
        <div class="item-list">月末余额</div>
        <div class="item-list">变动类型</div>
        <div class="item-list">账本类型</div>
        <div class="item-list">交费方式</div>
      </div>
      <div class="table-body">
        <div class="table-list" v-for="(item,key) in balanceChangeList">
          <div class="item-list-big">{{item.paymentDate}}</div>
          <div class="item-list-big">{{item.balanceType}}</div>
          <div class="item-list">{{item.preBalance}}</div>
          <div class="item-list">{{item.income}}</div>
          <div class="item-list" :class="{active : key==0}">{{item.expenditure}}</div>
          <div class="item-list">{{item.expenditure}}</div>
          <div class="item-list">{{item.currBalance}}</div>
          <div class="item-list">{{item.changeType}}</div>
          <div class="item-list active" style="color: #1476CC">
            <sapn v-if="item.detail!=null" style="cursor: pointer" @click="detailAlert(item.detail)">详细</sapn>
            <sapn v-if="item.detail==null">{{item.accountBook}}</sapn>
          </div>
          <div class="item-list">{{item.payMethod}}</div>
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
  .smallface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .distance15{
    margin-left:15px;
  }


  .lh40{
    line-height:40px;
  }

  /*字体相关---完*/

  /* 颜色相关----*/

  .red{
    color:#F44848;
  }
  .blue{
    color:#1476cc;
  }
  .gray{
    color:#8A8A8A;
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
  .floatleft{  float:left;  }

  .left5{margin-left:5px;}
  .right3{margin-right:3px;}
  .right5{margin-right:5px;}
  /* 公共----完*/

  .balance-change{
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

  .month_to{
    /*margin*/
    float:left;
    margin-left:10px;

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
    flex: 1;
    padding-left: 5px;
  }
  .miscel-block-bottom .item-list-big {
    flex: 1.5;
    padding-left: 5px;
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

        lshf_date_month:'',     //历史话费返还 月
        pre_select_history_contract:'',   //历史合同号 初始默认
        select_history_contract:[],

      };
    },
    created(){
//      let data = new Date();
//      this.lshf_date_month=data.getFullYear()+'-'+(data.getMonth()+1);
//      this.pre_select_history_contract=this.personMessage.billAccountNum;
    },
    activated(){
      let data = new Date();
      this.lshf_date_month=data.getFullYear()+'-'+(data.getMonth()+1);
      this.pre_select_history_contract=this.personMessage.billAccountNum;
    },
    computed:{
      ...mapGetters([
        'assetVOS','personMessage','businessCallNumber','balanceChangeList'
      ])
    },
    methods: {
    ...mapActions([                                   //0000000000000
      'popoverAlert','balanceChangeListActions'
    ]),
    detailAlert(item){
      this.popoverAlert('vDetail');
      this.$store.state.page.balanceChangeListDetail=item;
    },
    search(){
        let data={
          'number':'',
          'startDate':'',
          'endDate':''
        };
        data.number=this.pre_select_history_contract;
        if(typeof this.lshf_date_month == 'string'){
          let mouth = '';
          if(this.lshf_date_month.split('-')[1]<10){
            mouth = '0'+parseInt(this.lshf_date_month.split('-')[1]);
          }else{
            mouth = this.lshf_date_month.split('-')[1];
          }
          data.startDate=this.lshf_date_month.split('-')[0]+mouth
        }else{
          let mouth = '';
          let day = '';
          if(this.lshf_date_month.getMonth()<10){
            mouth = '0'+parseInt(this.lshf_date_month.getMonth());
          }else{
            mouth = this.lshf_date_month.getMonth();
          }
          data.startDate=this.lshf_date_month.getFullYear()+mouth
        }
      this.balanceChangeListActions(data);
    },
    lastMouth(){
      let mouthNow = '';
      if(typeof this.lshf_date_month == 'string'){
        let mouth = '';
        if(this.lshf_date_month.split('-')[1]=='01'){
          if(this.lshf_date_month.split('-')[1]<10){
            mouth = '12';
          }else{
            mouth ='12';
          }
          mouthNow=(this.lshf_date_month.split('-')[0]-1)+ '-' + mouth;
        }else{
          if(this.lshf_date_month.split('-')[1]<10){
            mouth = '0'+(this.lshf_date_month.split('-')[1]-1);
          }else{
            mouth = this.lshf_date_month.split('-')[1]-1;
          }
          mouthNow=this.lshf_date_month.split('-')[0]+ '-' +mouth;
        }

        this.lshf_date_month=mouthNow
      }else{
        let mouth = '';
        if(this.lshf_date_month.getMonth()=='1' ){
          if(this.lshf_date_month.getMonth()<10){
            mouth = '0'+(this.lshf_date_month.getMonth()-1);
          }else{
            mouth = this.lshf_date_month.getMonth()-1;
          }
          mouthNow=(this.lshf_date_month.getFullYear()-1)+ '-' +mouth
        }else{

          if(this.lshf_date_month.getMonth()<10){
            mouth = '0'+(this.lshf_date_month.getMonth()-1);
          }else{
            mouth = this.lshf_date_month.getMonth()-1;
          }
          mouthNow=this.lshf_date_month.getFullYear()+ '-' +mouth

        }
        this.lshf_date_month=mouthNow

      }
    },
    nextMouth(){
      let mouthNow = '';
      if(typeof this.lshf_date_month == 'string'){
        let mouth = '';
        if(this.lshf_date_month.split('-')[1]=='12'){
          mouth = '01';
          mouthNow=(parseInt(this.lshf_date_month.split('-')[0])+1)+ '-' + mouth;
        }else{
          if(this.lshf_date_month.split('-')[1]<9){
            mouth = '0'+(parseInt(this.lshf_date_month.split('-')[1])+1);
            console.log(mouth)
          }else{
            mouth = parseInt(this.lshf_date_month.split('-')[1])+1;
          }
          mouthNow=this.lshf_date_month.split('-')[0]+ '-' +mouth;
        }
        console.log(mouthNow)
        this.lshf_date_month=mouthNow
      }else{
        let mouth = '';
        if(this.lshf_date_month.getMonth()=='12' ){
          mouth = '01';
          mouthNow=(parseInt(this.lshf_date_month.getFullYear())+1)+ '-' +mouth
        }else{

          if(this.lshf_date_month.getMonth()<9){
            mouth = '0'+(parseInt(this.lshf_date_month.getMonth())+1);
          }else{
            mouth = parseInt(this.lshf_date_month.getMonth())+1;
          }
          mouthNow=this.lshf_date_month.getFullYear()+ '-' +mouth

        }
        this.lshf_date_month=mouthNow

      }
    },
    }
  };
</script>
