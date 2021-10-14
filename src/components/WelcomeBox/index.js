import Box from "../Box";
import {OrkutNostalgicIconSet} from "../../lib/AlurakutCommons";

function WelcomeBox(){
    return(
        <Box>
            <h1 className="title">
              Bem-Vindo(a)
            </h1>

            <OrkutNostalgicIconSet/>
        </Box>
    );
}

export default WelcomeBox;