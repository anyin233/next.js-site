export default function EventDetail(e){
    let event = e
    console.log(event)
    return (
        <div className="container flex-row">
            <ul>
            {
                event.event.events.map((e) => {
                    return <div className="border-2 rounded p-5 mt-5">
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
                    </div>
                })
            }
            </ul>
        </div>
    )
}