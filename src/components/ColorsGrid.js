import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';

function ColorsGrid(){

    const [filas,setFilas] = useState(4);
    const [columnas,setColumnas] = useState(4);
    const [color,setColor] = useState('#ffffff');

    const handleFilas = ({target}) => {
        /* console.log(target.value); */
        setFilas(target.value);
    };

    const handleColumnas = ({target}) => {
        /* console.log(target.value); */
        setColumnas(target.value);
    };

    // COLORS GRID
    useEffect(()=>{

        let grid = document.getElementById('grid');
        while(grid.firstChild){
            grid.removeChild(grid.firstChild)
        }

        for (let i = 1; i <= filas; i++) {

            let tr = document.createElement('tr');
            tr.setAttribute('id',`tr${i}`);
            document.getElementById('grid').appendChild(tr)
            
            for (let j = 1; j <= columnas; j++) {
                let td = document.createElement('td');
                td.classList.add('square');
                td.setAttribute('id',`f${i}c${j}`);
                /* td.addEventListener('click',({target})=>{target.setAttribute('style',`background-color:${color}`)}); */
                document.getElementById(`tr${i}`).appendChild(td);                
            }

        }

    },
    [filas,columnas]);

    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click',()=>{
            squares[i].setAttribute('style',`background-color:${color}`)
        })
        
    };

    return(
      <section>
        <div className='inputForm'>
            <form>
                <div>
                    <label htmlFor='nroFilas'>Nro. Filas: </label>
                    <input id='nroFilas' type={'number'} onChange={handleFilas} required></input>
                </div>
                <div>
                    <label htmlFor='nroColumnas'>Nro. Columnas: </label>
                    <input id='nroColumnas' type={'number'}  onChange={handleColumnas} required></input>
                </div>
            </form>
        </div>
        <br/>
        <div className='gridContainer'> {/* de 5 x 5 */}
            <table className='grid'>
                <tbody id='grid'></tbody>
            </table>
        </div>
        <div>
        <h4>Select a color and click on any cell of the grid:</h4>
            <div>
                <table>
                    <tbody>
                        <tr className='selector'>
                            <td id='black' className='colorOption' onClick={() => {setColor('#000000')}}></td>
                            <td id='blue' className='colorOption' onClick={() => {setColor('#0059ff')}}></td>
                            <td id='green' className='colorOption' onClick={() => {setColor('#008000')}}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br/>
      </section>
    );
};

export default ColorsGrid;