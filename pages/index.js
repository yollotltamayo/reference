import { useRouter } from 'next/router'
import {useEffect } from 'react'

function Home() {

    const r = useRouter()

    useEffect ( ()=> {
        r.push('/login')
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
