import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.sizes.normal};
`;

export const Input = styled.input`
  width: ${p => p.theme.sizes.normal};
  height: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Label = styled.label`
  width: ${p => p.theme.sizes.normal};
`;

export const Button = styled.button`
  box-shadow: ${p => p.theme.shadows.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.normal};
  height: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.blue};
  }
  transition: color 250ms linear, background-color 250ms linear;
`;
