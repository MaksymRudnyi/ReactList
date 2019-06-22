import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #cecece;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
Container.displayName = 'Container';

const Logo = styled.div`
	width: 120px;
	height: 120px;
	min-width: 120px;
	background: #1e1e1e;
	margin-right: 15px;
`;
Logo.displayName = 'Logo';

const Content = styled.div`
	
`;
Content.displayName = 'Content';

const Name = styled.p`
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 10px;
`;
Name.displayName = 'Name';

export {
	Container,
	Logo,
	Content,
	Name,
};
