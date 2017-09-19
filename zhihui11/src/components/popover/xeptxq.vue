<template>
  <div class="demo xeptxq">
    <div class="popover-head">
      <span class="title">小额赔退详情</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                           class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <p class="info-row"><span class="info-tit">工单申请时间：</span><span class="info-item">2017-05-19 12:15:26</span></p>
      <p class="info-row"><span class="info-tit">工单申请时间：</span><span class="info-item">2017-05-19 12:15:26</span></p>
      <p class="info-row"><span class="info-tit">退费原因：</span><span class="info-item">用户来电反映自己没有订购过这些产品，要求退费</span></p>
      <p class="title">小额增值明细</p>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="num"
          label="业务号码"
          width="164">
        </el-table-column>
        <el-table-column
          prop="name"
          label="增值服务名称"
          width="187">
        </el-table-column>
        <el-table-column
          prop="price"
          label="退费金额"
          width="138">
        </el-table-column>
        <el-table-column
          prop="month"
          label="退费月份"
          width="79">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    width: 600px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -300px;
    transform: translateY(-50%);
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    color: #333333;
  }

  .popover-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-head i {
    float: right;
    color: #A1C1E2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 15px;
    font-weight: bold;
  }

  .popover-main {
    width: calc(100% - 30px);
    padding: 20px 15px;
  }

  .popover-main .info-row {
    line-height: 24px;
  }

  .popover-main .info-tit {
    display: inline-block;
    width: 84px;
  }

  .popover-main .title {
    margin: 7px 0 9px 0;
    font-weight: 500;
  }
</style>
<style>
  .xeptxq .el-table{
    font-size: 12px;
  }
  .xeptxq .el-table td, .el-table th{
    height: 28px;
  }
  .xeptxq .el-table .cell, .el-table th>div{
    padding-left: 10px;
    padding-right: 0;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        tableData: [{
          num: '13398789998',
          name: '末日空袭10元包月',
          price: '10.00',
          month: '201704'
        },{
          num: '13398789998',
          name: '末日空袭10元包月',
          price: '10.00',
          month: '201704'
        }]
      };
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ]),
      ...mapGetters([
        'popoverAlive'
      ])
    }
  };
</script>
