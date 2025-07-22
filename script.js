const productList = document.getElementById('productList');
const adminPanel = document.getElementById('adminPanel');

function scrollToProducts() {
  document.getElementById("productList").scrollIntoView({ behavior: 'smooth' });
}

function unlockAdmin() {
  const pass = document.getElementById('adminPass').value;
  if (pass === 'admin*123#') {
    adminPanel.style.display = 'block';
    alert('Admin Panel Unlocked');
  } else {
    alert('Incorrect password');
  }
}

function redirectToFacebook() {
  window.open('https://facebook.com/EZADigitars', '_blank');
}

function addProduct() {
  const title = document.getElementById('prodTitle').value;
  const desc = document.getElementById('prodDesc').value;
  const img = document.getElementById('prodImage').value;

  const productHTML = `
    <div class="product">
      <img src="${img}" alt="${title}" />
      <h3>${title}</h3>
      <p>${desc}</p>
      <button onclick="redirectToFacebook()">Buy Now</button>
    </div>
  `;

  productList.innerHTML += productHTML;

  // Clear fields
  document.getElementById('prodTitle').value = '';
  document.getElementById('prodDesc').value = '';
  document.getElementById('prodImage').value = '';
}
