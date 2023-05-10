import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((data) => setShows(data));
    }, []);



    return (
        <div className="row">
            <h2 className="pb-2 border-bottom">Movies</h2>
            {shows.map(
                (show) =>
                    show.show.image && (
                        <div key={show.show.id} className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img
                                    src={show.show.image.medium}
                                    className="card-img-top"
                                    alt={show.show.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{show.show.name}</h5>
                                    <Link
                                        to={`/show/${show.show.id}`}
                                        className="btn btn-primary stretched-link"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
            )}
        </div>
    );
};

export default ShowList;
