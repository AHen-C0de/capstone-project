import styled from "styled-components";

const ListContainer = styled.div`
  background-color: var(--list-primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: var(--listContainer-shadow);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default ListContainer;
