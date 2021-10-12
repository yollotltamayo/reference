import {useState,useEffect} from 'react';
import Loading from '../components/Loading';
import dynamic from "next/dynamic";
import styles from '../styles/App.module.css';
import arr from '@components/arr';
import Head from 'next/head';
import getUser from '../components/getUser';
//import { Avatar } from 'antd';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
function App(props) { 

    const [user, setUser ] = useState({});
    const [err, setErr] = useState({})
    const r = useRouter()
    const {data:session} = useSession()
    console.log(session)
    //useEffect(  () => {
        //var  info ;
        //(async function ()  {
            //setLoading(true)
            //info = await  fetch(URI + '/user')
            //let res = await  info.json()
            //if(!res.status ||  res.status !== 'accepted') {
                //r.push('/login')
            //}
            //setUser(res)
            //setLoading(false)
        //})();
    //},[])
    const Editor = dynamic( ()=> import('../components/Editor'),{
        loading: () => <Loading/>
    })
    return (
        <>
            <Head>
                <link defer rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
                <title> board </title>
            </Head>
            <Editor/>
        </>
    );
}

export default App;

