import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  justify-content: space-between;
  margin: ${p => p.theme.space[3]}px;
`;
