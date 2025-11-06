import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '../../auth/store';
import { api } from '../../lib/api';

export function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const token = searchParams.get('token');
      const error = searchParams.get('error');

      if (error) {
        // Redirect to register with error message
        navigate(`/register?error=${error}`);
        return;
      }

      if (!token) {
        navigate('/register?error=no_token');
        return;
      }

      try {
        // Get user profile using the token
        const response = await api.get('/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = response.data;

        // Log the user in
        login(token, user);

        // Redirect to dashboard
        navigate('/dashboard');
      } catch (err) {
        console.error('OAuth callback error:', err);
        navigate('/register?error=auth_failed');
      }
    };

    handleOAuthCallback();
  }, [searchParams, navigate, login]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-4"></div>
        <p className="text-xl text-gray-700">Completing authentication...</p>
        <p className="text-sm text-gray-500 mt-2">Please wait while we log you in</p>
      </div>
    </div>
  );
}
