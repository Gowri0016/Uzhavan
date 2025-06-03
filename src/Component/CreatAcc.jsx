import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function CreatAcc() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-800">Welcome Farmer 👨‍🌾</h1>
          <p className="text-sm text-green-600 mt-1">Create your account to grow with us!</p>
        </div>

        {/* Sign Up Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-between">
          <hr className="w-1/3 border-green-300" />
          <span className="text-green-600 text-sm">or</span>
          <hr className="w-1/3 border-green-300" />
        </div>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center gap-3 border border-green-400 py-3 rounded-lg hover:bg-green-50 transition">
          <FcGoogle size={22} />
          <span className="text-green-700 font-medium">Sign up with Google</span>
        </button>

        {/* Footer */}
<p className="text-xs text-center text-green-500">
  Already have an account?{' '}
  <a 
    href="/login" 
    className="text-green-700 font-semibold underline cursor-pointer"
  >
    Login
  </a>
</p>

      </div>
    </div>
  );
}
