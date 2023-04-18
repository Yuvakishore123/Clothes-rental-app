import {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {getOTP, submitOTP} from '../../redux/actions/actions';
function Useotp() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid phonenumber').required('Required'),
    password: Yup.string().min(10).required('Please enter password'),
  });
  const [phoneNo, setphoneNo] = useState<string>('');
  const [otp, setotp] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const dispatch = useDispatch();
  const GETOTP = () => {
    dispatch(getOTP(phoneNo));
  };
  const handleLogin = () => {
    dispatch(submitOTP(phoneNo, otp));
  };
  const formik = useFormik({
    initialValues: {
      phoneNo: '',
      otp: '',
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });
  const handlephoneNumberChange = (value: string) => {
    setphoneNo(value);
    formik.setFieldValue('phoneNo', value);
  };
  const handlePasswordChange = (value: string) => {
    setotp(value);
    formik.setFieldValue('otp', value);
  };
  const handleBlur = (field: string) => {
    formik.setFieldTouched(field);
  };
  return {
    phoneNo,
    otp,
    handlephoneNumberChange,
    handlePasswordChange,
    handleBlur,
    GETOTP,
    handleLogin,
    formik,
    passwordError,
    setPasswordError,
  };
}
export default Useotp;
