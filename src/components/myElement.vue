<style src="@/sass/element.scss" scoped lang="scss"></style>

<template>
    <div v-if="type == 'picture'">
        <img :src="config.src" class="default-img" :style="config.eleStyle">
    </div>
    <div v-else-if="type == 'label'">
        <p class="default-label" :style="config.eleStyle">{{config.text}}</p>
    </div>
    <div v-else-if="type == 'navigate'">
        <ul class="default-nav">
            <li v-for="(item,index) of config.data" :key="index" :style="config.flag == index?config.chooseStyle:config.eleStyle" @click="config.flag = index">{{item.text}}</li>
        </ul>
        <div class="default-nav-content">
            <div v-for="(item,index) of config.children[config.flag]" :key="index" :style="item.style">
                <my-element v-for="(element,index) of item.allElements" :key="index" :style="element.style" :type="element.type" :config="element.config">
                </my-element>
            </div>
        </div>
    </div>
    <div v-else-if="type == 'slidePic'">
        <div class="default-slidePic" :style="config.eleStyle">
            <div v-for="(item,index) of config.imgData" :key="index" :style="item.eleStyle" v-if="config.currentIndex == index"
            @click="config.currentIndex = (config.currentIndex+1)%config.imgData.length">
            </div>
        </div>
    </div>
    <div v-else-if="type == 'article'">
        <div class="default-article" :style="config.eleStyle">
            <div class="header">
                <span>{{config.title}}</span>
                <a href="">{{config.moreInfo}}</a>
            </div>
            <ul>
                <li v-for="(item,index) of config.content" :key="index">
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
    methods: {

    }
}
</script>
