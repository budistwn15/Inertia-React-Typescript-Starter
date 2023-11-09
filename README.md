# Laravel Inertia React Typescript Starter

This project is a web application that uses Laravel as the backend and React along with Inertia.js for the frontend, and uses TypeScript for static data types.

## 🚀 Getting Started

The instructions below will help you get a copy of this project and run it on your local machine for development and testing purposes.

### Prerequisites

What needs to be installed on your machine before getting started? Include links or installation guides if necessary.

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/budistwn15/Inertia-React-Typescript-Starter.git
   cd laravel-inertia-react-typescript
   ```

2. **Install Dependencies**

   ```bash
   composer install
   npm install
   ```

3. **Configuration**

   Copy `.env.example` to `.env` and set up the database configuration and other settings.

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Migrate Database and Seed Data**

   ```bash
   php artisan migrate --seed
   ```

5. **Run the Server**

   ```bash
   php artisan serve
   ```

6. **Open the Application**

   Open your browser and visit [http://localhost:8000](http://localhost:8000)

### Development

To start the development server, use the following command:

```bash
npm run dev
```

### Project Structure

Brief explanation of the directory structure and main files in the project.

- `resources`: Resource files such as React components and Blade layouts.
- `routes`: Definition of Laravel application routes.
- `database`: Migrations and initial data seeding files.
- `app`: Laravel business logic.

### Contribution

We welcome contributions from the community. Please create a pull request and make sure to follow the established contribution guidelines.

### License

This project is licensed under the [MIT License](https://github.com/budistwn15/Inertia-React-Typescript-Starter/blob/master/LICENSE.md).
