<template>
    <div class="popover">
        <component :is="smallAlive.title"></component>
    </div>
</template>

<style scoped>
  .popover{
      z-index: 30;
      position: relative;
      width:auto;
      height: auto;
  }

</style>
<script>
  import vDemo from '../popover/demo.vue'
  import vCenterFunctionAlert from './centerFunctionAlert.vue'
  import vMoreCard from './moreCard.vue'
  import vFeedback from './feedback.vue'
  import vIdentitySub2 from '../popover/identitySub2.vue'
  import vIdentitySub1 from '../popover/identitySub1.vue'
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          changeAlert: 'vDemo'
      };
    },
    components:{
      vDemo,
      vCenterFunctionAlert,
      vFeedback,
      vMoreCard,
      vIdentitySub2,
      vIdentitySub1
    },
    methods: {
    },
    computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'smallAlive'
      ])
    }
  };
</script>
