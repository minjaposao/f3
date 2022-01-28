import EventItem2 from '@/components/EventItem2';
import Layout from '@/components/Layout';

export default function Eventpage({ events }) {
  return (
    <Layout>
      event
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
