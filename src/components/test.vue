<template>
<div>
    <!-- <table>
        <tbody is="my-component"></tbody>
    </table> -->
    <div>
        {{tree}}
    </div>
</div>
</template>

<script>
import Vue from 'vue';
Vue.component('my-component',{
    template:'<div>XCXX</div>',
    data(){
        return{
           
        }
    }
})
export default {
    name:'test',
    components:{},
    data(){
        return{
            mess:'fsf',
            tree:this.$store.state.rect.rects
        }
    }
}
</script>

