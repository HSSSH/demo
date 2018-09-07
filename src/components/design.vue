<style scoped lang="scss">
#design{
    position: relative;
    margin: 0;
    width: 100vw;
    min-height: calc(100vh - 60px);
    background-color: white;
    .filler {
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
    }
    .tools{
        width: 100%;
        height: 100%;
        p{
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
        }
    }
}
</style>

<template>
    <div id="design">
        <!-- <VueDragResize 
            :w="designTool.width"
            :h="designTool.height"
            :x="designTool.left"
            :y="designTool.top"
            :parentW="listWidth"
            :parentH="listHeight"
            :axis="designTool.axis"
            :isActive="designTool.active"
            :minw="designTool.minw"
            :minh="designTool.minh"
            :isDraggable="designTool.draggable"
            :isResizable="designTool.resizable"
            :parentLimitation="designTool.parentLim"
            :aspectRatio="designTool.aspectRatio"
            :z="designTool.zIndex"
            v-on:activated="activateEv(-1)"
            v-on:deactivated="deactivateEv(-1)"
            v-on:dragging="changePosition($event, -1)"
            v-on:resizing="changeSize($event, -1)"
        >
            <div class="tools">
                <p>布局元素</p>
                <div>
                    <span>布局1</span>
                </div>
                <p>组件元素</p>
                <div>
                    <span>文字</span>
                    <span>图片</span>
                </div>
            </div>
        </VueDragResize> -->

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
                    v-on:activated="activateEv(index)"
                    v-on:deactivated="deactivateEv(index)"
                    v-on:dragging="changePosition($event, index)"
                    v-on:resizing="changeSize($event, index)"
        >
            <!-- <div class="filler" :style="{backgroundColor:rect.color}">

            </div> -->
            <myElement v-for="(element,index) of rect.allElements" :key="index" :style="element.style" :type="element.type" :config="element.config">
            </myElement>
        </VueDragResize>
    </div>
</template>

<script>
import VueDragResize from '@/components/design/dragResize.vue';
import myElement from '@/components/display/myElement';

export default {
    name: 'design',
    components: {
        VueDragResize,
        myElement
    },

    data(){
        return {
            listWidth: 0,
            listHeight: 0
        }
    },

    mounted() {
        let listEl = document.getElementById('design');
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
        designTool(){
            return this.$store.state.rect.designTool
        }
    },

    methods: {
        activateEv(index) {
            this.$store.dispatch('rect/setActive', {id: index});
        },

        deactivateEv(index) {
            this.$store.dispatch('rect/unsetActive', {id: index});
        },

        changePosition(newRect, index) {
            this.$store.dispatch('rect/setTop', {id: index, top: newRect.top});
            this.$store.dispatch('rect/setLeft', {id: index, left: newRect.left});
            this.$store.dispatch('rect/setWidth', {id: index, width: newRect.width});
            this.$store.dispatch('rect/setHeight', {id: index, height: newRect.height});
        },

        changeSize(newRect, index) {
            this.$store.dispatch('rect/setTop', {id: index, top: newRect.top});
            this.$store.dispatch('rect/setLeft', {id: index, left: newRect.left});
            this.$store.dispatch('rect/setWidth', {id: index, width: newRect.width});
            this.$store.dispatch('rect/setHeight', {id: index, height: newRect.height});
        }
    }
}
</script>