import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CardDetail = () => {
    const { post, isLoading } = useSelector((state) => state.post)
    console.log(post)

    return (
        <>
            {!isLoading && (
            <CardShadow>
                <Detail>
                    {post.map((el) => (
                        <div key={el.id}>
                            <h2>{el.publishDate}</h2>
                            <img src={el.image} alt=""/>
                            <p>{el.text}</p>
                            <p>{el.likes}</p>
                        </div>
                    ))}
                </Detail>
            </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
`

const Detail = styled.div`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: #fff;
    position: absolute;
    left: 10%;
    color: black;

    img {
        width: 80%;
    }
`

export default CardDetail