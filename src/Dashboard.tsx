import 'react-orgchart/index.css';
import { Header } from './components/Header';
import { MyTree } from './components/MyTree';
import { useNavigate } from 'react-router-dom';

import styles from './home.module.scss';
import data from './data.json';
import { Tree } from './components/Tree';

function Dashboard() {

    const navigate = useNavigate();

    return (
        <div>
        <Header />
        <div className={styles.container}>
            {/* <MyTree
            onClick={(id: number) => {
                navigate(`/view/${id}`);
            }} 
            //   onClickNode={(id: number) => console.log(id)}
            nodes={data}
            /> */}
            <Tree 
                nodes={data} 
                onClick={(id: number) => console.log({ id })}    
            />
        </div>
        </div>
    );
}

export default Dashboard;
