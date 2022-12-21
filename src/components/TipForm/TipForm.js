import React, { useState } from 'react';
import Button from '../Button/Button';
import InputNumber from '../InputNumber/InputNumber';
import Title from '../Title/Title';
import styles from './TipForm.module.scss';

function TipForm({customTip, setCustomTip, setTip, activeButton, setActiveButton}) {
    const buttons = [
        {name: '5%', value: 5},
        {name: '10%', value: 10},
        {name: '15%', value: 15},
        {name: '25%', value: 25},
        {name: '50%', value: 50},
    ]

    const clickHandler = (value) => {
        setTip(value);
        setCustomTip('');
        setActiveButton(value)
    }

    return (
        <form>
            <Title>Select tip %</Title>
            <div className={styles.tipForm} >
                {buttons.map((button, index) => {
                    return (
                    <Button
                        active={activeButton === button.value}
                        onClick={() => clickHandler(button.value)}
                        value={button.value}
                        key={button.value}
                    >
                        {button.name}
                    </Button>
                )})}
                <InputNumber value={customTip} onChange={(e) => {setCustomTip(e.target.value)}} placeholder="Custom" type="number"/>
            </div>
        </form>
    )
}

export default TipForm;
