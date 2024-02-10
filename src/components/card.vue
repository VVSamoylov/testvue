<template>
  <div class="rows">
    <div class="alert alert-danger" role="alert">
      Сообщение : {{textmsg}}
    </div>
    <TestEmit v-on:msg="showMsg" />

  </div>
</template>

<script>
/* eslint-disable */ 
import TestEmit from '@/components/TestEmit.vue'
export default {
  name: 'card',
  components:{
    TestEmit
  },
  
  data(){
    return{
      textmsg:''
    }
  },
  methods:{
    showMsg(e){
        this.textmsg = `АААА больно!! ${e}`
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
