import {useState,React} from 'react';
//import {UserContext} from '../../Home';
import styles from '../styles/navbar.module.css';
import Link from 'next/link'
import { Input, Space } from 'antd';
import { Avatar } from 'antd';
const {Search} = Input;
const Navbar = (props) => {
    //const raw = useContext(UserContext).split('*');
    const[data,setData] = useState('');
    const user = props.name;
    const avatar = props.avatar;
    var logOut = () => {
    };
    const changeQuery = (value) => {
        props.setQuery(value);
    };
    return( 
        <header className={styles.header}>
            <div className={styles.navbar}>
                <ul>
                    <Search placeholder="input search text" onSearch={changeQuery} style={{ width: 200 }} />
                    <li>
                        <Link href="/login">
                            LOGIN
                        </Link>
                    </li>
                    <li>Convertir a PDF </li>
                    <li>{user !== ""?user:""}</li>
                    <li > <button onClick={() => {logOut()}} >LOGOUT</button></li>
                    <li><button onClick={()=>submit()}>load</button>
                    </li>
                    <li>
                        <Avatar
                            size={{lg: 64}}
                            src={avatar}
                        />
                    </li>

                </ul>
            </div>
        </header>
    );
};
export default Navbar;
