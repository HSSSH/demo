<style src="@/sass/element.scss" scoped lang="scss"></style>

<template>
    <div v-if="type == 'panel'" @drop="drop($event)" @dragover="allowDrop($event)">
        <VueDragResize v-for="(rect) in myConfig.children"
                :key="rect.id"
                :w="rect.width"
                :h="rect.height"
                :x="rect.left"
                :y="rect.top"
                :parentW="myConfig.width"
                :parentH="myConfig.height"
                :axis="rect.axis"
                :isActive="rect.active"
                :minw="rect.minw"
                :minh="rect.minh"
                :isDraggable="rect.draggable"
                :isResizable="rect.resizable"
                :parentLimitation="rect.parentLim"
                :aspectRatio="rect.aspectRatio"
                :preventActiveBehavior="rect.unableActive"
                :z="rect.zIndex"
                :style="{background:rect.color,visibility:rect.visibility}"
                @activated="activateEv('rects',rect.id)"
                @deactivated="deactivateEv('rects',rect.id)"
                @dragging="changePosition($event, 'rects',rect.id)"
                @resizing="changeSize($event, 'rects',rect.id)"
                @focusContainer="focusContainer('rects',rect.id)"
        >
            <my-element :style="rect.element.style" :type="rect.element.type" :config="rect.element.config">
            </my-element>
        </VueDragResize>
        <div class="panel-cover" :style="{visibility:myConfig.coverVisible?'visible':'hidden'}"></div>
    </div>
    <div v-else-if="type == 'picture'">
        <img :src="myConfig.src" class="default-img" :style="myConfig.eleStyle">
    </div>
    <div v-else-if="type == 'label'">
        <span class="default-label" :style="myConfig.eleStyle">{{myConfig.text}}</span>
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
import VueDragResize from '@/components/design/dragResize/dragResize.vue';
export default {
    name: 'my-element',
    components: {
        VueDragResize
    },
    props:['config','type'],
    data(){
        return {
        }
    },

    mounted() {
        // this.$nextTick(function () {
        //     this.listWidth = this.$el.clientWidth;
        //     this.listHeight = this.$el.clientHeight;
        // })
        // this.listWidth = this.myConfig.width;
        // this.listHeight = this.myConfig.height;
    },

    computed: {
        myConfig(){
            return this.config
        }
    },

    methods: {
        activateEv(dataName,id) {
            this.$store.dispatch('rect/setActive', {name:dataName, id: id});
        },

        deactivateEv(dataName,id) {
            this.$store.dispatch('rect/unsetActive', {name:dataName, id: id});
        },

        changePosition(newRect,dataName, id) {
            this.$store.dispatch('rect/setTop', {name:dataName, id: id, top: newRect.top});
            this.$store.dispatch('rect/setLeft', {name:dataName, id: id, left: newRect.left});
            this.$store.dispatch('rect/setWidth', {name:dataName, id: id, width: newRect.width});
            this.$store.dispatch('rect/setHeight', {name:dataName, id: id, height: newRect.height});
        },

        changeSize(newRect,dataName, id) {
            this.$store.dispatch('rect/setTop', {name:dataName, id: id, top: newRect.top});
            this.$store.dispatch('rect/setLeft', {name:dataName, id: id, left: newRect.left});
            this.$store.dispatch('rect/setWidth', {name:dataName, id: id, width: newRect.width});
            this.$store.dispatch('rect/setHeight', {name:dataName, id: id, height: newRect.height});
        },

        focusContainer(dataName,id){
            this.$store.dispatch('rect/focusContainer', {name:dataName, id: id});
        }, 

        allowDrop(ev) {
            if(this.myConfig.allowDrop){
                ev.preventDefault();
            }
            return;
        },
    
        drop(ev) {
            if(this.myConfig.allowDrop){
                ev.preventDefault();
                var type = ev.dataTransfer.getData("myEle");
                var parentId = this.$store.state.rect.currentChoose.length?this.$store.state.rect.currentChoose[this.$store.state.rect.currentChoose.length-1].id:-1
                if(this.myConfig.currentPanelId == parentId){
                    this.$store.dispatch('rect/addNewRect', {name: 'rects', parentId:parentId, eleType:type, x:ev.layerX, y:ev.layerY});
                }
            }
            return;
        }
    },
}
</script>
