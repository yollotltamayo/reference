import {useState,useEffect} from 'react'
import Posts from '../components/Posts'
import styles from '../styles/Feed.module.css'
import Head from 'next/head'
import {useRouter } from 'next/router'
const Feed = () => {
    const URI = process.env.URI || "";
    const r = useRouter()
    const [user , setUser] = useState()
    return (
        <>
            <Head>
                <link defer rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
                <title> board </title>
            </Head>
            <div className={styles.feed_containter}>
                <Posts />
            </div>
        </>
    )
}
export default Feed
