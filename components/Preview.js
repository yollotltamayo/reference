import React ,{useState,useEffect} from 'react';
//import Cardboard from '../components/Carboard'
import style from '../styles/Preview.module.css'
import dynamic from 'next/dynamic'
import Loading from '../components/Loading'
import hljs from '../components/hljs'
import Sider from '../components/Sider';
import namedCodeBlocks from 'markdown-it-named-code-blocks'
//import Editor from "@monaco-editor/react";
const Editor = dynamic(
    () => import('@monaco-editor/react'),
    { ssr: false }
)

var tm = require('markdown-it-texmath');
var md = require('markdown-it')({
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre><code class="lang-${lang}">` +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                    '</code></pre>';
            } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
    html:false
})
.use(require('markdown-it-multimd-table'))
.use(namedCodeBlocks)
.use(tm, { engine: require('katex'),
    delimiters:'dollars',
    katexOptions: { macros: {"\\RR": "\\mathbb{R}"} }
});
const Preview = (props)=>{
    const [mark,setMarked] = useState("");
    const [prev, setPrev] = useState("");
    const [currentWindow, setCurrentWindow ] = useState(true); // true => displat current refs , false display preview
    const [display, setDisplay] = useState(false)
    useEffect( () => {
        hljs.highlightAll();
    });
    return (
        <>
            <div className={style.container}>
                <div key="bro" className={style.area1}  >
                    <div className={style.EditorBar}
                        style={{
                            gridArea:'A'
                        }}>
                        <button>Placeholder</button>
                    </div>
                    <div style={{gridArea:'B'}}>
                        <Editor
                            defaultLanguage="markdown"
                            defaultValue="// some comment"
                            onChange={ (e) =>{
                                setMarked(e)
                            }}
                            style={{height:"50vh",width:'100%'}}
                            />
                    </div>
                    <div className={style.EditorBar }
                        style={{
                            gridArea:'C'
                        }}>
                        <button>x</button>
                    </div>

                </div>
        <div className={ style.area1 + ' ' + style.divPreview}>
                    <div className={style.EditorBar}
                        style={{gridArea:'A'}}
                        >
                        <button 
                            className={currentWindow?"":style.tabsDisabled}
                            onClick={() => setCurrentWindow(true)}>
                            Reference
                        </button>
                        <button 
                            className={!currentWindow?"":style.tabsDisabled}
                            onClick={() => setCurrentWindow(false)}
                        >
                            Preview
                        </button>
                    </div>
                    {currentWindow ? 
                    <div className={style.markdown + " markdown-body" } 
                        style={{gridArea:'B',width:'100%'}}
                        dangerouslySetInnerHTML={{__html: md.render(mark)}}>
                    </div>
                    :
                    <div className={style.markdown + " markdown-body"} 
                        style={{gridArea:'B'}}
                        dangerouslySetInnerHTML={{__html: md.render(prev)}}>
                    </div>
                    }
                    <div className={style.EditorBar }
                        style={{
                            gridArea:'C'
                        }}>
                        <button>x</button>
                    </div>
                </div>
            </div>
            </>

    );
}
export default Preview;
