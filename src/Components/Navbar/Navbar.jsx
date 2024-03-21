// import React, { useState, useEffect } from 'react';
// import './Navbar.css'; // Import CSS file for Navbar styling

// function Navbar() {
//   const paragraphs = [
//     "SHIPPING WORLDWIDE",
//     "FREE SHIPPING ACROSS INDIA",
//     "SPRING NEW ARRIVAL"
//   ];

//   const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [visibleParagraph, setVisibleParagraph] = useState(paragraphs[0]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIsTransitioning(true); // Set transitioning state to true
//       setTimeout(() => {
//         setCurrentParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
//         setVisibleParagraph(paragraphs[(currentParagraphIndex + 1) % paragraphs.length]);
//       }, 1000); // Delay changing the paragraph until the animation is complete
//     }, 3000); // Change the interval duration (in milliseconds) as needed

//     return () => clearInterval(intervalId);
//   }, [currentParagraphIndex, paragraphs.length]);

//   const transitionEndHandler = () => {
//     setIsTransitioning(false); // Set transitioning state to false after transition ends
//   };

//   return (
//     <div className='navbarMain'>
//       <p
//         className={`navbarParagraph ${isTransitioning ? 'transitioning' : ''}`}
//         onAnimationEnd={transitionEndHandler}
//       >
//         {visibleParagraph}
//       </p>
//       {currentParagraphIndex === paragraphs.length - 1 && (
//         <span>SHOP HERE</span>
//       )}
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import CSS file for Navbar styling

function Navbar() {
  const paragraphs = [
    "SHIPPING WORLDWIDE",
    "FREE SHIPPING ACROSS INDIA",
    "SPRING NEW ARRIVAL"
  ];

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleParagraph, setVisibleParagraph] = useState(paragraphs[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true); // Set transitioning state to true
      setTimeout(() => {
        setCurrentParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
        setVisibleParagraph(paragraphs[(currentParagraphIndex + 1) % paragraphs.length]);
      }, 1000); // Delay changing the paragraph until the animation is complete
    }, 3000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [currentParagraphIndex, paragraphs.length]);

  const transitionEndHandler = () => {
    setIsTransitioning(false); // Set transitioning state to false after transition ends
  };

  const handleClickShopHere = () => {
    // Handle click on "SHOP HERE"
    // For now, let's log a message to the console
    console.log("SHOP HERE clicked!");
  };

  return (
    <div className='navbarMain'>
      <div className="navbarContent">
        <p
          className={`navbarParagraph ${isTransitioning ? 'transitioning' : ''}`}
          onAnimationEnd={transitionEndHandler}
        >
          {visibleParagraph}
        </p>
        {currentParagraphIndex === paragraphs.length - 1 && (
          <span className="shopHere" onClick={handleClickShopHere}>SHOP HERE</span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
