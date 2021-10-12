import axios from 'axios'

const getUser =  (setUser,setErr,r=null,loading=null) => {
    const URI = process.env.URI || "";

    let logged =fetch(URI + '/user')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.status === 'failed')
                if(r)
                    r.push('/login')
            setUser(data)
        })
        .catch( err => {
            setErr(err)
            if(r)
                r.push('/login')
        })
        if(loading)
            loading(false)
}
export default getUser
