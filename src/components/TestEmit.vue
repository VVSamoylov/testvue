<template>
  <div class="rows">
    <div class="input-group mb-3">
    <input v-model="userName" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

    <button v-on:click="sendMsg" type="button" class="btn btn-danger">Сделать больно</button>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'TestEmit',
  emits:['msg'],
  data(){
    return{
        userName: ''
    }
  },
  methods:{
    sendMsg(){
        this.$emit('msg', this.userName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
