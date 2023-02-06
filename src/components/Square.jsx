import "./Square.css";

const Square = ({ index, value, onClickSquare }) => {
    const handleClickSquare = (index) => {
        onClickSquare(index);
    };

    return (
        <div className='square' onClick={(e) => handleClickSquare(index)}>
            {value}
        </div>
    );
};

export default Square;
