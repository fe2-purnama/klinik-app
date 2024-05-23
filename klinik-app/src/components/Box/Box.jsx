import "./Box.css";

const Box = ({ icon, text, isActive }) => {
    return (
        <div className={`box flex flex-col items-center ${isActive ? 'active' : ''}`}>
            <i className={`fas fa-${icon}`}></i>
            <span className="text-center">{text}</span>
        </div>
    );
};

export default Box;