import { IAPIUser } from 'actions';
import React from 'react';
import StyledListItem from './style';

export interface IUserCardProps {
    user: IAPIUser;
}

const UserCard: React.FC<IUserCardProps> = props => {
    return (
        <StyledListItem>
            <div className="image-container">
                <img src={props.user.avatar} alt="" />
            </div>
            <p>{props.user.first_name} {props.user.last_name}</p>
        </StyledListItem>
    );
};

export default UserCard;