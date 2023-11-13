import React, { Component } from "react"; 
import RingLoader from "react-spinners/RingLoader";
import {LoderBox} from './Loader.styled';

class Loader extends Component   {
    render() {
          
        return (
           <LoderBox>
            <RingLoader color={'#36D527'} loading={true} size={150} />
        </LoderBox>
        )
    }
}

export default Loader;