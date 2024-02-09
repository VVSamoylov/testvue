<template>
  <div>
    <div class="row">
      <div class="row g-3">
          <div class="col-auto">
            <label for="inputProductName" class="visually-hidden">Название</label>
            <input  type="text" v-model="part.name"   class="form-control" id="inputProductName" placeholder="Введите название продукта">
          </div>
          <div class="col-auto">
            <label for="inputPrice" class="visually-hidden">Цена</label>
            <input  type="text" v-model="part.price" class="form-control"  id="inputPrice" placeholder="Цена">
          </div>
          <div class="col-auto">
            <label for="inputVolume" class="visually-hidden">Количество</label>
            <input  type="text" v-model="part.volume" class="form-control" id="inputVolume" placeholder="Количество">
          </div>
          <div class="col-auto">
            <button v-on:click="addArr" class="btn btn-primary mb-3">Добавить</button> 
          </div>
      </div>    
    </div>
    <div class="row">
      <div v-if="check" >
        <ShowCard  :prods="partArr" />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <button v-on:click="show" class="btn btn-primary mb-3">Показать</button>
      </div>  
    </div>

    <div class="rows">
        {{showMessage}}
    </div>

    <div class="rows">
      <TestEmmit v-on:pressDown="testEmmit" />
    </div>
    <div class="rows">
      <TestInject/>
    </div>
  </div>  
</template>

<script>
/* eslint-disable */
import ShowCard from '@/components/ShowCard.vue'
import Product from '@/lib/Product.js'
import TestEmmit from '@/components/TestEmmit.vue'
import TestInject from '@/components/TestInject.vue'
export default {
  components: {
    ShowCard,
    TestEmmit,
    TestInject
  },
  name: 'Calculus',
  props: {
    msg: String
  },
  data(){
    return {
      part: {
        type: Product,
        required: false
      },
      partArr: [],
      check: false,
      testp: '',
      showMessage: ''
    }
  },
  methods: {
    addArr(){
        this.partArr.push({...this.part});
        this.part.name = '';
        this.part.price = 0;
        this.part.volume = 0;
    },
    show(){
      this.check = !this.check
    },
    testEmmit(e){
        this.showMessage = e;
    }
  },
  provide:{
    fruct: 'orange'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
