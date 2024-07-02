import React, {
  useState,
  useCallback,
  // useEffect,
} from 'react';
import PropTypes from 'prop-types';

// import './styles.css';

type Props = {
  icon: React.ElementType;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ name, /*icon: Icon,*/ error = false, value = '', ...rest }: Props) {
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setHasFocus(false);

  }, [value]);

  return (
    <div
      className={ `
        input-container
        ${hasFocus ? 'has-focus' : ''}
        ${error ? 'has-error' : ''}
      ` }
    >
      {/* {Icon && <Icon size={ 24 } />} */}

      <input
        className="custom-input"
        name={ name }
        value={ value }
        onFocus={ handleFocus }
        onBlur={ handleBlur }
        { ...rest }
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  error: PropTypes.bool,
};

export default Input;
