document.getElementById('add-room-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Retrieve form data
    const roomName = document.getElementById('room-name').value;
    const roomDescription = document.getElementById('room-description').value;
    const ownerName = document.getElementById('owner-name').value;
    const ownerContact = document.getElementById('owner-contact').value;
    const roomPhoto = document.getElementById('room-photo').files[0];
  
    // Log the form data to the console (for demo purposes)
    console.log('Room Name:', roomName);
    console.log('Room Description:', roomDescription);
    console.log('Owner Name:', ownerName);
    console.log('Owner Contact:', ownerContact);
    console.log('Room Photo:', roomPhoto);
  
    // Here, you would typically send the data to your server, e.g.:
    // const formData = new FormData();
    // formData.append('roomName', roomName);
    // formData.append('roomDescription', roomDescription);
    // formData.append('ownerName', ownerName);
    // formData.append('ownerContact', ownerContact);
    // formData.append('roomPhoto', roomPhoto);
    // fetch('/submit-room', { method: 'POST', body: formData });
  
    // For now, show a success message
    alert('Room added successfully!');
  
    // Optionally, clear the form fields after submission
    document.getElementById('add-room-form').reset();
  });