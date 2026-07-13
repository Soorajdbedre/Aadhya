import React from 'react';
import Hero from './components/Hero';
import Chapter from './components/Chapter';
import Guestbook from './components/Guestbook';

function App() {

  // NOTE: Replace these placeholder URLs with the actual paths to your local images.
  // The best way is to create an "images" folder inside the "public" folder of this project,
  // and reference them like "/images/photo1.jpg".

  const chapterOneMemories = [
    {
      photoUrl: "/images/image1.jpg",
      title: "The Beginning",
      hiddenText: "Do you remember the first day of PU? We were both so lost but found each other."
    },
    {
      photoUrl: "/images/image2.jpg",
      title: "Canteen Diaries",
      hiddenText: "Countless hours spent talking about everything and nothing over cold coffee."
    },
    {
      photoUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800&auto=format&fit=crop",
      title: "Late Night Studies",
      hiddenText: "Or should I say, late night gossiping while pretending to study for internals!"
    }
  ];

  const chapterTwoMemories = [
    {
      photoUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&auto=format&fit=crop",
      title: "Second PU Chaos",
      hiddenText: "The pressure was real, but having you by my side made it all manageable."
    },
    {
      photoUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
      title: "Festivals & Fun",
      hiddenText: "Dressing up, dancing, and making the best memories together."
    },
    {
      photoUrl: "https://images.unsplash.com/photo-1475721028070-2051152a4253?q=80&w=800&auto=format&fit=crop",
      title: "Here's to Now",
      hiddenText: "I wouldn't trade our friendship for anything in the world. Happy Birthday Aadhya!"
    }
  ];

  return (
    <div className="app-wrapper">
      <Hero />

      <Chapter
        id="chapter-one"
        title="Chapter One: First PU"
        subtitle="Where it all started"
        description="A look back at the beautiful chaos of our first year together. The laughs, the classes we slept through, and the beginning of a lifelong bond."
        memories={chapterOneMemories}
        align="left"
      />

      <Chapter
        id="chapter-two"
        title="Chapter Two: Second PU"
        subtitle="Growing closer"
        description="The year things got serious, but our friendship got even stronger. We navigated the stress and celebrated the small wins together."
        memories={chapterTwoMemories}
        align="right"
      />

      <Guestbook />

      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--color-brown)', color: 'var(--color-cream-dark)' }}>
        <p style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>
          Made with <span style={{ color: 'var(--color-terracotta)' }}>♥</span> for Aadhya
        </p>
      </footer>
    </div>
  );
}

export default App;
