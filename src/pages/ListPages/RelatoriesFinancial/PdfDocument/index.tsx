import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

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
    marginRight: 30,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  collumn: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
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
  { id: '1', entrada: 20, saida: 15 },
  { id: '2', entrada: 20, saida: 25 },
  { id: '3', entrada: 30, saida: 15 },
  { id: '4', entrada: 20, saida: 35 },
  { id: '5', entrada: 50, saida: 15 },
  { id: '6', entrada: 20, saida: 55 },
  { id: '7', entrada: 40, saida: 15 },
  { id: '8', entrada: 20, saida: 55 },
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
          <Text style={styles.title}>RELATÓRIO FINANCEIRO</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>ID</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>ENTRADA</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>SAÍDA</Text>
          </View>
          <View style={styles.collumn}>
            <Text style={styles.subTitle}>SALDO</Text>
          </View>
        </View>

        {dummyData.map(data => {
          return (
            <View style={styles.row}>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>{data.id}</Text>
              </View>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>
                  {formatCurrency.format(data.entrada)}
                </Text>
              </View>
              <View key={data.id} style={styles.collumn}>
                <Text style={styles.description}>
                  {formatCurrency.format(data.saida)}
                </Text>
              </View>
              <View key={data.id} style={styles.collumn}>
                <Text
                  style={[
                    data.entrada - data.saida < 0
                      ? styles.descriptionNegative
                      : styles.description,
                  ]}
                >
                  {formatCurrency.format(data.entrada - data.saida)}
                </Text>
              </View>
            </View>
          );
        })}
      </Page>
    </Document>
  );
};

export default PdfDocument;
