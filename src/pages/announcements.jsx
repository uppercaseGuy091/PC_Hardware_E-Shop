import React from "react";
import "../styling/AnnouncementsPage.css";

const AnnouncementsPage = () => {
  const announcements = [
    "New generation Intel Core processors now available!",
    "AMD Ryzen 7000 series launching next week!",
    "Introducing NVIDIA GeForce RTX 40 series graphics cards!",
    "Upcoming release: AMD Radeon RX 7000 series GPUs!",
    "Exciting new DDR5 RAM kits with 6200MHz clock speeds coming soon!",
    "We are giving away a full PC setup (tower, monitor & peripherals)!"
  ];

  return (
    <div className="announcements-container">
      <h1 className="announcements-title">Announcements</h1>
      {announcements.map((announcement, index) => (
        <p className="announcement-item" key={index}>
          {announcement}
        </p>
      ))}
    </div>
  );
};

export default AnnouncementsPage;
