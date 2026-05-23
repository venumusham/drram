import React from 'react';
import LocalPlasticSurgeryPage from '../components/LocalPlasticSurgeryPage';

const PlasticSurgeonHitechCity: React.FC = () => (
  <LocalPlasticSurgeryPage
    area="Hitech City"
    titleArea="Hitech City, Hyderabad"
    slug="plastic-surgeon-hitech-city"
    proximity="Dr Ramprabhu Clinic is located in Kondapur, a nearby clinic option for Hitech City patients seeking direct plastic surgery consultation without relying only on corporate hospital listings."
    nearbyAreas={['Hitech City', 'Kondapur', 'Madhapur', 'Gachibowli', 'Jubilee Hills', 'KPHB']}
  />
);

export default PlasticSurgeonHitechCity;
