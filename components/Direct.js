import Image from 'next/image';
import Link from 'next/link';
import HeaderNavLink from './HeaderNavLink';
const menuItems = [
  { label: `خانه`, url: `/` },
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
          با سپاس از همکاری شما در ساعات پربازدید،
          مدت زمان استفاده از هر میز یک ساعت و نیم می باشد.
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
