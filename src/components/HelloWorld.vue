<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary">重要</el-button>
    <button>按钮</button>

    <router-link to="/path1">zheshi</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
