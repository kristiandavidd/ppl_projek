import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  description?: string;
  pageTitle?: string;
}

function EmptyLayout(props: LayoutProps){
  const { children, pageTitle, description } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}

export { EmptyLayout }