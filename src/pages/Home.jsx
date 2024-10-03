import React, { useState } from "react";

const Home1 = () => {
  const [isFooterExpanded, setFooterExpanded] = useState(false);

  const toggleFooter = () => {
    setFooterExpanded((prev) => !prev);
  };

  return (
    <div classname="relative" style={styles.container}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logoText}>Desiary</h1>
          <div style={styles.logoImage}>
            <img  className="-ml-4" src="/butterfly.png" alt="Logo" style={styles.logoIcon} />
          </div>
        </div>
        <div style={styles.profileCircle}></div>
      </div>

      {/* Grey Section (Placeholder for any content) */}
      <div className="min-h-[77vh]"  style={styles.greySection}></div>

      {/* Footer with OPTIONS */}
      <div
        style={isFooterExpanded ? styles.expandedFooter : styles.footer}
        onClick={toggleFooter}
        className="absolute bottom-0"
      >
        <h1 style={styles.optionsText}>OPTIONS</h1>

        {/* Conditionally render the image and button only when the footer is expanded */}
        {isFooterExpanded && (
          <>
            {/* Travel Section Image */}
            <div style={styles.imageContainer}>
              <img src="src\assets\travel.jpg" className="size-[400px]" alt="Travel" style={styles.imageStyle} />
            </div>

            {/* Travel Button */}
            <button className="shadow-md" style={styles.travelButton}>TRAVEL</button>

          
           {/* Wishlist Section Image */}
           <div style={styles.imageContainer}>
           <img src="src\assets\wishlist.jpg" className="size-[500px]" alt="Wishlist" style={styles.imageStyle} />
         </div>

         {/* WishList Button */}
         <button className="shadow-md" style={styles.travelButton}>WISHLIST</button>
         
         {/* Memories Section Image */}
         <div style={styles.imageContainer}>
          <img src="src\assets\memories.jpg" className="size-[600px]" alt="Memories" style={styles.imageStyle} />
            </div>

            {/* Memories Button */}
            <button className="shadow-md" style={styles.travelButton}>MEMORIES</button>
            {/* Journal Section Image */}
            <div style={styles.imageContainer}>
              <img src="src\assets\journal.jpg" className="size-[600px]" alt="Journal" style={styles.imageStyle} />
            </div>

            {/* Journal Button */}
            <button className="shadow-md" style={styles.travelButton}>JOURNAL</button>
       </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
  },

  /* Top Bar */
  topBar: {
    width: "100%",
    height: "8vh",
    backgroundColor: "rgba(252, 225, 238, 0.39)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "0 20px",
    zIndex: 10,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    fontSize: "3vh",
    fontFamily: "Prata, serif",
    color: "#000",
    marginRight: "10px",
  },
  logoImage: {
    width: "6vh",
    height: "6vh",
  },
  logoIcon: {
    width: "80%",
    height: "80%",
  },
  profileCircle: {
    width: "6vh",
    height: "6vh",
    borderRadius: "50%",
    backgroundColor: "#e5f9f0",
    border: "1px solid #000",
  },

  /* Grey Section (Placeholder for top content) */
  greySection: {
    height: "8vh",
    marginTop:19,
    backgroundColor: "#d9d9d9",
  },

  /* Footer */
  footer: {
    width: "100%",
    height: "10vh",
    backgroundColor: "#f8b59a",
    borderTopLeftRadius: "2vw",
    borderTopRightRadius: "2vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 5,
    transition: "height 0.3s ease",
  },
  expandedFooter: {
    width: "100%",
    height: "92vh",
    backgroundColor: "#f8b59a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: "height 0.3s ease",
    overflowY: "scroll", // Scroll within the expanded content
  },
  optionsText: {
    fontFamily: "Comfortaa, cursive",
    fontSize: "3vh",
    color: "#000",
    marginTop: "2vh", // Adds space between the top and "OPTIONS" text
  },

  /* Scrollable Content */
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2vh",
    paddingTop: "2vh",
  },
  imageStyle: {
    width: "80%",
    borderRadius: "10px",
  },
  travelButton: {
    backgroundColor: "#F27EA1",
    border: "none",
    padding: "1vh 2vw",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "2.5vh",
    fontFamily: "Comfortaa, cursive",
    margin: "2vh auto",
    display: "block",
  },
};

export default Home1;
