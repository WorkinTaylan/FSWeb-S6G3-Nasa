import React from "react";
import styled from 'styled-components';

const Search=(props)=>{
    const {date, changeHandler}=props;

const DateDiv=styled.input`
    background-color:black;
    color:white;
    font-family:Roboto-Mono;
`
return(
    <DateDiv>
        <input value={date} onChange={(event)=>changeHandler(event.target.value)} name="date" type="date" />
    </DateDiv>
    )

}

export default Search;