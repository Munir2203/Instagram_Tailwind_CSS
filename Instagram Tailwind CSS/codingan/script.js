// ===================================
// INSTAGRAM PROFILE JAVASCRIPT
// ===================================

'use strict';

// ===================================
// DOM ELEMENTS
// ===================================
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const tabLinks = document.querySelectorAll('.tab-link');
const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');
const postItems = document.querySelectorAll('.post-item');
const storyItems = document.querySelectorAll('.story-item');
const addStoryBtn = document.getElementById('addStoryBtn');
const profileButtons = document.querySelectorAll('.btn-profile');

// ===================================
// SIDEBAR NAVIGATION
// ===================================
function handleSidebarNavigation() {
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => {
                l.classList.remove('active', 'bg-gray-100', 'font-semibold');
                l.classList.add('text-gray-700');
            });
            
            // Add active class to clicked link
            this.classList.add('active', 'bg-gray-100', 'font-semibold');
            this.classList.remove('text-gray-700');
            
            const linkText = this.querySelector('span').textContent;
            console.log('Navigated to:', linkText);
        });
    });
}

// ===================================
// TAB NAVIGATION
// ===================================
function handleTabNavigation() {
    tabLinks.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabLinks.forEach(t => {
                t.classList.remove('active', 'border-black', 'text-black');
                t.classList.add('text-gray-500', 'border-transparent');
            });
            
            // Add active class to clicked tab
            this.classList.add('active', 'border-black', 'text-black');
            this.classList.remove('text-gray-500', 'border-transparent');
            
            const tabHref = this.getAttribute('href');
            console.log('Switched to tab:', tabHref);
            
            // Here you can add logic to show/hide different content
            // Example: showTabContent(tabHref);
        });
    });
}

// ===================================
// BOTTOM NAVIGATION
// ===================================
function handleBottomNavigation() {
    bottomNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            bottomNavLinks.forEach(l => {
                l.classList.remove('active', 'text-black');
                l.classList.add('text-gray-500');
            });
            
            // Add active class to clicked link
            this.classList.add('active', 'text-black');
            this.classList.remove('text-gray-500');
            
            console.log('Bottom nav clicked');
        });
    });
}

// ===================================
// POST INTERACTIONS
// ===================================
function handlePostInteractions() {
    postItems.forEach((post, index) => {
        post.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img ? img.src : '';
            
            console.log(`Post ${index + 1} clicked`);
            console.log('Image source:', imgSrc);
            
            // Here you can implement:
            // - Open post in modal
            // - Navigate to post detail page
            // - Show lightbox
            
            // Example: openPostModal(imgSrc, index);
        });
        
        // Add keyboard navigation
        post.setAttribute('tabindex', '0');
        post.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ===================================
// STORY INTERACTIONS
// ===================================
function handleStoryInteractions() {
    storyItems.forEach((story, index) => {
        const storyCircle = story.querySelector('div:first-child');
        
        if (storyCircle) {
            storyCircle.addEventListener('click', function() {
                console.log(`Story ${index + 1} clicked`);
                
                // Here you can implement:
                // - Open story viewer
                // - Play story animation
                // - Show full-screen story
                
                // Example: openStoryViewer(index);
            });
        }
    });
}

// ===================================
// ADD NEW STORY
// ===================================
function addNewStory() {
    console.log('Add new story clicked');
    alert('Fitur tambah sorotan baru akan segera hadir!');
    
    // Here you can implement:
    // - Open file picker
    // - Upload story image/video
    // - Create new highlight
}

if (addStoryBtn) {
    addStoryBtn.addEventListener('click', addNewStory);
}

// ===================================
// PROFILE BUTTON ACTIONS
// ===================================
function handleProfileButtons() {
    profileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const buttonText = this.textContent.trim();
            console.log('Profile button clicked:', buttonText);
            
            if (buttonText.includes('Edit')) {
                console.log('Opening profile editor...');
                // Implement edit profile functionality
            } else if (buttonText.includes('arsip')) {
                console.log('Opening archive...');
                // Implement view archive functionality
            } else if (this.querySelector('.fa-cog')) {
                console.log('Opening settings...');
                // Implement settings functionality
            }
        });
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function handleSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// IMAGE LAZY LOADING & ERROR HANDLING
// ===================================
function handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Handle successful load
        img.addEventListener('load', function() {
            this.classList.add('fade-in');
            console.log('Image loaded:', this.alt);
        });
        
        // Handle loading error
        img.addEventListener('error', function() {
            this.style.backgroundColor = '#f3f4f6';
            console.error('Failed to load image:', this.src);
            
            // Set placeholder
            this.alt = 'Image not available';
        });
    });
}

