import { useState,useEffect } from 'react'
import Post from '@components/Feed/Post'
import hljs from '@components/hljs'
let base = {
    autor:'Yollotl',
    tags:['binary search','segment tree','criba' ],
    codigo:`# Criba de eratostenes
tiempo $O(n logn )$
espacio $\\Omega(n log n)$
\`\`\`js:jeje
//asdk
import md from '../components/markdown_it'
import {useState,useEffect} from 'react'
import style from '../styles/Preview.module.css'
let obj = {
    content:""
}
const Posts = () => {
    useEffect( () => {
        console.log(md.render(\`# hola como estas
                sdflksdjf sdlf
                \`\`\`js hola\` ))
    },[])
   return (
           <div className={style.markdown+ ' markdown-body'}
               dangerouslySetInnerHTML={{__html: md.render(\`# hola como estas sdflksdjf sdlf
                \`\`\`js hola\` 
               )}}>
           </div>
   )
}
export default Posts
    \`\`\``,
    avatar:'https://avatars.githubusercontent.com/u/56574758?v=4',
    date:'12/agosto/2022',
    description:`The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. `
}
const Posts = () => {
    const [pagina, setPagina] = useState(0)
    const [feed, setFeed] = useState([base])
    const [ loading, setLoading] = useState(true)




    useEffect( () => {
        hljs.highlightAll()
        let data
        (async function() {
            //setLoading(true)
            let res = await fetch(`/api/bd/page/${pagina}`)
            data = await res.json()
            if(pagina === 0)
                setFeed( [...data])
            else
                setFeed(feed => ( [...feed,...data]))
            setLoading(false)
            setPagina( pagina => pagina + 1)
        })()
    },[])
    const addMore = async () => {
        let res = await fetch(`/api/bd/page/${pagina}`)
        let data = await res.json()
        setFeed(feed => ( [...feed,...data]))
        setPagina( pagina => pagina + 1)
    }
    return (
        <>
            {
                feed.map((obj,idx) => {
                    return (
                        <Post  
                            key = {obj._id + idx}
                            description={base.description}
                            date={base.date} 
                            tags={base.tags} 
                            author={obj.autor} 
                            avatar={base.avatar} 
                            content={obj.codigo ? base.codigo : ''}/>
                    )
                })
            }
            <button onClick={() => addMore()}>Cargar</button>
        </>
    )
}
export default Posts
