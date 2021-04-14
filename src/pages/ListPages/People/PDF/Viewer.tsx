import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './Document';

const PDFViwer = (): JSX.Element => {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <PdfDocument />
    </PDFViewer>
  );
};

export default PDFViwer;
