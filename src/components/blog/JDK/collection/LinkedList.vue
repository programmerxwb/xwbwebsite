<template>
  <div class="blog-model-body">
    <h1>LinkedList</h1>
    <el-row type="flex" justify="space-around">
      <el-col :span="10">
        <!-- 类的UML-start-->
        <el-image :src="umlUrl" :preview-src-list="srcList"></el-image>
        <!-- 类的UML-end -->
      </el-col>
      <el-col :span="10">
        <div>
          <!-- 特点-start -->
          <el-image :src="nodeUrl" :preview-src-list="srcList"></el-image>
          <el-image :src="structureUrl" :preview-src-list="srcList"></el-image>
          <!-- 特点-end -->
        </div>
      </el-col>
    </el-row>
    <div>
      <br />
      <br />
      LinkedList的底层实现是<b>双向</b>链表数据结构。缺点是浪费内存空间，每次添加一个元素就会实例一个Node节点。
    </div>
    <hr />
    <!-- 添加数据-->
    <div>
      <h4>添加数据</h4>
      <el-row type="flex" justify="space-around">
        <el-col :span="7">
          <div style="border-right: solid 1px #D1D1D1;">
            <h6>addFirst(E e)(头插)</h6>
            <el-image :src="addFirstUrl" :preview-src-list="srcList"></el-image>
            <div style="text-align: left;">
              属性first指向当前的Node，并把之前的头节点作为当前节点的后续节点。
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div style="border-left: solid 1px #D1D1D1;border-right: solid 1px #D1D1D1;">
            <h6>addLast(E e)(尾插)</h6>
            <el-image :src="addLastUrl" :preview-src-list="srcList"></el-image>

            <div style="text-align: left;">
              属性last指向当前的Node，并把之前的尾节点作为当前节点的前驱节点。
            </div>
          </div>

        </el-col>

        <el-col :span="7">
          <div style="border-left: solid 1px #D1D1D1;">
            <h6>add(E e)(默认)</h6>
            <el-image :src="addLastUrl" :preview-src-list="srcList"></el-image>
            <div style="text-align: left;">
              <br />
              调用尾插方法。
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <!-- 删除数据-->
    <div>
      <h4>删除数据</h4>
      <el-row type="flex" justify="space-around">
        <el-col :span="10">
          <div>
            <el-image :src="removeUrl" :preview-src-list="srcList"></el-image>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="introduction">
            LinkedList删除元素的核心方法是<b>unlink(Node x)</b>,如图节点b,d相互指向，这样c节点处于无引用指向的状态，根据垃圾回收的可达性分析后，对于删除的节点进行清理。
            <hr />
            根据数据删除[remove(Object o)]：遍历链表，找到<b>第一个</b>满足的节点，调用unlink进行删除。
            <hr />
            根据下标删除[remove(Object o)]：根据下标找到对应的Node(遍历)，调用unlink进行删除。
            <hr />
            <b>根据元素进行删除，只会删除对应的第一个元素。</b>
          </div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <!-- 获取数据-->
    <div>
      <h4>获取数据</h4>
      <el-row type="flex" justify="space-around">
        <el-col :span="10">
          <el-image :src="getbeforUrl" :preview-src-list="srcList"></el-image>
        </el-col>
        <el-col :span="10">
          <el-image :src="getafterUrl" :preview-src-list="srcList"></el-image>
        </el-col>
      </el-row>
      <div style="text-align: left;">
        根据下标获取元素有意思的点在于可以通过列表中数据量计算本次要查询的数据位于前半段还是后半段，让“指针”移动的距离可以减少。这可能也是LinkedList设置为双向列表的原因(个人看法)。
      </div>
    </div>
    <hr />
    <div>
      <h3>总结</h3>
      <div style="text-align: left;">
        1.区别于ArrayList数组的结构，获取元素的最坏的情况下，时间复杂度为O(n/2)也就是o(n)。<br />
        2.LinkedList的底层数据结构为双向链表，在添加删除元素的时候只需要改变节点的引用即可。但是在中间插入元素，或者删除元素的时间复杂度为O(n)。
      </div>
    </div>
  </div>
</template>

<script>
  const umlUrl = require("@/assets/img/blog/collection/LinkedList/LinkedListUML.png");
  const structureUrl = require("@/assets/img/blog/collection/LinkedList/LinkedListStructure.png");
  const nodeUrl = require("@/assets/img/blog/collection/LinkedList/node.png");
  const addFirstUrl = require("@/assets/img/blog/collection/LinkedList/addFirst.png");
  const addLastUrl = require("@/assets/img/blog/collection/LinkedList/addLast.png");
  const removeUrl = require("@/assets/img/blog/collection/LinkedList/remove.png");
  const getbeforUrl = require("@/assets/img/blog/collection/LinkedList/getbefor.png");
  const getafterUrl = require("@/assets/img/blog/collection/LinkedList/getafter.png");
  export default {
    name: 'App',
    data() {
      return {
        umlUrl: umlUrl,
        structureUrl: structureUrl,
        nodeUrl: nodeUrl,
        addFirstUrl: addFirstUrl,
        addLastUrl: addLastUrl,
        removeUrl: removeUrl,
        getbeforUrl: getbeforUrl,
        getafterUrl: getafterUrl,
        srcList: [
          umlUrl,
          structureUrl,
          nodeUrl,
          addFirstUrl,
          addLastUrl,
          removeUrl,
          getbeforUrl,
          getafterUrl
        ]
      }
    }
  }
</script>

<style>
</style>
