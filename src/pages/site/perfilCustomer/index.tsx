import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { FiChevronRight, FiCamera } from 'react-icons/fi';
import {
  Container,
  ContainerTopProfile,
  ImageProfile,
  DataProfile,
  ContainerDetail,
  ContainerBody,
  EventsDetais,
  Avatar,
  ContainerVourchers,
  PetsDetails,
  Form,
  ContainerPets,
} from './styles';
import PeopleApi from '../../../services/PeopleApi';
import PlansBenfitsApi from '../../../services/PlansBenfitsApi';
import OwnerPetsApi from '../../../services/OwnerPetsApi';

interface PreviewImage {
  file: File | null;
  imageUrl: string;
  image: string;
}

interface arrayPeoples {
  name: string;
  cpf_cgc: string;
  city: string;
  state: string;
}
interface arrayBenefits {
  plan_id: string;
  benefit_id: {
    benefit_id: string;
    description: string;
    status: string;
    icon: string;
  };
  quantity: string;
  status: string;
}
interface arrayPets {
  pet_id: string;
  people_id: string;
  pet_name: string;
  picture_face: string;
}

const ProfileCustomer: React.FC = () => {
  // const id = 6;
  const [isCustomer, setIsCustomers] = useState<arrayPeoples[]>([]);
  const [isBenefits, setIsBenefits] = useState<arrayBenefits[]>([]);
  const [isPets, setIsPets] = useState<arrayPets[]>([]);
  const [previewImage, setPreviewImage] = useState<PreviewImage>({
    file: null,
    imageUrl: '',
    image: '',
  });

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>): unknown => {
    if (!event.target.files) {
      return;
    }
    const selectedImage = Array.from(event.target.files);
    const imageUrl = URL.createObjectURL(selectedImage[0]);
    setPreviewImage({
      file: selectedImage[0],
      imageUrl,
      image: selectedImage[0].name,
    });
    console.log(previewImage);
  };

  const listCustomer = useCallback(() => {
    PeopleApi.get(6)
      .then(result => {
        setIsCustomers(result.data.response);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const listPets = useCallback(() => {
    OwnerPetsApi.get('6')
      .then(result => {
        setIsPets(result.data.response);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  const listPlansBenefits = useCallback(() => {
    PlansBenfitsApi.get(2)
      .then(result => {
        setIsBenefits(result.data.response);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    listCustomer();
    listPlansBenefits();
    listPets();
  }, [listCustomer, listPets, listPlansBenefits]);

  return (
    <Container>
      <Form noValidate autoComplete="off">
        <ContainerTopProfile>
          <ImageProfile className="personal-image">
            <label className="label" htmlFor="firstName">
              <input
                type="file"
                accept="image/png,image/jpeg"
                name="photoProfile"
                onChange={handleSelectImage}
              />
              <figure className="personal-figure">
                <img
                  src="https://i.pinimg.com/564x/92/a8/bc/92a8bc8930210575afc00928edfb3981.jpg"
                  alt="Perfil"
                  className="personal-avatar"
                />
                <figcaption className="personal-figcaption">
                  <FiCamera />
                  {/* <img
                    src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
                    alt="sdf"
                  /> */}
                </figcaption>
              </figure>
            </label>
          </ImageProfile>

          {/* <div className="personal-image">
            <label className="label" htmlFor="l">
              <input type="file" />
              <figure className="personal-figure">
                <img
                  src="https://avatars1.githubusercontent.com/u/11435231?s=460&v=4"
                  className="personal-avatar"
                  alt="avatar"
                />
                <figcaption className="personal-figcaption">
                  <img
                    src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
                    alt="j"
                  />
                </figcaption>
              </figure>
            </label>
          </div> */}

          <DataProfile>
            {isCustomer &&
              isCustomer.map(row => {
                return (
                  <>
                    <p style={{ textAlign: 'left' }}>{row.name}</p>
                    <p style={{ textAlign: 'left' }}>{row.cpf_cgc}</p>
                    <p style={{ textAlign: 'left' }}>{row.city}</p>
                  </>
                );
              })}
          </DataProfile>
        </ContainerTopProfile>
        <ContainerBody>
          <ContainerDetail>
            <p>Eventos</p>
            <EventsDetais
              style={{ justifyContent: 'space-between', padding: '0 10px' }}
            >
              <Avatar
                style={{ width: 45, height: 45, borderRadius: '50%' }}
                src="https://cdn0.iconfinder.com/data/icons/pet-lover/64/shower-dog-pets-cleaning-512.png"
                alt="Perfil"
              />
              <p>Banho e Tosa</p>
              <FiChevronRight />
            </EventsDetais>
            <EventsDetais
              style={{ justifyContent: 'space-between', padding: '0 10px' }}
            >
              <Avatar
                style={{ width: 45, height: 45, borderRadius: '50%' }}
                src="https://cdn0.iconfinder.com/data/icons/pet-lover/64/shower-dog-pets-cleaning-512.png"
                alt="Perfil"
              />
              <p>Cirurgia de Alto Risco</p>
              <FiChevronRight />
            </EventsDetais>
            <EventsDetais
              style={{ justifyContent: 'space-between', padding: '0 10px' }}
            >
              <Avatar
                style={{ width: 45, height: 45, borderRadius: '50%' }}
                src="https://cdn0.iconfinder.com/data/icons/pet-lover/64/shower-dog-pets-cleaning-512.png"
                alt="Perfil"
              />
              <p>Vacina</p>
              <FiChevronRight />
            </EventsDetais>
          </ContainerDetail>
          <hr />
          <ContainerVourchers>
            <p>Vouchers</p>
            {isBenefits &&
              isBenefits.map(row => {
                return (
                  <EventsDetais style={{ width: '46%', margin: '0 2%' }}>
                    <Avatar
                      src={`../../../assets/icons/${row.benefit_id.icon}`}
                      alt={row.benefit_id.icon.split('.')[0]}
                    />
                    <p>
                      {row.benefit_id.description}
                      <br />
                      <span>{row.quantity}</span>
                    </p>
                  </EventsDetais>
                );
              })}
          </ContainerVourchers>
          <hr />
          <ContainerPets>
            <p>Meus Pets</p>
            {isPets &&
              isPets.map(row => {
                return (
                  <PetsDetails
                    style={{
                      justifyContent: 'space-between',
                      padding: '0 10px',
                      backgroundColor: '#F9D448',
                      color: '#fff',
                    }}
                  >
                    <Avatar
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        border: '2px solid #fff',
                      }}
                      src={`../../../assets/petPictures/${row.picture_face}`}
                      alt="ProfilePets"
                    />

                    <p style={{ fontWeight: 700 }}>
                      {row.pet_name}
                      <br />
                      <span style={{ fontWeight: 400, fontSize: 16 }}>
                        2 Anos
                      </span>
                    </p>
                    <FiChevronRight />
                  </PetsDetails>
                );
              })}
          </ContainerPets>
        </ContainerBody>
      </Form>
    </Container>
  );
};

export default ProfileCustomer;
