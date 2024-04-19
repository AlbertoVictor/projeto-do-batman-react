import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContexts";

function Profile() {
    const {login} = useContext(UserContext);

    return(
        <div>
            {login? 'Dados do usuario' : 'Faça seu login para ter acesso às informações'}
        </div>
    );
}

export default Profile;