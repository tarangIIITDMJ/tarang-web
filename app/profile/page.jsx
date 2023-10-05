"use client";
import MainAppShell from "../components/MainAppShell";
import { useAuthStore } from "../store/authStore";
import ValidateAuth from "../components/ValidateAuth";
export default function Profile() {
  const { user, isloading } = useAuthStore();
  return (
    <MainAppShell>
      <ValidateAuth>
        <h1>Profile</h1>
        {isloading ? <div>Loading...</div> : <div>{JSON.stringify(user)}</div>}
      </ValidateAuth>
    </MainAppShell>
  );
}
