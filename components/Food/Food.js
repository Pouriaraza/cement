import Image from "next/image";
import { items } from "./Fooddata.json";
export default function Coffee() {
    const { swiper } = items;
    return (
        <div className='items-grid'>
            <h2 id="food">غذا</h2>
            {swiper.map((item) => (
                <div div key={item.id} className='item'>
                    <Image src={item.imgs} alt="ok" width={100} height={100} />
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

