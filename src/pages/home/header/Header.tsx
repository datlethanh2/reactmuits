import MyAccount from "./MyAccount"
import Notification from "./Notification"
import Searchbar from "./Searchbar"
import Languages from "./Languages"
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export default function Header({openNav}:{openNav: ()=>void}){

    return(
        <Head>  
            <HeadLeft>
                <IconButton onClick={openNav} sx={{display:{lg:'none', xs:'block'}}}>
                    <MenuIcon sx={{width:"25px", height:"25px", fontSize:"25px"}}/>
                </IconButton>
                <Searchbar />
            </HeadLeft>   
            <HeadRight>
                <Languages/>
                <Notification/>
                <MyAccount/>    
            </HeadRight>          
        </Head>
    )
};

const Head=styled('div')({
    display:'flex',
    justifyContent: 'space-between',
});
const HeadLeft=styled('div')({
    display:'flex',
    alignItems:"center",
    justifyContent: 'flex-start',
    width:'20%',
});
const HeadRight=styled('div')({
    display:'flex',
    alignItems:"center",
    justifyContent: 'space-around',
    width:'23%',
});





