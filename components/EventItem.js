import Image from 'next/image';

export default function EventItem({ evt }) {
  return (
    <div>
      <h1>{evt.name}</h1>
      <Image
        src={evt.image ? evt.image : `/images/event-default.png `}
        width={200}
        height={150}
      />
      {evt.address}
    </div>
  );
}
