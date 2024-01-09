import Image from "next/image";
import { iceCoffe } from "./iceCoffe-data.json";
export default function Popular() {
    const { swiper } = iceCoffe;
    return (
        <div className='items-grid'>
            <h2 id="ice-coffe">قهوه سرد</h2>
            {swiper.map((iceCoffe) => (
                <div div key={iceCoffe.id} className='item'>
                    <Image src={iceCoffe.imgs} alt="ok" width={100} height={100} />
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

