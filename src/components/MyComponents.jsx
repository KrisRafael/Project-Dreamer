/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: hotpink;
  border: none;
  color: white;
  padding: 1em;
  text-align: center;
`;

const MyComponent = () => {
  return (
    <StyledButton>
      Click me!
    </StyledButton>
  );
};

export default MyComponent;
