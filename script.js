document.getElementById('card').addEventListener('submit', function(event) {
      event.preventDefault(); 

      var name = document.getElementById('name').value;
      var contactNumber = document.getElementById('contactNumber').value;
      var order = document.getElementById('order').value;

     
      console.log('Name:', name);
      console.log('Contact Number:', contactNumber);
      console.log('Order:', order);

      document.getElementById('orderForm').reset();
      alert("Confirm")
    });