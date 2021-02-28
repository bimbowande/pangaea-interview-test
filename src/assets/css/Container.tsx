import * as CSS from 'csstype';

const Container: CSS.Properties = {
    width:'100%',
    height:'100%',
    position:'relative',
    overflow:'hidden'
    

}

const Overlay: CSS.Properties = {
    position:'fixed',
    width:'100%',
    overflow:'hidden',
    backdropFilter: 'blur(3px)',
    top:0,
    background:'rgba(255,255,255,.5)',
    height:'100%',
}

export {
    Container,Overlay
}