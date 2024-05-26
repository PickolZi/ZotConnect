import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Button } from '@mui/material';
import dayjs from 'dayjs';


const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddEventModal = ({eventForm, handleEventFormSubmit, setEventForm, openModal, setOpenModal}) => {
    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add an event
                </Typography>

                {/* Title field */}
                <TextField 
                    label="Title" 
                    variant="outlined" 
                    value={eventForm['title']}
                    onChange={(event) => {setEventForm({...eventForm, title: event.target.value})}}
                    required={true}
                />

                {/* Description field */}
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    value={eventForm['description']}
                    onChange={(event) => {setEventForm({...eventForm, description: event.target.value})}}
                    required={true}
                />

                {/* Date/Time Range */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker 
                            label="Starting Date/Time"
                            // value={dayjs(eventForm['start_date'])} 
                            onChange={(dayObject) => {setEventForm({...eventForm, start_date: dayObject.toDate()})}}
                            required={true}
                        />
                    </DemoContainer>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker 
                            label="Ending Date/Time" 
                            // value={dayjs(eventForm['end_date'])} 
                            onChange={(dayObject) => {setEventForm({...eventForm, end_date: dayObject.toDate()})}}
                            required={true}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                {/* Tag options */}
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tags</InputLabel>
                    <Select
                        label="Tags"
                        value={eventForm['tags']}
                        onChange={(event) => {setEventForm({...eventForm, tags: event.target.value})}}
                        required={true}
                    >
                        <MenuItem value="social">Social</MenuItem>
                        <MenuItem value="hackathon">Hackathon</MenuItem>
                        <MenuItem value="study">Study</MenuItem>
                        <MenuItem value="networking">Networking</MenuItem>
                    </Select>
                </FormControl>

                {/* Submit button */}
                <Button 
                    variant="contained"
                    onClick={() => handleEventFormSubmit(eventForm)}
                >
                    Add Event
                </Button>
            </Box>
        </Modal>
    );
}

export default AddEventModal;