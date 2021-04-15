import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

import { borderStyle } from 'polished';
import formatCurrency from '../../../../utils/formatCurrency';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 30,
    position: 'relative',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    marginHorizontal: 30,
    // marginBottom: 5,
    borderBottom: 1,
    borderStyle: 'solid',
  },
  collumn: {
    display: 'flex',
    flex: 1,
    // width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: '0 10px',
    // borderRight: 1,
    borderStyle: 'solid',
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

const dummyData = [
  {
    id: '1',
    data: '15/04/2021',
    cliente: 'Kênia Borges ',
    plano: 'Light',
    devido: 20,
    pago: 15,
    situacao: 'aberto',
  },
  {
    id: '2',
    data: '15/04/2021',
    cliente: 'Felipe Fonseca Alves Ribeiro',
    plano: 'Light',
    devido: 20,
    pago: 25,
    situacao: 'aberto',
  },
  {
    id: '3',
    data: '15/04/2021',
    cliente: 'Lucilton Vieira',
    plano: 'Master',
    devido: 30,
    pago: 15,
    situacao: 'aberto',
  },
  {
    id: '4',
    data: '15/04/2021',
    cliente: 'Juliano Nogueira',
    plano: 'Master',
    devido: 20,
    pago: 35,
    situacao: 'aberto',
  },
  {
    id: '5',
    data: '15/04/2021',
    cliente: 'Gustavo Pereira',
    plano: 'Master',
    devido: 50,
    pago: 15,
    situacao: 'aberto',
  },
  {
    id: '6',
    data: '15/04/2021',
    cliente: 'Joao Silva Borges',
    plano: 'Light',
    devido: 20,
    pago: 55,
    situacao: 'aberto',
  },
  {
    id: '7',
    data: '15/04/2021',
    cliente: 'Maria Helena Santana',
    plano: 'Light',
    devido: 40,
    pago: 15,
    situacao: 'aberto',
  },
  {
    id: '8',
    data: '15/04/2021',
    cliente: 'Joaquim Santos Silva',
    plano: 'Light',
    devido: 20,
    pago: 55,
    situacao: 'aberto',
  },
];

const logo =
  'https://winmagictoys.com/wp-content/uploads/2018/09/dummy-logo.png';

const PdfDocument = (): JSX.Element => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={logo} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Movimentação Financeira</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Data</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Cliente</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Plano</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Vr Devido</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Vr Pago</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>Situação</Text>
          </View>
        </View>

        {dummyData.map(data => {
          return (
            <View style={styles.row}>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>{data.data}</Text>
              </View>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>{data.cliente}</Text>
              </View>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>{data.plano}</Text>
              </View>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>
                  {formatCurrency.format(data.devido)}
                </Text>
              </View>

              <View key={data.id} style={styles.collumn}>
                <Text
                  style={[
                    data.devido - data.pago < 0
                      ? styles.descriptionNegative
                      : styles.description,
                  ]}
                >
                  {formatCurrency.format(data.devido - data.pago)}
                </Text>
              </View>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>{data.situacao}</Text>
              </View>
            </View>
          );
        })}
      </Page>
    </Document>
  );
};

export default PdfDocument;
