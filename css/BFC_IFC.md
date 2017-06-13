https://segmentfault.com/a/1190000009545742

FC（Formatting Context）
它是W3C CSS2.1规范中的一个概念，定义的是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

常见的Formatting Context 有：Block Formatting Context（BFC | 块级格式化上下文） 和 Inline Formatting Context（IFC |行内格式化上下文）。

下面就来介绍IFC和BFC的布局规则。


BFC -- Block Formatting Context

BFC的布局规矩：

1、内部box在垂直方向，一个接一个的放置;
2、box的垂直方向由margin决定，属于同一个BFC的两个box间的margin会重叠
3、BFC区域不会与float box重叠（可用于排版）；
4、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
5、计算BFC的高度时，浮动元素也参与计算

哪些元素或属性会触发BFC？

1、根元素；
2、float属性不为none；
3、position为absolute或fixed；
4、display为inline-block, flex, 或者inline-flex；
5、overflow不为visible；


IFC -- Inline formatting context

IFC布局规则：
在行内格式化上下文中，框(boxes)一个接一个地水平排列，起点是包含块的顶部。水平方向上的 margin，border 和 padding在框之间得到保留。框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐。包含那些框的长方形区域，会形成一行，叫做行框。
