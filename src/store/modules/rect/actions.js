import types, {CHANGE_ZINDEX} from './mutation-types';

export default {
    setActive({commit, state}, {name,id}) {
        commit(types.ENABLE_ACTIVE,{name, id});
    },
    unsetActive({commit}, {name,id}) {
        commit(types.DISABLE_ACTIVE,{name, id});
    },

    toggleDraggable({commit, state}, {name,id}) {
        // if (!state[name][id].draggable) {
        //     commit(types.ENABLE_DRAGGABLE,{name, id});
        // } else {
        //     commit(types.DISABLE_DRAGGABLE,{name, id});
        // }
        commit(types.TOGGLE_DRAGGABLE,{name, id});
    },

    toggleResizable({commit, state}, {name,id}) {
        // if (!state[name][id].resizable) {
        //     commit(types.ENABLE_RESIZABLE,{name, id});
        // } else {
        //     commit(types.DISABLE_RESIZABLE,{name, id});
        // }
        commit(types.TOGGLE_RESIZABLE,{name, id});
    },

    toggleParentLimitation({commit, state}, {name,id}) {
        // if (!state[name][id].parentLim) {
        //     commit(types.ENABLE_PARENT_LIMITATION,{name, id});
        // } else {
        //     commit(types.DISABLE_PARENT_LIMITATION,{name, id});
        // }
        commit(types.PARENT_LIMITATION,{name, id});
    },

    setAspect({commit}, {name,id}) {
        commit(types.ENABLE_ASPECT,{name, id});
    },
    unsetAspect({commit}, {name,id}) {
        commit(types.DISABLE_ASPECT,{name, id});
    },

    setWidth({commit}, {name, id, width}) {
        commit(types.CHANGE_WIDTH, {name,id, width});
    },

    setHeight({commit}, {name, id, height}) {
        commit(types.CHANGE_HEIGHT, {name, id, height});
    },

    setTop({commit}, {name, id, top}) {
        commit(types.CHANGE_TOP, {name, id, top});
    },

    setLeft({commit}, {name, id, left}) {
        commit(types.CHANGE_LEFT, {name, id, left});
    },

    changeXLock({commit, state}, {name,id}) {
        // switch (state[name][id].axis) {
        //     case 'both':
        //         commit(types.ENABLE_Y_AXIS,{name, id});
        //         break;
        //     case 'x':
        //         commit(types.ENABLE_NONE_AXIS,{name, id});
        //         break;
        //     case 'y':
        //         commit(types.ENABLE_BOTH_AXIS,{name, id});
        //         break;
        //     case 'none':
        //         commit(types.ENABLE_X_AXIS,{name, id});
        //         break;
        // }
        commit(types.CHANGE_XLOCK,{name, id});
    },

    changeYLock({commit, state}, {name,id}) {
        // switch (state[name][id].axis) {
        //     case 'both':
        //         commit(types.ENABLE_X_AXIS,{name, id});
        //         break;
        //     case 'x':
        //         commit(types.ENABLE_BOTH_AXIS,{name, id});
        //         break;
        //     case 'y':
        //         commit(types.ENABLE_NONE_AXIS,{name, id});
        //         break;
        //     case 'none':
        //         commit(types.ENABLE_Y_AXIS,{name, id});
        //         break;
        // }
        commit(types.CHANGE_YLOCK,{name, id});
    },

    changeZToBottom({commit, state}, {name,id}) {
        // if (state[name][id].zIndex === 1) {
        //     return
        // }

        // commit(types.CHANGE_ZINDEX, {name, id, zIndex: 1});

        // for (let i = 0, l = state[name].length; i < l; i++) {
        //     if (i !== id) {
        //         if(state[name][i].zIndex === state[name].length){
        //             continue
        //         }
        //         commit(types.CHANGE_ZINDEX, {name, id: i, zIndex: state[name][i].zIndex + 1});
        //     }
        // }
    },

    changeZToTop({commit, state}, {name, id}) {
        // if (state[name][id].zIndex === state[name].length) {
        //     return
        // }

        // commit(types.CHANGE_ZINDEX, {name, id, zIndex: state[name].length});

        // for (let i = 0, l = state[name].length; i < l; i++) {
        //     if (i !== id) {
        //         if(state[name][i].zIndex === 1){
        //             continue
        //         }
        //         commit(types.CHANGE_ZINDEX, {name ,id: i, zIndex: state[name][i].zIndex - 1});
        //     }
        // }
    },

    setMinWidth({commit}, {name, id, width}) {
        commit(types.CHANGE_MINW, {name,id, minw:width});
    },

    setMinHeight({commit}, {name,id, height}) {
        commit(types.CHANGE_MINH, {name,id, minh:height});
    },

    addNewRect({commit},{name,parentId,eleType,x,y}){
        commit(types.ADD_NEW_RECT, {name, parentId, eleType, x , y});
    },

    focusContainer({commit},{name,id}){
        commit(types.FOCUS_CONTAINER, {name, id});
    },

    quitFocus({commit},{zIndex}){
        commit(types.QUIT_FOCUS, {zIndex});
    },

    changeConfig({commit},config){
        commit(types.CHANGE_CONFIG, config);
    },
};
