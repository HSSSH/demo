export default {
    'rects': [{
        'width': 100,
        'height': 30,
        'top': 10,
        'left': 10,
        'draggable': true,
        'resizable': false,
        'minw': 100,
        'minh': 100,
        'axis': 'both',
        'parentLim': true,
        'aspectRatio': false,
        'zIndex': 1,
        'color': '#EF9A9A',
        'active': false,
        'allElements':[{
            'type':'label',
            'config':{
                'text':'嘉兴市环境保护局',
                'eleStyle':{
                    'font-size':'32px',
                    'color':'#305aa4',
                    'font-weight': '900',
                    'font-family': "宋体"
                }
            },
            'style':{
                'position':'absolute',
                'top':'30px',
                'left':'110px',
                'margin-left':'0px',
                'margin-top':'0px',
                'z-index':'2'
            }
        }]
    },
    {
        'width': 200,
        'height': 200,
        'top': 10,
        'left': 10,
        'draggable': true,
        'resizable': false,
        'minw': 100,
        'minh': 100,
        'axis': 'both',
        'parentLim': true,
        'aspectRatio': false,
        'zIndex': 1,
        'color': '#EF9A9A',
        'active': false,
        'allElements':[{
            'type':'picture',
            'config':{
                'src':'images/test/Layer4.png',
                'eleStyle':{

                }
            },
            'style':{
                'position':'absolute',
                'top':'20px',
                'left':'20px',
                'margin-left':'0px',
                'margin-top':'0px',
                'width':'80px',
                'height':'80px',
                'z-index':'2'
            }
        }]
    }
    ],
    'designTool':{
        'width': 500,
        'height': 500,
        'top': 10,
        'left': 10,
        'draggable': true,
        'resizable': false,
        'minw': 100,
        'minh': 100,
        'axis': 'both',
        'parentLim': true,
        'aspectRatio': false,
        'zIndex': 1,
        'color': '#EF9A9A',
        'active': false
    }
};
