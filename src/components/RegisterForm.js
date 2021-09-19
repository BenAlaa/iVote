import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {handleAddUser} from '../Store/actions/users';
import Input from './Input';
import Button from './Button';
import Error from './Error';
import AvatarList from './AvatarList';


const Register = (props) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    avatarURL: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: '',
    avatarURL: '',
    global: ''
  })

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({...errors, [name]: '', global: ''})
    const updatedData = {...data};
    updatedData[name] = value;
    setData(updatedData)
  };
  const validateData = () => {
    const updateErrors = {...errors}
    if(!data.email) updateErrors.email = "Email not allowed to be empty!"
    if(!data.name) updateErrors.name = "Name not allowed to be empty!"
    if(!data.password) updateErrors.password = "Password not allowed to be empty!"
    if(!data.avatarURL) updateErrors.avatarURL = "You Must Select Avatar!"

    setErrors(updateErrors);

    return updateErrors.email === '' 
      && updateErrors.password === ''
      && updateErrors.name === ''
      && updateErrors.avatarURL === ''
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateData();
    if(isValid) {
      dispatch(handleAddUser({...data}))
    }
  }
  return ( 
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full p-2 rounded-lg text-white text-center m-4 font-semibold text-xl shadow-lg bg-yellow-500">Sign Up</div>
      <form className="w-full flex flex-col" onSubmit={handleSubmit}>
        <AvatarList
          id="avatarURL"
          name="avatarURL"
          label="Avatar"
          placeholder="Choose your Avatar"
          onChange={handleChange}
          value={data.avatarURL}
          error={errors.avatarURL}
        />
        <Input
          id="name"
          name="name"
          label="Name"
          error={errors.name}
          placeholder="Please Enter your Name"
          type="text"
          value={data.name}
          onChange={handleChange}
        />
        <Input
          id="email"
          name="email"
          label="Email"
          error={errors.email}
          placeholder="Please Enter your Email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          name="password"
          label="Password"
          error={errors.password}
          placeholder="Please Enter your password"
          type="password"
          value={data.paswword}
          onChange={handleChange}
        />
        <hr className=" m-4"/>
        {errors.global && <Error error={errors.global}/>}
        <Button onClick={handleSubmit} text="Sign Up" type="submit" />
      </form>

    </div>
   );
}
 
export default Register;