# reactReroll


1.ReactDOM.render(str,document.getElementById("id"))
//将str 插入id为id的dom元素  str可以是一段html代码
//<script type="text/babel">  js写在text/babel 中转为es5

2.ReactDOM.render(arr,arr.map(
    function(name){return {name}}
),#id)
//展示了map对数组的映射方法

3.ReactDOM.render(<div>{arr}</div>,document.getElementById("example"))
// {arr}可以直接被解析为 循环数组填充在dom元素中

4.var HelloMessage =React.createClass({
         render:function () {
           return <h1>hello {this.props.name} age:{this.props.age}</h1>;
         }
       });
        ReactDOM.render(
                <HelloMessage age="22" name="jack"/>,
                  document.getElementById('example')
       )
//定义组件名称 必须大写开头  并通过props拿到组件中的参数


   

