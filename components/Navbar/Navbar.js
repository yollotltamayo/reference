import style from './style.module.css'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const r = useRouter()
    const { data: session } = useSession()
    return (
        <div className={style.barra}>
            <div className={style.elements}>
                <div onClick={() => r.push('/')}className={style.element}>
                    <Avatar alt={
                        session ? session.user.name :''
                    }
                    src={
                        session ? session.user.image :''
                    }/>
                </div>
                <div onClick={() => r.push('/cesar')}
                    className={style.element}>
                    <Typography>
                        <a>Método Cesar</a>
                    </Typography>
                </div>
                <div onClick={() => r.push('/vigenere')}
                    className={style.element}>
                    <Typography>
                        <a>Método Vigenere</a>
                    </Typography>
                </div>
                <div onClick={() => r.push('/luhn')}
                    className={style.element}>
                    <Typography>
                        <a>Algoritmo de Luhn</a>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
export default Navbar

