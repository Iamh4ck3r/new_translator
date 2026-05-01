import { useState, useEffect, useCallback } from "react";

function Generator() {
  const [length, setLength] = useState(8);
  const [text, setText] = useState("");

  const generate = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    setText(result);
  }, [length]);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <h1 className="text-2xl font-bold">Random Generator</h1>

      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={generate}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Generate
      </button>

      <h2 className="text-xl font-mono">{text}</h2>
    </div>
  );
}

export default Generator;