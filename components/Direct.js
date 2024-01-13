import Image from 'next/image';
import Link from 'next/link';
import HeaderNavLink from './HeaderNavLink';
const menuItems = [
  { label: `منو`, url: `/menu` },
  { label: `تماس با ما`, url: `/contact` }

];

const Direct = () => {
  return (
    <header>
      <div className="header">
        <Link href="/">
          <img src="./logo1.png" />
        </Link>
        <h1 className='info-h1'>
          خوش آمدید، سِمِنت کافه، یک شروع تازه، یک تیم جوان.
        </h1>
        <div className="direct">
          {menuItems.map(({ url, label }, index) => (
            <HeaderNavLink key={index} href={url}>{label}</HeaderNavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Direct;
