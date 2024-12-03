/*dynamic navbar*/
const navLinks = document.querySelectorAll(".navigation a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");
  });
});


const selects = document.querySelectorAll('select');
selects.forEach(select => {
  select.addEventListener('change', event => {
    const selectedOption = event.target.value;
    alert(`You selected: ${selectedOption}`);
  });
});


const privacyBtn = document.createElement('button');
privacyBtn.textContent = 'Toggle Privacy Policy';
privacyBtn.addEventListener('click', () => {
  const privacyText = document.querySelector('footer p');
  privacyText.style.display =
    privacyText.style.display === 'none' ? 'block' : 'none';
});
document.querySelector('footer').appendChild(privacyBtn);
