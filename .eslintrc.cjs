/** .eslintrc.js
 * 在VSCode中安装ESLint插件，编写过程中检测代码质量
 * ESLint 代码质量校验相关配置
 * 这里使用prettier作为代码格式化工具，用ESLint做代码质检
 * 相关配置使用下面extends扩展先做默认设置
 * 在.prettierrc.js文件中配置好后，格式化规则会以.prettierrc.js作为最终格式，所以不建议在本文件中做代码格式化相关配置
 * 相关prettier配置ESLint会默认加载为代码质检 格式化以prettier为主
 * 在本配置文件中只做代码质量约束规范配置
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended', // 使用推荐的eslint
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
    'plugin:vue/vue3-essential',
    // 1.继承.prettierrc.js文件规则  2.开启rules的 "prettier/prettier": "error"  3.eslint fix的同时执行prettier格式化
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        trailingComma: 'none', // 在对象或数组最后一个元素不加逗号
        tabWidth: 2, // 缩进长度
        useTabs: false, // 是否Tab缩进代替空格
        semi: false, // 是否在末尾添加分号
        endOfLine: 'auto', // 结束行形式
        bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
        arrowParens: 'avoid', // 单参数箭头函数参数周围不使用圆括号
        singleAttributePerLine: true, // html标签属性换行
        bracketSameLine: true // 多属性html标签的‘>’不折行放置
      }
    ],
    // 'no-console':
    //   process.env.NODE_ENV === 'production'
    //     ? ['error', { allow: ['error', 'warn'] }]
    //     : 'off', // 生产模式不允许使用log
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产默认不允许使用debugger
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' }
    ], // 变量声明未使用
    '@typescript-eslint/no-explicit-any': 'off', // 允许ts使用any
    // '@typescript-eslint/no-var-requires': 'off', // 强制使用 import 且不允许使用 require 设置off关闭检查
    // 'vue/require-v-for-key': 'off', // 对保留元素检查 vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写
    // 'vue/valid-v-for': 'off', // 对于非保留(自定义)元素检查  vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写
    // // 添加组件命名忽略规则 vue官方默认规则是多单词驼峰来进行组件命名
    // 'vue/multi-word-component-names': [
    // 	'warn',
    // 	{
    // 		ignores: ['index'], //需要忽略的组件名
    // 	},
    // ],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-unused-components': 1,
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': 'off',
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'handle-callback-err': [2, '^(err|error)$'],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 0,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [1, 'never'],
    'semi-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [1, 'always'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      1,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ],
        line: { markers: ['/'] }
      }
    ],
    'template-curly-spacing': [1, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 1,
    // 'object-curly-spacing': [
    //   2,
    //   'always',
    //   {
    //     objectsInObjects: false
    //   }
    // ],
    'array-bracket-spacing': [2, 'never'],
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}
