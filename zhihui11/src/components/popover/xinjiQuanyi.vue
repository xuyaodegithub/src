<template>
  <div class="demo xinjiQuanyi">
      <div class="popover-head">
          <span class="title">星级权益使用详情表</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <p class="head-info">用户于{{person.begin}}日成为{{person.star}}，有效结束时间{{person.end}}</p>
        <div class="table-wrap">
          <el-table
            :data="xinjiQuanyi_table"
            border
            style="width: 100%">
            <el-table-column
              prop="five_star"
              label="5星级"
              width="50">
            </el-table-column>
            <el-table-column
              prop="jifen_bz"
              label="积分被增"
              width="69">
            </el-table-column>
            <el-table-column
              prop="free_huanka"
              label="免费换卡（客户级）"
              width="68">
            </el-table-column>
            <el-table-column
              prop="sj_jjkj"
              label="手机紧急开机（号码级）"
              width="92">
            </el-table-column>
            <el-table-column
              prop="kuandai_jjfj"
              label="宽带紧急复机（号码级）"
              width="88">
            </el-table-column>
            <el-table-column label="宽带延伸服务（客户级）">
              <el-table-column
                prop="wireless_zw"
                label="无线组网"
                width="64">
              </el-table-column>
              <el-table-column
                prop="free_yj"
                label="免费移机"
                width="63">
              </el-table-column>
              <el-table-column
                prop="daizhuang_qtzd"
                label="代装其他终端"
                width="86">
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="guoman_mbzjkt"
              label="国漫免保证金开通"
              width="71">
            </el-table-column>
            <el-table-column
              prop="star_khjl"
              label="星级客户经理"
              width="68">
            </el-table-column>
            <el-table-column
              prop="yxjr_10000"
              label="10000号优先接入"
              width="70">
            </el-table-column>
            <el-table-column
              prop="yxbl_yyt"
              label="营业厅优先办理"
              width="68">
            </el-table-column>
          </el-table>
        </div>
      </div>
  </div>
</template>
<style scoped>
  .demo{
    width: 900px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -450px;
    margin-top: -150px;
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
    border-bottom: 1px solid #D9E5EF;
  }
  .popover-head i{
      float: right;
      color: #A1C1E2;
      font-size: 12px;
      margin-top: 13px;
      margin-right: 12px;
      cursor: pointer;
  }
  .popover-head .title{
      margin-left: 12px;
      font-weight: bold;
  }
  .popover-main{
    padding-bottom: 19px;
  }
  .popover-main .head-info{
    margin: 20px 0 0 15px;
  }
  .popover-main .table-wrap{
    margin-top: 10px;
  }
</style>
<style>
  .xinjiQuanyi .el-table{
    font-size: 12px;
    width: 858px!important;
    margin: 0 auto;
  }
  .xinjiQuanyi .el-table .cell, .el-table th>div{
    padding: 0;
  }
  .xinjiQuanyi .el-table th{
    height: 24px;
    text-align: center;
  }
  .xinjiQuanyi .el-table th>.cell{
    line-height: 1;
  }
  .xinjiQuanyi .el-table td{
    height: 30px;
    text-align: center;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        person:{
          begin: '2016-05-23',
          end: '2017-06-01',
          star: '5星'
        },
        xinjiQuanyi_table: [{
          five_star: '可享',
          jifen_bz: '3',
          free_huanka: '2次/12月',
          sj_jjkj: '1次/月',
          kuandai_jjfj: '无',
          wireless_zw: '1次/年',
          free_yj: '1次/年',
          daizhuang_qtzd: '1次/年',
          guoman_mbzjkt: '免保证金',
          star_khjl: '有',
          yxjr_10000: '优先接入',
          yxbl_yyt: '无'
        }, {
          five_star: '已享',
          jifen_bz: '3',
          free_huanka: '2次/12月',
          sj_jjkj: '1次/月',
          kuandai_jjfj: '无',
          wireless_zw: '1次/年',
          free_yj: '1次/年',
          daizhuang_qtzd: '1次/年',
          guoman_mbzjkt: '免保证金',
          star_khjl: '有',
          yxjr_10000: '优先接入',
          yxbl_yyt: '无'
        }, {
          five_star: '可享',
          jifen_bz: '3',
          free_huanka: '2次/12月',
          sj_jjkj: '1次/月',
          kuandai_jjfj: '无',
          wireless_zw: '1次/年',
          free_yj: '1次/年',
          daizhuang_qtzd: '1次/年',
          guoman_mbzjkt: '免保证金',
          star_khjl: '有',
          yxjr_10000: '优先接入',
          yxbl_yyt: '无'
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
