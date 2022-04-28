import './button.scss';


const CustomButton = ({ label, buttonType = '', ...others }) => {
    return (
        <button className={`button-container ${buttonType}`} {...others} >
            {label}
        </button>
    )
}

export default CustomButton;