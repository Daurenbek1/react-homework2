
export const RandomNumber = (props) => {
    return (
        <div className="numbers">
            {props.numbers.map(number => <span className='number'>{number}</span>)}
        </div>
    )
}