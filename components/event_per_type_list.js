import EventDetail from "./event-detail"
import translated from "../i18n/zh_cn"

export default function EventPerTypeList(props) {
    console.log(props.event_type)
    console.log(translated["EquityPledge"])
    return (
        <div className="container border-2 rounded-xl p-5 m-2">
            <p className="text-xl font-bold">
                事件类型：{translated[props.event_type]}
            </p>
            {
                props.event_list.map((event_detail, index) => {
                    return <EventDetail key={index} event={event_detail} />
                })
            }
        </div>
    )
}
