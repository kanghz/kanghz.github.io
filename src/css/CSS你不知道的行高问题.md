# CSS你不知道的行高问题

## 引言
在CSS中，`line-height`是一个看似简单但实际上颇具深度的属性。它不仅影响文本的可读性和美观性，还会因不同的设置方式（如20px、1.5、150%、normal等）产生不同的继承效果。本文将深入探讨`line-height`的各种设置方式及其使用场景，帮助你在项目中做出更明智的选择。让我们一起揭开`line-height`的神秘面纱，了解它的工作原理和最佳实践。

<iframe class="iframe" src="https://code.juejin.cn/pen/7493106167812456487" />

## 什么是 line-height

line-height 是 CSS 中用于设置行间距的属性，它表示文本行与行之间的距离。line-height 的计算值会影响行内框（inline box）的高度。

## line-height 的使用方式

line-height 可以使用以下几种方式设置：

1. 纯数字（无单位）：`line-height: 1.5`
2. 带单位的长度值：`line-height: 24px`
3. 百分比：`line-height: 150%`
4. normal：`line-height: normal`（默认值，通常约为1.2）

## line-height 的继承机制

line-height 的继承行为会因设置方式的不同而不同：

### 纯数字
```css
.parent {
  font-size: 16px;
  line-height: 1.5; /* 24px = 16px × 1.5 */
}

.child {
  font-size: 20px; /* 继承父级 1.5 ，实际计算为20px × 1.5 = 30px */
}
```
子元素继承计父元素的行高数值，再基于当前font-size计算行高

### 带单位
```css
.parent {
  font-size: 16px;
  line-height: 24px; /* 24px = 16px × 1.5 */
}

.child {
  font-size: 20px; /* 继承父级24px行高 */
}
```

子元素继承父元素计算后的具体像素值，与子元素自身字体大小无关

### 百分比
```css
.parent {
  font-size: 16px;
  line-height: 150%; /* 24px = 16px × 150% */
}

.child {
  font-size: 20px; /* 继承父级24px行高 */
}
 ```

与带单位类似，继承的是父元素计算后的像素值

### normal
```css
.parent {
  line-height: normal; /* 浏览器默认值（通常1.2） */
}

.child {
  font-size: 20px; /* 继承normal值，实际计算为20px × 1.2 = 24px */
}
 ```

继承normal关键字，实际计算值取决于浏览器默认比例

## 不同设置方式对比

| 类型 | 计算方式 | 继承特性 | 响应式支持 | 维护性 |
|------|----------|-----------|------------|--------|
| 纯数字 | 当前字体尺寸 × 数字 | 继承比例值 | 优秀 | 高 |
| 带单位(px) | 固定像素值 | 继承固定值 | 差 | 低 |
| 百分比 | 父元素字体尺寸 × 百分比 | 继承父元素计算后的固定值 | 一般 | 中 |
| normal | 浏览器默认比例（通常1.2） | 继承normal关键字 | 优秀 | 高 |

## 常见问题与解决方案
### 1. 行高继承导致意外结果
现象 ：子元素继承固定行高值导致文本重叠

```css
/* 错误示例 */
.parent {
  font-size: 16px;
  line-height: 24px;
}

.child {
  font-size: 32px; /* 行高仍为24px导致文本重叠 */
}
 ```

解决方案 ：使用纯数字比例值代替固定单位

### 2. 行内元素垂直对齐问题
现象 ：图片与文字无法完美对齐

```css
.container {
  line-height: 40px;
}

img {
  vertical-align: middle; /* 需要配合调整 */
}
 ```

解决方案 ：使用 vertical-align: middle 并确保行高足够

### 3. 行高计算差异
现象 ：不同浏览器默认行高值不同

```css
/* 统一设置基准 */
body {
  line-height: 1.5;
  font-size: 16px;
}
 ```

解决方案 ：显式设置基准行高值

## 最佳实践建议
1. 优先使用纯数字 ：保持比例关系，适应字体大小变化
2. 避免混合使用单位 ：同一项目保持单位一致性
3. 设置基准行高 ：在body元素定义全局行高
4. 考虑垂直居中 ：
```css
.element {
  height: 60px;
  line-height: 60px; /* 单行文本垂直居中 */
}
 ```

5. 多行文本处理 ：
```css
.multiline {
  line-height: 1.5;
  padding: 20px 0;
}
 ```
