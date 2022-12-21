import React from 'react';
import { useState } from 'react';
import InputNumber from '../InputNumber/InputNumber';

function PeopleAmountForm(props) {
    const [numberPeople, setNumberPeople] = useState('');



    return (
        <div>
            <InputNumber label="Number of People" value={numberPeople} onChange={e => setNumberPeople(e.target.value)} placeholder="0" type="number"/>
        </div>
    )
}

export default PeopleAmountForm
