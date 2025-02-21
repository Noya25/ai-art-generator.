document.getElementById('artForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Ambil input prompt dari user
  const prompt = document.getElementById('prompt').value;

  // URL API Craiyon (DALL·E Mini)
  const apiUrl = 'https://backend.craiyon.com/generate';

  try {
    // Kirim request ke API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    // Ambil gambar pertama dari hasil
    const imageUrl = `data:image/jpeg;base64,${data.images[0]}`;

    // Tampilkan gambar di halaman
    const outputImage = document.getElementById('outputImage');
    outputImage.src = imageUrl;
    outputImage.style.display = 'block';
  } catch (error) {
    alert('Terjadi kesalahan saat menghasilkan gambar. Silakan coba lagi.');
    console.error(error);
  }
});
