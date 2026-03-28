Quiz: A Full-Stack App

A MERN-stack application (Next.js, Node.js, Payload CMS, PostgreSQL) that allows users to take an interactive cosmic personality quiz and store their results. Built with a focus on **clean architecture**, **reusable components**, and **professional DX (Developer Experience)**.

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15 (App Router), Tailwind CSS, Lucide React.
- **Backend/CMS:** Payload CMS 3.0 (Headless), Node.js.
- **Database:** PostgreSQL.
- **API Layer:** GraphQL (for flexible, type-safe data fetching).
- **State Management:** React Context API (to avoid prop-drilling).
- **Security:** AES-256 Encryption for sensitive user notes.
- **DevOps:** Docker & Docker Compose to run postgres & node containers.

---

## 🏃 How to Run the Project

First clone the project as:

1. `git clone https://github.com/NukhbaAhmad/Cosmic-Quiz-App.git`
2. `cd Cosmic-Quiz-App`

---

## 🏃 How to Run the Project

### Option A: Full Docker Mode (Zero Setup)

Best for production-like environments.

1.  **Spin up containers:**
    ```bash
    docker-compose up --build
    ```
2.  **Seed the database (Questions & Ranges seeded, in case admin doesn't want to add them):**
    ```bash
    docker-compose exec payload npm run seed
    ```
3.  **Check status:**
    ```bash
    docker-compose ps
    ```
4.  **Sync Types:**
    ```bash
    docker-compose exec payload npm run generate:types
    ```

### Option B: Hybrid Mode (Node Local + PostgreSQL Docker)

Runs PostgreSQL in Docker while Next.js/Payload run on your local machine.

1.  **Start Db:**
    ```bash
    docker-compose up --build postgres
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Sync Types of Payload CMS:**
    ```bash
    npm run generate:types
    ```
4.  **Run Development Server:**
    ```bash
     npm run dev
    ```
5.  **Seed Data:**
    ```bash
     npm run seed
    ```
---

## Access Points

- Quiz App: `http://localhost:3000`
- Admin Panel: `http://localhost:3000/admin`
- Database: `localhost:5432`
- Default User: (First time, create via setup screen)
 
---

## 🏗 Admin Features

**1. Flexible Quiz Management:**
- Can add the quiz main title.
- Can add, edit questions with 2–4 options each.
- Can add ranges.

**2. Dynamic Ranges:**
- If the Admin doesn't provide custom result ranges, the system falls back to `DEFAULT_QUIZ_RESULTS`.
- The results are calculated based on the default ranges if not ranges provided/added.

**3. Automated Seeding:**
- Supports a `QUIZ_QUESTIONS` JSON/TS file for bulk uploads via the seed script.

**4. UI Customization:** 
- Can add custom quiz, score ranges, with titles for quiz 
- Questions and options are fully editable from the Payload UI, supporting custom ordering and scores.


---

## 🏗 CMS Features
 
### What You Can Do As Admin
 
**1. Manage Questions**
- Navigate to "Questions" collection
- Click "Create" to add new question
- Set question text and 2-4 options with scores (0-3)
- Options are editable and reorderable
 
**2. Manage Ranges (Results)**
- Navigate to "Quiz Ranges" collection
- Create ranges manually (e.g., 0-6: Mooncat, 7-14: Solar Fox)
- OR use default ranges (auto-loaded if none exist)
 
**3. View User Responses**
- Navigate to "Quiz Responses" collection
- See all user submissions with encrypted notes
- Notes auto-decrypt for display
- Filter by email, score range, or date
 
**4. User Management**
- Navigate to "Users" collection
- Create additional admin accounts
- Control quiz data visibility
 

### What You Can Do As User
 
**1. Main layout**
- Navigate to "/" route
- A main layout for either taking Quiz or viewing results
 
**2. Take Quiz**
- Select Take Quiz to start the quiz
- A loader shown until data fethed.
- If no data found proper error messages shown
- Take the quiz and see the final score.
- If provided email can save the notes+scores
- After submission can either take another quiz to head to main layout page
 
**3. View Results**
- Can view the saved records history.
- Enter the email with proper format to get the details.
- A loader shown until data fetched.
- If no data found proper error messages shown
 
**4. Admin Only Dashboard**
- An admin only route added for access to payload CMS Dashboard

**5. Added notes & email**
- Can add email while saving scores.
- Can query using email to get all the scores ever saved.

---

## 🧠 Architectural Choices & Assumptions

- **GraphQL over REST:** I chose GraphQL for its compatibility with Payload's schema and to prevent over-fetching, ensuring the frontend only requests necessary fields.

- **Encryption Hooks:** Implemented `beforeChange` and `afterRead` hooks in Payload to ensure user "Notes" are encrypted at rest in the database but readable in the UI.

- **Context API:** Used to manage quiz state (answers, scoring) globally, ensuring a smooth transition between questions without re-rendering the entire layout.

- **Proper Fallbacks** Added proper Data Guards to show messages if no data found and Proper loaders added to ensure better UX.

- **Hybrid Docker Workflow:** Decided on a hybrid approach to save local machine resources and take advantage of Next.js Fast Refresh during frontend development.

- **Seeding:** Added seeds script to esnure the proper uploading of the available questions and ranges with just a single command. This saves the time while testing with just one command.

- **UI Components:** Added small resuable components to ensure the clean structure for UI.

- **Validations** Added proper validations for email, notes, quering emails to ensure the correct data hit the database.

---

## ⏳ Time Management & Trade-offs

_Following prioritizations:_

### ✅ Prioritized:

1.  **Project Setup & Infrastructure:** 
    - Small folder structure setup 
    - Dockerizing the environment to ensure "it works on every machine."

2.  **Backend Integration:** Establishing a solid relationship between Payload CMS and the frontend via GraphQL.

3.  **Responsive UI:** Ensuring a "Mobile First" experience with cosmic-themed glassmorphism.

### ⚠️ Simplified/Skipped:

1.  **Dynamic Score Sync:** Currently, scores are "snapshotted" at the time of the quiz. If an admin changes a score later, the past results don't auto-update.

2.  **Full User CRUD:** Focused on the core "Take Quiz" and "View History" flow; full profile management was simplified.

3.  **Better Tailwind CSS Mantainace** Global files or themes can be added for better UI/tailwind management.

### 🚀 Future Improvements:

1.  **Real-Time Score Sync:** Implement a "Reference" system where user answers are stored by ID, so scores update dynamically if the Admin changes question values.

2.  **Private Results:** Implement Auth so users can only see their own history, preventing unauthorized email lookups.

3.  **Upload Questions:** Can add feature for uploading files with a proper format to save all questions in db at once by admin

4.  **Frontend Optimizations** Can make the frontend more better, more better way of organizing css classes
can make the classes dynamic, use variables or direct define the css classes if needed for tailwind4

5.  **Navigations** Can make the routing more sleek
