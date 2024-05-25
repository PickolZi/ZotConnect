


const Search = ({ eventSearchInput, setEventSearchInput }) =>{
    return (
        <div className="flex justify-center "> 
            <input className="rounded-lg" type="search" onChange={(e)=>setEventSearchInput(e.target.value)} placeholder="Search Event...">
            </input>
        </div>
    )
}

export default Search;