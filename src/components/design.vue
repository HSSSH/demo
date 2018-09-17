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
    }
}
</style>

<template>
    <div id="design">
        <div id="designArea" class="design-area" @drop="drop($event)" @dragover="allowDrop($event)">
            <VueDragResize v-for="(rect, index) in rects"
                    :key="index"
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
                    :z="rect.zIndex"
                    :style="{background:rect.color,visibility:rect.visibility}"
                    @activated="activateEv('rects',index)"
                    @deactivated="deactivateEv('rects',index)"
                    @dragging="changePosition($event, 'rects',index)"
                    @resizing="changeSize($event, 'rects',index)"
                    @focusContainer="focusContainer($event, 'rects',index)"
            >
                <myElement v-for="(element,index) of rect.allElements" :key="index" :style="element.style" :type="element.type" :config="element.config">
                </myElement>
            </VueDragResize>
        </div>
        <div class="design-tool">
            <designTools></designTools>
        </div>
        <div class="design-data">
            <elementSet :type="currentChoose.type" :config="currentChoose.config"></elementSet>
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
            currentChooses: {}
        }
    },

    mounted() {
        let listEl = document.getElementsByClassName('design-area');
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
        currentChoose(){            
            return this.$store.state.rect.currentChoose
        }
    },

    methods: {
        activateEv(dataName,index) {
            this.$store.dispatch('rect/setActive', {name:dataName, id: index});
        },

        deactivateEv(dataName,index) {
            this.$store.dispatch('rect/unsetActive', {name:dataName, id: index});
        },

        changePosition(newRect,dataName, index) {
            this.$store.dispatch('rect/setTop', {name:dataName, id: index, top: newRect.top});
            this.$store.dispatch('rect/setLeft', {name:dataName, id: index, left: newRect.left});
            this.$store.dispatch('rect/setWidth', {name:dataName, id: index, width: newRect.width});
            this.$store.dispatch('rect/setHeight', {name:dataName, id: index, height: newRect.height});
        },

        changeSize(newRect,dataName, index) {
            this.$store.dispatch('rect/setTop', {name:dataName, id: index, top: newRect.top});
            this.$store.dispatch('rect/setLeft', {name:dataName, id: index, left: newRect.left});
            this.$store.dispatch('rect/setWidth', {name:dataName, id: index, width: newRect.width});
            this.$store.dispatch('rect/setHeight', {name:dataName, id: index, height: newRect.height});
        },

        focusContainer(newColor,dataName,index){
            this.$store.dispatch('rect/focusContainer', {name:dataName, id: index, newColor});
        },

        allowDrop(ev) {
            ev.preventDefault();
        },
    
        drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("myEle");
            var type = data.split('&')[0];
            this.$store.dispatch('rect/addNewRect', {name: 'rects', eleType:type, x:ev.layerX, y:ev.layerY});
        }
    }
}
</script>