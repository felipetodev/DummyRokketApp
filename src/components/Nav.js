import styled from 'styled-components'

const Nav = () => {
    return (
        <StyledNav>
            <div className="logo">
                <a href="#" alt="logo">RokketApp</a>
                <h1>Rokket-App</h1>
            </div>
            <form className="search">
                <input type="text"/>
                <button type="submit">Buscar</button>
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
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: crimson;
        color: white;
    }
`

export default Nav