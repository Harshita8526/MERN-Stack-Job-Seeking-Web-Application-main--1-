// // Example EditProfile.js component

// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const EditProfile = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     // Add other profile fields here
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put("/api/v1/user/profile", formData, { withCredentials: true });
//       toast.success(response.data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//         {/* Add other profile fields here */}
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";


// axios.defaults.baseURL = 'http://localhost:4000';

// const EditProfile = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     // Add other profile fields here
//   });

//   useEffect(() => {
//     // Fetch user profile data on component mount
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("/api/v1/user/profile", { withCredentials: true });
//         setFormData(response.data);
//       } catch (error) {
//         toast.error("Failed to load profile data");
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put("/api/v1/user/profile", formData, { withCredentials: true });
//       toast.success(response.data.message);
//     } catch (error) {
//       console.error("Error response from server:", error.response);
//       toast.error(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <div className="edit-profile">
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         {/* Add other profile fields here */}
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;


import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'http://localhost:4000';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add other profile fields here
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/v1/user/profile", { withCredentials: true });
        const { name, email } = response.data.user; // Extract name and email from user object
        setFormData({ name, email }); // Set name and email in the state
      } catch (error) {
        toast.error("Failed to load profile data");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/v1/user/profile", formData, { withCredentials: true });
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error response from server:", error.response);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Add other profile fields here */}
        <div className="form-actions">
        <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;




