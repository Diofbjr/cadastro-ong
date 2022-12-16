import Header from "../../components/Header";
import Title from "../../components/Title";
import './styles.css';
import { FiHome } from "react-icons/fi";

export default function Dashboard(){
    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="Página Inicial">
                <FiHome size={25} />
                </Title>
                <div className="container newContainer">
                    <h1 className='titulo'>Seja bem-vinda(a)</h1>
                </div>
            </div>
        </div>
    )
}