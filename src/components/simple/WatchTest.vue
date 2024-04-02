<template>
  <div class="person">
    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
    <h2 ref="demo">水温：{{ temp }}</h2>
    <h2>水位：{{ height }}</h2>
    <button @click="changePrice">水温+10</button>
    <button @click="changeSum">水位+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watchEffect } from 'vue'
let demo = ref()
// 数据
let temp = ref(0)
let height = ref(0)
// 方法
function changePrice() {
  temp.value += 10
}
function changeSum() {
  height.value += 1
}

// 用watch实现，需要明确的指出要监视：temp、height
// watch([temp, height], (value) => {
//   // 从value中获取最新的temp值、height值
//   const [newTemp, newHeight] = value
//   // 室温达到50℃，或水位达到20cm，立刻联系服务器
//   if (newTemp >= 50 || newHeight >= 20) {
//     console.log('联系服务器')
//   }
// })

// 用watchEffect实现，不用
const stopWtach = watchEffect(() => {
  // 室温达到50℃，或水位达到20cm，立刻联系服务器
  if (temp.value >= 50 || height.value >= 20) {
    console.log(demo.value)
    console.log('联系服务器')
  }
  // 水温达到100，或水位达到50，取消监视
  if (temp.value === 100 || height.value === 50) {
    console.log('清理了')
    stopWtach()
  }
})
</script>
