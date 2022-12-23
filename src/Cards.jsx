import {React,useState} from "react";
import "./Cards.css"

export default function Cards(props) {

    const [img1,setImg1]=useState(props.image)
    return (
        <div className="card">
            <div className="card--image">
            {
            (props.gender==="male" ?<img  src={img1} className="card--image" onError = {() => setImg1("../images/boy.png")}/>
            :<img  src={img1} className="card--image" onError = {() => setImg1("../images/girl.webp")}/>)}
            </div>
            <div className="card--stats">
                <span>Name   : {props.firstName}</span>
                <br/>
                <span>Email  : {props.email} </span>
                <br/>
                <span>Website :</span><a href={props.website}>{props.website} </a>
                <br/>
                <span>Gender : {props.gender}</span>
                <p className="bold"> Skills : {props.java && "java"}{(props.java&&props.html) && ","}{props.html && "html"}
            {((props.css&&props.html)||(props.css&&props.java)) && ","}{props.css && "css"} </p>
            </div>
           
        </div>
    )
}