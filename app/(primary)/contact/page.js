import Hometurn from "@/components/Hometurn";
import "./style.scss";
const Home = () => {

    return (
        <div className="contact">
            <Hometurn />
            <div className="flexing">
                <section className="item-grid">
                    <h3>تماس باما</h3>
                    <a className="item" href="https://maps.app.goo.gl/Hm5tSd411G8c8YAY6?g_st=ic">
                        <div className="icon">
                            <span className="loc"></span>
                        </div>
                        <div className="discripsion">
                            <p><span>آدرس:</span>هران- شهران شمالی - بالاتر از فلکه سوم شهران - کافه سِمِنت
                            </p>
                        </div>
                    </a>
                    <a className="item" href="tel://09213887808">
                        <div className="icon">
                            <span className="call"></span>
                        </div>
                        <div className="discripsion">
                            <p><span>شماره :</span> ۰۹۲۱ ۳۸۸ ۷۸۰۸</p>
                        </div>
                    </a>
                    <section className="item">
                        <div className="icon">
                            <span></span>
                        </div>
                        <div className="discripsion">
                            <p><span>ساعت کاری :</span> <a href="#">شنبه تا جمعه  از ساعت ۹:۰۰ تا ۲۲:۰۰</a></p>
                        </div>
                    </section>
                </section>

                <section className="social">
                    <a className="instagram" href="https://www.instagram.com/cementcafe?igsh=cmNtaWZjOXZ4azZw"></a>
                </section>
            </div>
        </div>
    );
}

export default Home;
