// Розбити нашу тудушку на компоненти: Вигляд повинен бути такий самий 
// як в попередньому завданні.
// Перший головний App.vue має мати два дочірніх компонента:
// AddTodo.vue - в якому буде input а також кнопка add
// TodoList.vue - в ньому ж буде дочірній компонент TodoItem який ми
//  будемо крутити через масив 
// (дивіться аналогію з відео frameworkList та frameworkItem)
// В компоненті App.vue в data() має знаходитись наш масив тудушок 
// який ми пропсами перекидуємо в компонент TodoList.vue
// Відповідно у ньому ми за домогою v-for ітеруємо компоненти TodoItem
//  і передаємо в кожен свою тудушку.
// Компонент Addtodo.vue після того коли ввели в інпут щось і клікнули
//  по кнопці повинен емітати нашу тудушку 
// в App.vue і за домопогою метода пушити в масив.
// Компонент TodoItem.vue має в собі якийсь span з назвою тудушки і 
// кнопку delete при клікові на яку потрібно емітнути тудушку 
// яку хочемо видалити в компонент TodoList і ще раз перекинути цю 
// подію в компонент App.vue. 
// (можна спростити і використати eventbus, але я б казав прокинути
// на верх до App.vue саме через this.$emit)
// В App.vue приймаємо цю подію, шукаємо в масиві яку саме тудушку 
// хочемо видалити і робимо splice().


<template>
  <div>
    <AddTodo :arrtodo="arrtodo"/>
    <TodoList 
      :arrtodo="arrtodo"
      @done = "done"
    />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'


export default {
  name: 'App',

  data() {
    return {
      arrtodo: ['перше','друге'],
    }
  },

  components: {
    AddTodo,
    TodoList,
  },

  methods: {
    done(index) {
      this.arrtodo.splice(index, 1)
    }
  },

  
  
}
</script>

<style>

</style>
