<template>
  <div>
    <el-row>
      <el-col :span="4">
        <!--
        <el-switch v-model="isCollapse" active-color="#ff4949" inactive-color="#13ce66">
        </el-switch> -->
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <router-link to="explain">
                <div style="height: 100%;width: 100%;">
                  <i class="el-icon-location"></i>
                  <span slot="title">
                    集合框架
                  </span>
                </div>
              </router-link>
            </template>
            <el-menu-item-group>
              <span slot="title">List</span>
              <router-link to="ArrayList">
                <el-menu-item index="1-1">
                  ArrayList
                </el-menu-item>
              </router-link>
              <router-link to="LinkedList">
                <el-menu-item index="1-2">
                  LinkedList
                </el-menu-item>
              </router-link>
              <router-link to="Vector">
                <el-menu-item index="1-3">
                  Vector
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="Map">
              <el-menu-item index="1-4">HashMap</el-menu-item>
              <el-menu-item index="1-5">LinkedHashMap</el-menu-item>
              <el-menu-item index="1-6">HashMap</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      explain() {
        console.log(1);
      }
    }
  }
</script>

<style>
</style>
