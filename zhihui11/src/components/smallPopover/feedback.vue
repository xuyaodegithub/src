<template>
  <div id="demo" class="demo incomingHistory">
      <div class="popover-head">
          <span class="title">我要反馈</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <textarea style="width: 100%; height: 320px;border: 1px solid #D9E5EF; border-radius: 5px;">
        </textarea>
        <div class="tool">
          <div class="item-tool">
            <i class="iconfont icon-wenjian"></i>
          </div>
          <div class="item-tool">
            <i class="iconfont icon-jiandao00" @click="screenShot($event)"></i>
          </div>
        </div>
        <p class="title">附件</p>
        <div class="show-dom"></div>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height: 440px;
    background: #F0FAFF;
    margin-left: -300px;
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
  .popover-head i{
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
  .popover-main textarea{
    outline: none;
  }
  .popover-main .title{
    margin: 15px 0 12px 0;
    font-weight: 500;
  }
  .tool{
    width: 100%;
    height: 60px;
    padding-top: 10px;
    border-bottom: solid 1px #C5E2F0;
  }
  .tool .item-tool{
    width: 48px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-radius: 5px;
    background: #EEF1F5;
    border: solid 1px #D2D4D6;
    color: #1296DB;
    float: left;
    margin-right: 15px;
    cursor: pointer;
  }
  .tool .item-tool i{
    font-size: 22px;
  }
  .show-dom{
    width: 100%;
    height: 200px;
    overflow: auto;
  }
</style>
<style>
  .incomingHistory .el-table{
    font-size: 12px;
    color: #333333;
  }
  .incomingHistory .el-table .cell, .el-table th>div{
    padding-left: 10px;
    padding-right: 0;
  }
  .incomingHistory .el-table td, .el-table th{
    height: 28px;
  }
  .incomingHistory .el-table th>.cell{
    line-height: 28px;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        tableData1: [{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '满意',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '不满意',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '非常满意',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '满意',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '不满意',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '未评价',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '满意',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '满意',
          state: '详细'
        },{
          incom_num: '13398789998',
          time_begin: '2017/05/04  19:32:42',
          time_end: '2017/05/04  19:32:42',
          satisfy: '满意',
          state: '详细'
        }],
        tableData2:[{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        },{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        },{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        },{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        },{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        },{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        },{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        },{
          trail_name: '微信客服引导xx…',
          business_num: '13398789998',
          operate_time: '2017/05/04  19:32:42',
          work_num: '',
          person_num: '2173'
        }]
      };
    },
    methods: {
      close: function () {
        alert(0)
      },
      screenShot: function (event) {
        var popoverAlive = document.getElementById("popoverAlive");
        popoverAlive.style.display='none';
        event.preventDefault();
        html2canvas(document.body, {
          allowTaint: true,
          taintTest: false,
          onrendered: function(canvas) {
            canvas.id = "mycanvas";
            var context = canvas.getContext("2d");

            //裁剪画布从(0，0)点至(50，50)的正方形
            context.rect(0,0,50,50);
            context.clip();
            console.log(context)
            //document.body.appendChild(canvas);
            //生成base64图片数据
            var dataUrl = canvas.toDataURL();
            var newImg = document.createElement("img");
            newImg.src =  dataUrl;
            $('.show-dom').append(newImg);
            newImg.style.width='100%';
          }
        })
        setTimeout(function () {

          popoverAlive.style.display='block';
          console.log(2)
        },100)
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
