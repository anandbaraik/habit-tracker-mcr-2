import React from 'react'
import { useHabbit } from '../context/HabbitContext';
import HabbitCard from '../components/HabbitCard';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Home = () => {
    const {habbitList}  = useHabbit();
    const activeHabbits = habbitList?.filter(({archive}) => !archive);
  return (
    <div className='home'>
        <section className='home-section'>
            <div className="action">
            <Button variant="contained">Add new habbit</Button>
            <Button variant="outlined">
                <Link to="/archived-habbits" className='btn-link'> See archived habbits</Link>
            </Button>
            </div>
            <div className='container'>
                {
                    (activeHabbits?.length > 0) && (
                        activeHabbits?.map((habbit) => {
                            return <HabbitCard habbit={habbit} key={habbit.id}/>
                        })
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default Home