import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
const NumberCount = ({ endValue }) => {
    const [animatedValue, setAnimatedValue] = useState(0);
    
    const animationProps = useSpring({
        from: { value: 0 },
        to: { value: animatedValue },
        config: { duration: 1000 },
        onRest: () => setAnimatedValue(endValue)
    });
    useEffect(() => {
        setAnimatedValue(endValue);
    }, [endValue]);
    return (
        <animated.span>
            {animationProps.value.interpolate((val) => Math.floor(val))}
        </animated.span>
    );
};

NumberCount.propTypes = {
    endValue: PropTypes.number
};

export default NumberCount;
