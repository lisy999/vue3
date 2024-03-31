<template>
  <div>
    <el-form label-width="80px" :model="person">
      <el-form-item label="名称">
        <el-input v-model="person.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="person.age"></el-input>
      </el-form-item>
      <div>计算属性：{{ personComputed }}</div>
    </el-form>

    <el-button :onclick="changeName" type="primary">改变姓名</el-button>
    <el-button :onclick="changeAge" type="primary">增加一岁</el-button>
    <el-button :onclick="changeAll" type="primary">改变所有</el-button>
    <el-button :onclick="changeComputed" type="primary">改变计算属性</el-button>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue'
let person = reactive({ name: 'lisi', age: 23 })
let { name, age } = toRefs(person)
//改变name.value进行双向数据绑定
const changeName = () => {
  name.value = '李四'
}
const changeAge = () => {
  age.value += 1
}
const changeAll = () => {
  //reactive 写法
  Object.assign(person, { name: (name.value += '~'), age: age.value + 1 })
  //ref写法
  // person.value = { ...person.value+=1, name: name.value += '~' }
}
const personComputed = computed({
  get() {
    return `姓名为:${person.name},年龄是:${person.age}`
  },
  set(v) {
    //set里的v是字符串
    const { name, age } = JSON.parse(v)
    Object.assign(person, { name, age })
  }
})
const changeComputed = () => {
  //改变computed计算属性需要使用get set
  personComputed.value = JSON.stringify({ name: '源', age: 24 })
}
</script>

<style scoped></style>