// ===================================
// KEYBOARD SHORTCUTS
// ===================================
function handleKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // ESC - Close modals/overlays
        if (e.key === 'Escape') {
            console.log('ESC pressed');
            // Close any open modals or overlays
        }
        
        // Arrow Left - Previous post
        if (e.key === 'ArrowLeft') {
            console.log('Navigate to previous post');
            // Implement previous post navigation
        }
        
        // Arrow Right - Next post
        if (e.key === 'ArrowRight') {
            console.log('Navigate to next post');
            // Implement next post navigation
        }
        
        // N - New post
        if (e.key === 'n' || e.key === 'N') {
            if (!e.target.matches('input, textarea')) {
                console.log('New post shortcut');
                // Implement new post creation
            }
        }
    });
}

// ===================================
// WINDOW RESIZE HANDLER
// ===================================
let resizeTimeout;

function handleWindowResize() {
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        
        resizeTimeout = setTimeout(function() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            console.log(`Window resized: ${width}x${height}`);
            
            // Handle responsive behavior
            // Update layout if needed
        }, 250);
    });
}

// ===================================
// SCROLL EVENT HANDLER
// ===================================
let lastScrollTop = 0;
let ticking = false;

function handleScroll() {
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop) {
                    // Scrolling down
                    // console.log('Scrolling down');
                } else {
                    // Scrolling up
                    // console.log('Scrolling up');
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format numbers (1234 -> 1.2k)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Show notification
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Here you can implement a toast notification system
}

// ===================================
// INITIALIZATION
// ===================================
function init() {
    console.log('Instagram Profile Page Initialized');
    console.log('Total posts:', postItems.length);
    console.log('Total stories:', storyItems.length);
    
    // Verify we have 12 posts
    if (postItems.length === 12) {
        console.log('✓ All 12 posts loaded successfully');
    } else {
        console.warn(`⚠ Expected 12 posts, but found ${postItems.length}`);
    }
    
    // Initialize all handlers
    handleSidebarNavigation();
    handleTabNavigation();
    handleBottomNavigation();
    handlePostInteractions();
    handleStoryInteractions();
    handleProfileButtons();
    handleSmoothScroll();
    handleImageLoading();
    handleKeyboardShortcuts();
    handleWindowResize();
    handleScroll();
    
    // Add fade-in animation to main content
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('fade-in');
    }
    
    // Log grid layout info
    logGridInfo();
    
    // Track grid changes on resize
    updateGridInfoOnResize();
    
    console.log('All event listeners initialized');
}

// ===================================
// LOG GRID INFORMATION
// ===================================
function logGridInfo() {
    const width = window.innerWidth;
    let columns, device;
    
    if (width < 640) {
        columns = 1;
        device = 'Mobile';
    } else if (width >= 640 && width < 768) {
        columns = 2;
        device = 'Small Tablet';
    } else if (width >= 768 && width < 1024) {
        columns = 3;
        device = 'Tablet';
    } else {
        columns = 4;
        device = 'Desktop';
    }
    
    const rows = Math.ceil(postItems.length / columns);
    
    console.log('─────────────────────────────────');
    console.log(`📱 Device: ${device}`);
    console.log(`📏 Screen width: ${width}px`);
    console.log(`📊 Grid Layout: ${columns} column${columns > 1 ? 's' : ''} × ${rows} row${rows > 1 ? 's' : ''}`);
    console.log(`🖼️  Total posts: ${postItems.length}`);
    console.log('─────────────────────────────────');
}

// ===================================
// UPDATE GRID INFO ON RESIZE
// ===================================
function updateGridInfoOnResize() {
    let previousWidth = window.innerWidth;
    
    window.addEventListener('resize', debounce(function() {
        const currentWidth = window.innerWidth;
        
        // Only log if crossing breakpoints
        const crossedBreakpoint = 
            (previousWidth < 640 && currentWidth >= 640) ||
            (previousWidth >= 640 && currentWidth < 640) ||
            (previousWidth < 768 && currentWidth >= 768) ||
            (previousWidth >= 768 && currentWidth < 768) ||
            (previousWidth < 1024 && currentWidth >= 1024) ||
            (previousWidth >= 1024 && currentWidth < 1024);
        
        if (crossedBreakpoint) {
            console.log('🔄 Grid layout changed:');
            logGridInfo();
        }
        
        previousWidth = currentWidth;
    }, 300));
}

// ===================================
// DOM CONTENT LOADED
// ===================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// EXPOSE FUNCTIONS TO GLOBAL SCOPE (if needed)
// ===================================
window.instagramProfile = {
    formatNumber,
    debounce,
    isInViewport,
    showNotification,
    addNewStory
};