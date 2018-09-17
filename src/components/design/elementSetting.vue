<style scoped lang="scss">

</style>

<template>
    <div v-if="type == 'picture'">
        图片
    </div>
    <div v-else-if="type == 'label'">
        <input v-model="text">
        <input v-model="font_size">
    </div>
    <div v-else-if="type == 'navigate'">
        导航栏
    </div>
    <div v-else-if="type == 'slidePic'">
        轮播
    </div>
    <div v-else-if="type == 'article'">
        文章
    </div>
</template>

<script>
export default {
    name: 'elementSet',
    props:['config','type'],
    components: {},
    data() {
        return {
            text: this.config&&this.config.text,
            font_size: this.config&&this.config['font-size'],            
        }
    },
    computed:{
    },    
    watch: {
        text: function() {
            this.editText(this.text);
        },
        config: {
            handler(v, o) {
                this.text = v.text;
            },
            deep: true
        }
    },
    methods: {
        editText (text) {
            this.$store.dispatch('rect/setText', {name:'currentChoose', text: text});
        }
    }
}
</script>