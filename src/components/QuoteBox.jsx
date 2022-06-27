import Button from "./Button";

const QuoteBox = ({ quotes, colors, color, setColor, displayedPhrase, setDisplayedPhrase }) => {

  const { quote, author } = displayedPhrase;

  return (
    <div className="quoteBox" style={{ color: color }}>
      <div className="quoteN">
        <p className="quoteText">
          <i className="fa-solid fa-quote-left"></i>
          {quote}
        </p>
      </div>
      <p className="author">
        {"-"}
        {author}
      </p>
      <Button
        setDisplayedPhrase={setDisplayedPhrase}
        color={color}
        setColor={setColor}
        colors={colors}
        quotes={quotes}
      />
    </div>
  );
};

export default QuoteBox;
