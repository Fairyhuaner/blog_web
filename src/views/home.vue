<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <el-button type="primary">Primary</el-button>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <el-button type="success">Success</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { getDepts } from '../api/remote/depts'
// import { login } from '../api/remote/user'
// login({ password: '12321', username: '3213' }).then((res: any) => {
//   console.log('res', res.data.username)
// })
const getList = async () => {
  await getDepts()
}

onMounted(() => {
  getList()
  console.log('启动成功')
})
</script>

<style lang="scss" scoped>
.bottom-box {
  position: absolute;
  bottom: 0;
  left: 50%;
}
</style>
