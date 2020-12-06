import { useDispatch } from 'react-redux'
import { loadPosts } from '../actions/postsAction'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Card = ({ id, firstName, lastName, picture, email, title }) => {
    const stringPathId = id.toString()
    //LOAD-POSTS
    const dispatch = useDispatch()

    const loadPostsHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadPosts(id))
    }

    return (
        <StyledUser layoutId={stringPathId} onClick={loadPostsHandler}>
            <Link to={`/posts/${id}`}>
                <div>
                    <p className="title">{title}.</p>
                    <motion.picture layoutId={`image ${stringPathId}`}>
                        <img src={picture} alt={firstName}/>
                    </motion.picture>
                    <UserInfo>
                        <h3>{firstName} {lastName}</h3>
                        <p className="card__email"><span>📧</span>{email}</p>
                    </UserInfo>
                </div>
            </Link>
        </StyledUser>
    )
}

const StyledUser = styled(motion.div)`
    background-image: linear-gradient(to top, #6143e4, #0083ff, #00acff, #00cce2, #19e5be);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    font-size: 0.8rem;
    border: 2px solid #6143e4;

    .title {    
        color: #fff;
        text-transform: uppercase;
    }

    picture {
        display: flex;
        justify-content: center;
        object-fit: cover;
        margin: 1rem;
    }

    img {
        width: 50%;
        border-radius: 50%;
        object-fit: cover;
        transition: all 300ms ease;
    }

    img:hover {
        transform: scale(1.1);
    }
`

const UserInfo = styled.div`
    background-image: linear-gradient(to right top, #6143e4, #0083ff, #00acff, #00cce2, #19e5be);
    border-top: 4px solid #6143e42e;
    padding-bottom: 2rem;
    color: #fff;

    .card__email {
        display: flex;
        flex-direction: column;
    }
`

export default Card