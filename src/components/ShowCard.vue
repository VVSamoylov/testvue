<template>
  <div>
    <div class="row">
        <div v-for="item in prods" :key=item class="alert alert-success" role="alert">Название: {{item.name}} <br/> Цена: {{item.price}} <br/> Количество: {{item.volume}}    </div>
    </div>
  </div>  
</template>

<script>
/* eslint-disable */
import Product from '@/lib/Product.js'
export default {
  name: 'Card',
  props: {
    prods:{
        type: [],
        required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
