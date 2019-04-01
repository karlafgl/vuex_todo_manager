/*
TUTORIAL Vuex Crash Course | State Management

1.- vue create -app name-
2.- vue i vuex
3.- npm run serve
4.- Create first component: Todos.vue (src/components/Todos.vue)
5.- (Todos.vue) scaffold git tab and you will see the template finished 

<template>
    <div>
        <h3>Todos</h3>
    </div>
</template>

<script>
export default {
    name: 'Todos'

}
</script>

<style scoped>

</style>

6.- (App.vue) cambia la estructura del file and if we will get back to our app we will see the word "Todos"

<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    Todos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>


7.- 
*/