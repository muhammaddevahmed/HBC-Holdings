import './Input.css';

export default function Input({ 
  label, 
  error, 
  required, 
  className = '', 
  containerClassName = '',
  ...props 
}) {
  const inputClasses = [
    'input-field',
    error ? 'error' : '',
    className
  ].join(' ').trim();

  return (
    <div className={`input-container ${containerClassName}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="input-error-message">{error}</p>
      )}
    </div>
  );
}

export function Textarea({ 
  label, 
  error, 
  required, 
  className = '', 
  containerClassName = '',
  ...props 
}) {
  const textareaClasses = [
    'textarea-field',
    error ? 'error' : '',
    className
  ].join(' ').trim();

  return (
    <div className={`input-container ${containerClassName}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <textarea
        className={textareaClasses}
        rows={4}
        {...props}
      />
      {error && (
        <p className="input-error-message">{error}</p>
      )}
    </div>
  );
}

export function Select({ 
  label, 
  error, 
  required, 
  options = [], 
  className = '', 
  containerClassName = '',
  ...props 
}) {
  const selectClasses = [
    'select-field',
    error ? 'error' : '',
    className
  ].join(' ').trim();

  return (
    <div className={`input-container ${containerClassName}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <select
        className={selectClasses}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="input-error-message">{error}</p>
      )}
    </div>
  );
}
