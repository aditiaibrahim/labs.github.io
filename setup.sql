-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample user (username: admin, password: admin123)
INSERT INTO users (username, password, email)
VALUES ('admin', 'admin123', 'admin@example.com')
ON CONFLICT (username) DO NOTHING;

-- Optional: Insert additional sample users
-- INSERT INTO users (username, password, email)
-- VALUES ('user1', 'password1', 'user1@example.com');

-- Enable Row Level Security (RLS) - Optional for demo
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (for demo purposes)
-- CREATE POLICY "Allow public read access" ON users
--     FOR SELECT USING (true);

-- Create policy to allow public insert access (for demo purposes)
-- CREATE POLICY "Allow public insert access" ON users
--     FOR INSERT WITH CHECK (true);