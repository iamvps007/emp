import Button from '../../common/button';
import InputBox from '../../common/input-box';
import './login.css';

const Login = () => {

    return(
        <div className="login-box">
            <h1 style={{
                textAlign:'center'
            }}>
                Login
            </h1>
            <InputBox  value={""} placeHolder='Email' onChange={() => {

            } } />
            <InputBox  value={""} placeHolder='Password' onChange={() => {

} } />

            <Button
            buttonName={"Login"}
            onClick={() => {}}
            ></Button>
        </div>
    );
}

export default Login;