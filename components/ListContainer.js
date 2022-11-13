import styled from "styled-components";

const ListContainer = styled.div`
  background-color: var(--list-primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 5px 10px 7px #7e7e7e;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default ListContainer;
