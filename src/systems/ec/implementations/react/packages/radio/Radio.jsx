import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Radio = ({
  id,
  disabled,
  helperText,
  invalid,
  invalidIconLabel,
  invalidText,
  label,
  hideLabel,
  name,
  placeholder,
  type,
  className,
  variant,
  value,
  checked,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-radio', {
    [`ecl-radio--${variant}`]: variant,
  });

  return (
    <div className="ecl-form-group ecl-form-group--radio">
      <label
        className={classnames('ecl-form-label', {
          'ecl-form-label--invalid': invalid,
          'ecl-form-label--hidden': hideLabel,
        })}
      >
        <input
          className="ecl-radio__input ecl-u-sr-only"
          type="radio"
          id={id}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
        />
        <span className="ecl-radio__label">{label}</span>
      </label>
      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}
      {helperText && <div className="ecl-help-block">{helperText}</div>}
    </div>
  );
};

Radio.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};

Radio.defaultProps = {
  variant: 'primary',
  type: 'submit',
  disabled: false,
  label: '',
  className: '',
};

export default Radio;
