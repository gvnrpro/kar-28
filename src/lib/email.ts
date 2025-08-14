import emailjs from '@emailjs/browser';

// Email configuration
const EMAIL_CONFIG = {
  serviceId: 'service_kar_business',
  templateId: 'template_contact_form',
  publicKey: 'your_public_key_here', // Replace with actual EmailJS public key
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact?: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      to_name: 'KAR Business Services',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      preferred_contact: formData.preferredContact || 'Email',
      reply_to: formData.email,
    };

    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email. Please try again or contact us directly.');
  }
};

export const sendNewsletterSubscription = async (email: string): Promise<void> => {
  try {
    const templateParams = {
      to_name: 'KAR Business Services',
      subscriber_email: email,
      reply_to: email,
    };

    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      'template_newsletter',
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    throw new Error('Failed to subscribe to newsletter. Please try again.');
  }
};