### **User Stories**

---

#### **1. User Registration**

- **Title**: User Registration
- **Description**: As a new user, I want to create an account so that I can access personalized features like ordering and reservations.
- **Acceptance Criteria**:
  - User can enter a username, password, and personal details to register.
  - Registration form validates required fields and provides feedback for errors.
  - A new account is created in the system, and the user is notified of a successful registration.
  - Password is securely hashed before storage.
- **Priority**: High

---

#### **2. User Login**

- **Title**: User Login
- **Description**: As a registered user, I want to log in to the system so I can access my account features.
- **Acceptance Criteria**:
  - User can enter username/email and password to log in.
  - System validates credentials and provides an error message if incorrect.
  - Successful login grants access to the user dashboard with personalized features.
  - A JWT token is issued upon successful login for session management.
- **Priority**: High

---

#### **3. Menu Browsing**

- **Title**: Menu Browsing
- **Description**: As a customer, I want to browse the restaurant menu by category so that I can find items I’d like to order.
- **Acceptance Criteria**:
  - Menu items are displayed by category, with images, names, and prices.
  - User can click on an item for more details.
  - Menu is searchable by keyword and filterable by category.
- **Priority**: Medium

---

#### **4. Add Item to Cart**

- **Title**: Add Item to Cart
- **Description**: As a customer, I want to add menu items to a cart so that I can review them before ordering.
- **Acceptance Criteria**:
  - User can select a quantity for each item and add it to the cart.
  - Cart icon shows the number of items currently in the cart.
  - Items added to the cart are listed with names, quantities, and prices.
- **Priority**: High

---

#### **5. View and Edit Cart**

- **Title**: View and Edit Cart
- **Description**: As a customer, I want to view my cart and make changes so that I can adjust my order before checkout.
- **Acceptance Criteria**:
  - User can view items in their cart with name, quantity, and total cost.
  - User can update quantities or remove items.
  - Cart displays a total cost for all items.
- **Priority**: High

---

#### **6. Place an Order**

- **Title**: Place an Order
- **Description**: As a customer, I want to place an order for takeaway so that I can receive my food at a convenient time.
- **Acceptance Criteria**:
  - User can review the cart items and proceed to order.
  - User can select order type (e.g., takeaway).
  - System confirms the order and provides an estimated preparation time.
- **Priority**: High

---

#### **7. Make a Reservation**

- **Title**: Make a Reservation
- **Description**: As a customer, I want to reserve a table so that I am assured of a spot at the restaurant.
- **Acceptance Criteria**:
  - User can select a date, time, and number of people for the reservation.
  - System verifies table availability and confirms the reservation.
  - User receives a notification confirming the reservation status.
- **Priority**: High

---

#### **8. View Order History**

- **Title**: View Order History
- **Description**: As a customer, I want to view my past orders so that I can reference previous purchases.
- **Acceptance Criteria**:
  - User can view a list of past orders with order details and status.
  - User can reorder items from a previous order.
- **Priority**: Medium

---

#### **9. Admin Manage Menu**

- **Title**: Admin Manage Menu
- **Description**: As an admin, I want to add, edit, or delete menu items so that the menu is current and accurate.
- **Acceptance Criteria**:
  - Admin can add new menu items with names, images, categories, and prices.
  - Admin can edit existing menu items or remove items no longer offered.
  - Menu changes are reflected on the customer’s menu page.
- **Priority**: High

---

#### **10. Admin Manage Orders**

- **Title**: Admin Manage Orders
- **Description**: As an admin, I want to view and update order statuses so that I can keep customers informed.
- **Acceptance Criteria**:
  - Admin can view a list of current orders with customer details and items ordered.
  - Admin can update the status of each order (e.g., pending, completed).
  - Notifications are sent to customers upon order status changes.
- **Priority**: High

---

#### **11. Admin Manage Reservations**

- **Title**: Admin Manage Reservations
- **Description**: As an admin, I want to view and manage reservations so that I can allocate tables efficiently.
- **Acceptance Criteria**:
  - Admin can view upcoming reservations with customer details and party size.
  - Admin can update the status of reservations (e.g., confirmed, canceled).
  - System notifies customers of reservation status updates.
- **Priority**: High

---

#### **12. User Notifications**

- **Title**: User Notifications
- **Description**: As a user, I want to receive notifications for order and reservation status updates so that I am informed in real time.
- **Acceptance Criteria**:
  - User receives notifications for changes in order and reservation statuses.
  - Notifications are marked as “unread” by default and can be marked as “read” by the user.
- **Priority**: Medium

---

#### **13. Secure Access and Role-Based Permissions**

- **Title**: Secure Access and Role-Based Permissions
- **Description**: As the system, I want to enforce role-based access control so that only authorized users can perform specific actions.
- **Acceptance Criteria**:
  - Customers have access only to ordering and reservation features.
  - Admins have access to management features for menu, orders, and reservations.
  - Unauthorized access attempts are denied and logged.
- **Priority**: High

---

#### **14. Admin Dashboard Overview**

- **Title**: Admin Dashboard Overview
- **Description**: As an admin, I want to see a summary of current orders, reservations, and inventory so that I can quickly assess restaurant status.
- **Acceptance Criteria**:
  - Admin sees an overview of pending orders, upcoming reservations, and current menu status.
  - Dashboard is accessible from the admin login and provides clickable links to detailed management pages.
- **Priority**: Medium

---

#### **15. System Error Handling and Feedback**

- **Title**: System Error Handling and Feedback
- **Description**: As a user, I want clear error messages and feedback so that I can understand and address issues with my actions.
- **Acceptance Criteria**:
  - Users receive clear, specific error messages for invalid actions (e.g., “Invalid login credentials”).
  - System catches common errors, such as failed database connections, and informs the user appropriately.
- **Priority**: Medium