import { iceCoffe } from "./iceCoffe-data.json";
export default function Popular() {
    const { swiper } = iceCoffe;
    return (
        <div className='items-grid'>
            <h2 id="ice-coffe">قهوه سرد</h2>
            {swiper.map((iceCoffe) => (
                <div div key={iceCoffe.id} className='item'>
                    <img src={iceCoffe.imgs} alt="ok" />
                    <div className='info-item'>
                        <h2>{iceCoffe.names}</h2>
                        <div className='price'>
                            <span>{iceCoffe.price}</span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

