document.getElementById('generate-btn').addEventListener('click', function () {
    const urlInput = document.getElementById('url-input').value.trim();
    const qrCodeDiv = document.getElementById('qr-code');
  
    // Clear previous QR code
    qrCodeDiv.innerHTML = '';
  
    if (urlInput === '') {
      alert('Please enter a valid URL.');
      return;
    }
  
    // Generate QR code
    new QRCode(qrCodeDiv, {
      text: urlInput,
      width: 200,
      height: 200,
    });
  });