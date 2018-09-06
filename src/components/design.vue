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
}
</style>

<template>
    <div id="design">
        <VueDragResize 
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
        </VueDragResize>
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
            <div class="filler" :style="{backgroundColor:rect.color}">

            </div>
        </VueDragResize>
    </div>
</template>

<script>
import VueDragResize from '@/components/design/dragResize.vue';

export default {
    name: 'design',
    components: {
        VueDragResize,
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