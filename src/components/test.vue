<template>
<div>
    <div>
        
    </div>
</div>
</template>

<script>
export default {
    name:'test',
    components:{},
    props: {
    },
    data() {
        return{
        }
    },
    created() {
        
    },
    mounted() {
        //1.1.let
        // let funList1 = [];
        // for(let i = 0;i < 10;i++){
        //     funList1[i] = function () {
        //         console.log(i);
        //     }
        // }
        // let funList2 = [];
        // for(var j = 0;j < 10;j++){
        //     funList2[j] = function () {
        //         console.log(j);
        //     }
        // }
        // // console.log(i); //找不到i直接报错ReferenceError
        // console.log(j);
        // funList1[5]();
        // funList2[5]();

        //1.2.let不存在变量提升
        // var 的情况
        // console.log(foo); // 输出undefined
        // var foo = 2;

        //1.3.暂时性死区（temporal dead zone，简称 TDZ）
        // var tmp = 123;
        // if (true) {
        //     tmp = 'abc'; // ReferenceError
        //     let tmp;     //块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
        // }

        //1.4.ES5 只有全局作用域和函数作用域，没有块级作用域
        // var tmp = new Date();
        // function f() {
        //     console.log(tmp);
        //     if (false) {
        //         var tmp = 'hello world';  //变量提升
        //     }
        // }
        // f(); // undefined
        //块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了

        //1.5.ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。

        //1.6.const一旦声明变量，就必须立即初始化

        //1.7.const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了
        //如果真的想将对象冻结，应该使用Object.freeze方法。
        // const foo = Object.freeze({});
        //// 常规模式时，下面一行不起作用；
        //// 严格模式时，该行会报错
        // foo.prop = 123;

        //1.8.将对象彻底冻结的函数,属性也应该冻结
        var constantize = (obj) => {
            Object.freeze(obj);
            Object.keys(obj).forEach( (key, i) => {
                if ( typeof obj[key] === 'object' ) {
                    constantize( obj[key] );
                }
            });
        };
        
        //2.1变量的解构赋值
        // let [foo, [[bar], baz]] = [1, [[2], 3]];

        // let [ , , third] = ["foo", "bar", "baz"];
        // third // "baz"

        // let [head, ...tail] = [1, 2, 3, 4];
        // head // 1
        // tail // [2, 3, 4]

        // let [x1, y1, ...z1] = ['a'];
        // x1 // "a"
        // y1 // undefined
        // z1 // []

        // let [x2, y2, z2] = new Set(['a', 'b', 'c']);

        //2.2默认值
        let [x, y = 'b'] = ['a']; // x='a', y='b'

    },
    computed: {

    },
    methods: {

    },
    watch: {
        
    },
    beforeDestroy() {

    }
}
</script>

