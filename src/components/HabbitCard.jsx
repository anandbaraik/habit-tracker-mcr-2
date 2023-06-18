import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useHabbit } from '../context/HabbitContext';
const HabbitCard = ({habbit, landingPage}) => {
    const {name, id} = habbit;
    const {deleteHabbit, archiveHabbit} = useHabbit();
    const deleteHandle = () => {
        deleteHabbit(id);
    }
    const archiveHandle = () => {
        archiveHabbit(id);
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
        <Button size="small">View</Button>
        {
            landingPage && (
                <>
                <Button size="small">Edit</Button>
                <Button size="small" color="secondary" onClick={archiveHandle}>Archive</Button>
                </>
            )
        }
        <Button size="small" color="error" onClick={deleteHandle}>Delete</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default HabbitCard