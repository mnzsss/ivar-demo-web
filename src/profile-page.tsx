import type { UserProfile } from 'shared-types/user';

export function ProfilePage({ user }: { user: UserProfile }) {
  return <h1>{user.name}</h1>;
}
