import { NotionAPI } from "notion-client"
import NotionPage from "../../components/notion-pages"
import { rootDatabaseId } from "../../lib/config"
import { getDatabaseList } from "../../lib/notion"

export default function CustomNotionPage({postData})
{
    return (
        <NotionPage recordMap={postData}></NotionPage>
    )
}

export async function getStaticProps({ params }) {
    const notion = new NotionAPI()
    const postData = await notion.getPage(params.pageId)
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths()
{
    const path = await getDatabaseList(rootDatabaseId);
    const pathList = path.map((obj) => {
        return {
            params: obj
        }
    })
    return {
        paths: pathList,
        fallback: false
    }
}