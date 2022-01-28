import EventItem from '@/components/EventItem';
import Layout from '../components/Layout';

export default function AboutPage({ events }) {
  return (
    <Layout>
      About page
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
