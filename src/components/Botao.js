import '../styles/botao.css'
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";


export default function Botao() {
    return (
        <div className='corpo-botao'>
            <button className='botao-funny'>Funny</button>
            <IconContext.Provider value={{ color: "#818284", size: "2em" , className: "global-class-name" }}>
            <BsThreeDots />
            </IconContext.Provider>
        </div>
    )
}