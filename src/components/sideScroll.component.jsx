
const SideScroll = ({filterInput, setFilterInput, toggle, setToggle}) => {
    if (!toggle)
            return (<></>)
    return (
        <div className="">
            <button onClick={()=>{
                setFilterInput("hi1")}} className="rounded-md bg-white border-2 border-black p-3 h-[50px] w-auto"> button1 </button>

            <button onClick={()=>{
                setFilterInput("hi2")}} className="rounded-md bg-white border-2 border-black p-3 h-[50px] w-auto"> button2 </button>
        </div>
    )
}
//events: study, recreational, networking, sale

export default SideScroll;