import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as palette from '../../variables/Variables';
import { Button } from '../../styles/Button.styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-family: 'GothamPro';
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding-top: 40px;
  margin-bottom: 60px;
  color: ${props => props.theme.BUTTON_COLOR};
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Label = styled.label`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 280px;
  height: 40px;
  padding-bottom: 20px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.MAIN_COLOR};
  border-bottom: 1px solid ${props => props.theme.LINE_COLOR};
  transition: border-color 0.3s;
  background-color: rgba(117, 190, 218, 0);
  ::placeholder {
    color: ${props => props.theme.SECONDARY_COLOR};
  }
  &:focus {
    border-bottom-color: ${props => props.theme.MAIN_COLOR};
  }
  &.active {
    color: ${props => props.theme.MAIN_COLOR};
  }
  @media screen and (min-width: 768px) {
    width: 315px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AuthButton = styled(Button)`
background-color: rgb(252, 132, 45);
color: white;
  width: 182px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 32px;
    }
  }
`;



export const Text = styled.span`
  @media screen and (max-width: 767px) {
    font-size: 0.67em;
  }
  color: #e10000;
  font-size: 0.77em;
  margin-top: 5px;
  position: relative;
`;

export const Stub = styled.div`
  height: 20px;
  position: relative;
`;




export const RedirectLink = styled(Link)`
  font-family: 'GothamPro';
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.BUTTON_COLOR};
`;

export const isMediaMatch = () => {
  const mediaMatch = window.matchMedia('(max-width: 1279px)');
  return mediaMatch.matches ? 'email' : 'text';
};