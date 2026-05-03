document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, button, .magnetic-btn');

    document.addEventListener('mousemove', (e) => {
        // Offset a bit so cursor is centered
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });

    // 2. Reveal on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Magnetic Button Effect
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const position = btn.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            
            // Gently pull the button towards the mouse point
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseout', function() {
            // Reset to original position when leaving
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // 4. Copy Email to Clipboard
    const copyEmailBtn = document.getElementById('copyEmail');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'ismail.kraou@gmail.com'; // Actual email
            navigator.clipboard.writeText(email).then(() => {
                const originalText = copyEmailBtn.innerText;
                copyEmailBtn.innerText = 'Copied to Clipboard!';
                copyEmailBtn.style.backgroundColor = 'var(--clr-accent-gold)';
                copyEmailBtn.style.color = 'var(--clr-bg)';
                
                setTimeout(() => {
                    copyEmailBtn.innerText = originalText;
                    copyEmailBtn.style.backgroundColor = 'transparent';
                    copyEmailBtn.style.color = 'var(--clr-accent-gold)';
                }, 2000);
            });
        });
    }
    // 5. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close mobile menu when a link is clicked
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
});
