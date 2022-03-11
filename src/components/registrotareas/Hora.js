import React, { useState} from 'react';
import { useSelector } from 'react-redux';

const Hora = () => {

const diaStore = useSelector((state) => state.diaSelect) 


const j=diaStore.hour

const [hour,setHour]=useState(`${j}`)

    return (
        <div>
               
               
               <div className="m-0 row justify-content-center">
                                <div className="m-0 row justify-content-center">
                                        <div className='justify-content-center'>
                                             <h5 className='text-center' ><label>{j}</label></h5>
                                        </div>
                                </div>
                </div>



            <select class="form-select form-select-sm" size="1" aria-label=".form-select-sm example">
                
                <option value="1">24</option>
                <option value="1">23</option>
                <option value="1">22</option>
                <option value="1">21</option>
                <option value="1">20</option>
                <option value="1">19</option>
                <option value="1">18</option>
                <option value="1">17</option>
                <option value="1">16</option>
                <option value="1">15</option>
                <option value="1">14</option>
                <option value="1">13</option>
                <option value="1">12</option>
                <option value="1">11</option>    
                <option value="1">11</option>
                <option value="2">10</option>
                <option value="3">9</option>
                <option value="3">8</option>
                <option value="3">7</option>
                <option value="3">6</option>
                <option value="3">5</option>
                <option value="3">4</option>
                <option value="3">3</option>
                <option value="3">2</option>
                <option value="3">1</option>
            </select>
            <select class="form-select form-select-sm" size="1" aria-label=".form-select-sm example">
            <option selected>00</option>
                <option value="1">30</option>
            </select>
        </div>
    );
}

export default Hora;
