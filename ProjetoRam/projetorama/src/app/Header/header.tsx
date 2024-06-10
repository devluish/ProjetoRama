import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">TESTE 1</Link>
          </li>
          <li>
            <Link href="/">TESTE 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
