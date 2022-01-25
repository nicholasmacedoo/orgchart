import 'react-orgchart/index.css';
import { Header } from './components/Header';
import { Tree } from './components/Tree';

import styles from './home.module.scss';
import data from './data.json';

function Dashboard() {


    return (
        <div>
        <Header />
        <div className={styles.container}>
            <Tree 
                nodes={data} 
                onClick={(id: number) => console.log({ id })}    
            />
        </div>
        </div>
    );
}

export default Dashboard;
