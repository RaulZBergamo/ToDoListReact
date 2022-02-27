import React, { useState } from "react";

import './modal.css'

const Modal = ( { openModal, setList, list } ) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    function addList() {

        const newList = list ? list.map(e => e) : [];

        newList.push(
            {
                id: list.length !== 0 ? newList[newList.length - 1]['id']++ : 0,
                title: title,
                body: body,
                date: date,
                time: time
            }
        )

        setList(newList);

        openModal(false);
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') addList();
    }

    return (
        <div className="modal-background d-flex justify-content-center align-items-center" onKeyPress={e => handleKey(e)}>
            <div className="modal-container">
                <div className="modal-title">
                    <header className="text-center mt-5">
                        <h2>Add item</h2>
                    </header>
                </div>
                <div className="modal-body">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <textarea className="form-control" placeholder="Body" value={body} onChange={e => setBody(e.target.value)}></textarea>
                    </div>
                    <div className="input-group mt-3">
                        <input type="date" className="form-control" placeholder="Title" value={date} onChange={e => setDate(e.target.value)}/>
                    </div>
                    <div className="input-group mt-3">
                        <input type="time" className="form-control" placeholder="Title" value={time} onChange={e => setTime(e.target.value)}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-danger" onClick={() => openModal(false)}>Fechar</button>
                    <button className="btn btn-outline-primary" onClick={() => addList()}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;