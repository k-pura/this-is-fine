import './UserLogOut.css';



export default function UserLogOut(props) {
  return (
    <div className="UserLogOut">
      {/* <div>{user.name}</div>
      <div className="email">{user.email}</div> */}
      <button className="btn-sm" onClick={props.handleLogOut}>LOG OUT</button>
    </div>
  );
}
