import React from "react";
import shareIcon from "../assets/icons/global/Share.svg"; 

const ShareButton = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check this out!",
          text: "Here is an interesting link:",
          url: window.location.href, 
        });
        console.log("Link shared successfully!");
      } else {
        alert("Your browser does not support the Share API.");
      }
    } catch (error) {
      console.error("Error sharing the link:", error);
    }
  };

  return (
    <img
      onClick={handleShare}
      src={shareIcon}
      alt="Share"
      style={{ cursor: "pointer" }}
    />
  );
};

export default ShareButton;
