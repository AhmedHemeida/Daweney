# 🎓 Graduation Project – Medical Services App

## 📌 Problem Statement

Many people struggle to find a nurse or doctor to care for them during treatment. From this issue, the idea for our application was born. The system allows patients to log in and access a wide range of medical services such as laboratory tests, radiology services, and more.

Patients can also request a healthcare provider (e.g., a nurse) for home care. The application will display available service providers based on:

- 💰 Price  
- 📍 Distance  
- 🛠️ Type of service  

After selecting a provider, the patient can pay using various payment methods supported by the application — offering a seamless and efficient solution to a real-world healthcare problem.

## 🛠️ Tools & Technologies

To ensure accessibility and convenience, we developed both a **web application** and a **mobile application** so that users can interact with the system from anywhere, whether through a browser or a mobile device.

## 🧩 System Overview

There are **two main applications** in the system:

1. **Patient Application**  
   - Allows users to browse services and request care.
   - Can accept or reject requests from provider's application. 
   - Enables secure communication and payment after selecting a provider.

2. **Service Provider Application (Nurse/Doctor)**  
   - Receives service requests.  
   - Can apply for patient's requests.  
   - Communicates directly with the patient to provide the required care.

## 🧱 Technical Details

- **Backend**:  
  - `Node.js`, `Express.js`, `MongoDB`
    
- **Frontend**:  
  - `React.js`, `Bootstrap.js`   
    

- **Authentication & Authorization**:  
  - `OAuth 2.0`  
  - `Nodemailer` – to send verification codes via email  
  - `Passport.js (Google Strategy)` – login with Google account  
  - `JWT` – secure token-based authentication

- **Validation**:  
  - `Joi` – schema-based input validation

- **Database**:  
  - `MongoDB` with `Mongoose`

- **Design Pattern**:  
  - Model-View-Controller (MVC)
