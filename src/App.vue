<template>
  <div class="container">
  
    <Card> 
    <Header/>
    </Card>
  </div>
</template>

<script>
import Card from './components/card.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Card,
    Header
  }
}
</script>

<style>

</style>
