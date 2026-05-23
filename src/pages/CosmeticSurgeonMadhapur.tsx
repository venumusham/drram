import React from 'react';
import LocalPlasticSurgeryPage from '../components/LocalPlasticSurgeryPage';

const CosmeticSurgeonMadhapur: React.FC = () => (
  <LocalPlasticSurgeryPage
    area="Madhapur"
    titleArea="Madhapur, Hyderabad"
    slug="cosmetic-surgeon-madhapur"
    variant="cosmetic"
    proximity="Dr Ramprabhu Clinic is in Kondapur, close to Madhapur and convenient for patients seeking cosmetic surgery consultation near the Hitech City and Jubilee Hills corridor."
    nearbyAreas={['Madhapur', 'Kondapur', 'Hitech City', 'Jubilee Hills', 'Gachibowli', 'Kavuri Hills']}
  />
);

export default CosmeticSurgeonMadhapur;
