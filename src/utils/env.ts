import _ from 'lodash'
const env: Record<string, any> = _.cloneDeep(import.meta.env)

// 环境变量类型转换
Object.entries(import.meta.env as Record<string, any>).forEach(
  ([key, value]) => {
    if (value === 'true' || value === 'false') {
      env[key] = value === 'true'
    } else if (/^\d+$/.test(value)) env[key] = Number(value)
    else if (value === 'null') env[key] = null
    else if (value === 'undefined') env[key] = undefined
  }
)

console.log('env11', env)

export default env as ImportMetaEnv
// export default env as ImportMeta
