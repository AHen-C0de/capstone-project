import styled from "styled-components";

const ListContainer = styled.div`
  background-color: var(--list-primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 85%;
  box-shadow: 5px 5px 6px #c2c2c2;
  filter: ${({ isBlur }) => (isBlur ? "blur(5px)" : "none")};
  height: 90%;
`;

export default ListContainer;
