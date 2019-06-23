import styled from 'styled-components';

const Container = styled.header`
  background-color: #282c34;
  color: white;
`;
Container.displayName = 'Container';

const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
Content.displayName = 'Content';

export {
  Container,
  Content,
};
