"use client";
import { Center } from "@mantine/core";
import { useAuthStore } from "../store/authStore";
import ValidateAuth from "../components/ValidateAuth";
import MainAppShell from "../components/MainAppShell";

const Pay = () => {
  const { user } = useAuthStore();
  return (
    <ValidateAuth>
      <MainAppShell>
        <Center mt={40}>
          <iframe
            src={`https://docs.google.com/forms/d/e/1FAIpQLSd7Bs0uQayl1GSOaB_dwZFYtpRBAO67iehIgOC88eOD-lhOFA/viewform?embedded=true&usp=pp_url&entry.842912846=${
              user ? user.email : ""
            }`}
            width="640"
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </Center>
      </MainAppShell>
    </ValidateAuth>
  );
};

export default Pay;
