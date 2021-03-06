import axios from "axios"

export const EventId2EventType = ["EquityFreeze", "EquityRepurchase", "EquityUnderweight", "EquityOverweight", "EquityPledge"];

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