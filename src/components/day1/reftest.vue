<template>
  <div>
    <div>{{ name }}</div>
    <el-button :onclick="changeName" type="primary">改变姓名</el-button>
    <div>{{ age }}</div>
    <el-button :onclick="changeAge" type="primary">增加</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const name = ref('张三')
const age = ref(1)
//改变name.value进行双向数据绑定
const changeName = () => {
  name.value = '李四'
}
const changeAge = () => {
  age.value += 1
}
</script>

<style scoped></style>
