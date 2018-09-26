import {
    ENABLE_ACTIVE,
    DISABLE_ACTIVE,
    ENABLE_ASPECT,
    DISABLE_ASPECT,
    ENABLE_DRAGGABLE,
    DISABLE_DRAGGABLE,
    ENABLE_RESIZABLE,
    DISABLE_RESIZABLE,
    ENABLE_PARENT_LIMITATION,
    DISABLE_PARENT_LIMITATION,
    CHANGE_ZINDEX,
    ENABLE_BOTH_AXIS,
    ENABLE_X_AXIS,
    ENABLE_Y_AXIS,
    ENABLE_NONE_AXIS,
    CHANGE_HEIGHT,
    CHANGE_LEFT,
    CHANGE_MINH,
    CHANGE_MINW,
    CHANGE_TOP,
    CHANGE_WIDTH,
    ADD_NEW_RECT,
    FOCUS_CONTAINER,
    QUIT_FOCUS,
    CHANGE_CONFIG,
} from './mutation-types';

export default {
    [ENABLE_ACTIVE](state,payload) {
        var list = getAllTreeNode(state[payload.name]);
        for(var i=0;i<list.length;i++){
            list[i].active = list[i].id == payload.id;
        }
    },
    [DISABLE_ACTIVE](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.active = false;
        }
    },

    [ENABLE_ASPECT](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.aspectRatio = true;
        }
    },
    [DISABLE_ASPECT](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.aspectRatio = false;
        }
    },

    [ENABLE_DRAGGABLE](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.draggable = true;
        }
    },
    [DISABLE_DRAGGABLE](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.draggable = false;
        }
    },

    [ENABLE_RESIZABLE](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.resizable = true;
        }
    },
    [DISABLE_RESIZABLE](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.resizable = false;
        }
    },

    [ENABLE_BOTH_AXIS](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.axis = 'both';
        }
    },
    [ENABLE_NONE_AXIS](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.axis = 'none';
        }
    },
    [ENABLE_X_AXIS](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.axis = 'x';
        }
    },
    [ENABLE_Y_AXIS](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.axis = 'y';
        }
    },

    [ENABLE_PARENT_LIMITATION](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.parentLim = true;
        }
    },
    [DISABLE_PARENT_LIMITATION](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.parentLim = false;
        }
        state[payload.name][payload.id].parentLim = false;
    },

    [CHANGE_ZINDEX](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.zIndex = payload.zIndex;
        }
    },

    [CHANGE_HEIGHT](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.height = payload.height;
        }
    },

    [CHANGE_WIDTH](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.width = payload.width;
        }
    },

    [CHANGE_TOP](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.top = payload.top;
        }
    },

    [CHANGE_LEFT](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.left = payload.left;
        }
    },

    [CHANGE_MINH](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.minh = payload.minh;
        }
    },

    [CHANGE_MINW](state, payload) {
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.minw = payload.minw;
        }
    },

    [ADD_NEW_RECT](state, payload) {
        var obj = JSON.parse(JSON.stringify(state.initContainer));
        obj.top = payload.y;
        obj.left = payload.x;
        obj.id = new Date().getTime();
        switch(payload.eleType){
            case 'panel':
                obj.element = JSON.parse(JSON.stringify(state.initPanel));
                obj.element.config.width = obj.width - 2;
                obj.element.config.height = obj.height - 2;
                break;
            case 'label':
                obj.element = JSON.parse(JSON.stringify(state.initText));
                break;
            case 'picture':
                obj.element = JSON.parse(JSON.stringify(state.initPicture));
                break;
        }
        if(payload.parentId == -1){
            state[payload.name].push(obj);
        }
        else{
            var node = searchTreeNode(state[payload.name],payload.parentId)
            if(node){
                node.element.config.children.push(obj);
            }
        }
    },

    [FOCUS_CONTAINER](state,payload){
        var node = searchTreeNode(state[payload.name],payload.id);
        if(node){
            node.draggable = false;
            node.resizable = false;
            node.zIndex = 1000;
            node.color = '#ffffff';
            if(node.element.type == 'panel'){
                node.element.config.allowDrop = true;
                node.element.config.width = node.width - 2;
                node.element.config.height = node.height - 2;
            }
            state.currentChoose = node;
        }
    },

    [QUIT_FOCUS](state,payload){
        state.currentChoose.draggable = true;
        state.currentChoose.resizable = true;
        state.currentChoose.zIndex = payload.zIndex;
        state.currentChoose.color = 'none';
        if(state.currentChoose.element.type == 'panel'){
            state.currentChoose.element.config.allowDrop = false;
        }
        state.currentChoose = {};
    },

    [CHANGE_CONFIG](state, config) {
        state.currentChoose.element.config = config?JSON.parse(JSON.stringify(config)):{};
        if( state.currentChoose.element.config.eleStyle['font-size']){
            state.currentChoose.element.config.eleStyle['font-size'] += 'px';
        }
        // for(var key in config){
        //     if(typeof config[key] != "function"){
        //         state.currentChoose.allElements[0].config[key] = config[key];
        //     }
        // }
    },
};

function searchTreeNode(node,id) {
    var stark = [];
    stark = stark.concat(node);
    while(stark.length) {
        var temp = stark.shift();
        if(temp.element.config.children) {
            stark = stark.concat(temp.element.config.children);
        }
        if(temp.id === id) {
            return temp;
        }
    }
}

function getAllTreeNode(node) {
    var stark = [];
    var list = [];
    stark = stark.concat(node);
    while(stark.length) {
        var temp = stark.shift();
        list.push(temp);
        if(temp.element.config.children) {
            stark = stark.concat(temp.element.config.children);
        }
    }
    return list;
}