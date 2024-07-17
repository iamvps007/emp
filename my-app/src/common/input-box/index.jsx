
const InputBox = ({placeHolder = "", inputType="text", value, onChange}) => {
    return(
        <input placeholder={placeHolder}
        value={value}
        onChange={onChange}
        type={inputType}
        style={{
            borderRadius:'12px',
            color:'black',
            borderColor:'grey',
            fontSize:'20px',
            padding:10,
            margin:4,
            width:'90%',
            textAlign:'center',
            alignContent:'center',
            
        }}>
        </input>
    )
}

export default InputBox;