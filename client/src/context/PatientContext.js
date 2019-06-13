import React, { useState } from 'react';

export const PatientContext = React.createContext({});

export const defaultPatient = {
        pid: '1',
        age: '87',
        sex: 'M',
        race: 'white',
        weight: '210',
        height: "5'8",
        bmi: '39.1',
        currentMedications: [
            {
                id: '1',
                genericName: 'metoprolol',
                brandName: 'Lopressor',
                indication: 'hypertension',
                precisionDosingAvailable: false,
            },
            {
                id: '2',
                genericName: 'rivaroxaban',
                brandName: 'Xarelto',
                indication: 'nonvalvular atrial fibrillation',
                precisionDosingAvailable: true,
            },
            {
                id: '3',
                genericName: 'atorvastatin',
                brandName: 'Lipitor',
                indication: 'hyperlipidemia',
                precisionDosingAvailable: false,
            },
            {
                id: '4',
                genericName: 'metformin',
                brandName: 'Glucophage',
                indication: 'type II diabetes',
                precisionDosingAvailable: false,
            },
            {
                id: '5',
                genericName: 'cetirizine',
                brandName: 'Zyrtec',
                indication: 'treat hay fever and allergy symptoms, hives, and itching',
                precisionDosingAvailable: false,
            },
        ],
        lastUpdated: '05/19/2019 at 2:47am'
}

export const PatientProvider = ({ children }) => {
    const [currentPatient, setCurrentPatient] = useState(defaultPatient);
    return <PatientContext.Provider value={ [currentPatient, setCurrentPatient] }>
            { children }
        </PatientContext.Provider>
}