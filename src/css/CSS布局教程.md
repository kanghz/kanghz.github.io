# CSS 布局教程

## 一、常规布局（Normal Flow）

常规布局是 CSS 的默认布局方式，也称为文档流布局。

### 1. 块级元素（Block）
- 独占一行
- 可以设置宽高、内外边距
- 典型元素：`<div>`、`<p>`、`<h1>-<h6>`

### 2. 行内元素（Inline）
- 在一行内排列
- 不能设置宽高
- 典型元素：`<span>`、`<a>`、`<em>`

### 示例
```html
<div class="block">这是块级元素</div>
<span class="inline">这是行内元素</span>
<style>
  .block {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    margin: 10px;
  }
  .inline {
    background-color: lightpink;
    padding: 5px;
  }
</style>
```

## 二、浮动布局（Float）
浮动布局最初用于实现文字环绕效果，后来被广泛用于网页布局。

### 1. 浮动属性
- float: left ：左浮动
- float: right ：右浮动
- clear: both ：清除浮动
### 示例
```html
<div class="container">
  <div class="float-left">左浮动</div>
  <div class="float-right">右浮动</div>
  <div class="clear"></div>
</div>
<style>
  .container {
    background-color: #f0f0f0;
    padding: 10px;
  }
  .float-left {
    float: left;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }
  .float-right {
    float: right;
    width: 100px;
    height: 100px;
    background-color: lightgreen;
  }
  .clear {
    clear: both;
  }
</style>
 ```

## 三、定位布局（Position）

定位布局允许我们精确控制元素在页面上的位置。

### 1. position 属性值
- `static`：默认值，按照正常文档流定位
- `relative`：相对定位，相对于原来的位置
- `absolute`：绝对定位，相对于最近的定位祖先元素
- `fixed`：固定定位，相对于浏览器窗口
- `sticky`：粘性定位，基于用户的滚动位置

### 2. 偏移属性
- `top`：上偏移距离
- `right`：右偏移距离
- `bottom`：下偏移距离
- `left`：左偏移距离
- `z-index`：控制重叠元素的堆叠顺序

### 示例
```html
<div class="position-container">
  <div class="relative">相对定位</div>
  <div class="absolute">绝对定位</div>
  <div class="fixed">固定定位</div>
  <div class="sticky">粘性定位</div>
</div>
<style>
  .position-container {
    position: relative;
    height: 300px;
    background-color: #f0f0f0;
    margin: 20px;
    padding: 10px;
  }
  .relative {
    position: relative;
    top: 20px;
    left: 20px;
    background-color: lightblue;
    padding: 10px;
  }
  .absolute {
    position: absolute;
    top: 50px;
    right: 20px;
    background-color: lightgreen;
    padding: 10px;
  }
  .fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: lightpink;
    padding: 10px;
  }
  .sticky {
    position: sticky;
    top: 0;
    background-color: lightyellow;
    padding: 10px;
  }
</style>
 ```

## 四、弹性盒布局（Flexbox）
弹性盒布局是一种用于一维布局的CSS模块，可以轻松实现复杂的布局效果。

### 1. 容器属性
- display: flex ：将元素设为弹性容器
- flex-direction ：定义主轴方向
- flex-wrap ：是否换行
- justify-content ：主轴对齐方式
- align-items ：交叉轴对齐方式
- align-content ：多行对齐方式
### 2. 项目属性
- order ：排列顺序
- flex-grow ：放大比例
- flex-shrink ：缩小比例
- flex-basis ：初始大小
- align-self ：单独对齐方式
### 示例
```html
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>
<style>
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    background-color: #f0f0f0;
  }
  .flex-item {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
 ```


## 五、多列布局（Multi-column）

多列布局允许我们像报纸一样将内容分成多列显示。

### 1. 主要属性
- `column-count`：指定列数
- `column-width`：指定列宽
- `column-gap`：列间距
- `column-rule`：列之间的分割线
- `column-span`：跨列设置

