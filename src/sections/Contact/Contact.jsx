import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";
import contact from "./contactData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <ContactHeader />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {contact.map((item) => (
            <ContactCard
              key={item.title}
              title={item.title}
              value={item.value}
              link={item.link}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Contact;