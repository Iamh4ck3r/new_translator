import { useState } from "react";

function Translator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [toLang, setToLang] = useState("hi");

  const translateText = async () => {
    if (!input.trim()) return alert("Enter text");

    try {
      const res = await fetch(
        "https://deep-translate1.p.rapidapi.com/language/translate/v2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
            "x-rapidapi-key": "YOUR_API_KEY", // 👈 yaha apni key daalo
          },
          body: JSON.stringify({
            q: input,
            source: "en",
            target: toLang,
          }),
        }
      );

      const data = await res.json();
      setOutput(data.data.translations.translatedText);
    } catch (err) {
      console.log(err);
      alert("Error in translation");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <h1 className="text-2xl font-bold">Translator</h1>

      <textarea
        className="border p-3 w-80 rounded"
        placeholder="Enter text"
        onChange={(e) => setInput(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        onChange={(e) => setToLang(e.target.value)}
      >
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>

      <button
        onClick={translateText}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Translate
      </button>

      <textarea
        className="border p-3 w-80 rounded bg-gray-100"
        value={output}
        readOnly
      />
    </div>
  );
}

export default Translator;