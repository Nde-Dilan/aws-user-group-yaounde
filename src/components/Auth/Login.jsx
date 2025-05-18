import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/shared/Icon";
import { BASE_URL } from "../../data";

function Login() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (code.length !== 4) {
      setError("Please enter a 4-digit code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${BASE_URL}/api/auth/login`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      // Store token in localStorage
      localStorage.setItem("adminToken", data.token);

      // Redirect to admin page
      navigate("/paulaadmin");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Admin Access</h1>
          <p className="text-gray-600">
            Please enter the 4-digit security code
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="code"
                className="text-sm font-medium text-gray-700"
              >
                Security Code
              </label>
              <input
                type="password"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={4}
                pattern="[0-9]*"
                inputMode="numeric"
                autoComplete="off"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-center text-2xl tracking-widest"
                placeholder="••••"
              />
            </div>
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-button font-bold transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-secondary text-primary hover:bg-secondary/90"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Icon name="ri-loader-2-line" className="animate-spin mr-2" />
                Verifying...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-secondary hover:underline">
            Return to Home Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
