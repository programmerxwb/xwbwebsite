<template>
  <div class="blog-model-body">
    <h1>{{title}}</h1>
    <el-row type="flex" justify="space-around">
      <el-col :span="10">
        <!-- 类的UML-start-->
        <el-image :src="umlUrl" :preview-src-list="srcList"></el-image>
        <!-- 类的UML-end -->
      </el-col>
      <el-col :span="10">
        <div class="introduction">
          <!-- 特点-start -->
          <el-image :src="structureUrl"></el-image>
          <hr />
          特点: 增加删除速度快，查找速度慢。
          <hr />
          底层实现: 可变的数组，隐藏了底层的细节。
          <hr />
          初始容量: 10
          <hr />
          扩容比例: 1.5
          <hr />
          <!-- 特点-end -->
        </div>
      </el-col>
    </el-row>
    <hr />
    <!-- 添加数据 -->
    <div>
      数组的扩容
      <el-row type="flex" justify="space-around">
        <el-col :span="10">
          <div class="code">
            <p><span class="keyword">private</span>
              <span class="keyword">void</span>
              <span>grow(int</span>
              <span>minCapacity)</span>
              <span>{</span>
            </p>
            <p class="notes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// overflow-conscious code</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">int</span>
              <span>oldCapacity</span>
              <span>=</span>
              <span>elementData.length;</span>
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">int</span>
              <span>newCapacity</span>
              <span>=</span>
              <span>oldCapacity</span>
              <span>+</span>
              <span>(oldCapacity</span>
              <span>>></span>
              <span>1);</span>
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>
              <span>(newCapacity</span>
              <span>-</span>
              <span>minCapacity</span>
              <span>
                <</span> <span>0)
              </span>
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>newCapacity</span>
              <span>=</span>
              <span>minCapacity;</span>
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>
              <span>(newCapacity</span>
              <span>-</span>
              <span>MAX_ARRAY_SIZE</span>
              <span>></span>
              <span>0)</span>
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>newCapacity</span>
              <span>=</span>
              <span>hugeCapacity(minCapacity);</span>
            </p>
            <p class="notes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// minCapacity is usually close to size,
              so this is a win:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>elementData</span>
              <span>=</span>
              <span>Arrays.copyOf(elementData,</span>
              <span>newCapacity);</span>
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span>}</span>
            </p>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="introduction">
            把原来的数组复制到更大的数组中。
            如果创建时没有指定数组的大小，在第一次插入把数组的大小初始化为10。
            <hr />
            优点:不用每一次都进行扩容，提高了效率。
            <hr />
            缺点:由于提前的扩容，浪费了空间。
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        title: this.$route.params.title,
        structureUrl: require("@/assets/img/blog/ArrayListStructure.png"),
        umlUrl: require("@/assets/img/blog/ArrayListUML.png"),
        srcList: [
          require("@/assets/img/blog/ArrayListUML.png")
        ]
      }
    }
  }
</script>

<style>
</style>
