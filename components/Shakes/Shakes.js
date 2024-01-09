import Image from "next/image";
import { shakes } from "./shakes-data.json";
export default function Shakes() {
    const { swiper } = shakes;
    return (
        <div className='items-grid'>
            <h2 id="shakes">شیک ها</h2>
            {swiper.map((shakes) => (
                <div div key={shakes.id} className='item'>
                    <Image src={shakes.imgs} alt="ok" width={100} height={100} />
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

