import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

function StatePage(){
    const {state} = useParams();

    return(
        <div>
            something needs to happen
        </div>
    )

}

export default StatePage;