import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <div>
      <div className="">
        <main className="">{children}</main>
      </div>
    </div>
  );
}
