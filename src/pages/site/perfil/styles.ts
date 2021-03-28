import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Grid)`
  display: block;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

export const ContainerBody = styled(Grid)`
  display: flex;
`;

export const ContainerTitle = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  height: 45px;
  width: 100%;
  font-weight: bold;
  font-size: 1.2em;
`;

export const ContainerTopProfile = styled(Grid)`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #17a0ae;
  position: relative;
`;

export const ContainerCalendar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
  background-color: #fff;
  margin-top: 120px;
  padding: 15px;
  top: 300px;
  }
`;

export const ContainerDetail = styled.div`
  display: flex;
  width: 40%;
  height: 300px;
  background-color: #fff;
  margin-top: 120px;
  top: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageProfile = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  left: 30px;
`;

export const DataProfile = styled.div`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  left: 210px;
  padding: 20px;
  & p:first-child {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  bottom: 0;
  left: 30px;
`;

export const EventsDetais = styled.div`
  width: 80%;
  height: 70px;
  margin-top: 10px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 20%);
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-top: 10px;
`;

export const Form = styled.form`
  text-align: center;
  width: 60%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
