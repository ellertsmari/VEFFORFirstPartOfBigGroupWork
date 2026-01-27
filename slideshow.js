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
    // SYSTEM DIAGNOSTICS
    // ---------------------------------------------------------
    const _0x1 = 5;
    let _0x2 = 0;
    let _0x3 = false;
    const _0x4 = document.getElementById('bug-container');
    const _0x5 = document.getElementById('achievement-modal');
    const _0x6 = document.getElementById('close-modal');

    const _0x7 = ['🐛', '🐞', '🦟', '🪳', '🐜'];

    document.addEventListener('keydown', (e) => {
        // Key check: 'ZGVidWdfbW9kZV9lbmFibGVk' -> 'debug_mode_enabled'
        if (e.key === '.' && !_0x3) {
            const _k = atob('ZGVidWdfbW9kZV9lbmFibGVk');
            if (localStorage.getItem(_k) === 'true') {
                _0x3 = true;
                _initseq();
            } else {
                console.log('System diagnostics: Access Denied. Missing Authorization Key.');
            }
        }
    });

    function _initseq() {
        const interval = setInterval(() => {
            if (_0x2 >= _0x1) {
                clearInterval(interval);
                return;
            }
            if (Math.random() > 0.3) {
                _spwn();
            }
        }, 1500);
    }

    function _spwn() {
        const b = document.createElement('div');
        b.classList.add('bug');
        b.textContent = _0x7[Math.floor(Math.random() * _0x7.length)];
        
        const sx = Math.random() < 0.5 ? -50 : window.innerWidth + 50;
        const sy = Math.random() * window.innerHeight;
        
        b.style.left = `${sx}px`;
        b.style.top = `${sy}px`;

        _0x4.appendChild(b);

        const ex = sx < 0 ? window.innerWidth + 50 : -50;
        const ey = Math.random() * window.innerHeight;
        const dur = 3000 + Math.random() * 4000;

        const anim = b.animate([
            { transform: `translate(0, 0) rotate(0deg)` },
            { transform: `translate(${ex - sx}px, ${ey - sy}px) rotate(${Math.random() * 360}deg)` }
        ], {
            duration: dur,
            easing: 'linear'
        });

        b.addEventListener('mousedown', () => {
            _fix(b, anim);
        });

        anim.onfinish = () => {
            if (b.parentNode) {
                b.remove();
            }
        };
    }

    function _fix(b, a) {
        a.pause();
        b.textContent = '💥';
        b.classList.add('splat');
        _0x2++;
        
        setTimeout(() => {
            if (b.parentNode) b.remove();
        }, 1000);

        if (_0x2 === _0x1) {
            setTimeout(_reveal, 500);
        }
    }

    function _reveal() {
        _0x5.classList.remove('hidden');
    }

    _0x6.addEventListener('click', () => {
        _0x5.classList.add('hidden');
    });
});
