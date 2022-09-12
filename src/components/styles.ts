import styled from "styled-components";

export const StyledForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 20px 50px -10px gray;
  background-color: black;
`;

export const StyledTable = styled.table`
  margin-top: 2rem;
  width: 80vw;
`;

export const StyledButton = styled.button`
  border: 1px grey solid;
  background-color: #000;
  color: #fff;
`;

export const StyledLoadMore = styled(StyledButton)`
  position: fixed;
  bottom: 0;
  left: 50%;
`;

export const StyledR = styled.tr`
  width: 100%;
  justify-content: space-between;
`;  

export const StyledH = styled.th`
  margin-top: 2rem;
`;

