import { useState } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";

const rooms = [
  {
    name: "Classic King",
    type: "A quiet retreat for two",
    price: "₹3,499",
    tag: "MOST POPULAR",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    features: ["King bed", "City view", "Complimentary breakfast"]
  },
  {
    name: "Deluxe Suite",
    type: "More room to unwind",
    price: "₹5,999",
    tag: "GUEST FAVOURITE",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
    features: ["Separate lounge", "Rain shower", "Breakfast for two"]
  },
  {
    name: "Signature Villa",
    type: "A private, elevated escape",
    price: "₹8,499",
    tag: "PREMIUM",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=85",
    features: ["Private terrace", "Living area", "Personal concierge"]
  }
];

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="ABC Grand Hotel home">
        <span className="brand-mark">A</span>
        <span>ABC <small>GRAND HOTEL</small></span>
      </Link>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/rooms">Rooms</NavLink>
        <NavLink to="/bookings">Bookings</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Link to="/bookings" className="nav-cta">Book a stay <span>↗</span></Link>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-shade"></div>
        <div className="hero-content">
          <span className="eyebrow light">A LITTLE MORE THAN A HOTEL</span>
          <h1>Stay somewhere<br /><em>worth remembering.</em></h1>
          <p>Thoughtful spaces, slow mornings and warm hospitality. Your next favourite getaway starts here.</p>
          <div className="hero-actions">
            <Link to="/rooms" className="button button-gold">Explore our rooms <span>→</span></Link>
            <Link to="/contact" className="text-link light-link">Discover the experience</Link>
          </div>
        </div>
        <div className="hero-note"><span>✦</span> YOUR PERSONAL ESCAPE, IN THE HEART OF THE CITY</div>
      </section>

      <section className="welcome section-wrap">
        <div className="welcome-copy">
          <span className="eyebrow">WELCOME TO ABC GRAND</span>
          <h2>Where every detail<br />feels <em>just right.</em></h2>
        </div>
        <p className="welcome-text">From the first hello to the last slow morning, we make room for the moments that matter. Settle in, explore a little, and let us take care of the rest.</p>
      </section>

      <section className="featured section-wrap">
        <SectionHeading eyebrow="SLEEP BEAUTIFULLY" title="Spaces made for switching off" text="Find the room that feels like it was made for you." />
        <div className="room-grid">
          {rooms.map((room) => <RoomCard key={room.name} room={room} />)}
        </div>
        <div className="center-action"><Link to="/rooms" className="button button-outline">View all rooms <span>→</span></Link></div>
      </section>

      <section className="experience">
        <div className="experience-image"></div>
        <div className="experience-copy">
          <span className="eyebrow light">THE ABC EXPERIENCE</span>
          <h2>Little luxuries.<br /><em>Lasting memories.</em></h2>
          <p>Enjoy a thoughtful blend of comfort and character, with friendly service that makes every visit feel personal.</p>
          <Link to="/contact" className="text-link light-link">Get in touch <span>→</span></Link>
        </div>
      </section>

      <section className="quote section-wrap">
        <span className="quote-mark">“</span>
        <p>A beautiful stay is not just about where you sleep. It is about how the place makes you feel.</p>
        <span className="eyebrow">THE ABC GRAND PROMISE</span>
      </section>
    </>
  );
}

function RoomCard({ room }) {
  return (
    <article className="room-card">
      <div className="room-image-wrap">
        <img src={room.image} alt={room.name} className="room-image" />
        <span className="room-tag">{room.tag}</span>
      </div>
      <div className="room-info">
        <div className="room-title-row"><h3>{room.name}</h3><strong>{room.price}<small> / night</small></strong></div>
        <p>{room.type}</p>
        <div className="feature-list">{room.features.map((feature) => <span key={feature}>✦ {feature}</span>)}</div>
        <Link to="/bookings" className="room-link">Reserve this room <span>→</span></Link>
      </div>
    </article>
  );
}

function Rooms() {
  return (
    <main className="inner-page">
      <section className="page-banner rooms-banner">
        <span className="eyebrow light">REST, RESET, REPEAT</span>
        <h1>Rooms & <em>Suites</em></h1>
        <p>Beautifully considered spaces, made for your kind of stay.</p>
      </section>
      <section className="section-wrap page-section">
        <SectionHeading eyebrow="FIND YOUR FIT" title="A room for every kind of getaway" text="Every room comes with the comfort, care and little touches that make a stay special." />
        <div className="room-grid">
          {rooms.map((room) => <RoomCard key={room.name} room={room} />)}
        </div>
      </section>
    </main>
  );
}

