import { useSelector } from 'react-redux'
import styled from 'styled-components'

const SearchDetail = () => {
    const { tag } = useSelector((state) => state.tag)

    return (
        <SearchShadow className="search-modal">
            <Details>
                {tag.map((el) => (
                    <div key={el.id}>
                        <img src={el.image} alt=""/>
                        <h2>{el.text}</h2>
                        <p>Posted By: {el.owner.firstName}</p>
                    </div>
                ))}
            </Details>
        </SearchShadow>
    )
}

const SearchShadow = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;

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
    background: #fff;
    position: absolute;
    left: 10%;
    color: black;

    img {
        width: 80%;
    }
`

export default SearchDetail