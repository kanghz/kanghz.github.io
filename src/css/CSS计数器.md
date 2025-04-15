# CSS 计数器培训文档

## 1. 计数器简介
CSS 计数器是一种用于在网页中自动编号的技术。通过使用 `counter-reset`、`counter-increment` 和 `content` 属性，可以在不依赖 JavaScript 的情况下实现元素的自动编号。

## 2. 使用场景
CSS 计数器适用于以下场景：
- 自动生成目录编号
- 列表项的自动编号
- 图表的编号
- 章节标题的自动编号

## 3. 对比 JavaScript 计数的优势
- **性能**：CSS 计数器由浏览器直接处理，无需 JavaScript 的解析和执行，性能更高。
- **简洁性**：CSS 计数器代码简洁，易于维护。
- **兼容性**：现代浏览器普遍支持 CSS 计数器，兼容性好。

## 4. 属性介绍

### 4.1 `counter-reset`
- **作用**：初始化或重置计数器。
- **语法**：`counter-reset: <counter-name> [<initial-value>];`
- **示例**：`counter-reset: section 0;` 初始化一个名为 `section` 的计数器，初始值为 0。

### 4.2 `counter-increment`
- **作用**：增加计数器的值。
- **语法**：`counter-increment: <counter-name> [<increment-value>];`
- **示例**：`counter-increment: section 2;` 每次增加 `section` 计数器的值 2。

### 4.3 `content`
- **作用**：插入生成的内容，通常与 `counter()` 函数一起使用。
- **语法**：`content: <string> | counter(<counter-name>) | attr(<attribute-name>) | ...;`
- **示例**：`content: counter(section) ": ";` 插入 `section` 计数器的值。

## 5. 案例分析

### 1. 自动生成目录编号
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 计数器示例</title>
    <style>
        body {
            counter-reset: section;
        }
        h2::before {
            counter-increment: section;
            content: counter(section) ": ";
        }
    </style>
</head>
<body>
    <h2>简介</h2>
    <p>这里是简介部分</p>
    <h2>正文</h2>
    <p>这里是正文部分。</p>
    <h2>结论</h2>
    <p>这里是结论部分</p>
</body>
</html>
```
**解释**：
- `counter-reset: section;` 初始化一个名为 `section` 的计数器。
- `counter-increment: section;` 在每个 `h2` 元素前增加计数器的值。
- `content: counter(section) ": ";` 在 `h2` 元素前插入计数器的值。

### 2. 自定义递增数量：从4开始，每次增加2
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 计数器示例</title>
    <style>
        body {
            counter-reset: section 2;
        }
        h2::before {
            counter-increment: section 2;
            content: counter(section) ": ";
        }
    </style>
</head>
<body>
    <h2>简介</h2>
    <p>这里是简介部分</p>
    <h2>正文</h2>
    <p>这里是正文部分。</p>
    <h2>结论</h2>
    <p>这里是结论部分</p>
</body>
</html>
```
**解释**：
- `counter-reset: section 2;` 初始化一个名为 `section` 的计数器，设置默认值为 2。
- `counter-increment: section 2;` 每次增加 `section` 计数器的值 2。

### 3. 自定义编号的示例：罗马数字
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 计数器示例</title>
    <style>
        body {
            counter-reset: section;
        }
        h2::before {
            counter-increment: section;
            content: counter(section, upper-roman) ": ";
        }
    </style>
</head>
<body>
    <h2>简介</h2>
    <p>这里是简介部分</p>
    <h2>正文</h2>
    <p>这里是正文部分。</p>
    <h2>结论</h2>
    <p>这里是结论部分</p>
</body>
</html>
```
**解释**：
- `counter(section, upper-roman)` 使用大写罗马数字进行编号。

### 4. 自定义编号的示例：自定义序列
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 计数器示例</title>
    <style>
        body {
            counter-reset: section;
        }
        @counter-style custom-list {
            system: custom-list;
            symbols: "\7532" "\4E59" "\4E19" "\4E01" "\620A" "\5DF1" "\5E9A" "\8F9B" "\58EC" "\7678";
            suffix: ": ";
        }
        .list{
            counter-reset: custom;
            list-style: custom-list;
        }
    </style>
</head>
<body>
    <ol class="list">
        <li>自定义序列</li>
        <li>自定义序列</li>
        <li>自定义序列</li>
        <li>自定义序列</li>
    </ol>
</body>
</html>
```

## 6. 总结
CSS 计数器是一种强大的工具，可以在不依赖 JavaScript 的情况下实现网页元素的自动编号。通过 `counter-reset`、`counter-increment` 和 `content` 属性的组合使用，可以轻松实现各种编号需求，并且具有性能高、代码简洁、兼容性好的优势。