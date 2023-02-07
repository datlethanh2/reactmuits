import {account,listPath} from "../../../data/Account"
import React from 'react';
import {logo} from '../../../components/Logo';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

interface NavType{
    open:boolean,
}

export default function Nav({open}:NavType){

    const navigate = useNavigate();
    return(
        <Navi open={open}>
            {logo}
            <div>        
                <Button onClick={()=>navigate("/")}>
                    <img src={account.photoURL} alt="photoURL" width="35px" height="35px"/>
                    {account.displayName}
                </Button>
            </div>
            {listPath? listPath.map((item, index)=>{
                return(
                    <div key={index} >
                        <Link to={item.path} style={{textDecoration: "none"}}>
                            <Button>
                                <img src={item.icon} alt="icon" width="25px" height="25px"/>
                                {item.title}
                            </Button>
                        </Link>
                    </div>
                )
            }): null}
        </Navi>
    )
}

const Navi=styled('div')<NavType>(({open})=>({
    borderRight:'1.5px dotted #8080803d',
    backgroundColor:'white',
    height:'100vw',
    width:(open===true)?'calc(100%*(5/12))':'calc(100%*(2.5/12))',
    padding:'0 5px',
    position:'absolute',
    zIndex:'10',
    '& div':{
        '&>: first-of-type':{
            justifyContent:'center',
        },
        marginTop:'10px',  
        '& Button':{
            color:'gray',
            width:'100%',
            justifyContent:'flex-start',
            '& img':{
                marginRight:'10px',
                borderRadius:'50%',
            },
            '&:hover':{
                backgroundColor:'#8080803d',
                color:'black',
            },     
        },     
    } 
}));
