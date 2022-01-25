import {
    FiPhone,

} from 'react-icons/fi';
import './styles.scss';

interface ItemProps {
    name: string;
    actor: string;
    children: ItemProps[];
}
interface NodeProps {
    node: ItemProps;
}
export function Node({ node }: NodeProps){
    
    function randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className="initechNode">
            <div className='header'>
                <img
                    src={"https://randomuser.me/api/portraits/men/"+randomIntFromInterval(1,100)+".jpg"}
                    alt="Profile"
                    // style={{ borderColor: levelColor }}
                />
                <a href="">{node.name}</a>
                <span>Presidente</span>
            </div>
            <div className="footer">
                <button>
                    <FiPhone size={16}/>
                </button>
            </div>
        </div>
    );
}   