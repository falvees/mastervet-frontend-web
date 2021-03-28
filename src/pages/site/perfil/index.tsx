import React from 'react';
// import Img from 'react-image';
// import { Calendar } from 'react-calendar';
import {
  Container,
  ContainerTopProfile,
  ImageProfile,
  DataProfile,
  ContainerCalendar,
  ContainerDetail,
  ContainerBody,
  ContainerTitle,
  EventsDetais,
  Avatar,
} from './styles';

const profile: React.FC = () => {
  return (
    <Container>
      <ContainerTopProfile>
        <ImageProfile>
          <img
            style={{ width: 145, height: 145, borderRadius: '50%' }}
            src="https://www.maxtotalalimentos.com.br/img/seo/10/455/doenca-do-carrapato-em-cachorro-filhote-que-e-e-como-tratar.jpg"
            alt="Perfil"
          />
        </ImageProfile>

        <DataProfile>
          <p>Mel</p>
          <p>40Kg</p>
          <p>3 Anos</p>
        </DataProfile>
      </ContainerTopProfile>
      <ContainerBody>
        <ContainerCalendar>
          <ContainerTitle>
            {' '}
            <p>Calendario</p>
            {/* <Calendar style={{ height: 350, width: '80%', marginTop: 45 }} /> */}
          </ContainerTitle>
        </ContainerCalendar>
        <ContainerDetail>
          <ContainerTitle>
            {' '}
            <p>Eventos</p>
          </ContainerTitle>
          <EventsDetais>
            <Avatar>
              <img
                style={{ width: 45, height: 45, borderRadius: '50%' }}
                src="https://cdn0.iconfinder.com/data/icons/pet-lover/64/shower-dog-pets-cleaning-512.png"
                alt="Perfil"
              />
            </Avatar>
          </EventsDetais>
          <EventsDetais>
            <Avatar>
              <img
                style={{ width: 45, height: 45, borderRadius: '50%' }}
                src="https://cdn0.iconfinder.com/data/icons/pet-lover/64/shower-dog-pets-cleaning-512.png"
                alt="Perfil"
              />
            </Avatar>
          </EventsDetais>
          <EventsDetais>
            <Avatar>
              <img
                style={{ width: 45, height: 45, borderRadius: '50%' }}
                src="https://cdn0.iconfinder.com/data/icons/pet-lover/64/shower-dog-pets-cleaning-512.png"
                alt="Perfil"
              />
            </Avatar>
          </EventsDetais>
        </ContainerDetail>
        <ContainerCalendar>
          <ContainerTitle>
            {' '}
            <p>Galeria</p>
          </ContainerTitle>
        </ContainerCalendar>
      </ContainerBody>
    </Container>
  );
};

export default profile;
