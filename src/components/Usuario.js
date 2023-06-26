import '../styles/usuario.css'

export default function Usuario() {
    return (
        <div className='corpo-usuario'>
            <div className='img-container'>
            <img src='' alt='' style={{ width:'55px', height:'55px' }}></img>
            </div>
            <div>
                <h1 className='nome-usuario'>João Oliveira</h1>
                <h2 className='tempo'>5 mêses atrás</h2>
            </div>
        </div>
    )
}