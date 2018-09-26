<style scoped lang="scss"></style>

<template>
  <div id="display">
      <layoutRect v-for="(item,index) of componentList" 
          :key="index"
          :w="item.width"
          :h="item.height"
          :x="item.left"
          :y="item.top"
          :z="item.zIndex">
        <myElement :style="item.element.style" :type="item.element.type" :config="item.element.config">
        </myElement>
      </layoutRect>
  </div>
</template>

<script>
import myElement from '@/components/myElement';
import layoutRect from '@/components/display/layoutRect';

export default {
  name: 'display',
  components:{
    myElement,
    layoutRect
  },
  data() {
    return {
      componentList: this.$store.state.rect.rects
    }
  },
  methods:{
    init(){
    }
  }
}
</script>