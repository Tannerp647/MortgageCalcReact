import './InputBox.css';

function InputBox(props) {
    return (<div className="input_box">
        <h2>{props.title}</h2>
        <input type="number" placeholder={props.box} />
    </div>)
};

export default InputBox;