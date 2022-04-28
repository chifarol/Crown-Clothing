import './input-comp.scss';

const FormInput = ({ label, name, ...others }) => {
    return (
        <div className="group">
            <input className="form-input" name={name} {...others} />
            {label && (<label className={`${others.value.length ? 'shrink' : ''} form-input-label`} for={name}>{label}</label>)}

        </div>
    )
}

export default FormInput;