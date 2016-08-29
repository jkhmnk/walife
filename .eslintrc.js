module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  parser: 'babel-eslint',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'env': {
    'browser': true, //如果没有配成浏览器环境，alert会报未定义
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 最后一个允许跟  “,”
    'comma-dangle': 0,
    // 允许``里面没用${}
    'quotes': 0,
    // 生成器函数*的前后空格
    'generator-star-spacing': 0
  }
}
