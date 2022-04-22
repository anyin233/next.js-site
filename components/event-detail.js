export default function EventDetail(props) {
    let e = props.event
    return (
        <div className="container flex-row">
            <div className="m-5 border-dotted border rounded-xl shadow-md">
                <ul className="p-5 mb-0">
                    {Object.keys(e).map(fi => {
                        return <EventFieldListItem key={fi} fi={fi} ef={e[fi]}></EventFieldListItem>
                    })}
                </ul>
            </div>
        </div>
    )
}

function EventFieldListItem(props) {
    return <>
        {
            props.fi == "event_type" ?
                null :
                <li className="m-2">{props.fi}: {props.ef}</li>
        }
    </>
}