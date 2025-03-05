// Data for rooms and owners
const rooms = [
    {
      name: "ANGLES - PG",
      description: "A spacious and well-furnished room with all necessary amenities.",
      ownerName: "John Doe",
      ownerContact: "john.doe@hostel.com",
    },
    {
      name: "Room 2 - Standard",
      description: "A cozy room for those who prefer a compact and affordable space.",
      ownerName: "Jane Smith",
      ownerContact: "jane.smith@hostel.com",
    },
    {
      name: "Room 3 - Premium",
      description: "A luxurious room with premium furniture and top-notch facilities.",
      ownerName: "Alice Johnson",
      ownerContact: "alice.johnson@hostel.com",
    },
    {
      name: "Room 4  - Premium",
      description: "A luxurious room with premium furniture and top-notch facilities.",
      ownerName: "Alice Johnson",
      ownerContact: "alice.johnson@hostel.com",
    },
    {
      name: "Room 5 - Premium",
      description: "A luxurious room with premium furniture and top-notch facilities.",
      ownerName: "Alice Johnson",
      ownerContact: "alice.johnson@hostel.com",
    },
    {
      name: "Room 6 - Premium",
      description: "A luxurious room with premium furniture and top-notch facilities.",
      ownerName: "Alice Johnson",
      ownerContact: "alice.johnson@hostel.com",
    }
  ];
  
  // Function to open the popup with room details
  function openPopup(index) {
    const room = rooms[index];
    document.getElementById('room-name').innerText = room.name;
    document.getElementById('room-description').innerText = room.description;
    document.getElementById('owner-name').innerText = `Owner: ${room.ownerName}`;
    document.getElementById('owner-contact').innerText = `Contact: ${room.ownerContact}`;
    document.getElementById('room-detail-popup').style.display = "flex";
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('room-detail-popup').style.display = "none";
  }
  
  // Attach event listeners to "View Details" buttons
  document.querySelectorAll('.details-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => openPopup(index));
  });
  