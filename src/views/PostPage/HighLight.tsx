interface Props {
    text : string;
    search : string;
}
const HighLight : React.FC<Props> = ({text,search}) => {
  console.log(search);
  
    if(!search){
      return text;
    }

    const isSearchTermPresent = text.toLowerCase().includes(search.toLowerCase());
    if (!isSearchTermPresent) {
      return <div>Not matching word</div>;
    }


    const word = text.split(new RegExp(`(${search})`,'gi'));
    console.log(word);
    
  return (
    <div>
      {
        word.map((word)=>word.includes(search)? (
          <span className="bg-yellow-300">{word}</span>
        ) : (
          <span>{word}</span>
        ))
      }
    </div>
  )
}

export default HighLight
