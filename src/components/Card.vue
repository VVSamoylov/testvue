<template>
  <div class="card">
    <div class="card" style="width: 18rem;">
    
      <img v-if="openImg"  v-bind:src="foto" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">{{msg}}</p>
        <p> {{descr}}</p>
      </div>
      <button v-on:click="remove" type="button" class="btn btn-danger">{{msgBtn}}</button>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'Card',
  props: {
    msg: String,
    descr: String,
    foto: String,
    view: Boolean
  },
  data(){
    return{
      openImg: true,
      msgBtn: "Ликвидировать!!"
    }
  },
  methods:{
    remove(){
      this.openImg = !this.openImg;
      if(this.openImg){
        this.msgBtn = "Ликвидировать!!"
      }else{
        this.msgBtn = "Восстановить!!"
      }
    }

  }
}
</script>


<style scoped>

</style>
