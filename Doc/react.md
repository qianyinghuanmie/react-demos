### react初步学习


#### React 大体包含下面这些概念：

  - 组件
  - JSX
  - Virtual DOM
  - Data Flow

  组件：props是组件配置属性 ，内部是不会变化的，

  JSX：HTML 直接嵌入了 JS 代码里面

  Virtual DOM：React 在这个 Virtual DOM 上实现了一个 diff 算法，当要重新渲染组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以实际上不是真的渲染整个 DOM 树。

  Data Flow：“单向数据绑定“

#### JSX的语法的一些介绍

  你可以通过 React.createElement 来构造组件的 DOM 树。第一个参数是标签名，第二个参数是属性对象，第三个参数是子元素。

  ```
  var child = React.createElement('li', null, 'Text Content');
  var root = React.createElement('ul', { className: 'my-list' }, child);
  React.render(root, document.body);
  ```
#### 组件的一些介绍

  生命周期的介绍

  - 装载组件触发
  - componentWillMount
  - componentDidMount
  - 更新组件触发
  - componentWillReceiveProps
  - shouldComponentUpdate
  - componentWillUpdate
  - componentDidUpdate
  - 卸载组件触发
  - componentWillUnmount

  关于事件处理
