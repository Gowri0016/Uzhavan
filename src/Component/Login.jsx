import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  return (
    <div className="min-h-screen mt-6 flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-800">🌿 Farmer Login</h1>
          <p className="text-gray-500 mt-1">Grow your future with us</p>
        </div>

        {/* Google Login */}
        <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle size={24} />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-3 text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Input Fields */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>

       {/* Create New Account Link */}
<a
  href="/creatacc"  // <-- change this to your signup route or URL
  className="mt-4 block text-center w-full border border-green-700 text-green-700 py-3 rounded-lg hover:bg-green-100 transition font-semibold"
>
  Create New Account
</a>


        {/* Footer Note */}
        <p className="text-sm text-center text-gray-600 mt-6">
          New to FarmNet? <span className="text-green-700 font-semibold cursor-pointer hover:underline">Sign up here</span>
        </p>
        <p className="text-xs text-center text-gray-400 mt-2">
          Already logged in? You're good to go! 🚜
        </p>
      </div>
    </div>
  );
}