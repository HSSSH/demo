<style scoped lang="scss">
#design{
    position: relative;
    margin: 0;
    width: 100vw;
    height: calc(100vh - 36px);
    background: #ececec;
    .design-area{
        position: absolute;
        top: 30px;
        bottom: 30px;
        left: 30px;
        right: 260px;
        box-shadow: 0 0 2px #aaa;
        background: #fff;
        .cover{
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(42,45,46,0.6);
            z-index: 999;
            visibility: hidden;
        }
    }
    .design-tool{
        position: absolute;
        right: 30px;
        top: 30px;
        width: 200px;
        height: 400px;
        box-shadow: 0 0 2px #aaa;
        background: #fff;
    }
    .design-data{
        position: absolute;
        right: 30px;
        bottom: 30px;
        top: 445px;
        width: 200px;
        box-shadow: 0 0 2px #aaa;
        background: #fff;
        .check-tree{
            position: absolute;
            bottom: 0;
        }
    }
}
</style>

<template>
    <div id="design">
        <div class="design-area" id="designArea" @drop="drop($event)" @dragover="allowDrop($event)">
            <VueDragResize v-for="(rect) in rects"
                    :key="rect.id"
                    :w="rect.width"
                    :h="rect.height"
                    :x="rect.left"
                    :y="rect.top"
                    :parentW="listWidth"
                    :parentH="listHeight"
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
                <myElement :style="rect.element.style" :type="rect.element.type" :config="rect.element.config">
                </myElement>
            </VueDragResize>
            <div class="cover" :style="{visibility:coverVisible?'visible':'hidden'}"></div>
        </div>
        <div class="design-tool">
            <designTools :coverVisible="coverVisible" :currentEle="topChoose.element"></designTools>
        </div>
        <div class="design-data">
            <elementSet :type="topChoose.element.type" :config="topChoose.element.config" v-if="topChoose.element"></elementSet>
            <div>
                <button class="btn btn-primary" v-if="topChoose.element" @click="preStep()">上一级</button>
                <button class="btn btn-primary" v-if="topChoose.element" @click="quitFocus()">退出</button>
            </div>
            <button class="btn btn-primary check-tree" @click="checkTree()">查看结构</button>
        </div> 
    </div>
</template>

<script>
import VueDragResize from '@/components/design/dragResize/dragResize.vue';
import myElement from '@/components/myElement';
import elementSet from '@/components/design/elementSetting';
import designTools from '@/components/design/designTools.vue';

export default {
    name: 'design',
    components: {
        VueDragResize,
        myElement,
        designTools,
        elementSet
    },

    data(){
        return {
            listWidth: 0,
            listHeight: 0,
            coverVisible: false,
            dropCtrl: true,
        }
    },

    mounted() {
        let listEl = document.getElementById('designArea');
        this.listWidth = listEl.clientWidth;
        this.listHeight = listEl.clientHeight;

        window.addEventListener('resize', ()=>{
            this.listWidth = listEl.clientWidth;
            this.listHeight = listEl.clientHeight;
        })
    },

    computed: {
        rects() {
            return this.$store.state.rect.rects
        },
        topChoose(){
            return this.$store.state.rect.currentChoose.length?this.$store.state.rect.currentChoose[this.$store.state.rect.currentChoose.length-1]:{}
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
            this.coverVisible = true;
            this.dropCtrl = false;
            this.$store.dispatch('rect/focusContainer', {name:dataName, id: id});
        },

        preStep(){
            if(this.$store.state.rect.currentChoose.length == 1){
                this.coverVisible = false;
                this.dropCtrl = true;
            }
            this.$store.dispatch('rect/preStep');
        },

        quitFocus(){
            this.coverVisible = false;
            this.dropCtrl = true;
            this.$store.dispatch('rect/quitFocus');
        },

        allowDrop(ev) {
            if(this.dropCtrl){
                ev.preventDefault();
            }
            return;
        },
    
        drop(ev) {
            if(this.dropCtrl){
                ev.preventDefault();
                var type = ev.dataTransfer.getData("myEle");
                this.$store.dispatch('rect/addNewRect', {name: 'rects', parentId:-1, eleType:type, x:ev.layerX, y:ev.layerY});
            }
            return;
        },

        checkTree(){
            console.log(this.$store.state.rect.rects);
        }
    }
}
</script>