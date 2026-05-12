# BillonesNextApp

A modern Next.js application with landing page, user authentication (Login/Signup), and responsive design built with Tailwind CSS.

## Features

- **Landing Page** – Hero section with call-to-action buttons, features showcase, and footer.
- **Login Page** – Email and password fields with client-side validation.
- **Signup Page** – Full name, email, password, and confirm password fields with validation.
- **Form Validation** – Real-time error messages for required fields, email format, password length (min 6 chars), and password confirmation.
- **Dark Mode Support** – Automatically adapts to system color scheme preference.
- **Responsive Design** – Optimized for mobile, tablet, and desktop screens.

## Project Structure

```
billones-nextapp/
├── app/
│   ├── globals.css          # Global styles and Tailwind CSS imports
│   ├── layout.tsx           # Root layout with navigation bar
│   ├── page.tsx             # Landing page (Hero, Features, CTA, Footer)
│   ├── login/
│   │   └── page.tsx         # Login page with validation
│   └── signup/
│       └── page.tsx         # Signup page with validation
├── lib/
│   └── db.ts                # Database configuration example for "billones_nextapp"
├── public/
│   └── index.html           # Static HTML file
├── .gitignore
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.mjs       # PostCSS configuration (Tailwind CSS)
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Clone and Run

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project folder**

   ```bash
   cd billones-nextapp
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000) to see the app running.

   - Home page: `/`
   - Login page: `/login`
   - Signup page: `/signup`

## GitHub Push Instructions

Use these commands to push your changes to GitHub:

```bash
# 1. Check the current status of your project
git status

# 2. Add all changed files to staging
git add .

# 3. Commit the changes with a descriptive message
git commit -m "Added landing page, login and signup pages with validation"

# 4. Push the updates to GitHub
git push origin main
```

> **Note:** Replace `main` with your branch name (e.g., `master`) if different.

## Database Setup

This project uses a database named **`billones_nextapp`**. To connect it:

1. **Install a database driver** (e.g., MySQL):

   ```bash
   npm install mysql2
   ```

2. **Create a `.env.local` file** in the project root with your database credentials:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=billones_nextapp
   DB_PORT=3306
   ```

3. **Create the users table** using this SQL:

   ```sql
   CREATE TABLE IF NOT EXISTS users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. The file `/lib/db.ts` contains a ready-to-use database connection example.

## Tech Stack

- [Next.js](https://nextjs.org/) – React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS framework
- [MySQL/MariaDB](https://www.mysql.com/) – Database (optional, for production)

## Detailed Validation Logic

### Login Validation

| Field    | Rules                                      |
|----------|--------------------------------------------|
| Email    | Required, must be a valid email format     |
| Password | Required                                    |

### Signup Validation

| Field            | Rules                                        |
|------------------|----------------------------------------------|
| Full Name        | Required                                     |
| Email            | Required, must be a valid email format       |
| Password         | Required, minimum of 6 characters            |
| Confirm Password | Required, must match Password                |

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)