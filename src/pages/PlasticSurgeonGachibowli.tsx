import React from 'react';
import LocalPlasticSurgeryPage from '../components/LocalPlasticSurgeryPage';

const PlasticSurgeonGachibowli: React.FC = () => (
  <LocalPlasticSurgeryPage
    area="Gachibowli"
    titleArea="Gachibowli, Hyderabad"
    slug="plastic-surgeon-gachibowli"
    proximity="Dr Ramprabhu Clinic is in Kondapur, close to Gachibowli and convenient for patients around the Financial District, Nanakramguda, and nearby Hyderabad tech corridors."
    nearbyAreas={['Gachibowli', 'Kondapur', 'Financial District', 'Nanakramguda', 'Madhapur', 'Hitech City']}
  />
);

export default PlasticSurgeonGachibowli;
