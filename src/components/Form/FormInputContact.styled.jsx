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
