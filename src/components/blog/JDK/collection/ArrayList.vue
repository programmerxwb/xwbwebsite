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
    <!-- 扩容 -->
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
    <hr />
    <!-- 添加数据-->
    <div>
      添加数据
      <el-row type="flex" justify="space-around">
        <el-col :span="10">
          <div style="border-right: solid 1px #D1D1D1;">
            直接插入数据时插入到数组的最后，如果数组大小不够，先进行扩容。
            <el-image :src="addUrl" :preview-src-list="srcList"></el-image>

          </div>
        </el-col>
        <el-col :span="10">
          <div style="border-left: solid 1px #D1D1D1;">
            对于指定的索引插入，把之前的数据移动到后面，在进行插入。
            <el-image :src="addIndexUrl" :preview-src-list="srcList"></el-image>
          </div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <!-- 删除数据 -->
    <div>
      删除数据
      <el-row type="flex" justify="space-around">
        <el-col :span="10">
          <div>
            <el-image :src="delUrl" :preview-src-list="srcList"></el-image>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="introduction">
            根据下标删除：把要删除的后面数据向前移动一位，把最后的值设置为null。
            <hr />
            根据元素删除：寻找到指定元素的第一次出现的下标，并通过下标删除。<br />
            <hr />
            <b>由于JDK的泛型实现是通过类型擦除完成的，所以对象都是转换为Object，所以在寻找元素的时候是通过equals来判定的，但ArrayList可以插入null值，所以当删除null时根据==判定。</b>
          </div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <div style="text-align: left;">
      总结：
      <br />
      1.ArrayList的底层实现为<b>可变数组</b>，为开发人员忽略了底层扩容的细节。由于数组的实现，根据下标直接获取元素，因此查询速度非常快，时间复杂度为O(1)。
      <br />
      2.为了数组中数据的连续性，在每一次删除元素后，需要把后面的元素全部向前移动一位，所以删除元素的时间复杂度为O(n)。
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
        addUrl: require("@/assets/img/blog/ArrayListAdd.png"),
        addIndexUrl: require("@/assets/img/blog/ArrayListAdd_index.png"),
        delUrl: require("@/assets/img/blog/ArrayListDel.png"),
        srcList: [
          require("@/assets/img/blog/ArrayListUML.png"),
          require("@/assets/img/blog/ArrayListUML.png"),
          require("@/assets/img/blog/ArrayListAdd.png"),
          require("@/assets/img/blog/ArrayListAdd_index.png"),
          require("@/assets/img/blog/ArrayListDel.png"),
        ]
      }
    }
  }
</script>

<style>
</style>
