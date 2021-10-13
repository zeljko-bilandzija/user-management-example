import React, { useEffect, useState } from 'react';
import StyledContainer from './style';
import Button from 'components/UI/Button';
import { fetchUser, IAPIUser } from 'actions';
import UserCard from 'components/UserCard';

export interface IUserManagementProps {
 
}

const UserManagement: React.FC<IUserManagementProps> = props => {
    const [users, setUsers] = useState<IAPIUser[]>([]);
    const [showUsersCount, setShowUsersCount] = useState(1);
    const [fetchedCount, setFetchedCount] = useState(0);
    const MAX_USERS = 10;

    useEffect(() => {
        if (showUsersCount > fetchedCount) {
            fetchUser(showUsersCount).then(user => {
                setUsers([
                    ...users,
                    user
                ]);
                setFetchedCount(fetchedCount + 1);
            });
        }
    }, [showUsersCount]);

    const renderUsers = () => {
        return users.slice(0, showUsersCount).map(user => <UserCard key={user.email} user={user} />);
    }

    const handleAddUser = () => {
        if (showUsersCount < MAX_USERS) {
            setShowUsersCount(showUsersCount + 1);
        }
    }

    const handleRemoveUser = () => {
        if (showUsersCount > 0) {
            setShowUsersCount(showUsersCount - 1);
        }
    }

    console.log('FC', fetchedCount);
    console.log('SUC', showUsersCount);
    return (
        <StyledContainer>
            <h1>User Management</h1>
            <ul>
                {renderUsers()}
            </ul>
            <p>Number of users: {showUsersCount}</p>
            <div className="actions-container">
                <Button
                    disabled={showUsersCount < 2}
                    onClick={handleRemoveUser}
                >
                    Remove user
                </Button>
                <Button
                    disabled={showUsersCount >= MAX_USERS}
                    type="primary"
                    onClick={handleAddUser}
                >
                    Add user
                </Button>
            </div>
        </StyledContainer>
    );
};

export default UserManagement;