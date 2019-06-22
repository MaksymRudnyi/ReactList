import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
Content.displayName = 'Content';

const Label = styled.label`
	margin-right: 10px;
`;
Label.displayName = 'Label';

export {
	Content,
	Label,
};
