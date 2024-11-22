import * as AuthSession from 'expo-auth-session';

const STRAVA_CLIENT_ID = '140815';
const STRAVA_CLIENT_SECRET = 'b9797414dc07e05e30260474c3072072c2c72c9a';

// Generar la URI de redirección
const redirectUri = AuthSession.makeRedirectUri({
  scheme: 'myapp', 
  useProxy: true, 
});

export default async function authenticateWithStrava  () {
    console.log('Auth')
  const authUrl = `https://www.strava.com/oauth/mobile/authorize?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=activity%3Awrite%2Cread&state=test`;
  const result = await AuthSession.startAsync({ authUrl });
  console.log('result', result)

  if (result.type === 'success') {
    console.log('Authentication successful:', result.params);
    return result.params;
  } else {
    console.error('Authentication failed:', result);
    return null;
  }
};
