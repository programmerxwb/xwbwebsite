<template>
  <div id="app">
    <el-col :span="24">
      <div id="head">
        <el-row type="flex" justify="center">
          <el-col :span="3">
            <div class="head_label">
              <img src="@/assets/img/logo.png">
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_label" >
              <router-link to="/blog" style="color: #D1D1D1">教程</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_label">
              论坛
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_label">
              网站介绍
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_label">
              关于站长
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_label">
              <router-link to="/path" style="color: #D1D1D1;">
                登陆
              </router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>

    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userid: 10
      }
    }
  }
</script>

<style>
  @import url("assets/css/base.css");
</style>
