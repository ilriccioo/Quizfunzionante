import React, { useState } from "react"; import smartphones from "./smartphones";

const App = () => { const [step, setStep] = useState(0); const [answers, setAnswers] = useState({}); const [result, setResult] = useState(null);

const questions = [ { question: "Quanto vuoi spendere?", name: "budget", options: [ { label: "<200€", value: 200 }, { label: "200-500€", value: 500 }, { label: "500-1000€", value: 1000 }, { label: ">1000€", value: 5000 }, ], }, { question: "Uso principale?", name: "uso", options: [ { label: "Foto/Video", value: "fotografia" }, { label: "Gaming", value: "gaming" }, { label: "Social/Chiamate", value: "social" }, { label: "Lavoro", value: "produttivita" }, ], }, ];

const handleAnswer = (name, value) => { setAnswers((prev) => ({ ...prev, [name]: value })); setStep(step + 1); };

const handleFinish = () => { const filtered = smartphones.filter((phone) => phone.price <= answers.budget); const sorted = filtered.sort((a, b) => b.price - a.price); setResult(sorted[0]); };

if (result) { return ( <div className="p-4"> <h1 className="text-xl font-bold mb-4">Il tuo telefono ideale è:</h1> <img src={result.img} alt={result.name} className="w-48 mb-4" /> <h2 className="text-lg font-semibold">{result.name}</h2> <div className="mt-4 space-x-2"> <a href={result.buyNew} className="bg-blue-500 text-white px-4 py-2 rounded">Compra Nuovo</a> <a href={result.buyRefurbished} className="bg-green-500 text-white px-4 py-2 rounded">Compra Ricondizionato</a> </div> </div> ); }

return ( <div className="p-4"> {step < questions.length ? ( <div> <h2 className="text-lg font-bold mb-4">{questions[step].question}</h2> <div className="space-y-2"> {questions[step].options.map((opt) => ( <button key={opt.value} onClick={() => handleAnswer(questions[step].name, opt.value)} className="block w-full bg-gray-100 p-2 rounded hover:bg-gray-200" > {opt.label} </button> ))} </div> </div> ) : ( <button onClick={handleFinish} className="mt-4 bg-black text-white px-4 py-2 rounded"> Scopri il risultato </button> )} </div> ); };

export default App;

