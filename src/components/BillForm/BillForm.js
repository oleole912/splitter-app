import React from 'react';
import { useContext } from 'react';
import BillContext from '../../context/context';
import InputNumber from '../InputNumber/InputNumber';

function BillForm() {
    //const [amount, setAmount] = useState('');
    const {bill, setBill} = useContext(BillContext);


    return (
        <div>
            <InputNumber label="Bill" value={bill} onChange={(e) => setBill(e.target.value)} placeholder="$" type="number"/>
        </div>
    )
}

export default BillForm;
