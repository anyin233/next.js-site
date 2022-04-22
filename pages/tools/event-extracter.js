import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { EventId2EventType, send_doc } from '../../lib/ee';
import EventPerTypeList from '../../components/event_per_type_list';

const { TextArea } = Input;

export default function EventExtractor() {
    const [running, setRunning] = useState(false)
    const [text, setText] = useState("")
    const [done, setDone] = useState(false)
    const [event_list, setEvent] = useState([{}])
    const [server_url, setServer] = useState("http://192.168.192.84:8000/ee")


    function onAreaChange(e) {
        setText(e.target.value)
    }

    function onServerChange(e) {
        setServer(e.target.value)
    }

    function onClick(e) {
        setRunning(true)
        send_doc(text, server_url).then(req => {
            console.log(req.data)
            setEvent(req.data)
        }).then(() => {
            setRunning(false)
            setDone(true)
        }).catch(error => {
            setRunning(false)
            window.alert("cannot access server")
        })
    }
    return (
        <>
            <div className='m-5'>
                <p className="text-xl font-bold font-sans">后端服务地址</p>
                <Input defaultValue={server_url} onChange={onServerChange}></Input>
                <div className="h-4"></div>
                <p className="text-xl font-bold font-sans">文档内容</p>
                <TextArea rows={5} showCount onChange={onAreaChange} className="resize-none h-96">
                </TextArea>
                {
                    running ?
                        <Button type='primary' shape='round' className="mt-5" onClick={onClick} loading>Submit</Button> :
                        <Button type='primary' shape='round' className="mt-5" onClick={onClick}>Submit</Button>
                }
                <div className="mt-5">
                    <p className="text-xl font-bold font-sans">{done ? "事件列表" : null}</p>
                    {
                        done ?
                            event_list[0].events.map((events, index) => {
                                return <>
                                {
                                    event_list[0].event_type_list[index] == 1 ?
                                    <EventPerTypeList key={index} event_list={events} event_type={EventId2EventType[index]}/> :null
                                }
                                </>
                            }) : null
                    }
                </div>
            </div>
        </>
    )
}
