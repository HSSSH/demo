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
    FOCUS_CONTAINER
} from './mutation-types';

export default {
    [ENABLE_ACTIVE](state,payload) {
        state[payload.name][payload.id].active = true;
    },
    [DISABLE_ACTIVE](state, payload) {
        state[payload.name][payload.id].active = false;
    },

    [ENABLE_ASPECT](state, payload) {
        state[payload.name][payload.id].aspectRatio = true;
    },
    [DISABLE_ASPECT](state, payload) {
        state[payload.name][payload.id].aspectRatio = false;
    },

    [ENABLE_DRAGGABLE](state, payload) {
        state[payload.name][payload.id].draggable = true;
    },
    [DISABLE_DRAGGABLE](state, payload) {
        state[payload.name][payload.id].draggable = false;
    },

    [ENABLE_RESIZABLE](state, payload) {
        state[payload.name][payload.id].resizable = true;
    },
    [DISABLE_RESIZABLE](state, payload) {
        state[payload.name][payload.id].resizable = false;
    },

    [ENABLE_BOTH_AXIS](state, payload) {
        state[payload.name][payload.id].axis = 'both';
    },
    [ENABLE_NONE_AXIS](state, payload) {
        state[payload.name][payload.id].axis = 'none';
    },
    [ENABLE_X_AXIS](state, payload) {
        state[payload.name][payload.id].axis = 'x';
    },
    [ENABLE_Y_AXIS](state, payload) {
        state[payload.name][payload.id].axis = 'y';
    },

    [ENABLE_PARENT_LIMITATION](state, payload) {
        state[payload.name][payload.id].parentLim = true;
    },
    [DISABLE_PARENT_LIMITATION](state, payload) {
        state[payload.name][payload.id].parentLim = false;
    },

    [CHANGE_ZINDEX](state, payload) {
        state[payload.name][payload.id].zIndex = payload.zIndex;
    },

    [CHANGE_HEIGHT](state, payload) {
        state[payload.name][payload.id].height = payload.height;
    },

    [CHANGE_WIDTH](state, payload) {
        state[payload.name][payload.id].width = payload.width;
    },

    [CHANGE_TOP](state, payload) {
        state[payload.name][payload.id].top = payload.top;
    },

    [CHANGE_LEFT](state, payload) {
        state[payload.name][payload.id].left = payload.left;
    },

    [CHANGE_MINH](state, payload) {

        state[payload.name][payload.id].minh = payload.minh;
    },

    [CHANGE_MINW](state, payload) {
        state[payload.name][payload.id].minw = payload.minw;
    },

    [ADD_NEW_RECT](state, payload) {
        var obj = JSON.parse(JSON.stringify(state.initContainer));
        obj.top = payload.y;
        obj.left = payload.x;
        switch(payload.eleType){
            case 'label':
                obj.allElements.push(JSON.parse(JSON.stringify(state.initText)));
                break;
            case 'picture':
                obj.allElements.push(JSON.parse(JSON.stringify(state.initPicture)));
                break;
        }
        state[payload.name].push(obj);
    },

    [FOCUS_CONTAINER](state,payload){
        // state[payload.name].forEach(function(item) {
        //     item.color = 'none';
        //     item.visibility = 'hidden';
        // });
        // state[payload.name][payload.id].color = payload.newColor;
        state.currentChoose = state[payload.name][payload.id].allElements[0];
    },

    'fffff'(state, payload) {
        state.currentChoose.config.text = payload.text;
    }
};