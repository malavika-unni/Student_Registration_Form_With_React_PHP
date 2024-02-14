# Student Registration Form With React js - PHP

## Overview

This project is a web-based student registration form built using React for the front end and PHP for the back end. It allows students to input their personal, academic, and address details, along with skills and a passport-sized photo, which are then stored in a MySQL database.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Visual Studio Code](https://code.visualstudio.com/)
- [XAMPP](https://www.apachefriends.org/index.html) for PHP and MySQL
- [Node.js](https://nodejs.org/) for React development

### Setting Up the Project

1. **Visual Studio Code (VSCode):**
   - Download and install Visual Studio Code from the official website.

2. **PHP and a Local Server:**
   - Install XAMPP for PHP and MySQL.

3. **MySQL Database (PHPMyAdmin):**
   - Set up a MySQL database using PHPMyAdmin or any other MySQL management tool.
   - Create a database named "StudentData."
   - Create a table "StudentTable" in the "StudentData" database.

4. **React Development Environment:**
   - Install Node.js.
   - Create a new React app using Create React App. If you don't have Create React App installed, you can install it globally with:
     ```bash
     npm install -g create-react-app
     ```
     Then, create a new app:
     ```bash
     npx create-react-app regform
     ```

5. **Install Axios:**
   - Axios is used for making HTTP requests. Install it in your React app:
     ```bash
     npm install axios
     ```

6. **Add Bootstrap CDN:**
   - If you want to use Bootstrap for styling, you can add the Bootstrap CDN link in the `public/index.html` file in your React app:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="utf-8" />
       <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
         integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyL/HaE73LXL2mMI+pCBrzhBf7Lq4x1B9a"
         crossorigin="anonymous"
       />
       <title>Your App Title</title>
     </head>
     <body>
       <!-- ... -->
     </body>
     </html>
     ```

7. **Server-Side Script:**
   - Copy the PHP script (`StudentRegForm.php`) to the server directory (e.g., the "htdocs" directory for XAMPP).
   - Create an "uploads" folder in the same directory to store uploaded files.

8. **Database Configuration:**
   - Configure the database connection in the PHP script (`StudentRegForm.php`) with the correct credentials.

9. **File Upload Directory:**
   - Ensure that the server has write permissions to the "uploads" directory. Update the destination path in the PHP script accordingly.

10. **Run the React App:**
    - Navigate to the React app directory and run the development server:
      ```bash
      cd regform
      npm start
      ```

11. **Access the Application:**
    - Open a web browser and go to the address where your React app is running (usually http://localhost:3000).
    - Fill out the student registration form, and the data should be sent to the PHP script for processing.

Adjust configurations based on your specific environment and project structure.

## Components

### StudentRegForm.js (React Component)

This file contains the React component for the student registration form.

- It includes form fields for personal details, academic details, address details, skills, comments, and photo upload.
- Form data is sent to the server using Axios in the fileUpload function.
- Skills are managed using checkboxes, and the form supports file uploads for the photo.

### StudentView.js (React Component)

This file contains the React component to display user data in a printable format.

- It retrieves user data passed as props and presents it in a structured table format.
- Includes a "Print" button to trigger the printing of the displayed information.

### StudentRegForm.php (PHP Backend)

This PHP file handles the server-side logic for receiving form data, validating inputs, and storing data in a MySQL database.

- It sets up necessary headers for CORS handling and specifies the allowed file types for the uploaded photo.
- Email validation is performed, and duplicate email entries are checked before inserting data into the database.
- Upon successful data insertion, the uploaded photo is moved to a designated folder.

## Database

The project assumes a MySQL database named "StudentData" with a table named "StudentTable" to store student information.

- The table structure includes fields for various details, including the image file name.

## Instructions for Running the Project

1. Ensure you have a running MySQL server with a database named "StudentData" created.
2. Update the MySQL connection details in the PHP file if necessary.
3. Place the React components in a React project and start the development server.
4. Ensure the server specified in the React component matches the server where the PHP file is hosted.
5. Access the registration form through the React application, fill in the details, and submit.
6. Check the MySQL database for the stored information.

## Note

- This is a basic implementation, and security considerations (e.g., SQL injection prevention) should be addressed for production use.
- File uploads and handling might need additional configuration based on the hosting environment.
- Update the file paths and URLs in the code according to your project structure and hosting environment.


## APPENDIX

### <p align="center">Student Registration Form Interface</p>

![Screenshot 2024-02-13 171440](https://github.com/malavika-unni/Student_Registration_Form_With_React_PHP/assets/155310675/10142f3b-3523-42ff-872e-43cb539fff7a)

![Screenshot 2024-02-13 171502](https://github.com/malavika-unni/Student_Registration_Form_With_React_PHP/assets/155310675/8028c197-d266-4749-8d03-453f73a86985)

![Screenshot 2024-02-13 171753](https://github.com/malavika-unni/Student_Registration_Form_With_React_PHP/assets/155310675/580f3f59-35b8-4bdb-a781-c9ac0a4a6fc8)

### <p align="center">Student Registration Form Validation</p>

![Screenshot 2024-02-14 111446](https://github.com/malavika-unni/Student_Registration_Form_With_React_PHP/assets/155310675/5935973e-7dc1-4e77-93df-051e349f9015)

![Screenshot 2024-02-14 111529](https://github.com/malavika-unni/Student_Registration_Form_With_React_PHP/assets/155310675/f1213344-9733-4675-84bc-8434492c6410)

![Screenshot 2024-02-14 111552](https://github.com/malavika-unni/Student_Registration_Form_With_React_PHP/assets/155310675/104f6f59-8605-4601-b3f4-753da4959b13)

### <p align="center">StudentData Database with StudentTable</p>
                                                           
![Screenshot 2024-02-14 110953](https://github.com/malavika-unni/Student_Registration_Form_With_React_PHP/assets/155310675/649395e2-3ac4-4294-afa6-95839f1be7b1)

