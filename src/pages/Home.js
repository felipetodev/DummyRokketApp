import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDummy } from '../actions/dummyAction'
import Card from '../components/Card'
import CardDetail from '../components/CardDetail'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    // console.log(location.pathname)
    const pathId = location.pathname.split('/')[2]
    // console.log(path)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadDummy())
    }, [dispatch])

    const { user, post, comment, tag } = useSelector((state) => state.dummy)
        
    return (
        <div>
            <h2>Hola</h2>
            {pathId && <CardDetail />}
            {
                user.map((user) => (
                    <Card
                        key={user.id}
                        id={user.id}
                        firstName={user.firstName} 
                        lastName={user.lastName}
                        picture={user.picture}
                        email={user.email}
                    />    
                ))
            }
        </div>
    )
}

export default Home