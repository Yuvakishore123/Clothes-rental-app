import {SetStateAction, useState} from 'react';
const OwnerEditProfileCustomHook = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState('');
  const [value, setValue] = useState('');
  const handleRadioPress = (newValue: SetStateAction<string>) => {
    if (value !== newValue) {
      setValue(newValue);
    }
  };
  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setTelephone('');
    setGender('');
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    gender,
    setGender,
    value,
    setValue,
    handleRadioPress,
    handleReset,
  };
};
export default OwnerEditProfileCustomHook;
