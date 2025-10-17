"use client";

import Image from "next/image";
import logo from "../../public/logo.svg";
import BillInput from "../components/BillInput";
import PeopleCountInput from "../components/PeopleCountInput";
import DisplayResult from "../components/DisplayResults";
import ResetButton from "../components/ResetButton";
import TipInput from "../components/TipInput";
import TipCalculator from "../../utils/TipCalculator";
import { useState, useEffect } from "react";

// Custom hook for tip calculation state management
const useTipCalculation = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [activeTipButton, setActiveTipButton] = useState(false);
  const [calculations, setCalculations] = useState({
    tipPerPerson: 0,
    totalPerPerson: 0
  });

  // Calculate tip whenever inputs change
  useEffect(() => {
    const calculationResult = TipCalculator(
      parseFloat(billAmount),
      parseFloat(tipPercent), 
      parseFloat(numPeople)
    );
    
    setCalculations({
      tipPerPerson: calculationResult.tipPerPerson,
      totalPerPerson: calculationResult.totalPerPerson
    });
  }, [billAmount, tipPercent, numPeople]);

  return {
    billAmount,
    setBillAmount,
    tipPercent,
    setTipPercent,
    numPeople,
    setNumPeople,
    activeTipButton,
    setActiveTipButton,
    calculations
  };
};

export default function TipCalculatorApp() {
  const {
    billAmount,
    setBillAmount,
    tipPercent,
    setTipPercent,
    numPeople,
    setNumPeople,
    activeTipButton,
    setActiveTipButton,
    calculations
  } = useTipCalculation();

  // Event handlers with more descriptive names
  const onTipButtonSelect = (selectedTip: string) => {
    setActiveTipButton(true);
    setTipPercent(prevTip => prevTip === selectedTip ? "" : selectedTip);
  };

  const onCustomTipInput = (customTip: string) => {
    setActiveTipButton(false);
    setTipPercent(customTip);
  };

  const clearAllInputs = () => {
    setBillAmount("");
    setTipPercent("");
    setNumPeople("");
    setActiveTipButton(false);
  };

  // Computed values
  const hasValidInputs = Number(billAmount) > 0 || Number(tipPercent) > 0 || Number(numPeople) > 0;
  const isZeroPeopleError = numPeople === "0";

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[hsl(185,41%,84%)] px-4 pt-12 font-mono md:justify-center md:px-0 md:pt-0">
      <Image
        className="tracking-[0.5em]"
        src={logo}
        alt="splitter logo"
      />

      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-8 rounded-2xl bg-white p-6 shadow-lg md:mt-20 md:grid-cols-2 md:p-8">
        <section className="flex flex-col justify-between gap-8">
          <BillInput bill={billAmount} handleBillInput={setBillAmount} />
          <TipInput
            tip={tipPercent}
            isOnTipButton={activeTipButton}
            handleTipClick={onTipButtonSelect}
            handleTipInput={onCustomTipInput}
          />
          <PeopleCountInput
            peopleCount={numPeople}
            isZeroPeopleCount={isZeroPeopleError}
            handlePeopleCountChange={setNumPeople}
          />
        </section>

        <section className="flex flex-col justify-between rounded-xl bg-[hsl(183,100%,15%)] p-6 pt-10 md:p-8">
          <DisplayResult
            tipPerPerson={calculations.tipPerPerson}
            totalPerPerson={calculations.totalPerPerson}
          />
          <ResetButton canReset={hasValidInputs} handleReset={clearAllInputs} />
        </section>
      </div>
    </main>
  );
}