import React from 'react';

const BusinessHours: React.FC = () => {
  const hours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const isToday = (day: string) => {
    const today = new Date().getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[today] === day;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
      
      <div className="space-y-2">
        {hours.map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between py-2 ${
              index < hours.length - 1 ? 'border-b border-gray-100' : ''
            } ${isToday(item.day) ? 'bg-primary-50 -mx-2 px-2 rounded' : ''}`}
          >
            <div className={`font-medium ${isToday(item.day) ? 'text-primary-700' : 'text-gray-700'}`}>
              {item.day}
              {isToday(item.day) && (
                <span className="ml-2 text-xs bg-primary-100 text-primary-800 py-0.5 px-1.5 rounded-full">
                  Today
                </span>
              )}
            </div>
            <div className={isToday(item.day) ? 'text-primary-700' : 'text-gray-600'}>
              {item.hours}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-gray-50 rounded p-4 text-sm text-gray-700">
        <p className="font-medium mb-1">Note:</p>
        <p>Consultations are by appointment only. Please call or use our online booking system to schedule your visit.</p>
      </div>
    </div>
  );
};

export default BusinessHours;