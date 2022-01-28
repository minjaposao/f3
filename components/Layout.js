import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
}
Layout.defaultprops = {
  title: 'DJ Events',
  description: 'The best events in the world',
};
