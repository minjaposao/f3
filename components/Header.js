import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Search from '@/components/Search';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>Dj Events</a>
      </Link>
      <Search />
      <ul>
        <li>
          <Link href='/events'>Events</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </header>
  );
}
