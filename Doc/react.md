### react学习笔记(一)


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

  1、生命周期的介绍

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

  2、关于事件处理

  `可以看到 React 里面绑定事件的方式和在 HTML 中绑定事件类似，使用驼峰式命名指定要绑定的 onClick 属性为组件定义的一个方法 {this.handleClick.bind(this)}。`*

  “合成事件”和“原生事件”

  “合成事件”会以事件委托（event delegation）的方式绑定到组件最上层，并且在组件卸载（unmount）的时候自动销毁绑定的事件。

  *比如你在 componentDidMount 方法里面通过 addEventListener 绑定的事件就是浏览器原生事件。*

  *使用原生事件的时候注意在 componentWillUnmount 解除绑定 removeEventListener*

  3、参数传递

  给事件处理函数传递额外参数的方式：bind(this, arg1, arg2, ...)

  ```
  render: function() {
      return <p onClick={this.handleClick.bind(this, 'extra param')}>;
  },
  handleClick: function(param, event) {
      // handle click
  }
  ```
  4、dom操作

  ReactDOM.render 返回对组件的引用也就是组件实例（对于无状态状态组件来说返回 null）

  findDOMNode()： 当组件加载到页面上之后（mounted），你都可以通过 react-dom 提供的 findDOMNode() 方法拿到组件对应的 DOM 元素。

  ```
  import { findDOMNode } from 'react-dom';

  // Inside Component class
  componentDidMound() {
    const el = findDOMNode(this);
  }

  ```

  Refs：另外一种方式就是通过在要引用的 DOM 元素上面设置一个 ref 属性指定一个名称，然后通过 this.refs.name 来访问对应的 DOM 元素。

  - 你可以使用 ref 到的组件定义的任何公共方法，比如 this.refs.myTypeahead.reset()
  - Refs 是访问到组件内部 DOM 节点唯一可靠的方法
  - Refs 会自动销毁对子组件的引用（当子组件删除时）

  - 不要在 render 或者 render 之前访问 refs
  - 不要滥用 refs，比如只是用它来按照传统的方式操作界面 UI：找到 DOM -> 更新 DOM

  5、组合组件

  使用组件的目的就是通过构建模块化的组件，相互组合组件最后组装成一个复杂的应用。

  循环插入子元素：为了保证重新渲染 UI 的时候能够正确显示这些子元素，每个元素都需要通过一个特殊的 key 属性指定一个唯一值（类似vue也有个key）

  this.props.children

  组件标签里面包含的子元素会通过 props.children 传递进来

  6、组件间通信

  父子组件间通信

  这种情况下很简单，就是通过 props 属性传递，在父组件给子组件设置 props，然后子组件就可以通过 props 访问到父组件的数据／方法，这样就搭建起了父子组件间通信的桥梁。

  非父子组件间的通信

  使用全局事件 Pub/Sub 模式，在 componentDidMount 里面订阅事件，在 componentWillUnmount 里面取消订阅，当收到事件触发的时候调用 setState 更新 UI。

  一般来说，对于比较复杂的应用，推荐使用类似 Flux 这种单项数据流架构。

  7、Mixins


  ### Data Flow

  Flux和redux

  flux简介

  与vuex类似，也是分为四部分

  - the dispatcher： 处理动作分发，维护 Store 之间的依赖关系
  - the stores： 数据和逻辑部分
  - the views： React 组件，这一层可以看作 controller-views，作为视图同时响应用户交互
  - 提供给 dispatcher 传递数据给 store

  flux整个流程如下

  - 首先要有 action，通过定义一些 action creator 方法根据需要创建 Action 提供给 dispatcher
  - View 层通过用户交互（比如 onClick）会触发 Action
  - Dispatcher 会分发触发的 Action 给所有注册的 Store 的回调函数
  - Store 回调函数根据接收的 Action 更新自身数据之后会触发一个 change 事件通知 View 数据更改了
  - View 会监听这个 change 事件，拿到对应的新数据并调用 setState 更新组件 UI

  所有的状态都由 Store 来维护，通过 Action 传递数据，构成了如上所述的单向数据流循环，所以应用中的各部分分工就相当明确，高度解耦了。

  Redux……

    