### 示例
```html
<div class="multi-column">
  <h2>多列布局示例</h2>
  <p>这是一段长文本内容...（此处省略具体文本）</p>
</div>
<style>
  .multi-column {
    column-count: 3;
    column-gap: 40px;
    column-rule: 1px solid #ccc;
    padding: 20px;
  }
  h2 {
    column-span: all;
    text-align: center;
  }
</style>
```
## 六、响应式布局
响应式布局结合了上述多种布局方式，通过媒体查询实现不同设备上的最佳显示效果。

### 1. 核心技术
- 媒体查询（Media Queries）
- 流式布局（Fluid Layout）
- 弹性图片（Flexible Images）
### 示例
```html
<div class="responsive-container">
  <div class="responsive-item">响应式内容</div>
</div>
<style>
  .responsive-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .responsive-item {
    padding: 20px;
    background-color: lightblue;
  }
  @media screen and (max-width: 768px) {
    .responsive-item {
      padding: 10px;
      font-size: 14px;
    }
  }
</style>
 ```
## 七、网格布局（Grid）
网格布局是最强大的 CSS 布局方案，擅长处理二维布局。

### 1. 容器属性
- display: grid ：将元素设为网格容器
- grid-template-columns ：定义列
- grid-template-rows ：定义行
- grid-gap ：网格间距
- grid-template-areas ：网格区域命名
### 2. 项目属性
- grid-column ：列位置
- grid-row ：行位置
- grid-area ：区域名称
### 示例
```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 100px);
    grid-gap: 10px;
    background-color: #f0f0f0;
    padding: 10px;
  }
  .grid-item {
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
 ```

## 八、子网格（Subgrid）
子网格是网格布局的扩展，允许网格项目继承父网格的行列定义。

### 示例
```html
<div class="parent-grid">
  <div class="subgrid">
    <div class="item">1</div>
    <div class="item">2</div>
  </div>
</div>
<style>
  .parent-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .subgrid {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
  }
  .item {
    background-color: lightpink;
    padding: 20px;
  }
</style>
 ```

## 总结

| 布局方式 | 优点 | 缺点 | 适用场景 |
|---------|------|------|----------|
| 常规布局 | • 简单直观<br>• 浏览器兼容性好<br>• 适合文档流布局 | • 灵活性差<br>• 难以实现复杂布局 | • 基础文档排版<br>• 简单的页面结构 |
| 浮动布局 | • 可实现文字环绕<br>• 简单的多列布局 | • 需要清除浮动<br>• 容易造成布局混乱 | • 文字环绕效果<br>• 简单的左右布局 |
| 定位布局 | • 精确控制位置<br>• 可以制作层叠效果 | • 脱离文档流<br>• 可能影响其他元素 | • 弹窗、固定头部<br>• 特殊位置元素 |
| 弹性盒布局 | • 灵活响应式<br>• 轴向控制方便<br>• 空间分配灵活 | • 只适合一维布局<br>• 老浏览器兼容性差 | • 导航栏<br>• 居中布局<br>• 响应式设计 |
| 多列布局 | • 报纸样式排版<br>• 文本分列简单 | • 功能相对单一<br>• 控制度较低 | • 文章排版<br>• 图文列表 |
| 响应式布局 | • 适应不同设备<br>• 提升用户体验 | • 开发成本较高<br>• 需要多种布局配合 | • 跨设备网站<br>• 自适应页面 |
| 网格布局 | • 二维布局强大<br>• 布局结构清晰 | • 学习曲线陡峭<br>• 老浏览器不支持 | • 复杂页面布局<br>• dashboard设计 |
| 子网格布局 | • 继承父网格特性<br>• 嵌套布局方便 | • 浏览器支持有限<br>• 使用场景较少 | • 复杂表单<br>• 嵌套网格结构 |
