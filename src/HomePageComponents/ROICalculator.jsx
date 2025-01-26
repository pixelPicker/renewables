import React from "react";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

const energyTypes = [
  { id: 1, name: 'Solar' },
  { id: 2, name: 'Wind' },
  { id: 3, name: 'Hydro' },
]

const EnergyDropDown = ({setEnergyType}) => {
  const [selectedType, setSelectedType] = useState(energyTypes[0])
  const [isSelecting, setIsSelecting] = useState(false);

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setEnergyType(value);
  }

  return (
    <div>
      <label htmlFor="energyType" className="font-Nunito">Energy Type</label>
      <br />
      <Listbox value={selectedType} onChange={(value) => handleTypeChange(value)}>
        <ListboxButton className="bg-gray-100/20 border-2 mt-1 border-gray-100/50 active:bg-gray-100/40 focus-within:bg-gray-100/40 outline-none py-2 px-7 rounded-lg text-black font-Nunito placeholder:text-black">
          <div className="flex items-center gap-3">
            {selectedType.name}
            <IoChevronDown className={`${isSelecting ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />
          </div>
        </ListboxButton>
        <ListboxOptions onFocus={() => setIsSelecting(true)} onBlur={() => setIsSelecting(false)} anchor="bottom" className="bg-gray-100/50 my-2 rounded-lg border-2 backdrop-blur-sm border-gray-100/50">
          {energyTypes.map((energyType) => (
            <ListboxOption onClick={() => setIsSelecting(false)} key={energyType.id} value={energyType} className="data-[focus]:bg-gray-100/50 w-full px-10 py-2">
              {energyType.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

const InputFields = ({
  setSystemCost,
  setEnergyType,
  setElectricityCost,
  setAnnualUsage,
  calc}
) => {

  return (
    <div className="flex flex-col gap-3 items-start my-4">

      <div>
        <label htmlFor="systemCost" className="font-Nunito">System Cost </label>
        <br />
        <input type="numeric" onChange={(e) => setSystemCost(e.target.value)} name="systemCost" id="systemCost" className="bg-gray-100/20 border-2 border-gray-100/50 active:bg-gray-100/40 focus-within:bg-gray-100/40 outline-none py-3 px-4 mt-1 rounded-lg text-black font-Nunito placeholder:text-gray-600/75" placeholder="10000" />
      </div>

      <div>
        <label htmlFor="electricityCost" className="font-Nunito">Electricity Cost </label>
        <br />
        <input type="numeric" onChange={(e) => setElectricityCost(e.target.value)} name="electricityCost" id="electricityCost" className="bg-gray-100/20 border-2 border-gray-100/50 active:bg-gray-100/40 focus-within:bg-gray-100/40 outline-none py-3 px-4 mt-1 rounded-lg text-black font-Nunito placeholder:text-gray-600/75" placeholder="10000" />
      </div>

      <div>
        <label htmlFor="annualUsage" className="font-Nunito">Yearly Energy Usage </label>
        <br />
        <input type="numeric" onChange={(e) => setAnnualUsage(e.target.value)} name="annualUsage" id="annualUsage" className="bg-gray-100/20 border-2 border-gray-100/50 active:bg-gray-100/40 focus-within:bg-gray-100/40 outline-none py-3 px-4 mt-1 rounded-lg text-black font-Nunito placeholder:text-gray-600/75" placeholder="10000" />
      </div>
      <EnergyDropDown setEnergyType={(value) => setEnergyType(value)} />
      <button onClick={() => calc()} className="bg-gray-100/20 mt-2 hover:bg-gray-100/30 active:bg-gray-100/50 border-2 border-gray-100/50 rounded-lg w-full font-Nunito py-3">Check</button>
    </div>
  );
}

function ROICalculator() {
  const [systemCost, setSystemCost] = useState(null);
  const [energyType, setEnergyType] = useState(energyTypes[0]);
  const [electricityCost, setElectricityCost] = useState(null);
  const [annualUsage, setAnnualUsage] = useState(null);
  const [annualSavings, setAnnualSavings] = useState(null);
  const [paybackPeriod, setPaybackPeriod] = useState(null);

  const calculateValues = () => {
    if(systemCost === null || energyType === null || electricityCost === null || annualUsage === null) {
      console.log('Values are null');
      return;
    }
    if(systemCost < 0 || electricityCost < 0 || annualUsage < 0) {
      console.log("WTF have you done");
      return;
    }
    let savingsPercentage;
    switch (energyType.id) {
      case 1:
        savingsPercentage = 70;
        break;
      case 2:
        savingsPercentage = 60;
        break;
      case 2:
        savingsPercentage = 40;
        break;
      default:
        break;
    }
    let annualSaving = (annualUsage * electricityCost * savingsPercentage) / 100;
    let payback = systemCost / annualSaving;
    setAnnualSavings(annualSaving);
    setPaybackPeriod((payback.toFixed(3)));
  }

  return (
    <section className="relative py-16 px-32 before:content[''] before:top-0 before:left-0 before:w-full before:h-full before:absolute before:bg-center before:blur-[1px] before:bg-cover before:bg-[url('assets/images/abstract_bg_2.jpg')]">
      <div className="relative bg-gray-300/40 backdrop-blur-[4px] border-2 p-8 border-gray-50/70 w-full shadow-xl rounded-2xl grid justify-center items-center gap-x-4 gap-y-8">

        <div className="flex justify-around items-center">
          <h1 className="text-5xl w-2/3 justify-self-end font-MontserratBold ">
            Calculate your Green Gains
          </h1>
          <p className="font-Nunito text-xl pl-16">
            Discover the financial and environmental benefits of switching to renewable energy. Use our ROI calculator to estimate your savings and returns over time.
          </p>
        </div>
        <div className="border-[2px] bg-gray-100/40 rounded-full w-full col-span-2 h-2 shadow-lg border-gray-50/50"></div>

        <div className="flex justify-around">
          <InputFields
            setSystemCost={((value) => setSystemCost(value))}
            setEnergyType={((value) => setEnergyType(value))}
            setElectricityCost={((value) => setElectricityCost(value))}
            setAnnualUsage={((value) => setAnnualUsage(value))}
            calc={() => calculateValues()}
          />
          <div className="border-[2px] bg-gray-100/40 rounded-full w-2 border-gray-50/50"></div>
          <div className="flex flex-col justify-around">

            <div className="py-3 px-8 font-Nunito bg-gray-100/20 border-2 border-gray-100/50 rounded-lg">
              <p className="text-2xl pb-3">Annual Savings</p>
              <h1 className="text-5xl text-center">{annualSavings ? annualSavings : "00"}</h1>
            </div>

            <div className="py-3 px-8 font-Nunito bg-gray-100/20 border-2 border-gray-100/50 rounded-lg">
              <p className="text-2xl pb-3">Payback Period</p>
              <h1 className="text-5xl text-center">{paybackPeriod ? paybackPeriod : "00"}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ROICalculator;