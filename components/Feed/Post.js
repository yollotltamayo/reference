import style  from '../../styles/Post.module.css'
import md from '../../components/markdown_it'
import Avatar from '@mui/material/Avatar';
import {memo} from 'react'
const Post = ({ref,description, date, author, avatar,tags, content}) => {
    console.log('render')
    return (
        <div ref={ref}
            className={style.post}>
            <div className={style.encabezado}>
                <Avatar src={avatar}/>
                <div className={style.datos}>
                    <h1 className={style.autor} >{author}</h1>
                    <h3>{date}</h3>
                </div>
                <div>
                <div className={style.tags}>

                    {
                    tags.map((value, idx) => (
                        <div className={style.tag}>{value}</div>   
                    ))

                    }
                </div>
                </div>
            </div>
            <div className={style.descripcion}>
                <p className={style.paragraph} >{description}</p>
            </div>
            <div className={style.markdown+ ' markdown-body'}
                dangerouslySetInnerHTML={{__html: 
                    md.render(content)
                }}>
            </div>
        </div>
    )
}
export default memo(Post)
