// 项目发布阶段用到的 babel 插件
const prodPlugins = []
// 如果处于发布模式，才添加这个插件
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    //  ... 代表展开运算符 项目发布时的插件数组
    ...prodPlugins
  ]
}
