## Character Counter App
A Simple React + TypeScript app that counts characters, words and estimates reading time for the input text.

### Components Overview
1. CharacterCounter
The main container component that:
- Stores text state using useState
- Passes data between TextInput and StatsDisplay
- Calculates statistics (character count, word count, reading time)
* Usage Example:
import CharacterCounter from "./components/CharacterCounter";

```tsx
function App() {
  return (
    <div>
      <h1>Character Counter App</h1>
      <CharacterCounter />
    </div>
  );
}
```
2. TextInput

Handles user input and sends the text back to CharacterCounter via a callback.

* Example:
```tsx
<TextInput onTextChange={handleChange} initialValue={text} />
```

3. StatsDisplay

Displays the calculated statistics:

- Character count
- Word count
- Estimated reading time

* Example:
```tsx
<StatsDisplay stats={calculateStats(text)} />
```