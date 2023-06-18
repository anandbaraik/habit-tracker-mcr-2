import React from 'react'
import { useHabbit } from '../context/HabbitContext';
import HabbitCard from '../components/HabbitCard';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Archived = () => {
    const {habbitList}  = useHabbit();
    const archivedHabbits = habbitList?.filter(({archive}) => archive);
  return (
    <div className='home'>
        <section className='home-section'>
            <div className="action">
            <Button variant="contained">
                <Link to="/" className='btn-link'>See active habbits</Link>
            </Button>
            </div>
            <div className='container'>
                {
                    (archivedHabbits?.length > 0) ? (
                        archivedHabbits?.map((habbit) => {
                            return <HabbitCard habbit={habbit} key={habbit.id}/>
                        })
                    ) : (
                        <h3>
                            No archived habbits found.
                        </h3>
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default Archived