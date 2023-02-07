import Header from "./header/Header"
import Nav  from "./nav/Nav"
import React from 'react';
import Grid from '@mui/material/Grid';
import { Outlet} from "react-router-dom";
import { styled } from '@mui/material/styles';

export default function Layout(){

    const [open, setOpen]=React.useState(false);

    return(
        <>
            <Grid container >
                <Grid item lg={2.5} sx={{display:{lg:'block',xs:(open===true)? 'block':'none'}}}>
                    <Nav open={open}/>
                </Grid>
                <Grid   item xs={12} lg={9.5} 
                        sx={{p:2, opacity:(open===true)?0.3:1, backgroundColor:(open===true)?'#00adffa1':'white'}} 
                        onClick={()=>(open===true)?setOpen(false):null}
                >
                    <Header openNav={()=>setOpen(!open)}/>
                    <Main>
                        <Outlet/>
                    </Main>
                </Grid>
            </Grid>  
        </>
    )
}

const Main=styled('div')({
    padding:'20px',
});

