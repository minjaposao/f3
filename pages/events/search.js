import EventItem2 from '@/components/EventItem2';
import Layout from '@/components/Layout';
import qs from 'qs';

export default function Search({ events }) {
  return (
    <Layout>
      <h1>Search</h1>
      {events.map((evt) => {
        <EventItem2 key={evt.id} evt={evt} />;
      })}
    </Layout>
  );
}
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ name_contains: term }, { address_contains: term }],
    },
  });

  const res = await fetch(`http://localhost:1337/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
