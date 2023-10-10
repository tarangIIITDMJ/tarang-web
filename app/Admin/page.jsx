import { Button, Center, TextInput } from "@mantine/core";
import ValidateAuth from "../components/ValidateAuth";

const Admin = () => {
  return (
    <ValidateAuth>
      <Center mt={40}>
        <TextInput placeholder="Enter Tarang ID" />
        <Button>Submit</Button>
      </Center>
    </ValidateAuth>
  );
};

export default Admin;
