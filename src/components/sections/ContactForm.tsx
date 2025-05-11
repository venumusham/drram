import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <form
        action="https://formspree.io/f/mvgabrkw"
        method="POST"
      >
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Interested In
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select a procedure</option>
              <option value="facial">Facial Procedures</option>
              <option value="breast">Breast Procedures</option>
              <option value="body">Body Procedures</option>
              <option value="non-surgical">Non-Surgical Treatments</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>
          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
            >
              Send Message
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;