import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Searceh() {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search Event'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}
