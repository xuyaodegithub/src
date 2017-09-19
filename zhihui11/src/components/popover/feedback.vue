<template>
  <div id="demo" class="demo incomingHistory">
      <div class="popover-head">
          <span class="title">我要反馈</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <el-input
          type="textarea"
          class="popover-main-head"
          :autosize="{ minRows: 5, maxRows: 5}"
          placeholder="请输入内容"
          resize="none"
          v-model="textDataInput">
        </el-input>

        <div class="tool">
          <div class="item-tool" @click="openFile()">
            <i class="iconfont icon-wenjian"></i>
            <input type="file" style="display:none;" multiple="multiple" id="chrisFile" @change="inputChange">
          </div>
          <!--<div class="item-tool">-->
            <!--<i class="iconfont icon-jiandao00" @click="screenShot($event)"></i>-->
          <!--</div>-->
        </div>
        <p class="title">附件</p>

        <div class="show-dom">
          <div class="uploadList" v-for="(item,index) in fileList">
            <div class="header">
              <img :src="imgReturn(item['name'])">
            </div>
            <span>{{item.name}}</span>
            <div class="footer">
              <i class="el-icon-circle-cross" @click="removeFile(index)"></i>
            </div>
          </div>
        </div>

      </div>
      <div class="popover-bottom">
        <el-button type="primary" size="small" @click="submit()">确定</el-button>
        <el-button size="small" @click="clear()">清空</el-button>
      </div>
  </div>
</template>
<style>
  .popover-main .el-textarea textarea{
    /*height: 150px !important;*/
  }
</style>
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
    width: auto;
    height: 340px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .popover-bottom{
    width: 100%;
    text-align: center;
    border-top: solid 1px #EEF1F5;
    line-height: 60px;
  }
  .popover-main .popover-main-head{
    margin-top: 10px;
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
    min-height: 100px;
    overflow: auto;
  }
  .show-dom .uploadList{
    min-width: 120px;
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
    color: #B2DAFF;
    float: left;
    margin-right: 30px;
    animation: moveIn 0.3s ease;
    -webkit-animation: moveIn 0.3s ease;
  }
  @keyframes moveIn {
    0%{
      opacity: 0;
      margin-left: -10px;
    }
    100%{
      opacity: 1;
      margin-left: 0px;
    }
  }
  @-webkit-keyframes moveIn {
    0%{
      opacity: 0;
      margin-left: -10px;
    }
    100%{
      opacity: 1;
      margin-left: 0px;
    }
  }
  .show-dom .uploadList .header{
    width: 20px;
    height: 20px;
    float: left;
  }
  .show-dom .uploadList .header img{
    width: 100%;
    height: 100%;
  }
  .show-dom .uploadList span{
    color: #333333;
    margin-left: 4px;
  }
  .show-dom .uploadList .footer{
    width: 20px;
    height: 20px;
    line-height: 20px;
    float: right;
    text-align: center;
  }
  .show-dom .uploadList i{
    color: #DBDBDB;
  }
  .show-dom .uploadList i:hover{
    cursor: pointer;
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
        textDataInput:'',
        fileList:[],
        fileListNow:'',
        docLogo: require('../../assets/img/docPic.png'),
        jpgLogo: require('../../assets/img/jpgPic.png'),
        txtLogo: require('../../assets/img/txtPic.png'),
        xlsLogo: require('../../assets/img/xlsPic.png'),
      };
    },
    computed:{
      ...mapGetters([
        'recordId','token'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert','submitFeedback'
      ]),
      imgReturn(item){
            if(item.split('.')[1]=='jpg' || item.split('.')[1]=='png'){
              return this.jpgLogo;
            }else if(item.split('.')[1]=='xls'){
              return this.xlsLogo;
            }else if(item.split('.')[1]=='doc'){
              return this.docLogo;
            }else if(item.split('.')[1]=='txt'){
              return this.txtLogo;
            }else{
              return '';
            }
      },
      openFile(){
          document.getElementById('chrisFile').click()
      },
      inputChange(){
          for(let i=0;i<document.getElementById('chrisFile').files.length;i++){
              this.fileList.push(document.getElementById('chrisFile').files[i]);
              console.log(this.fileList)
          }
      },
      removeFile(index){
          this.fileList.splice(index,1)
      },
      close: function () {
        alert(0)
      },
      submit(){
//          console.log(this.fileList);
          if(this.fileList){
            let formdata = new FormData();
            let size='';
            for(let i=0; i<this.fileList.length;i++){
                size = size + this.fileList[i].size;
              formdata.append('files',this.fileList[i]);
            }
            if(this.fileList!=''){
              if(this.textDataInput){
                if(size/1024/1024<20){
                  this.submitFeedback([this.textDataInput,formdata]);
                }else{
                  this.$message({
                    message:'上传文件太大',
                    type:'warning'
                  })
                }
              }else{
                this.$message({
                  message:'请输入内容',
                  type:'warning'
                })
              }
            }else{
              if(this.textDataInput){
                this.submitFeedback([this.textDataInput,'']);
              }else{
                this.$message({
                  message:'请输入内容',
                  type:'warning'
                })
              }
            }

          }else{
              this.$message({
                message:'反馈内容没有填写',
                type:'warning'
              })
          }
      },
      clear(){
          this.textDataInput='';
          this.fileList=[];
      },
//      screenShot: function (event) {
//        var popoverAlive = document.getElementById("popoverAlive");
//        popoverAlive.style.display='none';
//        event.preventDefault();
//        html2canvas(document.body, {
//          allowTaint: true,
//          taintTest: false,
//          onrendered: function(canvas) {
//            canvas.id = "mycanvas";
//            var context = canvas.getContext("2d");
//
//            //裁剪画布从(0，0)点至(50，50)的正方形
//            context.rect(0,0,50,50);
//            context.clip();
//            console.log(context)
//            //document.body.appendChild(canvas);
//            //生成base64图片数据
//            var dataUrl = canvas.toDataURL();
//            var newImg = document.createElement("img");
//            newImg.src =  dataUrl;
//            $('.show-dom').append(newImg);
//            newImg.style.width='100%';
//          }
//        })
//        setTimeout(function () {
//
//          popoverAlive.style.display='block';
//          console.log(2)
//        },100)
//      },
    }
  };
</script>
