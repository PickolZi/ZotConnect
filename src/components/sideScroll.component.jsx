import ButtonList from './ButtonList.component'

const SideScroll = ({filterInput, setFilterInput, toggle, setToggle}) => {
    if (!toggle)
            return (<></>)
    return (
        <div className="flex gap-1">
            <ButtonList setFilterInput={setFilterInput} toggle={toggle} setToggle={setToggle}/>
        </div>
    )
}
//events: study, recreational, networking, sale
{/* <button onClick={()=>{
    setFilterInput("button1");
    setToggle(!toggle);     
    }}className="rounded-md bg-white border-2 border-black p-3 h-[50px] w-auto"> button1 </button>

<button onClick={()=>{
    setFilterInput("button2")
    setToggle(!toggle);
    }} className="rounded-md bg-white border-2 border-black p-3 h-[50px] w-auto"> button2 </button>
     */}

export default SideScroll;