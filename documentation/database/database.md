# **Database Design Documentation**

---

## **Database Overview**

**Database Name**: `rendezvous_db`

The database design for the Rendezvous Restaurant Website is structured to support the functionalities of a restaurant management system, including user authentication, menu browsing, reservations, takeaways, orders, and notifications. Each table in the database represents a key component of the application, supporting a logical flow of data across the system.

---

## **Tables and Schema**

### **1. Categories**

Stores information about menu categories for organizing restaurant items.

- **Table Name**: `Categories`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each category.
  - `name` (VARCHAR): Name of the category (unique).
  - `created_at` (TIMESTAMP): Timestamp for when the category was created.

---

### **2. Users**

Contains user account details, including role-based access information.

- **Table Name**: `Users`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each user.
  - `name` (VARCHAR): First name of the user.
  - `surname` (VARCHAR): Last name of the user.
  - `username` (VARCHAR): Unique username.
  - `password` (VARCHAR): Password (hashed for security).
  - `role` (ENUM): Defines user role, either `customer` or `admin`.
  - `created_at` (TIMESTAMP): Timestamp for user creation.

---

### **3. Menu**

Represents individual menu items available at the restaurant.

- **Table Name**: `Menu`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each menu item.
  - `name` (VARCHAR): Name of the menu item.
  - `image` (VARCHAR): Path or URL for the item's image.
  - `price` (DECIMAL): Price of the menu item.
  - `category_id` (INT, Foreign Key): Links to `Categories` table for category classification.
  - `created_at` (TIMESTAMP): Timestamp for when the menu item was added.
  - `updated_at` (TIMESTAMP): Automatically updates timestamp on record modification.

---

### **4. Cart**

Stores items added by customers to their cart for order preparation.

- **Table Name**: `Cart`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each cart entry.
  - `user_id` (INT, Foreign Key): Links to `Users` table.
  - `menu_id` (INT, Foreign Key): Links to `Menu` table.
  - `quantity` (INT): Quantity of the selected menu item.
  - `created_at` (TIMESTAMP): Timestamp for when the item was added to the cart.

---

### **5. Tables**

Tracks seating arrangements within the restaurant.

- **Table Name**: `Tables`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each table.
  - `table_number` (INT): Unique table number for restaurant seating.
  - `seats` (INT): Number of seats at the table.

---

### **6. Reservations**

Manages reservation details for customers.

- **Table Name**: `Reservations`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each reservation.
  - `user_id` (INT, Foreign Key): Links to `Users` table.
  - `table_id` (INT, Foreign Key): Links to `Tables` table.
  - `reservation_time` (DATETIME): Scheduled time for the reservation.
  - `number_of_people` (INT): Number of people attending.
  - `status` (ENUM): Status of the reservation (`pending`, `confirmed`, `canceled`).
  - `created_at` (TIMESTAMP): Timestamp for reservation creation.

---

### **7. Takeaway**

Handles takeaway orders placed by customers.

- **Table Name**: `Takeaway`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each takeaway order.
  - `user_id` (INT, Foreign Key): Links to `Users` table.
  - `menu_id` (INT, Foreign Key): Links to `Menu` table.
  - `quantity` (INT): Quantity of the selected menu item for takeaway.
  - `takeaway_time` (DATETIME): Scheduled time for order pickup.
  - `status` (ENUM): Current status of the takeaway (`pending`, `completed`, `canceled`).
  - `created_at` (TIMESTAMP): Timestamp for takeaway order creation.

---

### **8. Orders**

Stores information about dine-in orders.

- **Table Name**: `Orders`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each order.
  - `user_id` (INT, Foreign Key): Links to `Users` table.
  - `menu_id` (INT, Foreign Key): Links to `Menu` table.
  - `quantity` (INT): Quantity of the selected menu item for the order.
  - `order_time` (DATETIME): Time the order was placed.
  - `status` (ENUM): Status of the order (`pending`, `completed`, `canceled`).
  - `created_at` (TIMESTAMP): Timestamp for order creation.

---

### **9. Notifications**

Manages notifications for user updates, including reservations, takeaways, and order statuses.

- **Table Name**: `Notifications`
- **Columns**:
  - `id` (INT, Primary Key): Unique identifier for each notification.
  - `user_id` (INT, Foreign Key): Links to `Users` table.
  - `message` (TEXT): Notification content.
  - `type` (ENUM): Type of notification (`reservation`, `takeaway`, `order`).
  - `status` (ENUM): Read status of the notification (`unread`, `read`).
  - `created_at` (TIMESTAMP): Timestamp for notification creation.

---

## **Relationships**

1. **Users and Cart, Reservations, Takeaway, Orders**:  
   Each user can have multiple entries in `Cart`, `Reservations`, `Takeaway`, and `Orders`, establishing a **one-to-many relationship** with each table.

2. **Categories and Menu**:  
   Each menu item belongs to one category, but a category can have multiple menu items, creating a **one-to-many relationship**.

3. **Tables and Reservations**:  
   Each reservation is associated with a specific table for managing seating, defining a **one-to-many relationship** between `Tables` and `Reservations`.

4. **Notifications and Users**:  
   Each user can receive multiple notifications, establishing a **one-to-many relationship** with `Notifications`.

---

## **Conclusion**

This database design ensures that the **Rendezvous Restaurant Website** can efficiently store and manage critical data, supporting the main functionalities such as user roles, order processing, reservations, and notifications. The relational structure enables a scalable and secure management system that aligns with the project’s goals.
