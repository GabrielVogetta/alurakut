import Box from "../Box";
import {AlurakutProfileSidebarMenuDefault} from "../../lib/AlurakutCommons";

function ProfileSideBar(props){
    return (
      // Transformar Box originalmente uma div, para aside  
      <Box as="aside">
          <img src={`https://github.com/${props.userName}.png`} alt="Imagem de Perfil"/>
          <hr/>
  
          <p>
            <a className="boxLink" href={`https://github.com/${props.userName}`}>
              @{props.userName}
            </a>
          </p>
          <hr/>
  
          <AlurakutProfileSidebarMenuDefault/>
      </Box>
    );
}

export default ProfileSideBar;