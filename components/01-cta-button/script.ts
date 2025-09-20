const parentEl = document.getElementById('parent')!;

parentEl.addEventListener('click', (e) => {
  console.log(`${(e.target as HTMLButtonElement).textContent} clicked!!`);
});
