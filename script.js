const img = document.getElementById('image');
const upload = document.getElementById('upload');
const blurIn = document.getElementById('blur');
const brightnessIn = document.getElementById('brightness');
const contrastIn = document.getElementById('contrast');
const grayscaleIn = document.getElementById('grayscale');
const resetBtn = document.getElementById('reset-btn');

upload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(file) {
        img.src = URL.createObjectURL(file);
    }
});

const inputs = document.querySelectorAll('input[type="range"]');
inputs.forEach(input => {
    input.addEventListener('input', applyFilters);
});

function applyFilters() {
    document.getElementById('blur-val').innerText = blurIn.value + 'px';
    document.getElementById('brightness-val').innerText = brightnessIn.value + '%';
    document.getElementById('contrast-val').innerText = contrastIn.value + '%';
    document.getElementById('grayscale-val').innerText = grayscaleIn.value + '%';
    
    img.style.filter = `
        blur(${blurIn.value}px) 
        brightness(${brightnessIn.value}%) 
        contrast(${contrastIn.value}%) 
        grayscale(${grayscaleIn.value}%)
    `;
}

resetBtn.addEventListener('click', () => {
    blurIn.value = 0;
    brightnessIn.value = 100;
    contrastIn.value = 100;
    grayscaleIn.value = 0;
    applyFilters();
});
