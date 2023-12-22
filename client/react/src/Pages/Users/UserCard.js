import { memo } from "react";
function UserCard(props) {
    return (
        <div key={props.user.email} class="col-4">
            <div class="card mb-12">
                <div class="card-body">
                    <h5 class="card-title">{props.user.first_name} {props.user.last_name}</h5>
                    <div class="card-text">
                        <img src={props.user.avatar} />
                        <div style={{ textAlign: 'right' }}>{props.user.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserCard;