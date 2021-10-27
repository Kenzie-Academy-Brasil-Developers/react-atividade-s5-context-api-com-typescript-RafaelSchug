import styled from 'styled-components'

export const Container = styled.div`

    background: #fff;
    width: 100%;
    max-width: 200px;
    border: 1px solid #c3c3c3;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;

    h5 {
        min-height: 50px
    }

    img {
        max-width: 100%;
        height: 100px;
    }

    .price {
        font-weight: bold;
        color: purple;
    }

        
    button {
        width: 150px;
        height: 35px;
        margin: 20px 0;
        font-weight: bold;
        border: none;
        border-radius: 4px;

        :hover {
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(1.2);
        }

        &.add_product {
            background: purple;
            color: #fff;
        }

        &.delete_product {
            background: orange;
            color: #fff;
        }
    }

   
    

`