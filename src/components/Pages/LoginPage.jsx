"use client";

import { useState } from "react";

export default function LoginPage() {
  // State for form data
  const [formData, setFormData] = useState({ email: "", password: "" });

  // State for errors
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset error for this field as user types
    setErrors({ ...errors, [name]: "" });
  };

  // Basic validation
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // For now, just log the form values (replace with API or next-auth login later)
    console.log("Form submitted:", formData);

    if (!response.ok) {
      setErrors(data.error || 'Registration failed');
      return;
    }

    setSuccess(data.message || 'Registration successful! Logging you in...');

    // Optional: Wait for DB consistency
    await new Promise((res) => setTimeout(res, 500));

    // Automatically sign in the user after registration
    const signInResponse = await signIn('credentials', {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (signInResponse?.ok) {
      if (form.role === 'admin') {
        router.push('/admin_dashboard');
      } else {
        router.push('/student_dashboard');
      }
    } else {
      setErrors('Registration succeeded, but automatic login failed. Please sign in manually.');
    }

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-700">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${
                errors.email
                  ? "border-red-500 text-red-600"
                  : "border-gray-300 text-gray-700 focus:border-blue-500"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${
                errors.password
                  ? "border-red-500 text-red-600"
                  : "border-gray-300 text-gray-700 focus:border-blue-500"
              }`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* General error */}
          {errors.general && <p className="text-sm text-red-500">{errors.general}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
