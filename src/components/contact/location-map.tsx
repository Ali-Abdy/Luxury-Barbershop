export function LocationMap() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden border border-border">
      <iframe
        title="Luxury Barbershop Location"
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.518608821938!2d8.675681376884357!3d50.11520631326462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea3c6c0b395%3A0x6b449b291d9f8e0!2sGoethestra%C3%9Fe%2034%2C%2060313%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2s!4v1717171717171!5m2!1sen!2s"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
