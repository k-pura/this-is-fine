export default function Thought(props) {
    return(
        <div className="post">
            <p className="title">{props.thought._id}</p>
            <p className="content">{props.thought.content}</p>
        </div>
    )
}
