<template>
  <div class="invoice-record">           <!-- -----发票记录查询 块----- -------在其他块中---- -->
    <div class="miscel-block-top">
      <span class="typeface lh40">开始日期</span>
      <div class="left10">
        <el-date-picker
          v-model="fpjl_date_start"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <span class="typeface lh40 distance15">结束日期</span>
      <div class="left10">
        <el-date-picker
          v-model="fpjl_date_end"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <span class="typeface lh40 distance15">历史合同号</span>
      <div class="floatleft left10">
        <el-select v-model="pre_select_history_contract" clearable placeholder="请选择" >
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
    <div class="miscel-block-bottom">      <!--发票记录查询 表格 -->
      <el-table
        :data="table_data_fpjlcx"
        height="120"
        style="width: 98%">
        <el-table-column
          prop="fplsh"
          label="发票流水号">
        </el-table-column>
        <el-table-column
          prop="zhmc"
          label="账户名称">
        </el-table-column>
        <el-table-column
          prop="hth"
          label="合同号">
        </el-table-column>
        <el-table-column
          prop="dyhm"
          label="打印号码">
        </el-table-column>
        <el-table-column
          prop="jfzq"
          label="计费周期">
        </el-table-column>
        <el-table-column
          prop="ssje"
          label="实收金额">
        </el-table-column>
        <el-table-column
          prop="dycs"
          label="打印次数">
        </el-table-column>
        <el-table-column
          prop="bdcs"
          label="补打次数">
        </el-table-column>
        <el-table-column
          prop="fplx"
          label="发票类型">
        </el-table-column>
        <el-table-column
          prop="fksj"
          label="付款时间">
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
        fpjl_date_start:'',         //发票记录查询 日期 开始
        fpjl_date_end:'',

        table_data_fpjlcx: [{         //发票记录查询表格
          fplsh: '418230000',
          zhmc: '',
          hth: '27712345657',
          dyhm: '189123456282',
          jfzq: '201705',
          ssje: '54.39',
          dycs: '0',
          bdcs: '0',
          fplx: '收据',
          fksj:'2017-05-05 12:55:33'
        }, {
          fplsh: '418230001',
          zhmc: '',
          hth: '27712345657',
          dyhm: '189123456282',
          jfzq: '201705',
          ssje: '500',
          dycs: '0',
          bdcs: '0',
          fplx: '收据',
          fksj:'2017-05-05 12:55:33'
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
