## vue-resource
The HTTP client for Vue.js
The plugin for Vue.js provides services for making web requests and handle responses using a XMLHttpRequest or JSONP.

## Installation

`$ npm install vue-resource`

## Додати в main.js

```js
import VueResource from 'vue-resource';
Vue.use(VueResource);
```

### Example
```js
{
  // GET /someUrl
  this.$http.get('/someUrl').then(response => {

    // get body data
    this.someData = response.body;

  }, response => {
    // error callback
  });
}
```

# Vue Router

Создавать одностраничные приложения (SPA) используя Vue + Vue Router без перезагрузки страницы

## Install

```js
npm install vue-router
```
При использовании модульной системы, необходимо явно обозначить использование роутера при помощи Vue.use() в файле main.js: 
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
Желательно создать отдельный файл routes.js в папке src. Подключить в main.js:

```js
import {routes} from "./routes";

const router = new VueRouter({
    routes,
    mode: 'history'
})

// И добавить сдесь:
new Vue({
    render: h => h(App),
    router             // Это добавить < ---
}).$mount('#app') 
```
 
В файле routes.js подключить все наши роуты:

### Example
```js
export const route = [
    {
       path: : '', component: Home        
    },
    {
       path: : '/User', component: User        
    }
]
```

Не забути в файлі App.vue додати teg "router-view"
### Наприклад
```js
<template>
  <div>
    <h1>Привіт! Це сайт Візитка :) </h1>
    <Header/>
    <router-view/>
  </div>
</template>
```

# Vuex

Vuex — паттерн управления состоянием + библиотека для приложений на Vue. js. Он служит централизованным хранилищем данных для всех компонентов приложения с правилами, гарантирующими, что состояние может быть изменено только предсказуемым образом

Install
```js
npm i vuex
```

В src створюємо папку store та файл в ній store.js
в ньому імпортуємо 
```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({

})
```