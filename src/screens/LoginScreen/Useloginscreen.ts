import {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {Login} from '../../redux/actions/actions';
function Useformik() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8)
      .required('Please enter password')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain * characters and uppercase letters',
      ),
  });

  const handleLogin = () => {
    dispatch(Login(email, password));
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });

  const handleEmailChange = (value: string) => {
    setEmail(value);
    formik.setFieldValue('email', value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    formik.setFieldValue('password', value);
  };

  const handleBlur = (field: string) => {
    formik.setFieldTouched(field);
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleBlur,
    formik,
    passwordError,
    setPasswordError,
    handleLogin,
  };
}
export default Useformik;
