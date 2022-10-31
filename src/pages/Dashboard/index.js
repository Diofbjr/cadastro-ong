import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiHome } from "react-icons/fi";

export default function Dashboard(){
    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="Página Inicial">
                <FiHome size={25} />
                </Title>
                <div className="container">

                </div>
            </div>
        </div>
    )
}