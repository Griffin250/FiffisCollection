// Enhanced Profile Menu Functionality

let profileMenuOpen = false;
function displayProfileFeatures() {
  const profileFeatures = document.getElementById('profileFeatures');
  const chevron = document.getElementById('chevronDown');
  
  if (profileFeatures) {
    profileFeatures.style.display = 'block';
    if (chevron) {
      chevron.style.rotate = '180deg';
    }
    
    // Add click outside listener
    setTimeout(() => {
      document.addEventListener('click', closeProfileOnClickOutside);
    }, 100);
  }
}

/**
 * Hide the profile features dropdown menu
 */
function hideProfileFeatures() {
  const profileFeatures = document.getElementById('profileFeatures');
  const chevron = document.getElementById('chevronDown');
  
  if (profileFeatures) {
    profileFeatures.style.display = 'none';
    if (chevron) {
      chevron.style.rotate = '0deg';
    }
    
    // Remove click outside listener
    document.removeEventListener('click', closeProfileOnClickOutside);
  }
}

/**
 * Close profile menu when clicking outside
 */
function closeProfileOnClickOutside(event) {
  const profileFeatures = document.getElementById('profileFeatures');
  const userProfile = document.querySelector('.user-profile');
  
  if (profileFeatures && userProfile && profileFeatures.style.display === 'block') {
    // Check if click is outside the profile menu and trigger
    if (!userProfile.contains(event.target)) {
      hideProfileFeatures();
    }
  }
}

/**
 * Toggle profile menu visibility
 */
function toggleProfileMenu() {
  const profileFeatures = document.getElementById('profileFeatures');
  if (profileFeatures && profileFeatures.style.display === 'block') {
    hideProfileFeatures();
  } else {
    displayProfileFeatures();
  }
}

/**
 * Initialize profile menu event listeners
 */
function initProfileMenu() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupProfileMenu);
  } else {
    setupProfileMenu();
  }
}

/**
 * Setup profile menu events
 */
function setupProfileMenu() {
  // Listen on h2 inside user-profile (primary trigger)
  const profileH2 = document.querySelector('.user-profile h2');
  if (profileH2) {
    profileH2.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleProfileMenu();
    });
  }
  
  // Also listen on profile-trigger div
  const profileTrigger = document.querySelector('.profile-trigger');
  if (profileTrigger) {
    profileTrigger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleProfileMenu();
    });
  }
  
  // Setup menu item click handlers
  const profileMenuItems = document.querySelectorAll('.profile-menu-item');
  profileMenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Close menu after navigation
      setTimeout(hideProfileFeatures, 100);
    });
  });
  
  // Setup logout button
  const logoutBtn = document.getElementById('signOutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
}

/**
 * Update user profile display name
 * @param {string} userName - The name to display
 */
function updateProfileUserName(userName) {
  const displayNameElements = document.querySelectorAll('.display-userName');
  displayNameElements.forEach(element => {
    element.textContent = userName || 'Guest';
  });
}

/**
 * Handle logout functionality
 */
function handleLogout() {
  // This will be integrated with Firebase logout
  hideProfileFeatures();
  // Logout logic will be handled by Firebase
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    displayProfileFeatures,
    hideProfileFeatures,
    toggleProfileMenu,
    updateProfileUserName,
    handleLogout
  };
}

// Initialize profile menu when script loads
initProfileMenu();
