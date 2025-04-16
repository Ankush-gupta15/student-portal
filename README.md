# CampusConnect 🏫🔗

Welcome to CampusConnect, a dynamic web portal designed to streamline student registrations and provide efficient administrative control. 🎉


## Technologies Used 🛠️
This project is built using the following technologies:
*   **Next.js:** A React framework for building user interfaces. ⚛️
*   **React:** A JavaScript library for building user interfaces. 💻
*   **MongoDB:** A NoSQL database for storing student data. 🗄️
*   **Email Services:** For sending confirmation emails to students. 📧

  
## Project Description 📖
CampusConnect serves as a central hub for students and administrators. It offers:

*   **Student Registration:** Students can easily register on the platform by providing their essential details such as name, roll number, branch, email ID, and password. ✍️
*   **Secure Data Storage:** All student data is securely stored in MongoDB. 🔒
*   **Admin Management:** Administrators can log in to a dedicated panel and manage student registrations effectively. 👨‍💼👩‍💼
*   **Approval/Rejection System:** Admins have the power to approve or reject student registration requests, ensuring that only verified students gain access. ✅❌
*   **Email Notifications:** When a student's registration is approved, they receive a confirmation email to their registered email address. 📧
* **Multi-List Management:** The admin panel is equipped with tabs to manage different student categories:
     * Approval List - Pending student registrations.
     * Approved List - Students whose registration is approved.
     * Rejected List - Students whose registration is rejected.
     * Total List - The complete list of all registered students.


## How It Works ⚙️
CampusConnect is designed with two primary roles in mind: **Students** and **Administrators**. Here's a breakdown of how the system operates:

### Student Workflow 🧑‍🎓
1.  **Registration:** Students visit the portal and access the registration form. They fill in the form with their:
    *   Name
    *   Roll Number
    *   Branch
    *   Email ID
    *   Password
2.  **Data Storage:** Upon submitting the form, their details are securely stored in MongoDB, awaiting administrator approval. 🔐
3.  **Awaiting Approval:** Students wait for the administrator to review and approve their registration. ⏳
4. **Email Confirmation:** Once approved, students receive a email confirming their successful registration.🥳
   

### Administrator Workflow 👨‍💼👩‍💼
1.  **Login:** Administrators access the portal using their credentials and land on the admin panel. 🔑
2.  **Approval List:** They navigate to the "Approval List" tab to view a list of pending student registrations. 📋
3.  **Review & Action:** For each registration, they can:
    *   **Approve:** If the student's information is correct, they can approve the registration. ✅
    *   **Reject:** If there are any discrepancies or issues, they can reject the registration. ❌
4. **Data update:** After approval and reject data updated accordingly
5. **Email Notification:** When an admin approves a student, the system automatically sends a confirmation email to the student's registered address. 📧
6.  **List Management:**
    *   **Approved List:** Displays all students who have been approved. 👍
    *   **Rejected List:** Displays all students whose registrations have been rejected. 👎
    *   **Total List:** Shows a comprehensive list of all registered students, regardless of their approval status. 📊

CampusConnect is an effective solution to simplify the student registration process and make it manageable. 🌟
