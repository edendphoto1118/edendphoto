// Simple filter (可擴展用library如Isotope)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lightbox placeholder (推薦用fancyBox或Photoswipe library)
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Lightbox開啟：' + img.alt); // 替換成真lightbox
    });
});
