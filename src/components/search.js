import React from "react";
import styled from 'styled-components';

const Search=(props)=>{
    const {date, changeHandler}=props;

const DateDiv=styled.input`
    background-color:black;
    
`
return(
    <div>
        <input value={date} onChange={(event)=>changeHandler(event.target.value)} name="date" type="date" />
    </div>
    )

}

export default Search;