# 基于 Create React App 集成的网站基础配置

## 启动项目

`yarn start`

## 配置插件

### 配置 代码 提示工具

`jsconfig.json` 文件

### 配置别名

1. `yarn add @craco/craco -D`

2. 创建 `craco.config.js` 文件

3. 添加配置

```js
//配置 webpack, 别名
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  }
```

### 配置 less

1. `yarn add craco-less -D`

2. 在 `craco.config.js` 文件，添加配置

```js
//配置 less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
```
