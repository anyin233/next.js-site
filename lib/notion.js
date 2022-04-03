import { Client } from "@notionhq/client";

const client = new Client({
    auth: process.env.NOTION_TOKEN
})

const baseUrl = "http://12thday.notion.site"

export async function getDatabaseList(database_id)
{
    const response = await client.databases.query({
            database_id: database_id,
            filter:{
                "and": [
                    {
                        "property": "Published",
                        "checkbox":{
                            "equals": true
                        }
                    }
                ]
            }
        })
    return response.results.map(page => {
        const pageUrl = new URL(page.url);
        const publicUrl = baseUrl + pageUrl.pathname
        const title = page.properties.Title.title[0].plain_text
        return {
            title: title,
            url: publicUrl
        }
    })
}