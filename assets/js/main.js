/*==================== TAB SWITCHING ====================*/
function switchTab(e, id) {
  const btn = e.target;
  const indicator = document.getElementById('tab-indicator');
  
  // Remove active class from all buttons and panels
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  
  // Add active class to clicked button
  btn.classList.add('active');
  
  // Animate indicator
  if (indicator) {
    indicator.style.width = btn.offsetWidth + 'px';
    indicator.style.transform = `translateX(${btn.offsetLeft - 4}px)`;
  }

  // Show target panel
  const targetPanel = document.getElementById('tab-' + id);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
}

// Initialize indicator position on load
window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0); // Force scroll to top
  const activeBtn = document.querySelector('.tab-btn.active');
  const indicator = document.getElementById('tab-indicator');
  if (activeBtn && indicator) {
    indicator.style.width = activeBtn.offsetWidth + 'px';
    indicator.style.transform = `translateX(${activeBtn.offsetLeft - 4}px)`;
  }
});

/*==================== RESUME MODAL ====================*/
const resumeModal = document.getElementById('resume-modal'),
      resumeButton = document.getElementById('resume-button'),
      resumeClose = document.getElementById('resume-modal-close');

if (resumeButton) {
    resumeButton.addEventListener('click', () => {
        if (window.innerWidth >= 768) {
            resumeModal.classList.add('active-modal');
        } else {
            const resumeUrl = 'https://drive.google.com/file/d/1uEsoEkrzVfs6AKVF5k03SNTeJNn9k-dh/view?usp=sharing';
            window.open(resumeUrl, '_blank');
        }
    });
}

function closeResumeModal() {
    resumeModal.classList.remove('active-modal');
}
if (resumeClose) {
    resumeClose.addEventListener('click', closeResumeModal);
}

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(window.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DYNAMIC YEARS OF EXPERIENCE ====================*/
function calculateYearsExperience(){
    const startDate = new Date('2021-03-01');
    const currentDate = new Date();
    const diff = currentDate.getTime() - startDate.getTime();
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    const wholeYears = Math.floor(years);

    const experienceElement = document.getElementById('years-experience');
    if (experienceElement) {
        experienceElement.textContent = String(wholeYears).padStart(2, '0');
    }
}

calculateYearsExperience();