import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 0;
  header {
    width: 1250px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.5s;
        svg {
          margin-top: 1px;
          margin-right: 7px;
        }
        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
          border-bottom: solid 2px #BB0A21;
        }
      }
    }
  }
`;