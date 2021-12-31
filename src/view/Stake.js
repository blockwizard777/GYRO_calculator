import { number } from 'prop-types';
import {
    StakeDetail,
    Calculator,
} from '../components/stake'
function Stake ({gyroBalance}) {
    return (
        <>
            <StakeDetail/>
            <Calculator gyroBalance={gyroBalance} />
        </>
    );
}

Stake.propTypes = {
    gyroBalance: number.isRequired
}

export default Stake;