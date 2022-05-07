import { RandomNumber } from '../components/RandomNumbers/RandomNumbers'
import '../styles/App.scss'

export const Home = (props) => {
    return (
        <div>
            <button onClick={props.handleNumber} className="button">New numbers</button>
            <RandomNumber numbers={props.numbers}/>
        </div>
    )
}