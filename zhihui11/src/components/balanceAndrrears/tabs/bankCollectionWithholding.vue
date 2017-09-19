<template>
  <div class="bank-collection-withholding">            <!-- -----银行托收代扣信息查询 块----- -------在其他块中---- -->
    <div class="miscel-block-top">
      <span class="typeface lh40">开始日期</span>
      <div class="left10">
        <el-date-picker
          v-model="yhtsdk_date_start"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <span class="typeface lh40 distance15">结束日期</span>
      <div class="left10">
        <el-date-picker
          v-model="yhtsdk_date_end"
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
    <div class="miscel-block-bottom">      <!--银行托收代扣信息查询 表格 -->
      <el-table
        :data="table_data_yhtsdkxxcx"
        height="120"
        style="width: 98%">
        <el-table-column
          prop="hth"
          label="合同号">
        </el-table-column>
        <el-table-column
          prop="zffs"
          label="支付方式">
        </el-table-column>
        <el-table-column
          prop="yhmc"
          label="银行名称">
        </el-table-column>
        <el-table-column
          prop="qf"
          label="欠费">
        </el-table-column>
        <el-table-column
          prop="kffs"
          label="扣费方式">
        </el-table-column>
        <el-table-column
          prop="yhclqk"
          label="银行处理情况">
        </el-table-column>
        <el-table-column
          prop="dxclqk"
          label="电信处理情况">
        </el-table-column>
        <el-table-column
          prop="fksj"
          label="付款时间">
        </el-table-column>
        <el-table-column
          prop="hdsj"
          label="回单时间">
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
        yhtsdk_date_start:'',       //银行托收代扣信息查询 日期 开始
        ystsdk_date_end:'',

        table_data_yhtsdkxxcx: [{         //银行托收代扣信息查询表格
          hth: '2710SN;67***',
          zffs: '托收',
          yhmc: '工商银行羊坝头支行3',
          qf: '21370.36',
          kffs: '1',
          yhclqk: '银行方扣款成功',
          dxclqk: '电信方已处理',
          fksj: '2017-06-10 00:00:00',
          hdsj: '2017-06-11-10:37:46',

        }, {
          hth: '2710SN;67***',
          zffs: '托收',
          yhmc: '',
          qf: '21370.36',
          kffs: '1',
          yhclqk: 'BACK BY WEB',
          dxclqk: '电信方已处理',
          fksj: '2017-06-09 15:32:52',
          hdsj: '2017-06-09 15:42:04',
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
