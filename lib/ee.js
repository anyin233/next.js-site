import axios from "axios"

const server_url = "http://localhost:8000/ee"

export async function send_doc(docs, server){
    let sentences = docs.split("\n")
    let request_body = {
        id: 0,
        sentences: sentences
    }

    return axios({
        method: 'post',
        url: server,
        data: request_body
    }) 
}