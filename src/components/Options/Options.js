import styles from "./Options.module.scss";
import InputNumber from "../InputNumber/InputNumber";
import TipForm from "../TipForm/TipForm";

const Options = ({
  bill,
  setBill,
  peopleAmount,
  setPeopleAmount,
  customTip,
  setCustomTip,
  tip,
  setTip,
  errorMessageBill,
  errorMessagePeople,
  activeButton,
  setActiveButton,
}) => {
  /*const validate = (peopleAmount, error) => {
        if (peopleAmount === 0)
    }*/
  return (
    <div className={styles.options}>
      <InputNumber
        errorMessage={errorMessageBill}
        label="Bill"
        placeholder="$"
        type="number"
        name="bill"
        value={bill}
        onChange={(e) => {
          setBill(e.target.value);
        }}
      />
      <TipForm
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        customTip={customTip}
        setCustomTip={setCustomTip}
        tip={tip}
        setTip={setTip}
      />
      <InputNumber
        errorMessage={errorMessagePeople}
        label="Number of People"
        placeholder="1"
        type="number"
        name="peopleAmount"
        value={peopleAmount}
        onChange={(e) => {
          setPeopleAmount(e.target.value);
        }}
      />
    </div>
  );
};

export default Options;
