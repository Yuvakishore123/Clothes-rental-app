import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getOTP, submitOTP} from '../../redux/actions/actions';
function Useotp() {
  const [phoneNo, setphoneNo] = useState<string>('');
  const [otp, setotp] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const dispatch = useDispatch();
  const GETOTP = () => {
    dispatch(getOTP(phoneNo));
    console.log(phoneNo);
  };
  const handleLogin = () => {
    dispatch(submitOTP(phoneNo, otp));
    console.log(phoneNo, otp);
  };
  const handlephoneNumberChange = (value: string) => {
    setphoneNo(value);
  };
  const handlePasswordChange = (value: string) => {
    setotp(value);
  };
  return {
    phoneNo,
    otp,
    handlephoneNumberChange,
    handlePasswordChange,
    // handleBlur,
    GETOTP,
    handleLogin,
    // formik,
    passwordError,
    setPasswordError,
  };
}
export default Useotp;
