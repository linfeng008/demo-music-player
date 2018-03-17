module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    strict: "off",
    "no-mixed-spaces-and-tabs": 0, //禁止混用tab和空格
    "no-tabs": "off", //禁止使用tab
    semi: 0, //语句强制分号结尾
    tab: 0,
    "space-after-keywords": 0, //关键字后面是否要一空格
    "space-before-keywords": 0, //关键字前面是否要一空格
    "spaced-comment": 0, //注释风格是否要有空格
    "space-before-blocks": 0, //不以新行开始的块{前面要不要有空格
    "space-before-function-paren": 0, //函数定义时括号前面要不要有空格
    "arrow-spacing": 0, //=>的前/后括号
    "keyword-spacing": 0,
    "key-spacing": 0, //对象字面量中冒号的前后空格
    "comma-spacing": 0, //逗号前后的空格
    "no-use-before-define": 0, //未定义前不能使用
    indent: 0, //缩进风格
    "object-shorthand": 0, //强制对象字面量缩写语法
    "react/jsx-closing-bracket-location": 0, //标签闭合尖括号位置校验
    "react/jsx-indent": 0, //jsx标签的缩进
    "react/self-closing-comp": 0, //没有子节点是否使用额外闭合标签
    "react/jsx-indent-props": [0, "tab"], //
    "object-curly-spacing": 0, //大括号内是否允许不必要的空格
    "prefer-const": 0 //首选const
  }
};
