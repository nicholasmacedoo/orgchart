import { useNavigate, useParams } from "react-router-dom";
import { Header } from "./components/Header";
import {
    Tab,
    Tabs,
    TabList,
    TabPanel
} from 'react-tabs';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';

import data from './data.json';
import styles from './view.module.scss';
import 'react-tabs/style/react-tabs.css';
import './tabs.scss';

export function View() {

    const { id } = useParams();
    const navigate = useNavigate();

    const user = data.find(item => item.id === Number(id));
    
    function handleGoBack() {
        navigate(-1);
    }
    
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.cover}>
                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="cover background" />
                </div>
                <button className={styles.buttonGoBack} onClick={handleGoBack}>
                  <FiChevronLeft size={24} />  Voltar
                </button>
                <div className={styles.content}>
                    <div className={styles.containerInfoUser}>
                        <div className={styles.infoUser}>
                            <img src={user?.img} alt={user?.name} />
                            <strong>{user?.name}</strong>
                            <span>{user?.title}</span>

                            <div className={styles.description}>
                                <div>
                                    <strong>47</strong>
                                    <p>Idade</p>
                                </div>
                                <div>
                                    <strong>PMO</strong>
                                    <p>Função</p>
                                </div>
                                <div>
                                    <strong>87</strong>
                                    <p>Pontuação</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.actionsForUser}>
                            <button>
                                <FaWhatsapp size={24}/>
                                Mandar mensagem
                            </button>
                            <button>
                                <FaPhone size={24}/>
                                Fazer uma ligação
                            </button>
                            <button>
                                <FaEnvelope size={24}/>
                                Enviar e-mail
                            </button>
                        </div>
                    </div>
                    <div className={styles.contentUser}>
                        <Tabs>
                            <TabList>
                                <Tab>Identificação</Tab>
                                <Tab>Avaliação</Tab>
                                <Tab>Diretrizes</Tab>
                                <Tab>Solicitações</Tab>
                                <Tab>Prestar Contas</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="container">
                                    <p className={styles.idHighligth}>
                                        <strong>Nome do cargo:</strong>
                                        {user?.title}
                                    </p>
                                    <p className={styles.idHighligth}>
                                        <strong>Objetivo:</strong>
                                        Gerenciar o setor financeiro e administrativo
                                    </p>
                                    <p className={styles.idHighligth}>
                                        <strong>Subordinação:</strong>
                                        Reporta-se a Diretoria
                                    </p>
                                </div>
                                
                                <div className={styles.title}>
                                    <strong>Principais atividades</strong>
                                </div>
                                <div className="container">
                                    <ol>
                                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, optio!</li>
                                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus voluptas est qui fugit eligendi nulla.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet minus explicabo incidunt cupiditate fugit reprehenderit.</li>
                                    </ol>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="container">
                                    <p className={styles.idHighligth}>
                                        <strong>Nome do cargo:</strong>
                                        {user?.title}
                                    </p>
                                </div>
                                <div className={styles.title}>
                                    <strong>Fatores de avaliação</strong>
                                </div>
                                <div className="container">
                                    <p style={{ margin: '8px  0'}}>O método utilizado é o quantitativo por pontos de 1 a 100. Os fatores de avaliação de cargos e respectivos pesos são os seguintes:</p>
                                    <ol>
                                        <li>Instrução (17%)</li>
                                        <li>Experiência (15%)</li>
                                        <li>Complexidade (12%)</li>
                                        <li>Iniciativa (9%)</li>
                                        <li>Supervisão exercida (8%)</li>
                                        <li>Supervisão recebida (5%)</li>
                                        <li>Responsabilidade por máquina ou equipamento (6%)</li>
                                        <li>Responsabilidade por erros (8%)</li>
                                        <li>Esforço física (7%)</li>
                                        <li>Esforço mental (9%)</li>
                                        <li>Condições ambientais (4%)</li>
                                    </ol>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}