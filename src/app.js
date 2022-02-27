import React, {useState} from 'react';
import Grid from './components/grid/grid';
import './main.css'
import Modal from './components/modal/modal';

const App = () => {
    
    const [list, setList] = useState([]);

    const [openModal, setOpenModal] = useState(false);

    function onSetList(newList) {
        setList(newList);
    }

    return (
        <>
            <Grid openModal={openModal} setOpenModal={setOpenModal} inputList={list}/>
            {openModal && <Modal openModal={setOpenModal} setList={onSetList} list={list}/>}
        </>
    )
}

export default App;