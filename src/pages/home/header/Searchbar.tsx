import React from 'react';
import { styled } from '@mui/material/styles';
import { Input,Button, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
  
    const [search, setSearch]=React.useState(false);

    return (
        <Search search={search}>
            <IconButton onClick={()=>setSearch(!search)}>
                <SearchIcon sx={{fontSize:'20px'}}/>
            </IconButton>
            <div>
              <Input 
                  fullWidth 
                  disableUnderline
                  placeholder="Search…"
              />
              <Button variant="contained" onClick={()=>setSearch(false)}>
                  Search
              </Button> 
            </div>
        </Search>
    );
}

const Search=styled('div')<{search:boolean}>(({search})=>({
    backgroundColor:'white',  
    width:(search===true)? '100%':'auto',
    position: (search===true)?'absolute':'relative',
    zIndex:(search===true)?'8':'1',
    display:'flex',
    '& div':{
      display:(search===true)?'flex':'none',
      width:'85%',
    }
}));

