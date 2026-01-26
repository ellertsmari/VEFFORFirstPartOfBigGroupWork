document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize
    showSlide(currentSlide);

    // ---------------------------------------------------------
    // EASTER EGG: BUG HUNT
    // ---------------------------------------------------------
    const BUG_COUNT_TO_WIN = 5;
    let bugsSquashed = 0;
    let bugHuntActive = false;
    const bugContainer = document.getElementById('bug-container');
    const modal = document.getElementById('achievement-modal');
    const closeModalBtn = document.getElementById('close-modal');

    // Bug characters
    const bugs = ['🐛', '🐞', '🦟', '🪳', '🐜'];

    // Start hunt on '.' key
    document.addEventListener('keydown', (e) => {
        if (e.key === '.' && !bugHuntActive) {
            bugHuntActive = true;
            startSpawnLoop();
        }
    });

    function startSpawnLoop() {
        const interval = setInterval(() => {
            if (bugsSquashed >= BUG_COUNT_TO_WIN) {
                clearInterval(interval);
                return;
            }
            if (Math.random() > 0.3) {
                spawnBug();
            }
        }, 1500);
    }

    function spawnBug() {
        const bug = document.createElement('div');
        bug.classList.add('bug');
        bug.textContent = bugs[Math.floor(Math.random() * bugs.length)];
        
        const startX = Math.random() < 0.5 ? -50 : window.innerWidth + 50;
        const startY = Math.random() * window.innerHeight;
        
        bug.style.left = `${startX}px`;
        bug.style.top = `${startY}px`;

        bugContainer.appendChild(bug);

        const endX = startX < 0 ? window.innerWidth + 50 : -50;
        const endY = Math.random() * window.innerHeight;
        const duration = 3000 + Math.random() * 4000;

        const animation = bug.animate([
            { transform: `translate(0, 0) rotate(0deg)` },
            { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(${Math.random() * 360}deg)` }
        ], {
            duration: duration,
            easing: 'linear'
        });

        bug.addEventListener('mousedown', () => {
            squashBug(bug, animation);
        });

        animation.onfinish = () => {
            if (bug.parentNode) {
                bug.remove();
            }
        };
    }

    function squashBug(bug, animation) {
        animation.pause();
        bug.textContent = '💥';
        bug.classList.add('splat');
        bugsSquashed++;
        
        setTimeout(() => {
            if (bug.parentNode) bug.remove();
        }, 1000);

        if (bugsSquashed === BUG_COUNT_TO_WIN) {
            setTimeout(showAchievement, 500);
        }
    }

    function showAchievement() {
        modal.classList.remove('hidden');
    }

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
