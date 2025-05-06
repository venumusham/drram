interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
  rating: number;
  procedure: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    avatar: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Dr. Ram Prabhu transformed not just my appearance but my confidence. His attention to detail and genuine care for achieving natural results made my rhinoplasty experience exceptional. The entire team was supportive throughout my journey.',
    rating: 5,
    procedure: 'Rhinoplasty'
  },
  {
    name: 'Rajesh Kumar',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'After significant weight loss, I was left with excess skin that affected my quality of life. Dr. Prabhu\'s body contouring procedure gave me back my confidence. The results exceeded my expectations, and the recovery was smooth with excellent follow-up care.',
    rating: 5,
    procedure: 'Body Contouring'
  },
  {
    name: 'Anita Reddy',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'I hesitated for years before deciding on eyelid surgery. Dr. Prabhu and his team made me feel comfortable from consultation through recovery. The procedure took years off my appearance while maintaining a completely natural look.',
    rating: 5,
    procedure: 'Eyelid Surgery'
  },
  {
    name: 'Vikram Singh',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'After researching many surgeons, I chose Dr. Ram Prabhu for my hair transplant procedure. His expertise in creating a natural hairline and the comprehensive aftercare program were outstanding. I couldn\'t be happier with the results.',
    rating: 5,
    procedure: 'Hair Transplant'
  }
];