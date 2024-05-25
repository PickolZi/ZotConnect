
const FilterBar = ({filterInput, setFilterInput, toggle, setToggle}) => {
    return (
        <div className=""> 
            <button onClick={()=>{
                setToggle(!toggle); 
                console.log(toggle);
                console.log(filterInput);
                if (toggle)
                    setFilterInput("Filter ...");
            }} className="rounded-md bg-white border-2 border-black p-3 h-[50px] w-auto">{filterInput}</button>
        </div>
    )
}


export default FilterBar;



