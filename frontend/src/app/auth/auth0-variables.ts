interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '0gWkK0ifwH84DVipm8KkmP64y8M8SdBa',
  domain: 'cs-361-project.auth0.com',
  callbackURL: 'http://localhost:4200'
};
