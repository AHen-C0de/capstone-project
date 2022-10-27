import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #fad861;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 2rem auto;
  box-shadow: 5px 5px 6px #c2c2c2;
  filter: ${({ isBlur }) => (isBlur ? "blur(5px)" : "none")};
`;

export default ListContainer;
