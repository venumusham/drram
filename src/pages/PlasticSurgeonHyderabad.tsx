import React from 'react';
import LocalPlasticSurgeryPage from '../components/LocalPlasticSurgeryPage';

const PlasticSurgeonHyderabad: React.FC = () => (
  <LocalPlasticSurgeryPage
    area="Hyderabad"
    titleArea="Hyderabad"
    slug="plastic-surgeon-hyderabad"
    proximity="Dr Ramprabhu Clinic is located in Kondapur, Hyderabad, and serves patients from Kondapur, Gachibowli, Hitech City, Madhapur, Jubilee Hills, Financial District, and other Hyderabad neighborhoods."
    nearbyAreas={['Kondapur', 'Gachibowli', 'Hitech City', 'Madhapur', 'Jubilee Hills', 'Financial District', 'Hyderabad']}
  />
);

export default PlasticSurgeonHyderabad;
