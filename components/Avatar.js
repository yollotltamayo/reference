
import { Avatar } from 'antd';
const Foto = ({src}) => {
    
    return(
        <Avatar 
            src={src?src.replace(/"/g,""):""}
            size={{ xs: 50, sm: 50, md: 30, lg: 50,xxl:50}}
        />
    )
}
export default Foto
