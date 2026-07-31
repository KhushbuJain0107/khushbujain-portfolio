const ContactCard = ({ title, value, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Accent Line */}
      <div className="w-16 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Value */}
      <p className="mt-4 text-gray-600 break-all group-hover:text-blue-600 transition-colors duration-300">
        {value}
      </p>
    </a>
  );
};

export default ContactCard;