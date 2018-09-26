<style>
    .layout {
        position: absolute;
        box-sizing: border-box;
    }
    .layout .inside-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>

<template>
    <div class="layout" :style="style">
        <div class="inside-container"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'vue-drag-resize',
    props: {
        w: {
            type: Number,
            default: 100,
            validator: function (val) {
                return val > 0
            }
        },
        h: {
            type: Number,
            default: 100,
            validator: function (val) {
                return val > 0
            }
        },
        x: {
            type: Number,
            default: 0,
            validator: function (val) {
                return typeof val === 'number'
            }
        },
        y: {
            type: Number,
            default: 0,
            validator: function (val) {
                return typeof val === 'number'
            }
        },
        z: {
            type: [String, Number],
            default: 'auto',
            validator: function (val) {
                let valid = (typeof val === 'string') ? val === 'auto' : val >= 0;
                return valid
            }
        }
    },
    computed: {
        style() {
            return {
                top: this.y + 'px',
                left: this.x + 'px',
                width: this.w + 'px',
                height: this.h + 'px',
                zIndex: this.z
            }
        }
    }
}
</script>