<template>
    <div class="operating-guide">
      <div class="operating-guide-item left">
        <p><span class="title">易差错提醒：</span>订购的流量包无法抵扣已超出的流量</p>
      </div>
      <div class="operating-guide-item right">
        <p><span class="title">操作指引：</span><span class="button-small button-color-blue">账单分析</span><span class="button-small button-color-blue">设改套餐</span></p>
      </div>
    </div>
</template>
<style scoped>
  .operating-guide{
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
  }
  .operating-guide-item{
    flex: 1;
    background: #FFFCEF;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    line-height: 40px;
  }
  .operating-guide-item span{
    color: #666666;
    margin-right: 10px;
  }
  .operating-guide-item p{
    color: #333333;
    margin-left: 14px;
  }
  .operating-guide-item:before{
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background: #F3CC31;
  }
  .operating-guide .right{
    margin-left: 20px;
  }
</style>
<script>
    import { mapGetters } from 'vuex'
    export default {
        components: {

        },
        methods: {
        },
        computed: {
          // 使用对象展开运算符将 getters 混入 computed 对象中
          ...mapGetters([
            ])
        }
    }
</script>
