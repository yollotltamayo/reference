import Head from 'next/head'

import { useRouter } from 'next/router'
import {useEffect } from 'react'
import useSWR from 'swr'

function Home() {

    const URI = process.env.URI || "";
    const r = useRouter()

    useEffect ( ()=> {
        var  info ;
        (async function ()  {
            info = await  fetch(URI + '/user')
            let res = await  info.json()
            if(res.status && res.status === 'accepted') {
                r.push('/board')
            }else {
                r.push('/login')
            }
        })();
    },[]);

    return (
        <>
            <main>
                <p> Redirecting ... </p>
            </main>
        </>
    );
}
export default Home
