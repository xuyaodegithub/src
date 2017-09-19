<template>
  <div class="demo notepad">
    <div class="popover-head">
      <span class="title">记事本</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                        class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <span class="popover-btn" @click="save()">保存</span>
      <span class="popover-btn reset-btn" @click="clear()">清空</span>
    </div>
    <div class="popover-bottom">
      <div class="btn-box">
        <span class="tit">历史记录</span>
        <span class="popover-btn" @click="delect()" v-bind="canEditorId" :class="{ popoverBtnBlue: checkedQueryNoteList.length>0 }">删除</span>
        <!--<span class="popover-btn" :class="{ popoverBtnBlue: canEditor }" @click="editor()">编辑</span>-->
        <!--<span class="popover-btn" @click="slove()">完成</span>-->
      </div>
      <div class="box-top">
        <div class="table-head">
          <div class="head-item mini" style="padding-left: 10px">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
          </div>
          <div class="head-item big" ><span>时间</span></div>
          <div class="head-item superBig"><span>内容</span></div>
          <div class="head-item middle"><span>状态</span></div>
        </div>
        <div class="table-box">
          <el-checkbox-group v-model="checkedQueryNoteList" @change="handleCheckedCitiesChange">
            <div class="table-list" :class="{ hoverList: canEditor }" @dblclick="singerEditor(item)" v-for="item in queryNoteList">
              <div class="head-item mini" style="padding-left: 10px; overflow: hidden"><el-checkbox :label="item.id" :key="item.id"></el-checkbox></div>
              <div class="head-item big"><span>{{item.date}}</span></div>
              <!--<div class="head-item big"><span>{{item.date.getFullYear()+'/'+item.date.getMonth()+'/'+item.date.getDate()+' '+item.date.getHours()+':'+item.date.getMinutes()+':'+item.date.getSeconds()}}</span></div>-->
              <div class="head-item superBig"><span>{{item.note | wordLimit}}</span></div>
              <div class="head-item middle">
                <span v-if="item.status=='0'"><el-button type="primary" size="mini" @click="singerSlove(item.id)">完成</el-button></span>
                <span v-else style="color: #34B981;">已完成</span>
              </div>
            </div>
          </el-checkbox-group>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import api from '../../store/fetch/api'
  export default {
    data() {
      return {
        input: '',
        checkAll: true,
        isIndeterminate: true,
        canEditor: false,
        canEditorId: [],
        time:1502443719000,
        textarea: '',
        tableData3: [{
          date: '2016-05-03',
          content: '王小虎少时诵诗书所',
          state: '完成'
        }, {
          date: '2016-05-02',
          content: '张三少时诵诗书所',
          state: '已完成'
        }, {
          date: '2016-05-04',
          content: '李四少时诵诗书所',
          state: '已完成'
        }],
        multipleSelection: [],
        checkedQueryNoteList: [],
        editorQueryNoteList: []
      };
    },
    computed:{
      ...mapGetters([
          'token','queryNoteList'
      ])
    },
    mounted: function(){
      this.notepadQueryNoteList();
    },
    methods: {
      nowDate: function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        return year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec;
//        return '2015555';
      },
      save: function () {
          if(this.canEditor){
            this.notepadingertEditor([this.textarea,this.canEditorId])
            this.canEditor=false;
          }else{
            if(this.textarea==''){
              this.$message({
                type:'warning',
                message:'请输入内容在保存'
              })
            }else{
              this.notepadSaveNote(this.textarea)
            }
            this.textarea='';
          }

//        this.tableData3.push({
//          date: this.nowDate(),
//          content: this.textarea,
//          state: '完成'
//        });

      },
      delect: function () {
        this.notepadQueryDeleteNotes(this.checkedQueryNoteList)
      },
      singerEditor: function (item) {
//          if(this.canEditor){
//            this.textarea = item.note;
//            this.canEditorId.push(item.id);
//          }
          this.textarea = item.note;
          this.canEditorId=[];
          this.canEditorId.push(item.id);
          this.canEditor=true;
      },
      editor: function () {
          if(this.canEditor){
              this.canEditor=false;
          }else{
            this.canEditor=true;
          }
      },
      singerSlove: function (item) {
        this.checkedQueryNoteList=[];

        this.checkedQueryNoteList.push(item);
        this.notepadCompleteNotes(this.checkedQueryNoteList)
      },
      slove: function () {
        this.notepadCompleteNotes(this.checkedQueryNoteList)
      },
      clear: function () {
        this.textarea = ''
      },
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert','notepadSaveNote','notepadQueryDeleteNotes','notepadCompleteNotes','notepadQueryNoteList','notepadingertEditor'
      ]),

      handleCheckAllChange(event) {
          let all=[];
          for(var item in this.queryNoteList){
            all.push(this.queryNoteList[item].id);
          }
        this.checkedQueryNoteList = event.target.checked ? all : [];

        console.log(this.checkedQueryNoteList)
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value;
        console.log(checkedCount)
        this.isIndeterminate = true;
      }
    }
  };
</script>

<style scoped>
  .demo {
    width: 600px;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -210px;
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
    color: #a1c1e2;
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
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid #C5E2F0;
  }

  .el-textarea {
    margin-top: 20px;
  }

  .popover-main .popover-btn {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 15px 10px;
  }

  .reset-btn {
    border: 1px solid #D9E5EF;
    background: #ffffff;
    color: #333333;
  }

  .popover-bottom {
    width: calc(100% - 30px);
    margin: 15px auto 20px;
  }

  .popover-bottom .btn-box {
    height: 24px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .btn-box .tit {
    float: left;
  }

  .btn-box .popover-btn {
    display: inline-block;
    float: right;
    width: 54px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    border: 1px solid #D9E5EF;
    background: #ffffff;
    color: #333333;
    margin-left: 10px;
  }
  .btn-box .popoverBtnBlue{
    background: #33A0FF;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  .popover-main .box-top{
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px solid #C5E2F0;
  }
  .table-head{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #F1F4F7;
    border: 1px solid #E7ECF1;
  }
  .head-item{
    flex: 1;
    background: #ffffff;
  }
  .big{
    flex: 2;
  }
  .mini{
    flex: 0.2;
  }
  .superBig{
    flex: 3;
  }
  .middle{
    flex: 1;
  }
  .small{
    padding-left: 10px;
    flex: 0.5;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 120px;
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
  .hoverList{
    cursor: pointer;
  }
  .table-list .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }
</style>
<style>

</style>
