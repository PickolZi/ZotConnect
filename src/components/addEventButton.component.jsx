import { Fab } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';

const AddEventButton = ({setOpenEventModal}) => {
    return (
        <div className="z-[999] fixed bottom-[2rem] right-[2rem]">
            <Fab color="primary" aria-label="add" onClick={() => setOpenEventModal(true)}>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default AddEventButton;