import '../styles/rodape.css'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IconContext } from "react-icons";


export default function Rodape() {
    return (
        <div className='corpo-rodape'>
            <div className='botao-container'>
                <IconContext.Provider value={{ color: "#00CA8B", size: "2em", className: "global-class-name" }}>
                    <FaRegHeart />
                    <AiOutlineShareAlt />
                </IconContext.Provider>
            </div>
        </div>
    )
}