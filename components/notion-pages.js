import { NotionRenderer } from "react-notion-x";
import { getPageTitle } from "notion-utils";
import Head from "next/head";


import dynamic from 'next/dynamic'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)


export default function NotionPage({recordMap}) {
    if (!recordMap) return null;
    const title = getPageTitle(recordMap)
    return (
        <>
        <Head>
            <metadata name="description" content="Blog Hosted by Notion"></metadata>
            <title>{title}</title>
        </Head>
        <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        components={{
            Code,
            Collection,
            Equation,
            Modal,
            Pdf
          }}
        />
        </>
    )
}