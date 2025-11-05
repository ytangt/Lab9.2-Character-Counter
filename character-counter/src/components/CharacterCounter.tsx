import { useState } from "react";
import StatsDisplay from "./StatsDisplay";
import TextInput from "./TextInput";

function CharacterCounter() {
  const [text, setText] = useState("");

  const handleChange = (newText: string) => {
    setText(() => newText);
  };

  const calculateStats = (text: string) => {
    const characterCount = text.length;
    
    const calculateWordCount = (text: string) =>
      text.length > 0 ? text.trim().split(/\s+/).length : 0;
    const wordCount = calculateWordCount(text);
    const readingTime = wordCount / 200;
    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  return (
    <div>
      <h2>Character Count </h2>
      <StatsDisplay stats={calculateStats(text)} />
      <hr />
      <TextInput onTextChange={handleChange} initialValue={text} />
    </div>
  );
}

export default CharacterCounter;