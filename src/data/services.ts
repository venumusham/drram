interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  procedures?: string[];
}

interface ServiceCategory {
  label: string;
  services: Service[];
}

interface ServiceHighlights {
  [key: string]: ServiceCategory;
}

export const serviceHighlights: ServiceHighlights = {
  face: {
    label: 'Face',
    services: [
      {
        id: 'facelift',
        title: 'Face Procedures',
        description: 'Comprehensive facial rejuvenation procedures to enhance your natural beauty.',
        image: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        procedures: [
          'Facelift Surgery',
          'Rhinoplasty',
          'Blepharoplasty',
          'Otoplasty',
          'Chin Surgery',
          'Facial Fat Grafting'
        ]
      }
    ]
  },
  body: {
    label: 'Body',
    services: [
      {
        id: 'body-contouring',
        title: 'Body Contouring',
        description: 'Advanced body sculpting procedures to help you achieve your desired shape.',
        image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        procedures: [
          'Liposuction',
          'Tummy Tuck',
          'Body Lift',
          'Arm Lift',
          'Thigh Lift',
          'Post-Bariatric Surgery'
        ]
      }
    ]
  },
  breast: {
    label: 'Breast',
    services: [
      {
        id: 'breast-procedures',
        title: 'Breast Procedures',
        description: 'Comprehensive breast enhancement and reconstruction procedures.',
        image: 'https://images.pexels.com/photos/9929202/pexels-photo-9929202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        procedures: [
          'Breast Augmentation',
          'Breast Lift',
          'Breast Reduction',
          'Breast Reconstruction',
          'Male Breast Reduction',
          'Breast Implant Revision'
        ]
      }
    ]
  },
  reconstructive: {
    label: 'Reconstructive',
    services: [
      {
        id: 'reconstructive',
        title: 'Reconstructive Surgery',
        description: 'Specialized procedures to restore form and function.',
        image: 'https://images.pexels.com/photos/7446145/pexels-photo-7446145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        procedures: [
          'Skin Cancer Reconstruction',
          'Hand Surgery',
          'Microsurgery',
          'Trauma Reconstruction',
          'Burn Reconstruction',
          'Scar Revision'
        ]
      }
    ]
  }
};

export const getAllServices = () => {
  const allServices: Service[] = [];
  
  Object.values(serviceHighlights).forEach(category => {
    category.services.forEach(service => {
      allServices.push(service);
    });
  });
  
  return allServices;
};