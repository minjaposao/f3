import EventItem2 from '@/components/EventItem2';
import Layout from '../components/Layout';

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Sajt</h1>
      {events.map((evt) => (
        <EventItem2 key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
