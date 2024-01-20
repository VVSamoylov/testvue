<template>
  <Card
   descr=" Терминатор самый терминорный в мире!!"
  foto="https://w.forfun.com/fetch/94/942dfb4a14880c75031162b342be210d.jpeg?w=1470&r=0.5625"
   msg="Это картинка терминатора!!"/>
  <Card
  foto="https://cojo.ru/wp-content/uploads/2023/01/figurka-ksenomorfa-chuzhoi-zavet-alien-17sm-1.webp" 
  msg="Чужой!!"
  descr="Бойся паразотов они опасны!!" />
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
