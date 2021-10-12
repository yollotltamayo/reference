import styles from '../styles/App.module.css';
import dynamic from "next/dynamic";
import { useState,useCallback} from 'react';
import Loading from '../components/Loading'

//import arr from '../components/arr';
const Preview = dynamic(() => import("../components/Preview"), {
    loading: () => <Loading/>
})

const Editor = (props) => {
    //const [list, setList] = useState(arr); 
    const [text, setText] = useState("experimento"); 
    const [prec, setPrec] = useState("");
    const [flag, setFlag] = useState("");
    const [prev, setPrev] = useState("");
    const [display, setDisplay] = useState(false);
        
    const handleNewText = useCallback((newText,estado) =>{
        let aux = prec;
        //console.log('prec' , prec)
        if(estado === 1){
            setPrec( prec => newText);
        }else{
            if(estado===2){
                setPrev(newText);    
            }else{
                if( aux === ""){
                    setText( aux + '\n' + newText);
                }else{
                    //setText( aux +'\n'+ newText  );
                }
                setPrec(prec => prec + "")
                setText(text => prec + '\n' + newText );
                //setText(newText)
            }
        }
    },[display]);
    //,[prec,text])
    const handleDisplay = useCallback((val) =>{
       setDisplay(val); 
    },[])

    return (    
        <>
            {/*<List 
                list={list} 
                listaStyle={styles.lista}
                cardStyle={styles.card}
                onRemove={handleRemove}
                onWrite={handleNewText}
            />*/}
            <main className={styles.main}>
                <Preview 
                    onWrite={handleNewText} 
                    val={text}
                    onDisplay={handleDisplay} 
                />
            </main>
        </>
    )
}
export default Editor;
