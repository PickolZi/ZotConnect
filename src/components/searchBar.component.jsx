


const Search = ({ eventSearchInput, setEventSearchInput }) =>{
    return (
        
        <div className=" "> 
            <input className="rounded-lg w-[400px] h-[50px]" type="search" onChange={(e)=>setEventSearchInput(e.target.value)} placeholder="Search Event...">
            </input>
        </div>
    )
}

export default Search;