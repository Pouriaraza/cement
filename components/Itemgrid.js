import Popular from './Popular/Popular';
import Shakes from './Shakes/Shakes';
import IceCoff from "./Ice-coffee/IceCoffe";
const Itemgrid = () => {
    return (
        <div className="items">
            <Popular />
            <IceCoff />
            <Shakes />
        </div>
    );
}

export default Itemgrid;
