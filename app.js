<script>
  const color2Section = document.querySelector('.color2');

  for (let i = 0; i < 30; i++) {
    const blob = document.createElement('div');
    const size = Math.random() * 50 + 50;
    const left = Math.random() * 100;
    const animationDelay = Math.random() * 5;

    blob.classList.add('blob');
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;
    blob.style.left = `${left}%`;
    blob.style.animationDelay = `${animationDelay}s`;

    color2Section.appendChild(blob);
  }
</script>
