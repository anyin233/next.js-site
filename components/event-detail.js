export default function EventDetail(e){
    let event = e
    console.log(event)
    return (
        <div className="container mt-5 p-5 flex-row border-2 rounded">
            <ul>
            {
                event.event.events.map((e) => {
                    return <>
                    <div className="font-bold text-xl">Type: {e.event_type}</div>
                    <ul className="m-3">
                        {Object.keys(e).map(fi => {
                            return <>
                            {
                                fi == "event_type" ? 
                                null : 
                                <li>{fi}: {e[fi]}</li>
                            }
                            </>
                        })}
                    </ul>
                    </>
                })
            }
            </ul>
        </div>
    )
}