import { withAuth } from 'next-auth/middleware';

export default withAuth;

// These are our protexted paths
// The user must be signed in to access these paths otherwise they will be redirected to the sign in page

export const config = {
    matcher: ["/chat", "/chat:id*", "/register"]
}

