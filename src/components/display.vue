<style scoped lang="scss"></style>

<template>
  <div id="display">
      <div v-for="(item,index) of componentList" :key="index" :style="item.style">
        <myElement v-for="(element,index) of item.allElements" :key="index" :style="element.style" :type="element.type" :config="element.config">
        </myElement>
      </div>
  </div>
</template>

<script>
import myElement from '@/components/myElement';
export default {
  name: 'display',
  components:{
    myElement
  },
  data() {
    return {
      componentList: []
    }
  }
}
</script>