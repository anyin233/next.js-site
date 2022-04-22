import EventDetail from "./event-detail"

export default function EventPerTypeList(props) {
    console.log(props.event_list)
    return (
        <div className="container border-2 rounded-xl p-5 m-2">
            <p className="text-xl font-bold">
                事件类型：{props.event_type}
            </p>
            {
                props.event_list.map((event_detail, index) => {
                    console.log(event_detail)
                    return <EventDetail key={index} event={event_detail} />
                })
            }
        </div>
    )
}
