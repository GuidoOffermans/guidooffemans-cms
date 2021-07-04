import { buildConfig } from 'payload/config';
import Posts from './collections/Posts';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3100',
  admin: {
    user: Users.slug,
  },
  collections: [
    Posts,
    Users,
  ],
});
