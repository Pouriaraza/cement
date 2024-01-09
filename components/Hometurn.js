import Link from "next/link";

const Hometurn = () => {

    return (
        <section className="hometurn">
            <Link href="/" className="logohead"><img src="./imgs/logo1.png" /></Link>
            <Link href="/" className="home"><img src="./imgs/home.png"></img></Link>
        </section>
    );
}

export default Hometurn;
