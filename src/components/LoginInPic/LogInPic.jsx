import './LogInPic.css';

export default function ProfileCard(props) {
    return(
        <div id="pic" className="front-card tb-card">
            <img src={props.pic} className="comic" />
        </div>
    )
}