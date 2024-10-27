# **Rendezvous Restaurant Website Documentation**

---

## **1. Project Overview**

**Project Title**: Rendezvous Restaurant Website  
**Description**: The Rendezvous Restaurant Website is a full-stack web application designed to streamline online ordering, takeaways, and reservation processes for customers, while equipping restaurant admins with effective tools to manage menu items, reservations, and orders. Built using the **MERN** (MySQL, Express, React, Node.js) stack, the project aims to enhance restaurant service efficiency and accessibility.

---

## **2. Project Objectives**

- **Improve Customer Experience**: Provide an intuitive online platform for browsing, ordering, and reserving tables.
- **Enhance Admin Control**: Enable restaurant administrators to manage menus, orders, takeaways, and reservations efficiently in real-time.
- **Ensure Security**: Protect user data through secure authentication and role-based access controls.
- **Deploy a Scalable Solution**: Utilize Microsoft Azure for secure, cloud-based deployment with potential for scaling to meet future demands.

---

## **3. Key Features**

### **3.1 User Authentication & Authorization**
   - **Customer Role**: Access to menu browsing, cart, ordering, and reservation functionalities.
   - **Admin Role**: Full access to manage all restaurant data, including adding/editing menu categories, managing orders, reservations, and user details.
   - **Security Protocols**: JWT for session management and bcrypt for secure password hashing.

### **3.2 Menu Browsing & Cart Management**
   - **Categorized Menu**: Customers can browse items organized by categories.
   - **Cart Functionality**: Allows customers to add items to a cart, review selections, and proceed with orders.

### **3.3 Order, Takeaway & Reservation Management**
   - **Customer Orders**: Customers can place orders for takeaways or dine-in reservations.
   - **Admin Control**: Admins can view and manage all incoming orders, takeaways, and reservations.

### **3.4 Admin Dashboard**
   - **Menu Management**: Add, edit, or delete menu categories and items.
   - **Order & Reservation Overview**: Track all active and past orders and reservations.
   - **User Management**: View customer details and manage user roles.

### **3.5 Notifications System**
   - **Customer Updates**: Notifications about order and reservation statuses.
   - **Admin Alerts**: Notifications for new orders, takeaways, and reservation requests.

---

## **4. Technologies Used**

| **Layer**       | **Technology**                |
|-----------------|-------------------------------|
| **Frontend**    | React, Tailwind CSS           |
| **Backend**     | Node.js, Express              |
| **Database**    | MySQL                         |
| **Security**    | JWT (authentication), bcrypt (password hashing) |
| **Deployment**  | Microsoft Azure               |

---

## **5. System Architecture**

The application follows a **client-server architecture** with separation between the frontend, backend, and database.

- **Frontend (Client)**: The user interface, developed in React with Tailwind CSS, communicates with the backend via RESTful APIs.
- **Backend (Server)**: Built on Node.js with Express, this layer handles application logic, processes requests, and interacts with the database.
- **Database**: MySQL database for managing structured data related to menu items, cart, takeaways, reservations, orders, and users.
- **Authentication & Security**: JWT for role-based access and bcrypt for secure storage of user credentials.

---

## **6. Deployment Strategy**

Deployment is planned on **Microsoft Azure** under the student account benefits program, providing a secure and accessible solution. This choice of platform ensures:
   - **High Availability**: Continuous uptime to support user access.
   - **Scalability**: Resources that can grow with the user base.
   - **Security & Compliance**: Azure’s security standards support data protection, encryption, and compliance with privacy regulations.

---

## **7. Target Audience**

The Rendezvous Restaurant Website is designed for **small to medium-sized restaurants** aiming to modernize and simplify customer service operations through online ordering and reservation functionalities. This solution is ideal for restaurants looking to increase customer engagement and streamline operational management.

---

## **8. Development Roadmap & Project Status**

### **8.1 Development Phases**
The project is structured across phases that allow for incremental progress and testing:

1. **Setup & Initial Configuration**  
2. **Frontend Development**: UI/UX design and cart/order components.
3. **Backend Development**: API setup, database integration, and authentication.
4. **Admin Dashboard Implementation**: Role-based access and admin controls.
5. **Testing**: Functional, integration, and user acceptance testing.
6. **Deployment**: Deploy the application on Microsoft Azure.

### **8.2 Current Status**
The project is in the **development phase**, with tracking and task management conducted via **GitHub Kanban boards** to organize issues and ensure streamlined progress.

---

## **9. Future Enhancements**

Potential future developments may include:
   - **Enhanced Customer Analytics**: Provide admins with insights into popular menu items, peak order times, etc.
   - **Feedback System**: Allow customers to review items and leave feedback.
   - **Multi-Language Support**: Expand accessibility to a broader audience.
   - **Mobile App Development**: Develop a mobile application for greater user convenience.

---

## **10. Conclusion**

The Rendezvous Restaurant Website serves as a comprehensive platform to elevate customer interaction and restaurant management. With its focus on security, accessibility, and scalability, the application is set to bring operational ease and enhanced customer service capabilities to restaurants, supporting future expansion and improvements.