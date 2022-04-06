import { getDatabaseList } from "../lib/notion";
import useSWR from 'swr';
import Blog from "../lib/blog_layout";
import { Client } from "@notionhq/client";
import { rootDatabaseId } from "../lib/config";
import Link from "next/link";

const database_id = "766e4829151b45738eae2e95733228b3";
const client = new Client({
    auth: process.env.NOTION_TOKEN
})


export default function BlogHome({blogList})
{
    return (
        <Blog>
            <ul className="justify-center items-center py-3">
                { blogList.map(({title, url, pageId}) => {
                    return <li key={pageId} className="text-xl m-5">
                        <Link href={`/notion/${pageId}`}>
                        <a>{title}</a>
                        </Link>
                        <br/>
                    </li>
                }) }
            </ul>
        </Blog>
    )
}

export async function getStaticProps() {
    const data = await getDatabaseList(rootDatabaseId)
    return {
      props:{
        blogList: data
      }
    }
}

