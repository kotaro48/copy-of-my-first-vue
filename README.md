


## branch 2 更改点 改完我就去合并回main分支了哦


局部样式<style scoped> </style>
标签的ref标记 // 不需要加冒号 :ref  本来的话这是个字符串 但其实这里面title2是当作变量处理了
<div>
    <h1 ref="title2"> </h1>
</div>

let title2 = ref();
function show(){
    console.log(title2.log)
}





-------------------------------------------------------

要点1
监视reactive对象的基本数据类型属性的变化时,需要写成函数形式

watch( ()=> person.name , (new, old)=>{
    console.log(name is changed);

}
)

要点2



当你用 person.car = {c1:兰博, c2:法拉利} 去替换原来的
let person = reactive({
    name : ,
    age : ,
    car : {
        c1 : '奥拓',
        c2 : ..       
    }
}) 
watch(person.car, (new,old) => {} ) 是监视不到的,建议写成函数.-> watch(() => person.car, (new,old) => {}, deep: true ) 
这样监视的是地址值了 再加上deep:true






-------------------------------------------------------
const stopWatch = watch(count, (newVal, oldVal) => {
  // 这里虽然是箭头函数的内部，但可以访问外部作用域中的 stopWatch
  if (newVal === 10) {
    stopWatch(); // 调用外部定义的停止函数
  }
});


1. JavaScript 变量声明提升
2. 函数的定义和返回
watch 函数返回一个停止监听的函数，并将这个函数赋值给 stopWatch 变量。这个 stopWatch 是在外部作用域中定义的，但在回调函数中依然可以访问。

3. 闭包 (Closure) 的机制
JavaScript 的闭包允许函数在定义时“捕获”外部作用域中的变量。在这个例子中，箭头函数（(newVal, oldVal) => {...}）形成了一个闭包，它能够访问 watch 函数外部定义的变量 stopWatch。因此，即使 stopWatch 是在回调函数外部定义的，回调函数依然可以使用它。
4. 流程解析
让我们一步步解析这个流程：
x
你调用 watch(count, callback)，watch 函数会立即返回一个函数（停止监听器的函数），并将它赋值给 stopWatch。
当 count 的值发生变化时，watch 注册的回调函数会被调用，newVal 和 oldVal 会被传入。
在回调函数内，虽然 stopWatch 是在回调函数外定义的，但它已经存在于外部作用域，因此可以在回调函数中被调用。


















# my-first-vue-project-withTS

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
