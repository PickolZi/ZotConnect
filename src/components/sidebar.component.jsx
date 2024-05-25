
import Filter from './filterbar.component'
import Search from './searchBar.component'
import Events from './eventsBlock.component'

const SideBar = () => {
    return (
        <div className="flex-col h-[100%] w-[200px] md:w-[500px] bg-[#EDF7F6]">
            <Search />
            <Filter />
            <Events />
        </div>
    )
}

export default SideBar;