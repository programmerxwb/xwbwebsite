<template>
  <div class="blog-model-body">
    <h1>Vector</h1>
    <el-row type="flex" justify="space-around">
      <el-col :span="10">
        <!-- 类的UML-start-->
        <el-image :src="umlUrl" :preview-src-list="srcList"></el-image>
        <!-- 类的UML-end -->
      </el-col>
      <el-col :span="10">
        <div>
          <!-- 特点-start -->
          <el-image :src="structureUrl" :preview-src-list="srcList"></el-image>
          <div style="text-align: left;">
            相信大家对这个结构图似曾相识，因为这里和ArrayList的结构式相同的,但是Vector是在jdk1.0中就已经出现的容器。
          </div>
          <!-- 特点-end -->
        </div>
      </el-col>
    </el-row>
    <hr />
    <div>
      <h3>线程安全的区别</h3>
      <el-image :src="addUrl" :preview-src-list="srcList"></el-image>
      <div class="textleft">
        左图为ArrayList，右图为Vector(举例其中的一个方法)。
        <br />
        第一眼看到的结果就是他们的写法不同，但如果深入看一下，发现中心思想是相同的，但是重点的就是vector的add方法中添加了<b>synchronized</b>
        关键字，也就是<b>线程安全的</b>，再去看其他的方法都是一样的，也就是Vector是一个线程安全的容器。
      </div>
    </div>
    <hr />
    <div>
      <h3>扩容的区别</h3>
      <el-image :src="growUrl" :preview-src-list="srcList"></el-image>
      <div class="textleft">
        左图为ArrayList，右图为Vector(举例其中的一个方法)。
        <br />
        可能在意过这里的人都搜索过他们之间的区别，第一个最大的区别就是<b>Arraylist中的扩容是1.5倍的扩容，而Vector的扩容默认是2倍的扩容</b>。
        <br />
        但是Vector中还有一个细节指的注意，可以通过capacityIncrement指定每一次扩容的大小，capacityIncrement的值可以通过构造方法读入的。
      </div>
    </div>
    <hr />
    <div>
      <h3>SynchronizedList</h3>
      <div class="textleft">
        <b>SynchronizedList的使用</b><br />
        通过JDK提供的Collections.synchronizedList(Listlist)把线程不安全的List转为线程安全的List。
        <br />
        <b>SynchronizedList的实现原理</b><br />
        Collections类中有一个静态类SynchronizedList对于普通的List进行封装，也就是我们熟悉的装饰模式，在每一次调用List的方法时添加一个锁来完成。<br />
        <b>注意</b><br />
        SynchronizedList中并没有对Iterator相关添加锁，所以在使用是请注意自行加锁。示例如下图。
        <el-image :src="iteratorUrl" :preview-src-list="srcList"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
  const umlUrl = require("@/assets/img/blog/collection/Vector/uml.png");
  const structureUrl = require("@/assets/img/blog/collection/Vector/structure.png");
  const addUrl = require("@/assets/img/blog/collection/Vector/add.png");
  const growUrl = require("@/assets/img/blog/collection/Vector/grow.png");
  const iteratorUrl = require("@/assets/img/blog/collection/Vector/iterator.png");
  export default {
    name: 'App',
    data() {
      return {
        umlUrl: umlUrl,
        structureUrl: structureUrl,
        addUrl: addUrl,
        growUrl: growUrl,
        iteratorUrl: iteratorUrl,
        srcList: [
          umlUrl,
          structureUrl,
          addUrl,
          growUrl,
          iteratorUrl
        ]
      }
    }
  }
</script>

<style>
</style>
