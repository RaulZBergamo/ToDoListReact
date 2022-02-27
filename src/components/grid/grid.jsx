import React, { useState, useEffect } from "react";

import './grid.css'

const Grid = ( { setOpenModal, inputList } ) => {

    const [list, setList] = useState(inputList);

    useEffect(() => {
        setList(inputList);
    }, [inputList]);

    function handleRemove(id) {
        const newList = list.filter(e => (e['id'] !== id));

        setList(newList);
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn-lg btn-primary mt-5 mb-3" onClick={() => setOpenModal(true)}>
                    Click me
                </button>
            </div>
            <div className="container">
                <div className="row row-cols-4 justify-content-md-center">
                    {list.map((item) => (
                        <div className="col mb-3" key={item['id']}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item['title']}</h5>
                                    <p className="card-text">{item['body']}</p>
                                    <p className="card-text"><small className="text-muted">{`${item['date']} ${item['time']}`}</small></p>
                                    <button className="btn btn-danger" onClick={() => handleRemove(item['id'])}>
                                        Delete
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Grid;