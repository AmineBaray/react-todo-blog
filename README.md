# react-todo-blog

**react-todo-blog** is a React application. It demonstrates how to create a simple blog application with features like adding, viewing, and deleting blog posts.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of blog posts.
- Add new blog posts.
- View details of each blog post.
- Delete blog posts.

## Getting Started

These instructions will help you set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js] (which includes npm)
- [Git]

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AmineBaray/react-todo-blog
    ```

2. **Navigate to the project directory:**

    ```bash
    cd react-todo-blog
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Run the JSON server (if applicable):**

    If your project uses a local JSON server, start it with:

    ```bash
    npx json-server --watch data/db.json --port 8000
    ```

5. **Start the React application:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Usage

- **Home Page:** Displays a list of all blog posts.
- **Add Blog:** Navigate to the "Add New Blog" page to create a new blog post.
- **Blog Details:** Click on a blog title to view its details.
- **Delete Blog:** On the blog details page, you can delete the blog post.

## Routes

- `/` - Home page showing the list of blog posts.
- `/NewBlog` - Page to add a new blog post.
- `/blogDetails/:id` - Page to view details of a specific blog post.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. You can also raise issues if you find bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
