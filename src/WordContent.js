import "./App.css";

export default function WordContent(props) {
  return (
    <div className="WordContent">
      <div>{props.data.word}</div>
      <div>{props.data.phonetic}</div>
      <div>{props.data.wordDefinition}</div>
      <div>{props.data.synonyms}</div>
      <div>{props.data.WordDefinition}</div>
      <div>{props.data.partOfSpeech}</div>
    </div>
  );
}
