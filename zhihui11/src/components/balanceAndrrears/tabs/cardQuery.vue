<template>
  <div class="card-query">             <!-- -----卡查询 块----- -------在其他块中---- -->
    <div class="miscel-block-top">
      <span class="typeface lh40">查询类型</span>
      <div class="left10">
        <el-select v-model="pre_select_card_query"  placeholder="请选择" class="width120 floatleft" :value="toShow()">
          <el-option
            v-for="item in select_card_query"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <!--卡查询 查询类型-块1 卡状态 中的内容--->

      <div  v-show="isShow1_1">
        <span class="typeface lh40 distance15">卡类型</span>
        <div class="left10">
          <el-select v-model="pre_select_card_type"  clearable placeholder="请选择" class="width150 floatleft">
            <el-option
              v-for="item in select_card_type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <span class="typeface lh40 distance15">序号</span>
        <el-input v-model="pre_card_serial_number" placeholder="输入查询序号" class="width150 floatleft left10"></el-input>
        <el-button type="primary" class="floatleft left15">查询</el-button>
        <div class="blue_suggest">
          <img src="" class="blue_suggest_icon"/>
          <span class="typeface blue_suggest_content" >转IVR11888卡充值</span>
        </div>
      </div>
      <!--卡查询 查询类型-块1 卡状态 中的内容--完-->


      <!--卡查询 查询类型-块2 卡充值记录 中的内容--->
      <div  v-show="isShow2_1">
        <span class="typeface lh40 distance15">被充值号码</span>
        <el-input  placeholder="输入查询" class="width150 floatleft left10"></el-input>
        <span class="typeface lh40">开始日期</span>
        <div class="left10">
          <el-date-picker
            v-model="card_recharge_date_start"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <span class="typeface lh40 distance15">结束日期</span>
        <div class="left10">
          <el-date-picker
            v-model="card_recharge_date_end"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <el-button type="primary" class="floatleft left15">查询</el-button>

      </div>
      <!--卡查询 查询类型-块2 卡充值记录 中的内容--完 -->

    </div>


    <!--卡查询 查询类型-块1 卡状态 中的表格-- -->
    <div class="miscel-block-bottom" v-show="isShow1_2">      <!--卡查询 - 卡状态 表格 -->
      <el-table
        :data="table_data_kcx_kzt"
        height="120"
        style="width: 98%">
        <el-table-column
          prop="kh"
          label="卡号">
        </el-table-column>
        <el-table-column
          prop="bczhm"
          label="被充值号码">
        </el-table-column>
        <el-table-column
          prop="fkd"
          label="发卡地">
        </el-table-column>
        <el-table-column
          prop="zt"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="yxq"
          label="有效期">
        </el-table-column>
        <el-table-column
          prop="ycyxq"
          label="延长有效期(天)">
        </el-table-column>
        <el-table-column
          prop="mz"
          label="面值(元)">
        </el-table-column>
      </el-table>
    </div>
    <!--卡查询 查询类型-块1 卡状态 中的表格---完-->


    <!--卡查询 查询类型-块2 卡充值记录 中的表格--->
    <div class="miscel-block-bottom"  v-show="isShow2_2">      <!--卡查询 - 卡状态 表格 -->
      <el-table
        :data="table_data_kcx_kczjl"
        height="120"
        style="width: 98%">
        <el-table-column
          prop="cztj"
          label="充值途径">
        </el-table-column>
        <el-table-column
          prop="czhm"
          label="充值号码">
        </el-table-column>
        <el-table-column
          prop="czxh"
          label="充值序号">
        </el-table-column>
        <el-table-column
          prop="czsj"
          label="充值时间">
        </el-table-column>
        <el-table-column
          prop="czje"
          label="充值金额(元)">
        </el-table-column>
        <el-table-column
          prop="zscl"
          label="赠送策略">
        </el-table-column>
      </el-table>
    </div>
    <!--卡查询 查询类型-块2 卡充值记录 中的表格---完-->
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

  .width150{
    width:150px;
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
  .width100{
    width:100px;
  }
  .width120{
    width:120px;
  }
  .width150{
    width:150px;
  }
  .width200{
    width:200px;
  }
  .width250{
    width:250px;
  }
  /* 公共----完*/

  .miscel-block-top{
    height:45px;
    width:100%;
  }
  .miscel-block-bottom{
    /*height:45px;*/
    /*width:100%;*/
    /*background:#ddd;*/
    /*position:relative;*/
    /*float:left;*/
  }

  .input_style{
    width:200px;
    float:left;
  }
  .blue_suggest{

  }

  .blue_suggest_icon{
    width:16px;
    height:16px;
    background:#33A0FF;
    float:left;
    margin-left:20px;
    margin-top:8px;
  }
  .blue_suggest_content{
    color:#1476CC;
    line-height:40px;
    margin-left:4px;
    float:left;
  }



</style>
<script>

  export default {
    data() {
      return {
        isShow1_1:true,
        isShow1_2:true,
        isShow2_1:false,
        isShow2_2:false,

        pre_select_card_query:'card_status',          //卡查询 查询类型 --初始类型

        select_card_query:[{              //卡查询 查询类型 --类型   （主要|基于此的选择将显示不同的块）
          value:'card_status',
          label:'卡状态'
        },{
          value:'card_recharge_record',
          label:'卡充值记录'
        }],




        //卡查询 查询类型-块1 卡状态 中的内容-----------



        pre_select_card_type:'',                  //卡查询 卡类型 --初始类型
        select_card_type:[{                 //卡查询 卡类型 --类型
          value:'card_type_1',
          label:'11888(UVC卡)'
        },{
          value:'card_type_2',
          label:'卡类型2'
        },{
          value:'card_type_3',
          label:'卡类型3'
        }],

        pre_card_serial_number:'',              //卡查询 序号  预输入序号

        table_data_kcx_kzt: [{         //卡查询 卡状态表格
          kh: '13396816666',
          bczkh: '13396816666',
          fkd: '杭州市',
          zt: '正常',
          yxq: '2017-12-30',
          ycyxq: '0',
          mz: '100',
        }, {
          kh: '13396816677',
          bczkh: '13396816677',
          fkd: '杭州市',
          zt: '正常',
          yxq: '2016-11-30',
          ycyxq: '0',
          mz: '50',
        }],
        //卡查询 查询类型-块1 卡状态 中的内容-----------完

        //卡查询 查询类型-块2 卡充值记录 中的内容---------

        card_recharge_date_start:'',
        card_recharge_date_end:'',

        table_data_kcx_kczjl: [{         //卡查询 卡状态表格
          cztj: '营业厅门店',
          czhm: '13396816666',
          czxh: '231654564848',
          czsj: '2017-07-01',
          czje: '200',
          zscl: '',
        }, {
          cztj: '营业厅门店',
          czhm: '13396817777',
          czxh: '231654567748',
          czsj: '2017-07-01',
          czje: '100',
          zscl: '',
        }, {
          cztj: '营业厅门店',
          czhm: '13396817888',
          czxh: '231654567748',
          czsj: '2017-07-01',
          czje: '50',
          zscl: '',
        }],

        //卡查询 查询类型-块2 卡充值记录 中的内容-------完



      };
    },
    computed:{

    },
    methods: {

      //卡查询切换
      toShow:function(){
        console.log(this.pre_select_card_query);
        if(this.pre_select_card_query==='card_status'){
          this.isShow1_1=true;
          this.isShow1_2=true;
          this.isShow2_1=false;
          this.isShow2_2=false;


        }else if(this.pre_select_card_query==='card_recharge_record'){
          this.isShow1_1=false;
          this.isShow1_2=false;
          this.isShow2_1=true;
          this.isShow2_2=true;
        }

      }

    }
  };
</script>
