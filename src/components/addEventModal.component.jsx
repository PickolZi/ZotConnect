import { useState } from 'react';

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
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Button } from '@mui/material';


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

const AddEventModal = ({openModal, setOpenModal}) => {
    const [startDate, setStartDate] = useState();
  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Add an event
            </Typography>

            <TextField label="Title" variant="outlined" />
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
            />

            {/* Date/Time Range */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Starting Date/Time" />
                </DemoContainer>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Ending Date/Time" />
                </DemoContainer>
            </LocalizationProvider>

            {/* Tag options */}
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tags</InputLabel>
                <Select
                    label="Tags"
                    onChange={() => alert("hi")}
                >
                    <MenuItem value="hackthon">Hackthon</MenuItem>
                    <MenuItem value="study">Study</MenuItem>
                    <MenuItem value="social">Social</MenuItem>
                    <MenuItem value="networking">Networking</MenuItem>
                </Select>
            </FormControl>

            {/* Submit button */}
            <Button variant="contained">Add Event</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddEventModal;