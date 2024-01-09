import Hometurn from "@/components/Hometurn";
import Itemgrid from "@/components/Itemgrid";
import Menucom from "@/components/Menucom";
import Image from "next/image";

const Home = () => {

    return (
        <div className="menu">
            <div className="item-menu" id="myElement" >
                <Hometurn />
                <Menucom />
            </div>
            <Itemgrid />
        </div>
    );
}

export default Home;
