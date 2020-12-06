import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
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
        setTextInput('')
    }

    return (
        <StyledNav>
            <div className="logo">
                <a href="/" alt="logo">RokketApp</a>
                <h1>RokketUP</h1>
            </div>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" placeholder="tag" required/>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    padding: 3rem 5rem;
    text-align: center;

    input {
        width: 20%;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 0.5rem;
        border: none;
        color: #6143e4;
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.7rem 2rem;
        cursor: pointer;
        background-image: linear-gradient(to left bottom, #6143e4, #0083ff, #00acff, #00cce2, #19e5be);
        border: 2px solid #6143e4ba;
        color: white;
    }

    h1 {
        color: #6143e4;
    }
`

export default Nav