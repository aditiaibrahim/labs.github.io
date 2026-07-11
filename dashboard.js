// Supabase Configuration
const SUPABASE_URL = 'https://rtxqzzsamnaymwbzudpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0eHF6enNhbW5heW13Ynp1ZHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MDYzNTAsImV4cCI6MjA5OTI4MjM1MH0.adDOab8O9jHm6mmS_jsi-lWeUeXQ1XVI_Flh1lWkNQU';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Check authentication on page load
function checkAuth() {
    const session = localStorage.getItem('user_session');
    
    if (!session) {
        // Not authenticated, redirect to login
        window.location.href = 'index.html';
        return;
    }
    
    // Parse session data
    const userData = JSON.parse(session);
    const userInfoDiv = document.getElementById('userInfo');
    
    // Display user info
    userInfoDiv.innerHTML = `
        <p><strong>Username:</strong> ${userData.username}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Login Time:</strong> ${new Date(userData.loginTime).toLocaleString('id-ID')}</p>
    `;
}

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear local storage
    localStorage.removeItem('user_session');
    
    // Redirect to login
    window.location.href = 'index.html';
});

// Check auth when page loads
window.addEventListener('load', checkAuth);
