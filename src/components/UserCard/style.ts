import styled from 'styled-components';

const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .image-container {
        flex: 1;
        margin-right: 50px;

        img {
            width: 100%;
        }
    }

    p {
        flex: 4;
    }
`;

export default StyledListItem;