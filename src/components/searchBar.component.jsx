

const Search = ({ eventSearchInput, setEventSearchInput }) =>{
    return (
        <div className=" "> 
            <input className="pl-1 mt-2 rounded-lg w-[474px] h-[50px]" type="search" onChange={(e)=>setEventSearchInput(e.target.value)} placeholder="Search Event...">
            </input>
        </div>
    )
}

export default Search;