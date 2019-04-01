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
            <div class="container">
            <Todos />
            </div>
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


7.- (src/store) create a new folder store
8.- (src/store/index.js) create a new file index.js this is basically an entry point and is where we combine all our modules
9.- (index.js)

        import Vuex from 'vuex'
        import Vue from 'vue'
        import todos from './modules/todos' <--- aun no hemos creado este archivo 

        //Load Vuex
        Vue.use(Vuex)

        //Create store
        export default new Vuex.Store({
            modules: {
                todos
            }
        })

10.- (main.js) in order for that file to do anything we
have to bring it in to our main.js application starting point.

        import Vue from 'vue'
        import App from './App.vue'
        import store from './store'

        Vue.config.productionTip = false

        new Vue({
        store,
        render: h => h(App),
        }).$mount('#app')

//save

11.- Let's create our modules file
12.- (src/store/modules) create modules folder
13.- (src/store/modules/todos.js) create todos.js this this is where we put our state our getters actions mutations all that stuff now we're gonna make requests from here to our back-end which in this case is Jason placeholder.

        const state = {}

        const getters = {}

        const actions = {}

        const mutations = {}

        export default {
            state,
            getters,
            actions,
            mutations
        }

14.- (src/store/modules/todos.js) we want to be able to get the two dues from the application level state with view X into our to do component.

//por ahora vamos a hardcore some todos here 

        const state = {
            todos : [
                {
                    id: 1,
                    title: 'Todo One'
                },
                {
                    id: 2,
                    title: 'Todo two'
                },
            ]
        }

15.- (todos.js)in order for us to get this state into our to do's component to display we need to add together okay so in the getters let's create a getter called all todos

            const getters = {
                allTodos: (state) => state.todos
            }

// this is going to be a function we want
// to use an arrow function that takes in
// the state and then we want to return
// state.todos okay because we want
// to get this part of the state it's
// actually the only property we have in
// the state of course we could have more
// but in this case we only need this to do

16.- (Todos.vue) we need to be able to have access to that getter.

// so in the script we want to
// import something called map getters
// which does just that it Maps getters
// from view X to our component


        <script>
        import { mapGetters } from 'vuex'

        export default {
            name: 'Todos',
            computed: mapGetters(['allTodos'])
        }
        </script>


// how we define which getters we want to
// use is within the computed property so
// we want to add in computed okay and we
// want to just say map getters and then pass in an array of the getters we want to use and we only have
// one which is allTodos okay so just
// doing that is going is going to allow us
// to use this getter

17.- (Todo.vue) Im go a head to edit my template

        <template>
            <div>
                <h3>Todos</h3>
                <div class="todos">
                    <div v-for="todo in allTodos" :key="todo.id" class="todo">
                        {{todo.title}}
                    </div>
                </div>
            </div>
        </template>

//













*/

