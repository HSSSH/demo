<style src="@/sass/element.scss" scoped lang="scss"></style>

<template>
    <div v-if="type == 'picture'">
        <img :src="myConfig.src" class="default-img" :style="myConfig.eleStyle">
    </div>
    <div v-else-if="type == 'label'">
        <p class="default-label" :style="myConfig.eleStyle">{{myConfig.text}}</p>
    </div>
    <div v-else-if="type == 'navigate'">
        <ul class="default-nav">
            <li v-for="(item,index) of myConfig.data" :key="index" :style="myConfig.flag == index?myConfig.chooseStyle:myConfig.eleStyle" @click="myConfig.flag = index">{{item.text}}</li>
        </ul>
        <div class="default-nav-content">
            <div v-for="(item,index) of myConfig.children[myConfig.flag]" :key="index" :style="item.style">
                <my-element v-for="(element,index) of item.allElements" :key="index" :style="element.style" :type="element.type" :myConfig="element.myConfig">
                </my-element>
            </div>
        </div>
    </div>
    <div v-else-if="type == 'slidePic'">
        <div class="default-slidePic" :style="myConfig.eleStyle">
            <div v-for="(item,index) of myConfig.imgData" :key="index" :style="item.eleStyle" v-if="myConfig.currentIndex == index"
            @click="myConfig.currentIndex = (myConfig.currentIndex+1)%myConfig.imgData.length">
            </div>
        </div>
    </div>
    <div v-else-if="type == 'article'">
        <div class="default-article" :style="myConfig.eleStyle">
            <div class="header">
                <span>{{myConfig.title}}</span>
                <a href="">{{myConfig.moreInfo}}</a>
            </div>
            <ul>
                <li v-for="(item,index) of myConfig.content" :key="index">
                    <a>{{item.text}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-element',
    components: {},
    data() {
        return {
        }
    },
    props:['config','type'],
    computed:{
        myConfig(){
            return this.config
        }
    },
    methods: {

    }
}
</script>
