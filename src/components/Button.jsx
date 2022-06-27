const Button = ({ setDisplayedPhrase, color, setColor, colors, quotes }) => {
    const random = (array) => Math.round(Math.random() * (array.length - 1));

    const next = () => {
        setColor(colors[random(colors)]);
        setDisplayedPhrase(quotes[random(quotes)]);
    };

    return (
        <div className="button">
            <button style={{ backgroundColor: color }} onClick={next}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Button;
