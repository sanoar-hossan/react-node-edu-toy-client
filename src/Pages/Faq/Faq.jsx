import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What are educational toys?',
      answer: 'Educational toys are toys that are designed to stimulate learning and development in children. They are specifically created to promote various skills such as cognitive, motor, social, and problem-solving skills.',
    },
    {
      question: 'What age group are educational toys suitable for?',
      answer: 'Educational toys are available for different age groups, starting from infants to older children. Each toy is typically labeled with the recommended age range to ensure it aligns with a child’s developmental stage.',
    },
    {
      question: 'What are the benefits of educational toys?',
      answer: 'Educational toys offer numerous benefits, including promoting creativity, enhancing critical thinking, improving fine and gross motor skills, fostering social interaction, and encouraging curiosity and exploration.',
    },
    {
      question: 'How do I choose the right educational toy for my child?',
      answer: 'When choosing an educational toy, consider your child’s age, interests, and developmental needs. Look for toys that align with their current abilities and provide a level of challenge without being too overwhelming.',
    },
    {
      question: 'Are all educational toys expensive?',
      answer: 'No, educational toys come in a wide range of prices. There are affordable options available that still provide educational value. It’s more important to focus on the quality and benefits of the toy rather than its price.',
    },
    {
      question: 'Where can I buy educational toys?',
      answer: 'Educational toys can be purchased from various sources such as toy stores, online retailers, educational supply stores, and specialty stores. Make sure to choose a reputable seller that offers high-quality toys.',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Educational Toy FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
