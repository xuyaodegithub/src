<template>
  <div class="bad-debt-inquiry">             <!-- -----坏账查询 块----- -------在其他块中---- -->
    <div class="miscel-block-top">
      <span class="typeface lh40">开始日期</span>
      <div class="left10">
        <el-date-picker
          v-model="hzcx_date_start"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <span class="typeface lh40 distance15">结束日期</span>
      <div class="left10">
        <el-date-picker
          v-model="hzcx_date_end"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <span class="typeface lh40 distance15">历史合同号</span>
      <div class="left10">
        <el-select v-model="pre_select_history_contract" clearable placeholder="请选择">
          <el-option
            v-for="item in select_history_contract"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" class="floatleft left15">查询</el-button>
    </div>
    <div class="miscel-block-bottom">      <!--坏账查询 表格 -->
      <el-table
        :data="table_data_hzcx"
        height="120"
        style="width: 98%">
        <el-table-column
          prop="zmzq"
          label="账目周期">
        </el-table-column>
        <el-table-column
          prop="zmlx"
          label="账目类型">
        </el-table-column>
        <el-table-column
          prop="ysje"
          label="原始金额">
        </el-table-column>
        <el-table-column
          prop="yhje"
          label="优惠金额">
        </el-table-column>
        <el-table-column
          prop="tzje"
          label="调账金额">
        </el-table-column>
        <el-table-column
          prop="wyj"
          label="违约金">
        </el-table-column>
        <el-table-column
          prop="qfje"
          label="欠费金额">
        </el-table-column>
        <el-table-column
          prop="zje"
          label="总金额">
        </el-table-column>
        <el-table-column
          prop="hzscsj"
          label="坏账生成时间">
        </el-table-column>
        <el-table-column
          prop="sbhm"
          label="设备号码">
        </el-table-column>
        <el-table-column
          prop="fyqxlxmc"
          label="费用去向类型名称">
        </el-table-column>
        <el-table-column
          prop="yjqfy"
          label="已结清费用">
        </el-table-column>
      </el-table>
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

</style>
<script>

  export default {
    data() {
      return {
        hzcx_date_start:'',           //坏账查询日期 开始
        hzcx_date_end:'',

        table_data_hzcx: [{         //坏账查询表格
          zmzq: '',
          zmlx: '各项费用合计',
          ysje: '19',
          yhje: '0',
          tzje: '0',
          wyj: '0',
          qfje: '18.92',
          zje: '18.92',
          hzscsj: '',
          sbhm: '',
          fyqxlxmc: '',
          yjqfy: '0.08',

        }, {
          zmzq: '201310',
          zmlx: 'CDMA套餐月费',
          ysje: '19',
          yhje: '0',
          tzje: '0',
          wyj: '0',
          qfje: '18.92',
          zje: '18.92',
          hzscsj: '2013-11-01 12:55:33',
          sbhm: '13396697897',
          fyqxlxmc: '未结清',
          yjqfy: '0.08',
        }],


        pre_select_history_contract:'',   //历史合同号 初始默认
        select_history_contract:[{          //历史合同号  （多个内容块均有，当作同一个处理）
          value:'to1',
          label:'合同1'
        },{
          value:'to2',
          label:'合同合同2'
        },{
          value:'to3',
          label:'合同合同合同3'
        },{
          value:'to4',
          label:'合同合同合同合同4'
        }],


      };
    },
    computed:{

    },
    methods: {

    }
  };
</script>
