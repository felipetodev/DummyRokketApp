import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { loadPostsByTag } from '../actions/tagAction'

const Nav = () => {
    const dispatch = useDispatch()
    // dispatch(loadPostsByTag(e.target.value))

    const [ textInput, setTextInput ] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(loadPostsByTag(textInput))
        document.body.style.overflow = 'hidden'
        setTextInput('')
    }

    const clearSearched = () => {
        dispatch({type: 'CLEAR_TAG'})
    }

    const exitTagHandler = (e) => {
        const el = e.target;
        if(el.classList.contains('searched')) {
            document.body.style.overflow = 'auto'
            dispatch({type: 'CLEAR_TAG'})
        }
    }

    const { tag } = useSelector((state) => state.tag)

    return (
        <StyledNav>
            <div className="logo" onClick={clearSearched}>
                <h1>RokketUP 🔥</h1>
            </div>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" placeholder="search by tag" required/>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
            {tag.length ? (
                <SearchShadow className="searched" onClick={exitTagHandler}>
                    <Details>
                        {tag.map((el) => (
                            <Card key={el.id}>
                                <h2>{el.publishDate}</h2>
                                <img src={el.image} alt={el.owner.firstName}/>
                                <h2 className="tag__card"><span>"</span>{el.text}<span>"</span></h2>
                                <h2 className="authortag__card">Author: <span>{el.owner.firstName} {el.owner.lastName}</span></h2>
                                <div>
                                    <h2 className="likes">💜 {el.likes}</h2>
                                    <CardTags>
                                        {el.tags.map(tag => (
                                            <h2 key={tag} className="tags__card">{tag}</h2>
                                        ))}
                                    </CardTags>
                                </div>
                            </Card>
                        ))}
                    </Details>
                </SearchShadow>
            ) : ''}
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    padding: 3rem 5rem;
    text-align: center;

    input {
        width: 20%;
        font-size: 1.15rem;
        font-weight: bold;
        padding: 0.7rem;
        border: none;
        color: #6143e4;
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }

    button {
        font-size: 1.2rem;
        margin-top: 1.2rem;
        padding: 0.8rem 2rem;
        cursor: pointer;
        background-image: linear-gradient(to left bottom, #6143e4, #0083ff, #00acff, #00cce2, #19e5be);
        border: 2px solid #6143e4ba;
        outline: none;
        color: white;
    }

    h1 {
        color: #6143e4;
    }

    .logo {
        cursor: pointer;
    }
`

const SearchShadow = styled.div`
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
        background-color: crimson;
    }

    &::-webkit-scrollbar-track {
        background: #fff;
    }
`

const Details = styled.div`
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

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    .tag__card {
        font-size: 1.5rem;
        margin: 2rem 0.5rem;
        color: #6143e4;
    }

    .authortag__card {
        background-image: linear-gradient(to right top, #7373e4, #6f6fe4, #6b6be4, #6766e4, #6362e4);
        color: #1ae5be;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        border-radius: 1rem;
    }

    .likes {
        margin: 1rem;
    }
`

const CardTags = styled.div`
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

export default Nav