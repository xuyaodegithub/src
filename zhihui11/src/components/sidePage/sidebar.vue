<template>
    <div class="sidebar" v-bind:style="{background: sidebarPageStyle.sidebarBg,color: '#FFFFFF'}">
        <vPerson></vPerson>
        <vLocalAssets></vLocalAssets>
        <vToolBox></vToolBox>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import vPerson from '../sidePage/person.vue'
  import vToolBox from '../sidePage/toolBox.vue'
  import vLocalAssets from '../sidePage/localAssets.vue'
  export default {
    data() {
      return {
        show: ''
      }
    },
    components:{
      vPerson,vToolBox,vLocalAssets
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    },
    computed: {
      ...mapGetters([
        'sidebarPageStyle'
      ])
    }
  }
</script>

<style scoped>

    .sidebar{
        position: relative;
        width: 100%;
    }
    @media screen and (max-height:475px){

    }
    @media screen and (min-height: 736px) {

    }
    @media screen and (min-height:800px){

    }
    @media screen and (min-height:900px){

    }
    @media screen and (min-height:1000px){

    }

</style>
