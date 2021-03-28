import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from './action';

function Counter({ }) {

    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
    const dispatch = useDispatch();

    // 각 액션들을 디스패치하는 함수들을 만드세요
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    
    const onChange = (value) => {
        // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
        onSetDiff(parseInt(value, 10));
    }

    return (
        <div>
        <h1>{number}</h1>
        <div>
            <input type="number" value={diff} min="1" onChange={ (e) => onChange(e.target.value) } />
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
        </div>
    );
}

export default Counter;