
const FilterBar = ({filterInput, setFilterInput, toggle, setToggle}) => {
    return (
        <div className=""> 
            <button onClick={()=>{
                setToggle(!toggle); 
                if (!toggle)
                    setFilterInput("Filters ...");
            }} className="rounded-md bg-[#e6ebf0] border-2 border-black p-3 h-[50px] w-auto">{filterInput}</button>
        </div>
    )
}
export default FilterBar;



