import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetail = () => {
    const { id } = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => setShow(data));
    }, [id]);

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={show.image?.original}
                            className="card-img-top"
                            alt={show.name}
                            style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain" }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{show.name}</h1>
                            <p className="card-text">{show.summary && <p>{show.summary.replace(/<\/?p>/g, '')}</p>}</p>

                            <a href={`/booking/${show.name}`} className="btn btn-primary" onClick={(e) => e.preventDefault()}>
                                Book Tickets
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;
