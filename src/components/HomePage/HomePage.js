import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {addItems} from 'redux/auth/authSlice';
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  ButtonWrapper,
  AuthButton,
  Text,
  Stub,
  
  isMediaMatch,
} from './HomePage.styled';



export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
   
    onSubmit: async (values, { resetForm }) => {
      await dispatch(addItems(values));
      navigate('/novelties');
      resetForm();
    },
  });

  return (
    <Wrapper>
      <Title>Реєстрація</Title>
      <Form onSubmit={formik.handleSubmit}>
       

        <Label htmlFor="email"></Label>
        <Input
          placeholder="Пошта *"
          id="email"
          name="email"
          type={isMediaMatch()}
          onChange={formik.handleChange}
          value={formik.values.email}
          autoComplete="email"
        />
        {formik.touched.email && Boolean(formik.errors.email) ? (
          <Text>{formik.touched.email && formik.errors.email}</Text>
        ) : (
          <Stub />
        )}

        <Label htmlFor="password" style={{ position: 'relative' }}>
          <Input
            placeholder="Пароль *"
            id="password"
            name="password"
            type={ 'password'}
            onChange={formik.handleChange}
            value={formik.values.password.trim()}
            autoComplete="current-password"
          />
          
        </Label>
        {formik.touched.password && Boolean(formik.errors.password) ? (
          <Text>{formik.touched.password && formik.errors.password}</Text>
        ) : (
          <Stub />
        )}

        <ButtonWrapper>
       
          <AuthButton type="submit" >Вхід</AuthButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}