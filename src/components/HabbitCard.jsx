import React, {useState} from 'react'
import { useHabbit } from '../context/HabbitContext';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const HabbitCard = ({habbit, landingPage}) => {

    const {name, id, repeat, goal, time, startdate, archive} = habbit;
    const {deleteHabbit, archiveHabbit, updateHabbit} = useHabbit();

    const [open, setModelOpen] = useState(false);
    const [mode, setMode] = useState("");
    const [editData, setEditData] = useState({});
    const handleModalClose = () => {
        setModelOpen(false);
        setMode("");
    };

    const deleteHandle = () => {
        deleteHabbit(id);
    }
    const archiveHandle = () => {
        archiveHabbit(id);
    }
    const editHabbit = () => {
        setEditData({
            name : name,
            id: id,
            repeat: repeat,
            goal: goal,
            time: time,
            startdate : startdate,
            archive: archive
        });
        setMode("edit");
        setModelOpen(true);
    }
    const viewHabbit = () => {
        setMode("view");
        setModelOpen(true);
    }

    const handleSave = (e) => {
        e.preventDefault();
        updateHabbit(editData);
        setModelOpen(false);
        setMode("");
    }
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={viewHabbit}>View</Button>
        {
            landingPage && (
                <>
                <Button size="small" onClick={editHabbit}>Edit</Button>
                <Button size="small" color="secondary" onClick={archiveHandle}>Archive</Button>
                </>
            )
        }
        <Button size="small" color="error" onClick={deleteHandle}>Delete</Button>
      </CardActions>
    </Card>
    <Modal
        open={open}
        onClose={handleModalClose}
      >
        <>
            {
                (mode === 'view') && (
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Name : {name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Repeat : {repeat}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Goal : {goal}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Time : {time}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Startdate : {startdate}
                        </Typography>
                        <Button size="small" variant="outlined" onClick={handleModalClose}>Close</Button>
                    </Box>
                )
            }


            {
                (mode === 'edit') && (
                <Box sx={style}
                    component="form">
                    <div style={{marginTop:"1rem", display:"flex", flexDirection:"column", gap:"1rem"}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined"
                        value={editData.name}
                        onChange={(e) => {setEditData((prev) => ({...prev, name: e.target.value}))}}/>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel >Repeat</InputLabel>
                            <Select
                                label="Repeat"
                                value={editData.repeat}
                                onChange={(e) => {setEditData((prev) => ({...prev, repeat: e.target.value}))}}
                                required={true}
                            >
                                <MenuItem value={'Daily'}>Daily</MenuItem>
                                <MenuItem value={'Weekly'}>Weekly</MenuItem>
                                <MenuItem value={'Monthly'}>Monthly</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel >Goal</InputLabel>
                            <Select
                                label="Goal"
                                value={editData.goal}
                                onChange={(e) => {setEditData((prev) => ({...prev, goal: e.target.value}))}}
                                required={true}
                            >
                                <MenuItem value={'30 minutes'}>30 minutes</MenuItem>
                                <MenuItem value={'1 hour'}>1 hour</MenuItem>
                                <MenuItem value={'2 hour'}>2 hour</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel >Time</InputLabel>
                            <Select
                                label="time"
                                value={editData.time}
                                onChange={(e) => {setEditData((prev) => ({...prev, time: e.target.value}))}}
                                required={true}
                            >
                                <MenuItem value={'Morning'}>Morning</MenuItem>
                                <MenuItem value={'evening'}>evening</MenuItem>
                                <MenuItem value={'Night'}>Night</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel >Start Date</InputLabel>
                            <Select
                                label="Start Date"
                                value={editData.startdate}
                                onChange={(e) => {setEditData((prev) => ({...prev, startdate: e.target.value}))}}
                                required={true}
                            >
                                <MenuItem value={'Today'}>Today</MenuItem>
                                <MenuItem value={'Next week'}>Next week</MenuItem>
                                <MenuItem value={'Next month'}>Next month</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{marginTop:"1rem", display:"flex", gap:"1rem"}}>
                    <Button size="small" variant="outlined" onClick={handleModalClose}>Close</Button>
                    <Button size="small" type='submit' variant="contained" onClick={handleSave}>Update</Button>
                    </div>
                </Box>
                )
            }
        </>
      </Modal>
    </>
  )
}

export default HabbitCard