import { relative } from "path";

export default {
    'rects': [],
    'currentChoose':[],
    'initContainer':{
        'id':'',
        'width': 100,
        'height': 100,
        'top': 0,
        'left': 0,
        'draggable': true,
        'resizable': true,
        'minw': 10,
        'minh': 10,
        'axis': 'both',
        'parentLim': true,
        'aspectRatio': false,
        'zIndex': 1,
        'saveIndex': 1,
        'color': 'none',
        'visibility':'visible',
        'active': false,
        'unableActive':false,
        'element':{}
    },
    'initPanel':{
        'type':'panel',
        'config':{
            'currentPanelId':'',
            'width': 0,
            'height': 0,
            'allowDrop':false,
            'coverVisible':false,
            'children':[]
        },
        'style':{
            'position':'relative',
            'width': '100%',
            'height': '100%'
        }
    },
    'initText':{
        'type':'label',
        'config':{
            'text':'单行文字',
            'eleStyle':{
                'font-size':'14px',
                'color':'#000000',
                'font-weight': 'normal',
                'font-family': "宋体"
            }
        },
        'style':{
        }
    },
    'initPicture':{
        'type':'picture',
        'config':{
            'src':'images/test/Layer4.png',
            'eleStyle':{

            }
        },
        'style':{
        }
    }
};
