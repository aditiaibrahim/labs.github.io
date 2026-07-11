// Supabase Configuration
const SUPABASE_URL = 'https://rtxqzzsamnaymwbzudpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0eHF6enNhbW5heW13Ynp1ZHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MDYzNTAsImV4cCI6MjA5OTI4MjM1MH0.adDOab8O9jHm6mmS_jsi-lWeUeXQ1XVI_Flh1lWkNQU';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    messageDiv.className = 'message';
    messageDiv.textContent = 'Sedang memverifikasi...';
    messageDiv.style.display = 'block';
    messageDiv.style.background = '#d1ecf1';
    messageDiv.style.color = '#0c5460';
    
    try {
        // Sign in with Supabase Auth
        const { data, error } = await supabase.auth.signInWithPassword({
            email: username + '@example.com', // Using email format for Supabase Auth
            password: password
        });
        
        if (error) {
            throw error;
        }
        
        if (data.user) {
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Login berhasil! Selamat datang, ' + username + '!';
            messageDiv.style.background = '#d4edda';
            messageDiv.style.color = '#155724';
            
            // Clear form
            document.getElementById('loginForm').reset();
            
            // Store session
            localStorage.setItem('supabase_session', JSON.stringify(data.session));
            
            // Redirect to dashboard (you can change this URL)
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }
    } catch (error) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Login gagal: ' + error.message;
        messageDiv.style.background = '#f8d7da';
        messageDiv.style.color = '#721c24';
    }
});

// Clear message when user starts typing
document.getElementById('username').addEventListener('input', function() {
    document.getElementById('message').className = 'message';
    document.getElementById('message').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('message').className = 'message';
    document.getElementById('message').style.display = 'none';
});

// Check if user is already logged in
window.addEventListener('load', async () => {
    const session = localStorage.getItem('supabase_session');
    if (session) {
        const { data, error } = await supabase.auth.getSession();
        if (data.session) {
            // User is already logged in, redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Session expired, clear storage
            localStorage.removeItem('supabase_session');
        }
    }
});
