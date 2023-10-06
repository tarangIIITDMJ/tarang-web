"use client";
import MainAppShell from "../components/MainAppShell";
import { useAuthStore } from "../store/authStore";
import ValidateAuth from "../components/ValidateAuth";
import Loader from "../components/Loader";
export default function Profile() {
  const { user } = useAuthStore();
  return (
    <MainAppShell>
      <ValidateAuth>
        <h1>Profile</h1>
        {<div>{JSON.stringify(user)}</div>}
      </ValidateAuth>
    </MainAppShell>
  );
}
