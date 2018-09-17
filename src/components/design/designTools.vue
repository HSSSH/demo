<style scoped lang="scss">
.tools{
    width: 100%;
    height: 100%;
    p{
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    div{
        text-align: center;
        button{
            margin: 10px;
            cursor: pointer;
        }
    }
}
</style>

<template>
<div class="tools">
    <div v-for="(item,index) in toolList" :key="index">
        <p>{{item.text}}</p>
        <div>
            <button v-for="(but,index) in item.children" :key="but.type + index" class="btn btn-primary" 
            draggable="true" @dragstart="dragEle($event)" :id="but.type + '&' + index">{{but.text}}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'designTools',
    data() {
        return{
            toolList:[
                {
                    text:'面板元素',
                    children:[
                        {
                            text:'布局1',
                            type:'panel'
                        }
                    ]
                },
                {
                    text:'组件元素',
                    children:[
                        {
                            text:'文字',
                            type:'label'
                        },
                        {
                            text:'图片',
                            type:'picture'
                        }
                    ]
                }
            ]
        }
    },
    mounted(){
    },
    methods:{
        dragEle: function(ev){
            ev.dataTransfer.setData("myEle",ev.target.id);
        }
    }
}
</script>
