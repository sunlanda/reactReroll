/**
 * Created by chengfubei on 2017/3/7 0007.
 */
import React from "react"

/*
function Demo1(){
    return (
        <li>
            <p data-attribute="demo1">can include , can DIY attr</p>
        </li>
    )
}
*/
/*

function Demo2() {
    const name ="JSX"
    const func =()=>{
        let result ="hello"
        if(name){
            result+=name;
        }else{
            result+="world"
        }
        return result;
    }
}
return (
    <li>
        <h3>biaodashi</h3>
        <p>hello {name||"world"}</p>
        <p className={name?"class-a":"class-b"}>
            hello {name&&"world"}
        </p>
        <p>
            {
                func()
            }
        </p>
    </li>
)*/

function Demo3() {
    return (
        <li>
            <h3>yangshi</h3>
            <p style={{color:"red",fontSize:"15px"}}>inline style must object write style</p>
        </li>
    )
}
