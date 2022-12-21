import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import Header from '../Header/Header';
import Display from '../Display/Display';
import Options from '../Options/Options';


const Card = () => {
    const [bill, setBill] = useState('');
    const [peopleAmount, setPeopleAmount] = useState('');
    const [tip, setTip] = useState('');
    const [customTip, setCustomTip] = useState('');
    const [activeButton, setActiveButton] = useState();

    const data = {
        peopleAmount: Number(peopleAmount) >= 0 ? Number(peopleAmount) : null,
        bill: Number(bill) >= 0 ? Number(bill) : null,
        tip: Number(tip) || 0,
        customTip: Number(customTip) || 0
    }

    const handleReset = () => {
        setBill(0);
        setPeopleAmount(0);
        setActiveButton(null)
    }

    const resetDisabled =
        (bill === '' || bill === 0) && tip === '' && customTip === '' && (peopleAmount === '' || peopleAmount === 0) ? true : null;

    useEffect(() => {
        data.customTip > 0 ? setActiveButton(null) : setActiveButton(true)
    }, [data.customTip])



    const tipPerPerson = data.peopleAmount
        ? data.bill * (data.customTip > 0 ? data.customTip : data.customTip < 0 ? 0 : data.tip ) / 100 / data.peopleAmount
        : 0

    const totalPerPerson = data.peopleAmount ? data.bill / data.peopleAmount + tipPerPerson : 0;

    const errorMessagePeople = peopleAmount && Number(peopleAmount) === 0
    ? "Can't be zero"
    : peopleAmount && Number(peopleAmount) < 0
    ? "Can't be negative"
    : null;

    const errorMessageBill = bill && Number(bill) === 0
    ? "Can't be zero"
    : bill && Number(bill) < 0
    ? "Can't be negative"
    : null;

    return (
            <div className={styles.card} >
                <Header />
                <Options activeButton={activeButton}  setActiveButton={setActiveButton} errorMessageBill={errorMessageBill} errorMessagePeople={errorMessagePeople} bill={bill} setBill={setBill} peopleAmount={peopleAmount} setPeopleAmount={setPeopleAmount} customTip={customTip} setCustomTip={setCustomTip} tip={tip} setTip={setTip} />
                <Display resetDisabled={resetDisabled} handleReset={handleReset} tipPerPerson={tipPerPerson}  totalPerPerson={totalPerPerson} />
            </div>
    )
}

export default Card;

