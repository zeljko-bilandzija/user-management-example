import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 15px 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    transition: 300ms;
    cursor: pointer;
    user-select: none;

    &:hover:not(:disabled) {
        box-shadow: 0 0 10px 1px gray;
    }

    &.default {
        background-color: #23408e;
    }

    &.primary {
        background-color: #3dad48;
    }

    &:disabled {
        cursor: unset;
        background-color: #c8c8c8;
    }
`;

export default StyledButton;