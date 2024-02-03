<template>
  <div class="rows">
   <slot>    </slot>

    <div class="row g-3">
      <div class="col-auto">
        <label for="inputName" class="visually-hidden">Название</label>
        <input v-model="part.PName" type="text" class="form-control" id="inputName" placeholder="Название">
      </div>
      <div class="col-auto">
        <label for="inputPrace" class="visually-hidden">Цена за шт</label>
        <input v-model="part.Price" type="text" class="form-control" id="inputPrace" placeholder="Цена за шт">
      </div>
      <div class="col-auto">
        <label for="inputVolume" class="visually-hidden">Кол - во</label>
        <input v-model="part.PVolume" type="text" class="form-control" id="inputVolume" placeholder="Кол - во">
      </div>
      
      <div class="col-auto">
        <button v-on:click="added"  class="btn btn-primary mb-3">Добавить</button>
      </div>
    </div>

    <button v-on:click="show"  class="btn btn-primary mb-3">Посмотреть результат</button>

    <div v-if="check" class="row">
      <ul id="array-rendering">
        <li v-for="item in products" :key="item"  >
          {{ item.PName }}   {{ item.Price }} {{ item.PVolume }} <br/>
          
        </li>
      </ul>
    </div>

    <div v-if="check" class="row">
      <ul id="array-rendering">
        <li v-for="item in test" :key="item"  >
          {{ item }}  
          
        </li>
      </ul>


    </div>


    <div class="alert alert-secondary" role="alert">
                  У нас в корзине лежит : {{resultSumm}} товара 
      </div>


    <slot >   </slot>
  </div>
</template>

<script>
/* eslint-disable */ 
import Product from '../Product.js'
export default {
  name: 'card',
  props: {
    msg: String
  },
  data(){
    return{
      products: [],
      part: Product,
      check: false,
    }
  },
  methods:{
    added(){
      this.products.push({...this.part});   
    },
    show(){
      this.check = !this.check
     
    }
  },
  computed : {
    resultSumm(){
      return this.products.length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
