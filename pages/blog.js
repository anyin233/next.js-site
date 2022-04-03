import { getDatabaseList } from "../lib/notion";

export default function Blog({blogList})
{
    return (
        <div className="flex flex-col min-h-screen min-w-full justify-center items-center py-2">
            <h1 className="text-4xl font-mono font-bold text-center">12th Day Blog</h1>
            <ul className="justify-center items-center py-3">
                { blogList.map(({title, url}) => {
                    return <li key={title} className="text-xl m-5">
                        <a href={url}>{title}</a>
                        <br/>
                    </li>
                }) }
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const databaseId = "766e4829151b45738eae2e95733228b3";
    const data = await getDatabaseList(databaseId)
  
    return {
      props:{
        blogList: data
      }
    }
  }