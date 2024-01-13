import Popular from './Popular/Popular';
import Shakes from './Shakes/Shakes';
import Mactels from './Mactels/Mactels';
import Coffee from './Coffee/Coffee';
import Breakfast from "./Breakfast/Breakfast";
import Drinks from "./Drinks/Drinks";
import Food from "./Food/Food";
import Fruitwater from "./Fruitwater/Fruitwater"
import Hotdrink from './Hotdrink/Hotdrink';
import Icecream from "./Icecream/Icecream";
import Smoke from "./Smoke/Smoke";
import Tea from "./Tea/Tea";
import Vipsmoke from "./Vipsmoke/Vipsmoke"
import IceCoffe from './Ice-coffee/IceCoffe';
const Itemgrid = () => {
    return (
        <div className="items">
            <Mactels />
            <Popular />
            <Shakes />
            <Coffee />
            <Breakfast />
            <Drinks />
            <Food />
            <Fruitwater />
            <Hotdrink />
            <Icecream />
            <Tea />
            <Smoke />
            <Vipsmoke />
            <IceCoffe />
        </div>
    );
}

export default Itemgrid;
