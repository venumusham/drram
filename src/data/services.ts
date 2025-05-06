interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
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
        title: 'Facelift',
        description: 'Restore a more youthful appearance by reducing sagging and wrinkles in the face and neck.',
        image: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'rhinoplasty',
        title: 'Rhinoplasty',
        description: 'Reshape the nose to improve both appearance and function with this precision procedure.',
        image: 'https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'blepharoplasty',
        title: 'Eyelid Surgery',
        description: 'Rejuvenate tired-looking eyes by removing excess skin and fat from the upper and lower eyelids.',
        image: 'https://images.pexels.com/photos/5327916/pexels-photo-5327916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  body: {
    label: 'Body',
    services: [
      {
        id: 'liposuction',
        title: 'Liposuction',
        description: 'Remove unwanted fat deposits from specific areas to improve body contours and proportions.',
        image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'tummytuck',
        title: 'Tummy Tuck',
        description: 'Achieve a firmer, flatter abdomen by removing excess skin and fat and tightening muscles.',
        image: 'https://images.pexels.com/photos/3757961/pexels-photo-3757961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'bodylift',
        title: 'Body Lift',
        description: 'Transform your body contour with this procedure that removes excess skin after major weight loss.',
        image: 'https://images.pexels.com/photos/3843970/pexels-photo-3843970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  breast: {
    label: 'Breast',
    services: [
      {
        id: 'augmentation',
        title: 'Breast Augmentation',
        description: 'Enhance the size and shape of your breasts with implants or fat transfer for a natural look.',
        image: 'https://images.pexels.com/photos/9929202/pexels-photo-9929202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'reduction',
        title: 'Breast Reduction',
        description: 'Alleviate discomfort and improve proportion by reducing overly large breasts.',
        image: 'https://images.pexels.com/photos/8942000/pexels-photo-8942000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'lift',
        title: 'Breast Lift',
        description: 'Restore a more youthful appearance by lifting and reshaping sagging breasts.',
        image: 'https://images.pexels.com/photos/6823217/pexels-photo-6823217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  nonsurgical: {
    label: 'Non-Surgical',
    services: [
      {
        id: 'botox',
        title: 'Botox & Fillers',
        description: 'Reduce wrinkles and restore volume with these quick, effective injectable treatments.',
        image: 'https://images.pexels.com/photos/7479816/pexels-photo-7479816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'laser',
        title: 'Laser Treatments',
        description: 'Improve skin tone, texture, and pigmentation with advanced laser technology.',
        image: 'https://images.pexels.com/photos/7446145/pexels-photo-7446145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 'chemical',
        title: 'Chemical Peels',
        description: 'Reveal smoother, more radiant skin with treatments that remove damaged outer layers.',
        image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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