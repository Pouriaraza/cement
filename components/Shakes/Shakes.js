import { shakes } from "./shakes-data.json";
export default function Shakes() {
    const { swiper } = shakes;
    return (
        <div className='items-grid'>
            <h2 id="shakes">شیک ها</h2>
            {swiper.map((shakes) => (
                <div div key={shakes.id} className='item'>
                    <img src={shakes.imgs} alt="ok" />
                    <div className='info-item'>
                        <h2>{shakes.names}</h2>
                        <div className='price'>
                            <span>{shakes.price}</span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

