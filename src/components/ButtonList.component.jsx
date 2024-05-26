const ButtonList =({setFilterInput, toggle, setToggle})=>{
    const categories = ["Hackathon","Study", "Social","Networking"];
    const buttons = categories.map((act) => {
        return (
            <button 
                className="rounded-md bg-white border-2 ml-1 border-black p-3 h-[50px] w-auto"
                onClick={()=>{
                    setFilterInput(act);
                    setToggle(!toggle);     
                }}
            >
                {act} 
            </button>
        )
    })
    return (
        <div> {buttons} </div>
    )
}
export default ButtonList;
