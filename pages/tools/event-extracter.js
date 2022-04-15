import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { send_doc } from '../../lib/ee';
import EventDetail from '../../components/event-detail';

const {TextArea} = Input;

export default function EventExtractor() {
    const [running, setRunning] = useState(false)
    const [text, setText] = useState("")
    const [done, setDone] = useState(false)
    const [event_list, setEvent] = useState([{}])
    const [server_url, setServer] = useState("http://192.168.192.84:8000/ee")

    
    function onAreaChange(e){
        setText(e.target.value)
    }

    function onServerChange(e){
        setServer(e.target.value)
    }

    function onClick(e){
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
            <Input defaultValue={server_url} onChange={onServerChange}></Input>
            <div className="h-4"></div>
            <TextArea rows={5} showCount onChange={onAreaChange} className="resize-none h-96">

            </TextArea>
            {
                running ? 
                <Button type='primary' shape='round' className="mt-5" onClick={onClick} loading>Submit</Button>:
                <Button type='primary' shape='round' className="mt-5" onClick={onClick}>Submit</Button>
            }
            { 
                done?
                event_list.map(element => {
                    // console.log(element.id)
                    return <EventDetail event={element}/>
                }): null
            }
            </div>
        </>
    )
}
