const card = document.querySelector('.card')!;

card.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'BUTTON') {
    console.log(`${target.textContent} button inside card component clicked!!`);
  } else {
    console.log('Card component clicked!!');
  }
});
