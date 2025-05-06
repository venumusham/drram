interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQ[] = [
  // General
  {
    question: "What should I expect during my initial consultation?",
    answer: "Your initial consultation is a comprehensive discussion about your goals and concerns. Dr. Prabhu will review your medical history, examine the areas of concern, discuss suitable options, and create a personalized treatment plan. You'll have the opportunity to ask questions and view before/after photos of similar procedures. The consultation typically lasts 45-60 minutes.",
    category: "general"
  },
  {
    question: "How do I prepare for my plastic surgery procedure?",
    answer: "Preparation depends on the specific procedure, but general guidelines include: stopping smoking at least 4 weeks before surgery, avoiding blood-thinning medications and supplements as directed, arranging for transportation and help at home after surgery, following pre-operative instructions regarding fasting, and preparing your recovery space with necessary supplies. Dr. Prabhu's team will provide detailed pre-operative instructions specific to your procedure.",
    category: "general"
  },
  {
    question: "What are Dr. Prabhu's qualifications?",
    answer: "Dr. M. Ram Prabhu is a board-certified plastic surgeon with over 20 years of experience. He completed his medical degree with honors, followed by specialized training in plastic and reconstructive surgery at prestigious institutions. He regularly participates in continuing education and has published numerous articles in medical journals. Dr. Prabhu is an active member of several professional organizations including the Association of Plastic Surgeons of India.",
    category: "general"
  },
  {
    question: "Do you offer financing options for procedures?",
    answer: "Yes, we understand that plastic surgery is a significant investment. We offer several financing options through reputable healthcare financing companies. During your consultation, our patient coordinator can discuss payment plans, credit options, and financing terms to help make your procedure more affordable. We also accept major credit cards and can provide information about medical tax deductions when applicable.",
    category: "general"
  },
  // Procedures
  {
    question: "How long does a facelift procedure take and what is the recovery time?",
    answer: "A facelift typically takes 3-4 hours to perform, depending on the extent of the procedure. Recovery involves initial swelling and bruising that significantly improves within 2 weeks. Most patients can return to social activities after 2-3 weeks, though complete healing may take several months. Results are long-lasting, typically 8-10 years, though the aging process continues naturally.",
    category: "procedures"
  },
  {
    question: "What breast implant options are available?",
    answer: "We offer a variety of breast implant options including silicone gel, cohesive gel ('gummy bear'), and saline implants in different shapes (round or anatomical), sizes, and projections. Each type has distinct advantages, and Dr. Prabhu will help you choose the implant that best suits your body type, lifestyle, and aesthetic goals during your consultation, where you can also view and feel sample implants.",
    category: "procedures"
  },
  {
    question: "What is the difference between a mini tummy tuck and a full abdominoplasty?",
    answer: "A mini tummy tuck addresses concerns limited to the lower abdomen below the navel, involving a shorter incision and less extensive tissue removal. A full abdominoplasty treats the entire abdomen from ribcage to pubic area, tightening muscles throughout, removing more excess skin, and often repositioning the navel. Recovery for a mini tuck is generally faster (1-2 weeks) compared to a full procedure (2-4 weeks). Dr. Prabhu will recommend the appropriate technique based on your anatomy and goals.",
    category: "procedures"
  },
  {
    question: "Are results from non-surgical treatments comparable to surgery?",
    answer: "Non-surgical treatments like Botox, fillers, and laser therapies can produce excellent results for appropriate candidates, but typically offer more subtle improvements compared to surgical options. They're ideal for early signs of aging or for patients seeking minimal downtime. Surgical procedures generally provide more dramatic, longer-lasting results for significant skin laxity or volume loss. Many patients combine both approaches for optimal outcomes. During your consultation, Dr. Prabhu will discuss realistic expectations for both surgical and non-surgical options.",
    category: "procedures"
  },
  // Recovery
  {
    question: "How much pain should I expect after surgery?",
    answer: "Pain levels vary by procedure and individual tolerance, but most patients report moderate discomfort rather than severe pain. We provide appropriate pain management protocols including prescription medications for the first few days and transition to over-the-counter options. Most surgical discomfort peaks within 2-3 days post-procedure and then gradually improves. Many patients find that the actual pain is less than they anticipated prior to surgery.",
    category: "recovery"
  },
  {
    question: "When can I resume exercise after plastic surgery?",
    answer: "Exercise resumption follows a gradual timeline: light walking is encouraged immediately after most procedures to promote circulation, while light cardiovascular activities may resume after 2-3 weeks depending on the procedure. More strenuous activities and heavy lifting (over 10 pounds) typically require 4-6 weeks of healing. Abdominal procedures generally require the longest restriction from core exercises. Dr. Prabhu provides detailed, procedure-specific activity guidelines and clears patients individually based on their healing progress.",
    category: "recovery"
  },
  {
    question: "How visible will my scars be and how are they managed?",
    answer: "Dr. Prabhu places incisions in natural folds or easily concealed locations whenever possible. Initially, scars appear pink and slightly raised but typically fade and flatten over 6-12 months. Our comprehensive scar management protocol includes silicone gel/sheets, sun protection, and possibly laser treatments or steroid injections if needed. Factors affecting scar appearance include genetics, skin type, tension on the wound, and adherence to post-operative care. We monitor your healing throughout the recovery process to optimize scar appearance.",
    category: "recovery"
  },
  {
    question: "What complications should I watch for during recovery?",
    answer: "While complications are rare, you should contact our office immediately if you experience: unusual or severe pain not managed by prescribed medication, excessive swelling or bruising (especially if asymmetric), signs of infection (increased redness, warmth, pus, fever), bleeding that doesn't stop with gentle pressure, shortness of breath or chest pain, or any symptoms that concern you. We provide 24/7 contact information for post-operative concerns, and Dr. Prabhu or a team member will promptly address any issues.",
    category: "recovery"
  },
  // Cost
  {
    question: "What is included in the cost of a procedure?",
    answer: "Our surgical fees typically include the pre-operative consultation, surgeon's fees, anesthesia costs, surgical facility fees, basic post-operative garments, and routine follow-up visits for one year. Additional costs may include prescription medications, specialized compression garments, and any treatments for complications. We provide a detailed price breakdown during your consultation so there are no surprises.",
    category: "cost"
  },
  {
    question: "Why do plastic surgery costs vary so much between surgeons?",
    answer: "Price variations reflect differences in surgeon experience and expertise, geographic location, facility accreditation, anesthesia type, procedure complexity, and whether costs include pre/post-operative care. Less experienced surgeons or non-specialty practitioners may charge less but potentially deliver different results or safety standards. When comparing prices, ensure you're comparing equivalent services and credentials. Dr. Prabhu's fees reflect his extensive training, experience, and commitment to optimal results and safety.",
    category: "cost"
  },
  {
    question: "Is plastic surgery covered by insurance?",
    answer: "Most cosmetic procedures are not covered by insurance. However, reconstructive procedures addressing functional issues (like breast reduction for back pain or eyelid surgery for vision obstruction) may qualify for partial coverage. Our team can help determine potential coverage, assist with insurance documentation, and obtain pre-authorization when applicable. We recommend checking with your insurance provider about specific coverage for your situation.",
    category: "cost"
  },
  {
    question: "Do you offer package pricing for multiple procedures?",
    answer: "Yes, we offer package pricing when multiple procedures are performed during the same operation. Combined procedures often provide cost savings on facility and anesthesia fees. However, safety remains our primary concern, and Dr. Prabhu limits combined procedure time to ensure optimal outcomes. During your consultation, we can discuss appropriate procedure combinations and associated package pricing tailored to your specific needs.",
    category: "cost"
  }
];

export const getFAQsByCategory = (category: string) => {
  return faqData.filter(faq => faq.category === category);
};