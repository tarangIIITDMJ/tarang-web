"use client"
import ValidateAuth from "@/app/components/ValidateAuth";
import { getAllEvents, getUsersByEvent } from "@/app/utils/apis";
import { Badge, Card, CardSection, Flex, Group, Pagination, Select, Table, Text, Title } from "@mantine/core"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [value, setValue] = useState('');
    const [events, setEvents] = useState([]);

    const total = users.length / 10 + 1;

    const getUsers = async (slug) => {
        const res = await getUsersByEvent(slug);
        setUsers(res.data?.users);
    }

    const getEventsData = async () => {
        const res = await getAllEvents();
        setEvents(res.data?.events.map(evnt => evnt.slug));
    }

    useEffect(() => {
        getUsers("");
        getEventsData();
    }, []);

    useEffect(() => {
        getUsers(value);
    }, [value])

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
                Users by Events
            </Title>
            <Select data={events} placeholder="Select Event" value={value} onChange={setValue} ml={30} mr={30} />
            <Flex align={"center"} justify={"space-around"} wrap={"wrap"} >
                <Card padding={"lg"} radius={"lg"} m={10} shadow="sm" withBorder bg={"rgba(10, 161, 255, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
                    <Group>
                        <Text fw={700}>Total Registered Users:</Text>
                        <Text>{users.length}</Text>
                    </Group>
                </Card>
                <Card padding={"lg"} radius={"lg"} m={10} shadow="sm" withBorder bg={"rgba(64, 192, 87, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
                    <Group>
                        <Text fw={700}>Total Verified Users:</Text>
                        <Text>{users.filter(usr => usr.paymentVerified).length}</Text>
                    </Group>
                </Card>
                <Card padding={"lg"} radius={"lg"} m={10} shadow="sm" withBorder bg={"rgba(255, 50, 87, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
                    <Group>
                        <Text fw={700}>Total Unverified Users:</Text>
                        <Text>{users.filter(usr => !usr.paymentFormFilled).length}</Text>
                    </Group>
                </Card>
                <Card padding={"lg"} radius={"lg"} m={10} shadow="sm" withBorder bg={"rgba(248, 255, 53, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
                    <Group>
                        <Text fw={700}>Total Users with verification pending:</Text>
                        <Text>{users.filter(usr => usr.paymentFormFilled && !usr.paymentVerified && !usr.paymentRejected).length}</Text>
                    </Group>
                </Card>
            </Flex>
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