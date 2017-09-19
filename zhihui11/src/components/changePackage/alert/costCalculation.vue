<template>
  <div class="demo incomingHistory">            <!-- 费用计算 -->
    <div class="popover-head">
      <span class="title">费用计算</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <div class="main-top">

        <div class="top-msg">
          <div class="select-block-left"><span class="typeface">同址固话号码：</span></div>
          <div class="select-block-right">
            <el-input class="width130" type="text" size="small"></el-input>
            <el-button class="width64 left10" type="primary" size="small">查询</el-button>
          </div>
        </div><!--同址固话号码 -->

        <div class="top-msg">
          <div class="select-block-left"><span class="typeface">同地址已有资产：</span></div>
          <div class="select-block-right">
            <el-checkbox v-model="existing_assets1"><span class="typeface">ITV</span></el-checkbox>
            <el-checkbox v-model="existing_assets2"><span class="typeface">固话</span></el-checkbox>
          </div>
        </div><!--同地址已有资产 -->

        <div class="top-msg">
          <div class="select-block-left"><span class="typeface">确认地址：</span></div>
          <div class="select-block-right">
            <span class="typeface">地区</span>
            <el-select v-model="pre_select_region" size="small" class="width90 left10 " placeholder=" ">
              <el-option
                v-for="item in select_region"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="font-size:12px;">
              </el-option>
            </el-select>

            <span class="typeface left20">县级市</span>
            <el-select v-model="pre_select_country" size="small" class="width90 left10" placeholder=" ">
              <el-option
                v-for="item in select_country"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div><!--确认地址 -->

        <div class="top-msg">
          <div class="select-block-left"><span class="typeface">线路类型：</span></div>
          <div class="select-block-right">
            <el-select  v-model="pre_select_line" size="small" class="width200" placeholder="">
              <el-option
                v-for="item in select_line"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div><!--线路类型 -->

        <div class="top-msg">
          <div class="select-block-left"><span class="typeface">套餐类型：</span></div>
          <div class="select-block-right2">
            <div class="combo-select-block">
              <el-radio class="select-combo" v-model="select_combo" label="1"><span class="typeface">4G乐享家分享计划</span></el-radio>
              <el-radio class="select-combo" v-model="select_combo" label="2"><span class="typeface">包年宽带</span></el-radio>
              <el-radio class="select-combo" v-model="select_combo" label="3"><span class="typeface">假期宽带（四季）</span></el-radio>
            </div>
            <div class="combo-select-block">
              <el-radio class="select-combo" v-model="select_combo" label="4"><span class="typeface">假期宽带（寒暑）</span></el-radio>
              <el-radio class="select-combo" v-model="select_combo" label="5"><span class="typeface">合家欢套餐</span></el-radio>
              <el-radio class="select-combo" v-model="select_combo" label="6"><span class="typeface">包月宽带</span></el-radio>
            </div>

          </div>
        </div><!--套餐类型 -->

        <div class="top-msg2">
          <div class="select-block-left"></div>
          <div class="select-block-right3">

            <div class="detail-block top10">
              <span class="typeface red">套餐档次：</span>
              <el-select v-model="pre_select_combo_grade" size="small" class="width200" placeholder="">
                <el-option
                  v-for="item in select_combo_grade"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>

            <div class="detail-block top15">
              <span class="typeface red">加装资产：</span>
              <el-checkbox v-model="asset_installation1"><span class="typeface">宽带</span></el-checkbox>
              <el-checkbox v-model="asset_installation1"><span class="typeface">C网</span></el-checkbox>
              <el-checkbox v-model="asset_installation1"><span class="typeface">ITV</span></el-checkbox>
              <el-checkbox v-model="asset_installation1"><span class="typeface">固话</span></el-checkbox>
            </div>

            <div class="detail-block top15">
              <span class="typeface red">速率：</span>
              <el-radio v-model="rate" label="1"><span class="typeface">100M</span></el-radio>
              <el-radio v-model="rate" label="2"><span class="typeface">50M</span></el-radio>
              <el-radio v-model="rate" label="3"><span class="typeface">20M</span></el-radio>
              <el-radio v-model="rate" label="4"><span class="typeface">200M</span></el-radio>
              <el-radio v-model="rate" label="5"><span class="typeface">500M</span></el-radio>
              <el-radio v-model="rate" label="6"><span class="typeface">1000M</span></el-radio>
            </div>

            <div class="detail-block top15">
              <span class="typeface red">时限（非包月）：</span>
              <el-radio v-model="duration" label="1"><span class="typeface">一年</span></el-radio>
              <el-radio v-model="duration" label="2"><span class="typeface">两年</span></el-radio>
              <el-radio v-model="duration" label="3"><span class="typeface">三年</span></el-radio>
              <el-radio v-model="duration" label="4"><span class="typeface">五年</span></el-radio>
            </div>

            <div class="detail-block top15">
              <span class="typeface red">时限（包月）：</span>
              <el-input class="width38" type="text" size="small" max-length="2"></el-input>
              <span class="typeface left5">月</span>
              <span class="typeface gray left10">（可加减月份）</span>
            </div>

            <div class="detail-block top15">
              <span class="typeface">已有C网套餐：</span>
              <el-radio v-model="exist_combo" label="1"><span class="typeface">3G套餐</span></el-radio>
              <el-radio v-model="exist_combo" label="2"><span class="typeface">4G套餐</span></el-radio>
            </div>

          </div>
        </div><!--套餐细节 -->

        <div class="top-msg">
          <div class="calculation-block">
            <el-button class="width100 " type="danger" size="small">计算</el-button>
          </div>

        </div><!--计算按钮 -->


      </div>

      <div class="main-bottom">

        <div class="bottom-msg">
          <div class="msg-block ">
            <span class="typeface">装机工料费：</span>
            <span class="typeface red">8元</span>
          </div>

          <div class="msg-block ">
            <span class="typeface">宽带终端费（租用）：</span>
            <span class="typeface">免费</span>
          </div>
        </div>
        <div class="bottom-msg">
          <div class="msg-block">
            <span class="typeface">ITV终端费（租用）：</span>
            <span class="typeface">免费</span>
          </div>

          <div class="msg-block">
            <span class="typeface">宽带包年/包月费用：</span>
            <span class="typeface red">1000元</span>
          </div>
        </div>
        <div class="bottom-msg">
          <div class="msg-block">
            <span class="typeface">合计：</span>
            <span class="redface">998</span>
            <span class="typeface red">元</span>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height:663px;
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
    padding: 0px 15px 10px 15px;
    width: calc(100% - 30px);
    height:623px;
    /*background:#eee;*/

    display: flex;
    flex-direction:column;
  }
  .main-top{
    height:526px;
    /*background:#eee;*/
    border-bottom:1px solid #C5E2F0;

    display: flex;
    flex-direction:column;
  }
  .top-msg{
    height:auto;
    margin-top:15px;

    display:flex;
    flex-direction:row;
    /*align-items: center;*/
  }
  .top-msg2{
    height:233px;
    margin-top:15px;
    padding-right:15px;

    display:flex;
    flex-direction:row;
    /*align-items: center;*/
  }

  .select-block-left{
    width:96px;
    /*background:#ccc;*/

    display:flex;
    flex-direction:row;
    align-items: center;
  }
  .select-block-right{
    flex:1;
    /*background:#888;*/
    margin-left:10px;

    display:flex;
    flex-direction:row;
    align-items: center;
  }
  .select-block-right2{
    flex:1;
    /*background:#888;*/
    margin-left:10px;

    display:flex;
    flex-direction:column;
  }
  .select-block-right3{
    flex:1;
    background:#E7ECF1;
    margin-left:10px;
    padding-left: 5px;

    display:flex;
    flex-direction:column;
  }
  .detail-block{
    height:auto;
    /*background:#ccc;*/

    display: flex;
    flex-direction: row;
    align-items:center;

  }


  .combo-select-block{
    margin-left:-10px;
  }
  .select-combo{
    margin-left:10px;
  }

  .calculation-block{
    flex:1;

    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
  }





  .main-bottom{
    /*height:94px;*/
    flex:1;
    margin:10px 0;
    /*background:#42d885;*/

    display: flex;
    flex-direction:column;

  }
  .bottom-msg{

    flex:1;

    display: flex;
    flex-direction:row;
  }
  .msg-block{
    flex:1;

    /*background:#42d885;*/
  }

  /*---------↓*/

  .option{
    /*background:#00ff00;*/
    width:100%;
    float:left;
  }

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
  .redface{
    font-size:16px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#F44848;
  }
  .red{color:#F44848;}
  .gray{color:#666;}
  .bgred{color:#F44848;}
  .lh24{line-height:24px;}
  .width38{width:38px;}
  .width64{width:64px;}
  .width90{width:90px; }
  .width100{width:100px;}
  .width130{width:132px;}
  .width200{width:200px;}
  .left5{margin-left:5px;}
  .left10{margin-left:10px;}
  .left20{margin-left:20px;}
  .top10{margin-top:10px;}
  .top15{margin-top:15px;}
  .top20{margin-top:20px;}


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
    flex: 1.5;
  }
  .table-head .big1{
  width: 100%;
  flex: 3;
  }
  .table-head .big2{
    width: 100%;
    flex: 4;
  }
  .table-head .big3{
    width: 100%;
    flex: 4;
  }
  .table-head .big4{
    width: 100%;
    flex: 3;
  }
  .table-head .big5{
    width: 100%;
    flex: 3;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 300px;
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
        pre_select_region:'',
        select_region:[{
          value:'hz',
          label:'杭州市'
        },{
          value:'wz',
          label:'温州市'
        },{
          value:'tz',
          label:'台州市'
        },{
          value:'qz',
          label:'衢州市'
        }],

        pre_select_country:'',
        select_country:[{
          value:'hz',
          label:'杭州市'
        },{
          value:'wz',
          label:'温州市'
        },{
          value:'tz',
          label:'台州市'
        },{
          value:'qz',
          label:'衢州市'
        }],

        pre_select_line:'',
        select_line:[{
          value:'line1',
          label:'xxxxxxxxx1'
        },{
          value:'line2',
          label:'xxxxxxxxx2'
        },{
          value:'line3',
          label:'xxxxxxxxx3'
        }],

        select_combo:'',

        pre_select_combo_grade:'',
        select_combo_grade:[{
          value:'grade1',
          label:'第1档次'
        },{
          value:'grade2',
          label:'第2档次'
        },{
          value:'grade3',
          label:'第3档次'
        }],

        rate:'',
        duration:'',
        exist_combo:'',




      }
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
