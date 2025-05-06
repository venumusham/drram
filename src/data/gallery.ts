interface GalleryItem {
  before: string;
  after: string;
  procedure: string;
  patientDetails: string;
  description: string;
  category: string;
}

export const beforeAfterGallery: GalleryItem[] = [
  {
    before: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/3812751/pexels-photo-3812751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    procedure: 'Rhinoplasty',
    patientDetails: 'Female, 28 years old',
    description: 'This patient wanted to refine the tip of her nose and reduce a small dorsal hump. Dr. Prabhu performed a closed rhinoplasty with natural-looking results.',
    category: 'face'
  },
  {
    before: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/5699467/pexels-photo-5699467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    procedure: 'Tummy Tuck',
    patientDetails: 'Female, 35 years old',
    description: 'After having three children, this patient wanted to restore her pre-pregnancy abdomen. A full abdominoplasty with muscle tightening achieved her goals.',
    category: 'body'
  },
  {
    before: 'https://images.pexels.com/photos/6303563/pexels-photo-6303563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    procedure: 'Breast Augmentation',
    patientDetails: 'Female, 32 years old',
    description: 'Patient desired more fullness and balance in her breasts. Dr. Prabhu performed augmentation with anatomical implants for a natural appearance.',
    category: 'breast'
  },
  {
    before: 'https://images.pexels.com/photos/3851630/pexels-photo-3851630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    procedure: 'Eyelid Surgery',
    patientDetails: 'Male, 52 years old',
    description: 'This gentleman was concerned about looking tired due to excess upper eyelid skin. An upper blepharoplasty refreshed his appearance while maintaining a masculine look.',
    category: 'face'
  },
  {
    before: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/5699469/pexels-photo-5699469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    procedure: 'Liposuction',
    patientDetails: 'Female, 42 years old',
    description: 'Despite a healthy lifestyle, this patient had stubborn fat deposits on her flanks. Liposuction provided the contour she desired with minimal downtime.',
    category: 'body'
  },
  {
    before: 'https://images.pexels.com/photos/7446113/pexels-photo-7446113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/7446098/pexels-photo-7446098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    procedure: 'Breast Lift',
    patientDetails: 'Female, 45 years old',
    description: 'After weight loss and breastfeeding, this patient wanted to address sagging breasts. A mastopexy restored a more youthful position and shape.',
    category: 'breast'
  }
];