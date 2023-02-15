import Head from "next/head";

const PageHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description}></meta>
    </Head>
  );
};

export default PageHead;