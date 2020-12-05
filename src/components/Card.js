import { useDispatch } from 'react-redux'
import { loadPosts } from '../actions/postsAction'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Card = ({ id, firstName, lastName, picture, email }) => {
    //LOAD-POSTS
    const dispatch = useDispatch()

    const loadPostsHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadPosts(id))
    }

    return (
        <StyledUser onClick={loadPostsHandler}>
            <Link to={`/posts/${id}`}>
                <picture>
                    <img src={picture} alt={firstName}/>
                </picture>
                <h2>{firstName} {lastName}</h2>
                <p>{email}</p>
            </Link>
        </StyledUser>
    )
}

const StyledUser = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    cursor: pointer;

    picture {
        width: 100%;
        display: block;
    }

    img {
        border-radius: 50%;
    }

    &:hover {
        color: rebeccapurple;
    }
`

export default Card