import React, { useState } from 'react'
import axios from 'axios'

const server_url = "http://localhost:8000/uploadfile"

export default function EventExtractor() {
    // 确定上传的状态（上传中和上传完毕）
    const [uploaded, setUploaded] = useState(false)
    const [uploading, setUploading] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        axios.post(server_url, form,
            {
                onUploadProgress: progressEvent => {
                    setUploading(true)
                }
            })
            .then(response => {
                console.log(response)
                setUploaded(true)
                setUploading(false)
            })
            .catch(e => {
                window.alert(`cannot upload file because \n ${e}`)
            })
    }

    return <div className="flex flex-col max-h-screen min-w-full justify-center items-center py-2">
        <h1 className="text-4xl font-mono font-bold text-center">Event Extracter</h1>
        <br />
        {/* 这里使用条件渲染对于上传完毕和上传中的两种状态显示不同的内容 */}
        {
            uploaded ?
                <div>
                    <h2 className="text-2xl font-bold">上传完毕</h2>
                </div>
                :
                <form onSubmit={onSubmit}>
                    <input type={"file"} name="file" accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"></input>
                    <button className="border border-gray-500 rounded p-1 font-sans hover:text-blue-600">Upload</button>
                </form>
        }
        {
            uploading &&
            <div>
                <h2 className="text-2xl font-bold">处理中</h2>
            </div>
        }
    </div>
}