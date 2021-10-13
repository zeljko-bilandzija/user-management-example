import React, { CSSProperties } from 'react';
import StyledButton from './style';

export interface IButtonProps {
    onClick: () => void;
    type?: ButtonType;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
}

export type ButtonType = 'primary' | 'default';

const Button: React.FC<IButtonProps> = props => {
    return (
        <StyledButton
            style={props.style}
            onClick={!props.disabled ? props.onClick : undefined}
            className={`${props.className || ''} ${props.type || 'default'}`}
            disabled={props.disabled}
        >
            {props.children}
        </StyledButton>
    );
};

export default Button;