import React, {useState} from 'react'
import { useHabbit } from '../context/HabbitContext';
import HabbitCard from '../components/HabbitCard';
import { Link } from 'react-router-dom';

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

const Home = () => {
    const {habbitList, addHabbit}  = useHabbit();
    const activeHabbits = habbitList?.filter(({archive}) => !archive);

    const [open, setModelOpen] = useState(false);
    const [habbit, setHabbit] = useState({});
    const handleModalClose = () => {
        setModelOpen(false);
    };
    const adddHabbitHandle = () => {
        setHabbit({
            name : "",
            repeat: "",
            goal: "",
            time: "",
            startdate : "",
            archive: false
        })
        setModelOpen(true);
    }

    const handleSave = (e) => {
        e.preventDefault();
        addHabbit(habbit);
        setModelOpen(false);
        setHabbit({
            name : "",
            repeat: "",
            goal: "",
            time: "",
            startdate : "",
            archive: false
        })
    }

  return (
    <div className='home'>
        <section className='home-section'>
            <div className="action">
            <Button variant="contained" onClick={adddHabbitHandle}>Add new habbit</Button>
            <Button variant="outlined">
                <Link to="/archived-habbits" className='btn-link'> See archived habbits</Link>
            </Button>
            </div>
            <div className='container'>
                {
                    (activeHabbits?.length > 0) ? (
                        activeHabbits?.map((habbit) => {
                            return <HabbitCard habbit={habbit} key={habbit.id} landingPage/>
                        })
                    ) : (
                        <h3>Add some habbit</h3>
                    )
                }
            </div>
        </section>
        <Modal
        open={open}
        onClose={handleModalClose}
      >
        <Box sx={style}
            component="form">
            <div style={{marginTop:"1rem", display:"flex", flexDirection:"column", gap:"1rem"}}>
                <TextField id="outlined-basic" label="Name" variant="outlined"
                value={habbit.name}
                onChange={(e) => {setHabbit((prev) => ({...prev, name: e.target.value}))}}/>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel >Repeat</InputLabel>
                    <Select
                        label="Repeat"
                        value={habbit.repeat}
                        onChange={(e) => {setHabbit((prev) => ({...prev, repeat: e.target.value}))}}
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
                        value={habbit.goal}
                        onChange={(e) => {setHabbit((prev) => ({...prev, goal: e.target.value}))}}
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
                        value={habbit.time}
                        onChange={(e) => {setHabbit((prev) => ({...prev, time: e.target.value}))}}
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
                        value={habbit.startdate}
                        onChange={(e) => {setHabbit((prev) => ({...prev, startdate: e.target.value}))}}
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
            <Button size="small" type='submit' variant="contained" onClick={handleSave}>Save</Button>
            </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Home