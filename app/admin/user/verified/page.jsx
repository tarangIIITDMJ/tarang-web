"use client"
import ValidateAuth from "@/app/components/ValidateAuth";
import { getVerifiedUsers } from "@/app/utils/apis";
import { Badge, Card, CardSection, Flex, Group, Pagination, Table, Text, Title } from "@mantine/core"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const total = users.length / 10 + 1;

    const getUsers = async () => {
        const res = await getVerifiedUsers();
        setUsers(res.data?.users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    const rows = (currentPage) => {

        const start = (currentPage - 1) * 10;
        const end = Math.min(start + 10, users.length);
        console.log(start, end, currentPage, users.length);
        return users.slice(start, end).map((user, index) => (
            <Table.Tr key={user.tarang_id}>
                <Table.Td>{(activePage - 1) * 10 + index + 1}</Table.Td>
                <Table.Td>{user.fname + " " + user.lname}</Table.Td>
                <Table.Td>{user.tarang_id}</Table.Td>
                <Table.Td>{user.phone}</Table.Td>
                <Table.Td>{user.college}</Table.Td>
                <Table.Td>
                    <Badge
                        color={
                            user.paymentVerified ?
                                "green" :
                                (user.paymentFormFilled && !user.paymentRejected ?
                                    "yellow" :
                                    "red")}
                        variant="light"
                    >
                        {user.paymentVerified ?
                            "Verified" :
                            (user.paymentFormFilled ?
                                (user.paymentRejected ?
                                    "Rejected" :
                                    "Verification Pending") :
                                "Unverified")}
                    </Badge>
                </Table.Td>
                <Table.Td>
                    {
                        user.paymentFormFilled ?
                            (user.purchaseTarangCard ?
                                "Tarang Card" :
                                "Entry Pass (Individual event)") :
                            "None Yet"
                    }
                </Table.Td>
                <Table.Td>
                    <Link href={`/admin/user/${user.tarang_id}`} style={{ color: "purple" }}>
                        Link
                    </Link>
                </Table.Td>
            </Table.Tr>
        ))
    };

    return (
        <ValidateAuth>
            <Title order={1}>
                Verified Users
            </Title>
            <Card padding={"lg"} radius={"lg"} m={10} shadow="sm" withBorder>
                <Group>
                    <Text fw={700}>Total Verified Users:</Text>
                    <Text>{users.length}</Text>
                </Group>
            </Card>
            <Table.ScrollContainer minWidth={500} type="native">
                <Table striped highlightOnHover withTableBorder m={20}>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>S. No.</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Tarang-ID</Table.Th>
                            <Table.Th>Phone</Table.Th>
                            <Table.Th>College</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Pass-type</Table.Th>
                            <Table.Th>User-card</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {rows(activePage)}
                    </Table.Tbody>
                </Table>
            </Table.ScrollContainer>
            <Flex justify={"center"}>
                <Pagination value={activePage} onChange={setActivePage} total={total} mt={10} />
            </Flex>
        </ValidateAuth>
    )
}