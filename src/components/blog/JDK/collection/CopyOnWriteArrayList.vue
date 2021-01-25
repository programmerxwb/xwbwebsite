<template>
  <div class="blog-model-body">
    <h1>CopyOnWriteArrayList</h1>
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
          结构:与ArrayList相同，基于读写分离思想的线程安全的ArrayList。
          <hr />
          特点:线程安全，不能保证数据的实时一致性，只能保证最终一致性。
          <hr />
          应用场景:读多写少的场景。
          <!-- 特点-end -->
        </div>
      </el-col>
    </el-row>
    <hr />
    <div>
      <h3>“写”数据</h3>
      <el-row type="flex" justify="space-around">
        <el-col :span="10">
          <div style="border-right: solid 1px #D1D1D1;">
            <el-image :src="addUrl" :preview-src-list="srcList"></el-image>
          </div>
        </el-col>
        <el-col :span="10">
          <div style="border-left: solid 1px #D1D1D1; height: 100%;" class="textleft">
            <el-image :src="addCodeUrl" :preview-src-list="srcList"></el-image>
            <br />
            <span class="question">为什么不使用读写锁进行读写分离？</span><br />
            因为读读的时候虽然能并发完成，但是在读的时候写操作未完成，读操作会阻塞直到写线程完成，保证了实时一致性，但是降低了效率。代码逻辑的世界中没有最好的，只有最适合的。<br /><br />
            <span class="question">为什么不直接对ArrayList的写操作加锁，而对于读操作不加锁？</span><br />
            因为底层的array使用volatile关键字修饰，满足了可见性，但是如果<b>只是改变数组的数据，而不是改变array的引用,在读取的时候是不能拿到最新的值的。</b>
          </div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <div>
      <h3>遍历集合</h3>
      <el-row type="flex" justify="space-around">
        <el-col :span="10">
          <div style="border-right: solid 1px #D1D1D1;">
            <el-image :src="iteratorUrl" :preview-src-list="srcList"></el-image>
          </div>
        </el-col>
        <el-col :span="10">
          <div style="border-left: solid 1px #D1D1D1; height: 100%;" class="textleft">
            <el-image :src="createIteratorUrl" :preview-src-list="srcList"></el-image>
            右图为CopyOnWriteArrayList中的Iterator类的代码(为了版面进行了删减，请以自己的类库为主)。上图为创建iterator的实例方法。<br />
            <br />在创建Iterator的实例时，传入的数组是<b>当前的数据</b>，也就意味着，当前的Iterator是不会随着CopyOnWriteList的数据变化的。
            <br /><br />
            <span class="question">CopyOnWriteArrayList的Iterator为什么不支持set,remove以及add？</span><br />
            CopyOnWriteArrayList的Iterator实例拿到的是当前“快照”下的数据，如果对Iterator的数据进行写操作，而另一个线程通过CopyOnWriteArrayList实例去修改数据，最后Iterator的数据去进行array的替换，必将会造成数据的丢失。单对Iterator中的写操作进行加锁，并不能保证数据的一致性(请大家想一下这里)。
          </div>
        </el-col>
      </el-row>
    </div>
    <hr />
    <div>
      <h3>总结</h3>
      <div class="textleft">
        1.CopyOnWriteArrayList的实现思想是读写分离来保证并发安全的。<br />
        2.CopyOnWriteArrayList的读操作是不加锁的，而且通过数组完成，读效率非常高。<br />
        3.CopyOnWriteArrayList通过写复制保证了数据的可见性(volatile)，但是只能保证最终一致性。<br />
        4.CopyOnWriteArrayList适用于读多写少的场景，因为写操作备份数据，浪费内存，产生更多的GC。<br />
      </div>
    </div>
  </div>
</template>

<script>
  const umlUrl = require("@/assets/img/blog/collection/CopyOnWriteArrayList/uml.png");
  const structureUrl = require("@/assets/img/blog/collection/CopyOnWriteArrayList/Structure.png");
  const addUrl = require("@/assets/img/blog/collection/CopyOnWriteArrayList/add.png");
  const addCodeUrl = require("@/assets/img/blog/collection/CopyOnWriteArrayList/addCode.png");
  const iteratorUrl = require("@/assets/img/blog/collection/CopyOnWriteArrayList/iterator.png");
  const createIteratorUrl = require("@/assets/img/blog/collection/CopyOnWriteArrayList/createIterator.png");
  export default {
    name: 'App',
    data() {
      return {
        umlUrl: umlUrl,
        structureUrl: structureUrl,
        addUrl: addUrl,
        addCodeUrl: addCodeUrl,
        iteratorUrl: iteratorUrl,
        createIteratorUrl: createIteratorUrl,
        srcList: [
          umlUrl,
          structureUrl,
          addUrl,
          addCodeUrl,
          iteratorUrl,
          createIteratorUrl
        ]
      }
    }
  }
</script>

<style>
</style>
