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
      photoUrl: "images/image1.jpg",
      title: "The Beginning",
      hiddenText: "Do you remember when the first time we started talking together."
    },
    {
      photoUrl: "images/image2.jpg",
      title: "Canteen Diaries",
      hiddenText: "The time we spent talking about nonsense was actually so fun."
    },
    {
      photoUrl: "images/image3.jpg",
      title: "Our First Hangout",
      hiddenText: "This was the first time we hung out together and this was the time we actually got to know we have a lot in common."
    }
  ];

  const chapterTwoMemories = [
    {
      photoUrl: "images/image4.jpg",
      title: "Second PU Chaos",
      hiddenText: "The time spent with you was so much fun."
    },
    {
      photoUrl: "images/image5.jpg",
      title: "Festivals & Fun",
      hiddenText: "Going to the forum and just messing around was the best time."
    },
    {
      photoUrl: "images/image6.jpg",
      title: "Here's to Now",
      hiddenText: "All those times I came with you in the bus to drop you and the time we spent in the bus stand, all of those were so much fun."
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
