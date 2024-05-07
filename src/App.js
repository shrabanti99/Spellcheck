import { useState } from "react";

export default function App() {
  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const handleChange = (e) => {
    let input = e.target.value;
    setText(input);
    const words = input.split(" ");
    const corrected = words.map((item) => {
      const correctedword = customDictionary[item.toLowerCase()];
      return correctedword || item;
    });
    const correctedtext = corrected.join(" ");
    const firstCorrection = corrected.find(
      (word, index) => word !== words[index]
    );

    setSuggestions(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestions && (
        <p>
          Did you mean: <strong>{suggestions}</strong>?
        </p>
      )}
    </div>
  );
}
