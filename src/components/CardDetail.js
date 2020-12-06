import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { useHistory } from 'react-router-dom'

const CardDetail = ({ pathId }) => {
    const history = useHistory()

    const exitPostHandler = (e) => {
        const el = e.target;
        if(el.classList.contains('modal')) {
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    const { post, isLoading } = useSelector((state) => state.post)

    return (
        <>  
            {!isLoading && (
            <CardShadow className="modal" onClick={exitPostHandler}>
                <Detail layoutId={pathId}>
                    {post.map((el) => (
                        <Card key={el.id}>
                            <h2>{el.publishDate}</h2>
                            <img src={el.image} alt={el.owner.firstName}/>
                            <h2 className="title__card"><span>"</span>{el.text}<span>"</span></h2>
                            <h2 className="author__card">Author: <span>{el.owner.firstName} {el.owner.lastName}</span></h2>
                            <div>
                                <h2>💜 {el.likes}</h2>
                                <CardTags>
                                    {el.tags.map(tag => (
                                        <h2 key={tag} className="tags__card">{tag}</h2>
                                    ))}
                                </CardTags>
                            </div>
                        </Card>
                    ))}
                </Detail>
            </CardShadow>
            
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track {
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: #f3e7ff;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 2;

    img {
        width: 50%;
        border: 5px solid #6867e45e;
        border-radius: 10px;
    }
`

const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    .title__card {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color: #6143e4;
    }

    .author__card {
        background-image: linear-gradient(to right top, #7373e4, #6f6fe4, #6b6be4, #6766e4, #6362e4);
        color: #1ae5be;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
    }
`

const CardTags = styled(motion.div)`
    display: flex;
    align-items: center;

    .tags__card {
        border: 2px solid rebeccapurple;
        padding: 0.2rem 0.5rem;
        font-size: .8rem;
    }

    .tags__card:not(:last-child) {
        margin-right: 1.5rem;
    }
`

export default CardDetail