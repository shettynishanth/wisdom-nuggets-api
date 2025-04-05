




















Run the Application:

Start the server with:
npm start

Open Command Prompt or PowerShell and run:

GET All Nuggets
curl http://localhost:3000/nuggets


GET a Random Nugget

curl http://localhost:3000/nuggets/random


POST a New Nugget
curl -X POST -H "Content-Type: application/json" -d "{\"text\":\"Your inspiring quote\",\"author\":\"Your Name\"}" http://localhost:3000/nuggets


DELETE a Nugget (e.g., with id 1)
curl -X DELETE http://localhost:3000/nuggets/1



# Wisdom Nuggets API

## Project Vision

Imagine an API that becomes the digital soul of the SuperMorpheus community—an inspiring repository where every entry is a “Wisdom Nugget.” These nuggets are short inspirational quotes designed to motivate, enlighten, and spark reflection in a fast-paced startup environment. This API is built to be simple yet robust, providing an immediate tool for community engagement while paving the way for future enhancements.

## Core Functionality

- **Inspiration on Demand:** Retrieve all available wisdom nuggets or a single random nugget to keep the community inspired.
- **Community Contribution:** Allow users to add their own nuggets, ensuring a continually evolving repository of insights.
- **Curated Deletion:** Enable removal of nuggets to maintain the quality and relevance of content.
- **Robust Data Management:** Persist data in a MySQL database with a schema that supports essential fields.

## Project Workflow

1. **Database Setup:**  
   - Use MySQL (via XAMPP) to create a dedicated database and table.
   - Pre-populate the table with a few sample wisdom nuggets using the provided SQL script (`schema.sql`).

2. **API Development:**  
   - Build the API using Node.js and Express.
   - Define endpoints to list all nuggets, get a random nugget, add new nuggets, and delete existing ones.
   - Incorporate error handling to manage invalid inputs and database issues.

3. **Testing & Documentation:**  
   - Test the API endpoints using tools like curl or Postman.
   - Document the API with usage examples in the README.

## Future Enhancements

- **User Authentication:** Secure endpoints to allow only authorized users to add or delete nuggets.
- **Pagination & Filtering:** Enhance the GET endpoints to support pagination and filtering by author or keywords.
- **Admin Dashboard:** Build a simple frontend to manage and review wisdom nuggets.
- **Analytics:** Implement basic usage analytics to track which nuggets are most viewed or contributed.

## Setup & Installation

### Prerequisites

- **Node.js** (v12+ recommended)
- **MySQL** (using XAMPP or any MySQL server)
- **npm** (Node Package Manager)

### Steps

1. **Clone the Repository:**

   Clone or download the project files to your local machine.

2. **Install Dependencies:**

   Open a terminal in the project directory and run:

   ```bash
   npm install



