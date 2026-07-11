// Supabase Configuration
const SUPABASE_URL = 'https://rtxqzzsamnaymwbzudpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0eHF6enNhbW5heW13Ynp1ZHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MDYzNTAsImV4cCI6MjA5OTI4MjM1MH0.adDOab8O9jHm6mmS_jsi-lWeUeXQ1XVI_Flh1lWkNQU';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Check authentication on page load
async function checkAuth() {
    const { data, error } = await supabase.auth.getSession();
    
    if (error || !data.session) {
        // Not authenticated, redirect to login
        window.location.href = 'index.html';
        return;
    }
    
    // Display user info
    const user = data.session.user;
    const userInfoDiv = document.getElementById('userInfo');
    
    // Extract username from email (remove @example.com)
    const username = user.email.replace('@example.com', '');
    
    userInfoDiv.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>User ID:</strong> ${user.id}</p>
        <p><strong>Login Time:</strong> ${new Date(user.last_sign_in_at).toLocaleString('id-ID')}</p>
    `;
}

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', async function() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
        console.error('Logout error:', error);
        alert('Gagal logout: ' + error.message);
        return;
    }
    
    // Clear local storage
    localStorage.removeItem('supabase_session');
    
    // Redirect to login
    window.location.href = 'index.html';
});

// Check auth when page loads
window.addEventListener('load', checkAuth);