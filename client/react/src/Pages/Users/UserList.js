import { memo } from 'react';
import UserCard from './UserCard';
function UserGrid(props) {
    return (
        <div className='row'>
            {props.users.map((user) => (
                <UserCard key={user.email} user={user} />
            ))}
        </div>
    );
}
export default memo(UserGrid);