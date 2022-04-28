import './form-input.scss';

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="form-input">
      <input className="input" {...otherProps} />
      {label && (
        <label className={`${otherProps.value ? 'shrink' : ''} label`}>
          {label}
        </label>
      )}
    </div>
  );
}
