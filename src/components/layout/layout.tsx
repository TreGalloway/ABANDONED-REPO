import { useState } from 'react'

import {
    AppShell,
    Footer,
    Group,
    Header,
    Text,
    useMantineTheme,
} from '@mantine/core'

type Props = {
    children: JSX.Element
}

export default function Layout({ children }: Props) {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)

    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            fixed
            footer={
                <Footer height={60}>
                    <Group>
                        <Text>MTD. Footer</Text>
                    </Group>
                </Footer>
            }
            header={
                <Header height={70}>
                    <Text>MTD. Header</Text>
                </Header>
            }
        >
            {children}
        </AppShell>
    )
}
