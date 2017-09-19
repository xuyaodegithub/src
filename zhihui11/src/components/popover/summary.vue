<template>
  <div class="demo summary">
    <div class="popover-head">
      <span class="title">电话小结</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                         class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="tree-wrap">
        <el-tree
          :data="data2"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          indent="16"
          :props="defaultProps">
        </el-tree>
      </div>
    </div>
    <div class="buttons">
      <el-button class="submit" @click="getCheckedNodes" type="info">提交</el-button>
      <!--<el-button @click="getCheckedKeys">通过 key 获取</el-button>-->
      <!--<el-button @click="setCheckedNodes">通过 node 设置</el-button>-->
      <!--<el-button @click="setCheckedKeys">通过 key 设置</el-button>-->
      <!--<el-button @click="resetChecked">清空</el-button>-->
    </div>
  </div>
</template>

<style scoped>
  ::-webkit-scrollbar
  {
    width: 5px;
    height: 0px;
    position: fixed;
    margin-right: 5px;
    background-color: #C5C7CB;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    background-color: #F0FAFF;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #C5C7CB;
  }

  .demo {
    width: 600px;
    height: 545px;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -272.5px;
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
    margin-left: 12px;
    font-weight: bold;
  }

  .popover-main{
    width: calc(100% - 45px);
    height: 405px;
    padding: 20px 15px 18px 30px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-main .tree-wrap{
    overflow: scroll;
    height: 405px;
  }
  .popover-main .el-tree{
    background: #F0FAFF;
    border: none;
  }
  .popover-main .el-tree-node{
    background: blue;
    font-size: 12px !important;
  }
  .el-checkbox__inner{
    width: 14px !important;
    height: 14px !important;
  }
  .submit{
    display: block;
    width: 80px;
    height: 30px;
    margin: 15px auto;
    padding-top: 8px;
    background: #33A0FF;
    border-color: #33A0FF;
  }
</style>
<style>
  /*此style用于更改element-ui中的默认样式，有scoped的style因作用域原因无法更改*/
  .summary .submit span{
    font-size: 14px;
    font-weight: 100;
  }

  .summary .popover-main .el-tree-node{
    font-size: 12px;
  }
  .summary .el-checkbox__inner{
    width: 14px;
    height: 14px;
  }
  .summary .el-checkbox__input.is-checked .el-checkbox__inner{
    background: #1296DB;
    border-color: #1296DB;
  }
  .summary .el-checkbox__inner::after {
    box-sizing: content-box;
    content: "";
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -ms-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
    -ms-transform-origin: center;
    transform-origin: center;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '故障处理',
          children: [{
            id: 8,
            label: ' 2-1'
          }, {
            id: 9,
            label: '二级 2-2'
          }]
        }, {
          id: 2,
          label: '咨询',
          children: [{
            id: 10,
            label: '热点业务咨询',
            children: [{
              id: 100,
              label: 'TV平台割接咨询'
            }, {
              id: 101,
              label: '星级服务权益/行权相关咨询'
            }, {
              id: 102,
              label: '校园闪讯升级'
            }, {
              id: 103,
              label: '一号通业务下线'
            }, {
              id: 104,
              label: '实名制'
            }]
          }, {
            id: 11,
            label: '主套餐/产品'
          }, {
            id: 12,
            label: '可选包及功能'
          }, {
            id: 13,
            label: '其它产品'
          }, {
            id: 14,
            label: '催装/移'
          }]
        }, {
          id: 3,
          label: '查询',
          children: [{
            id: 15,
            label: '二级 3-1'
          }, {
            id: 16,
            label: '二级 3-2'
          }]
        }, {
          id: 4,
          label: '其它话务'
        }, {
          id: 5,
          label: '账务'
        }, {
          id: 6,
          label: '投诉处理'
        }, {
          id: 7,
          label: '受理'
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
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
      ]),
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    }
  };
</script>
