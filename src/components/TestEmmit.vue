<template>
  <div>
    <div class="rows">
        <button v-on:click="btnDown" type="button" class="btn btn-primary">Жамнкнуть</button>
    </div>
  </div>  
</template>

<script>
/* eslint-disable */
export default {
  name: 'TestEmmit',
  props: {
  },
    emits:['pressDown'],
    methods:{
      btnDown(){
          //alert('AAAA')
          this.$emit('pressDown', 'ООО больно!!!')
      }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
