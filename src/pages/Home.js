import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDummy } from '../actions/dummyAction'
import Card from '../components/Card'
import CardDetail from '../components/CardDetail'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadDummy())
    }, [dispatch])

    const { user } = useSelector((state) => state.dummy)
        
    return (
        <CardList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                {pathId && <CardDetail pathId={pathId} />}
                </AnimatePresence>
                <div className="totalmembers">
                    <h2>Rokket Members 🚀</h2>
                    <Cards>
                        {
                            user.map((user) => (
                                <Card
                                    key={user.id}
                                    id={user.id}
                                    title={user.title}
                                    firstName={user.firstName} 
                                    lastName={user.lastName}
                                    picture={user.picture}
                                    email={user.email}
                                />    
                            ))
                        }
                    </Cards>
                </div>
            </AnimateSharedLayout>
        </CardList>
    )
}

const CardList = styled(motion.div)`
    text-align: center;
    padding: 0rem 2rem;

    h2 {
        padding: 1rem 0rem;
    }
`

const Cards = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    padding: 3rem;
`

export default Home