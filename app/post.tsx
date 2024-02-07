export function Post(props: any) {
    console.log(props)
    return (
        <div>
            <strong>{props.autor}</strong>
            <p>{props.content}</p>
        </div>
    )
}