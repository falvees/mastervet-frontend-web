import React, { useEffect, useState } from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

import formatCurrency from '../../../../utils/formatCurrency';
import peopleApi, { PropsPeople } from '../../../../services/PeopleApi';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 30,
    position: 'relative',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 30,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  collumn: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    position: 'absolute',
    left: 30,
  },
  logoImage: {
    height: 50,
    width: 80,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
  },
  descriptionNegative: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});

const logo =
  'https://winmagictoys.com/wp-content/uploads/2018/09/dummy-logo.png';

const PdfDocument = (): JSX.Element => {
  const [listUsers, setListUsers] = useState<PropsPeople[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    peopleApi
      .getAll()
      .then(result => {
        console.log(result);
        setListUsers(result.data.response);
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div />;
  }

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={logo} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Relatório de usuários</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Nome</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>CPF</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Plano</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Contato</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Situação</Text>
          </View>
        </View>

        {listUsers.map(data => {
          return (
            <View style={styles.row} key={data.people_id}>
              <View style={styles.collumn}>
                <Text style={styles.description}>{data.name}</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>128.235.756-50</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>Master Premium</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>(34) 99120-1229</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>Ativado</Text>
              </View>
            </View>
          );
        })}
        {listUsers.map(data => {
          return (
            <View style={styles.row} key={data.people_id}>
              <View style={styles.collumn}>
                <Text style={styles.description}>{data.name}</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>128.235.756-50</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>Master Premium</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>(34) 99120-1229</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.description}>Ativado</Text>
              </View>
            </View>
          );
        })}
      </Page>
    </Document>
  );
};

export default PdfDocument;
