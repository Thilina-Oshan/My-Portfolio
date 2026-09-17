// Category filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const postItems = document.querySelectorAll('.post-item');
const noResults = document.getElementById('noResults');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        let visibleCount = 0;

        postItems.forEach(item => {
            const match = filter === 'all' || item.dataset.category === filter;
            item.style.display = match ? '' : 'none';
            if (match) visibleCount++;
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
});

// Newsletter form (front-end only demo)
const form = document.getElementById('newsletterForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Subscribed ✓';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
    }, 2000);
});