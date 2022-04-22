import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countriesName } = useParams()
    return (
        <div>
            <h3>Name:{countriesName}</h3>
        </div>
    );
};

export default CountryDetail;