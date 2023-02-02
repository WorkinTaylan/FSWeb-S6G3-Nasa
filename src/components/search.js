import React from "react";

const Search=(props)=>{
    const {date, changeHandler}=props;


return(
    <div>
        <input value={date} onChange={(event)=>changeHandler(event.target.value)} name="date" type="date" />
    </div>
    )

}

export default Search;