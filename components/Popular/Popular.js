import { items } from "./data.json";
export default function Popular() {
    const { swiper } = items;
    return (
        <div className='items-grid'>
            <h2 id="Popular">پر طرفدار ها</h2>
            {swiper.map((item) => (
                <div div key={item.id} className='item'>
                    <img src={item.imgs} alt="ok" />
                    <div className='info-item'>
                        <h2>{item.names}</h2>
                        <div className='price'>
                            <span>{item.price}</span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

