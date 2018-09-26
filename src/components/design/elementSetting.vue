<style scoped lang="scss">
    input,select{
        width: calc(100% - 30px);
        margin-bottom: 5px;
    }
</style>

<template>
    <div v-if="type == 'panel'">
        面板
    </div>
    <div v-else-if="type == 'picture'">
        图片
    </div>
    <div v-else-if="type == 'label'">
        <input v-model="eleConfig.text">
        <input v-model="eleConfig.eleStyle['font-size']" type="number"><span>px</span>
        <select v-model="eleConfig.eleStyle['font-weight']">
            <option v-for="(item,index) in labelWeightList" :key="index" :value="item.type">{{item.name}}</option>
        </select>
        <select v-model="eleConfig.eleStyle['font-family']">
            <option v-for="(item,index) in labelfontList" :key="index" :value="item.type">{{item.name}}</option>
        </select>
    </div>
    <div v-else-if="type == 'navigate'">
        导航栏
    </div>
    <div v-else-if="type == 'slidePic'">
        轮播
    </div>
    <div v-else-if="type == 'article'">
        文章
    </div>
</template>

<script>
export default {
    name: 'elementSet',
    props:['config','type'],
    components: {},
    data() {
        return {
            eleConfig: this.init(),
            labelWeightList: [{name:'默认', type: 'normal'},{name:'粗', type: 'bold'},{name:'加粗', type: 'bolder'},{name:'细', type: 'lighter'}],
            labelfontList: [{name:'黑体', type: '黑体'},{name:'宋体', type: '宋体'},{name:'微软雅黑', type: '微软雅黑'}]
        }
    },
    mounted: function () {
    },
    computed:{
    },    
    watch: {
        // config: {
        //     handler(v, o) {
        //         this.eleConfig = v?JSON.parse(JSON.stringify(v)):{};
        //     },
        //     deep: false
        // },
        eleConfig: {
            handler(v, o) {
                 this.changeConfig(v);
            },
            deep: true
        }
    },
    methods: {
        init(){
            var temp = this.config?JSON.parse(JSON.stringify(this.config)):{};
            if(temp.eleStyle && temp.eleStyle['font-size']){
                temp.eleStyle['font-size'] = parseInt(temp.eleStyle['font-size'].replace("px",""));
            }
            return temp;
        },
        changeConfig (obj) {
            this.$store.dispatch('rect/changeConfig', obj);
        }
    }
}
</script>