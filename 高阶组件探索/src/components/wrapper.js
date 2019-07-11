import React from "react";
export function wrapper(MyCom) {
    return MyCom
}
export function wrapperFive(propsName){
    return function (MyCom) {
        class WrapFive extends React.Component{
            render(){
                return (
                    <MyCom propsName={propsName}></MyCom>
                )
            }
        }
        return WrapFive;
    }

}


export function wrapperFour(MyCom){
    class WrapFour extends React.Component{
        render(){
            const bookTypeObj = {
                wuxia:"武侠",
                yanqing:"言情"
            }
            // const bookTypeName=this.props.bookType==="wuxia"?"武侠":"言情"
            return (
                <div>
                    <MyCom {...this.props} bookTypeName={bookTypeObj[this.props.bookType]}></MyCom>
                </div>
            )
        }
    }
    return WrapFour;
}
export function wrapperThree(sex="男") {
    return function (MyCom) {
        return class wrapOne extends React.Component{
            render(){
                const props = {
                    ...this.props,
                    ...{
                        hobby:"学习1",
                        sex
                    }
                }
                return (
                    <div>
                        我是一个高阶组件{this.props.userName}
                        <MyCom {...props}></MyCom>
                    </div>
                )
            }
        }
    }
}



// export function wrapperThree(MyCom,sex="男") {
//     return class wrapOne extends React.Component{
//         render(){
//             const props = {
//                 ...this.props,
//                 ...{
//                     hobby:"学习1",
//                     sex
//                 }
//             }
//             return (
//                 <div>
//                     我是一个高阶组件{this.props.userName}
//                     <MyCom {...props}></MyCom>
//                 </div>
//             )
//         }
//     }
// }
export function wrapperTwo(MyCom) {
    return class wrapOne extends React.Component{
        render(){
            const props = {
                ...this.props,
                ...{
                    hobby:"学习"
                }
            }
            return (
                <div>
                    我是一个高阶组件{this.props.userName}
                    <MyCom {...props}></MyCom>
                </div>
            )
        }
    }
}
export function wrapperOne(MyCom) {
    return class wrapOne extends React.Component{
        render(){
           return (
               <div>
                   我是一个高阶组件
               </div>
               )
        }
    }
}