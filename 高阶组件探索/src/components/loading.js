import React from "react";
export default function (MyCom){
    class SixWrapp extends MyCom{
        constructor(){
            super();
        }
        render(){
            let el = super.render();
            if(this.state.isLoading){
                return (
                    <div>
                        加载中……
                    </div>
                )
            }else{
                return (
                    <div>
                        {el}
                    </div>
                )
            }

        }
    }
    return SixWrapp;
}