# CSS基础教程-变量

CSS变量（也称为自定义属性）是CSS3引入的一项功能，允许开发者在CSS中定义可复用的值。通过使用CSS变量，可以更方便地管理样式，并提高代码的可维护性和灵活性。

## 一、基础用法

### 1. 定义变量
CSS变量以`--`开头，可以在任何选择器中定义。通常我们会将变量定义在`:root`伪类中，这样它们就可以在整个文档中被访问。

```css
:root {
  --primary-color: #4CAF50;
  --secondary-color: #008CBA;
}
```

### 2. 使用变量
通过`var()`函数来使用已定义的变量。

```css
body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
```

## 二、应用场景

### 1. 主题切换
CSS变量非常适合用于实现主题切换功能。通过动态修改`:root`中的变量值，可以快速改变整个页面的样式。

```css
/* 默认主题 */
:root {
  --bg-color: #fff;
  --text-color: #000;
}

/* 暗黑主题 */
body.dark-theme {
  --bg-color: #333;
  --text-color: #ddd;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

### 2. 组件样式统一
在构建组件库时，可以通过CSS变量统一管理组件的颜色、间距等样式，便于全局调整。

```css
:root {
  --button-padding: 10px 20px;
  --button-border-radius: 5px;
}

button {
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
}
```

## 三、与其他方案的对比

### 1. CSS变量 vs 预处理器变量

| 特性               | CSS变量                     | 预处理器变量（如SASS/LESS） |
|--------------------|-----------------------------|-------------------------------|
| 运行时             | 浏览器运行时解析           | 编译时解析                   |
| 动态修改           | 支持                       | 不支持                       |
| 兼容性             | 现代浏览器支持             | 几乎所有浏览器支持（编译后） |

**优点：**
- CSS变量可以直接在JavaScript中修改，适合动态场景。
- 不需要额外的编译步骤。

**缺点：**
- 兼容性不如预处理器广泛。

### 2. CSS变量 vs 内联样式

| 特性               | CSS变量                     | 内联样式                     |
|--------------------|-----------------------------|------------------------------|
| 可维护性           | 高                         | 低                           |
| 性能               | 较高（集中管理）           | 较低（分散管理）             |

**优点：**
- CSS变量可以集中管理样式，减少重复代码。
- 更易于维护和调试。

**缺点：**
- 对于简单的动态样式，内联样式可能更直接。

## 四、总结

CSS变量为开发者提供了一种强大的工具，用于管理和复用样式值。它不仅简化了代码，还增强了样式的动态性和灵活性。尽管它的兼容性不如预处理器广泛，但在现代浏览器中已经得到了良好的支持，是值得学习和应用的技术。