function Bookings() {
  const [form, setForm] = useState({ name: "", email: "", room: "Classic King", checkin: "", checkout: "", guests: "2" });
  const [message, setMessage] = useState("");

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.checkout <= form.checkin) {
      setMessage("Please choose a check-out date after your check-in date.");
      return;
    }
    setMessage(`Thank you, ${form.name}! Your booking request for ${form.room} has been received. Our team will contact you shortly.`);
  };

  return (
    <main className="inner-page">
      <section className="page-banner booking-banner">
        <span className="eyebrow light">YOUR GETAWAY STARTS HERE</span>
        <h1>Make it <em>official.</em></h1>
        <p>Tell us a little about your stay. We’ll take it from here.</p>
      </section>
      <section className="booking-layout section-wrap">
        <div className="booking-intro">
          <span className="eyebrow">RESERVATIONS</span>
          <h2>Let’s find your<br /><em>perfect stay.</em></h2>
          <p>Share your details and our reservations team will get back to you to confirm availability.</p>
          <div className="booking-perk"><span>✦</span><div><strong>Best available rates</strong><small>Book directly with our team.</small></div></div>
          <div className="booking-perk"><span>✦</span><div><strong>A personal touch</strong><small>We’re happy to help with special requests.</small></div></div>
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <h3>Booking request</h3>
          <div className="form-grid">
            <label>Full name<input name="name" value={form.name} onChange={updateForm} placeholder="Your name" required /></label>
            <label>Email address<input type="email" name="email" value={form.email} onChange={updateForm} placeholder="you@example.com" required /></label>
            <label>Check-in<input type="date" name="checkin" value={form.checkin} onChange={updateForm} min={new Date().toISOString().split("T")[0]} required /></label>
            <label>Check-out<input type="date" name="checkout" value={form.checkout} onChange={updateForm} min={form.checkin || new Date().toISOString().split("T")[0]} required /></label>
            <label>Room type<select name="room" value={form.room} onChange={updateForm}>{rooms.map((room) => <option key={room.name}>{room.name}</option>)}</select></label>
            <label>Guests<select name="guests" value={form.guests} onChange={updateForm}><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option></select></label>
          </div>
          <button className="button button-dark submit-button" type="submit">Send booking request <span>→</span></button>
          {message && <p className={message.startsWith("Please") ? "form-message error" : "form-message success"}>{message}</p>}
          <small className="form-note">This demo form shows a confirmation on this page. It does not make a real hotel reservation.</small>
        </form>
      </section>
    </main>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="inner-page">
      <section className="page-banner contact-banner">
        <span className="eyebrow light">WE’RE JUST A MESSAGE AWAY</span>
        <h1>Say <em>hello.</em></h1>
        <p>Questions, plans or a special request? We’d love to hear from you.</p>
      </section>
      <section className="contact-layout section-wrap">
        <div className="contact-details">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>We’re here<br />to <em>help.</em></h2>
          <div className="contact-item"><span>✉</span><div><small>EMAIL US</small><strong>hello@abcgrandhotel.com</strong></div></div>
          <div className="contact-item"><span>☎</span><div><small>CALL US</small><strong>+91 98765 43210</strong></div></div>
          <div className="contact-item"><span>⌖</span><div><small>FIND US</small><strong>ABC Grand Hotel, Main Road,<br />Vijayawada, Andhra Pradesh</strong></div></div>
          <div className="hours-box"><strong>Reception hours</strong><p>Our team is available 24 hours a day, 7 days a week.</p></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a note</h3>
          <label>Your name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required /></label>
          <label>Email address<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required /></label>
          <label>Your message<textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" rows="5" required /></label>
          <button className="button button-dark" type="submit">Send message <span>→</span></button>
          {sent && <p className="form-message success">Thanks, {name}! Your message is ready. This demo does not send it to a server.</p>}
        </form>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">LOST YOUR WAY?</span>
      <h1>404</h1>
      <h2>This page checked out.</h2>
      <p>The page you’re looking for could not be found.</p>
      <Link className="button button-dark" to="/">Back to home</Link>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <Link to="/" className="brand footer-brand"><span className="brand-mark">A</span><span>ABC <small>GRAND HOTEL</small></span></Link>
        <p>Thoughtful stays. Warm hospitality.<br />Memories that stay with you.</p>
        <div className="footer-links"><Link to="/rooms">Rooms</Link><Link to="/bookings">Bookings</Link><Link to="/contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 ABC Grand Hotel</span><span>Made for memorable stays ✦</span></div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
