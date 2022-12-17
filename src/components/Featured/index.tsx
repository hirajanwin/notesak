import Link from "@docusaurus/Link";
import { Grid } from "@mui/material";
import {Card, CardContent, CardActionArea} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

type DocItem = {
    title: string,
    description: string,
    link: string
}

const DocItemList: DocItem[] = [
    {
        title: "Design Patterns",
        description: "Low-level design - how to create classes and stuff",
        link: "/docs/design-patterns"
    },
    {
        title: "Data Structures and Algorithms",
        description: "Arrays, Trees, Graphs, Backtracking, DP, Greedy",
        link: "/docs/dsa"
    },
    {
        title: "Docker and Kubernetes",
        description: "Good stuff of DevOps",
        link: "/docs/docker-kubernetes"
    },
    {
        title: "Psychology of Money",
        description: "How do you behave in front of money?",
        link: "/docs/condensed-books/psychology-of-money"
    },
    {
        title: "Designing Data Intensive Applications",
        description: "Epic notes from DDIA book",
        link: "/docs/condensed-books/designing-data-intensive-applications"
    },
];

const CustomCard = ({title, description, link} : {title: string; description: string, link: string}) => (
    <Card sx={{
        height: '100%',
        cursor: 'default',
        transition: 'all 0.2s',
        backgroundColor: 'var(--ifm-color-primary-lightest)',
        '&: hover': {
            backgroundColor: 'var(--ifm-color-primary-light)',
        }
    }}
    onClick={() => window.open(link)}
    >
        
        <CardContent>
            <h3>{title}</h3>
            <p>{description}</p>
        </CardContent>
    </Card>
);



export default function Featured(): JSX.Element {
    return (
        <>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            height: '100%',
            marginBlock: '10vh'
        }}>
            <h1 className="hero__title">Featured</h1>
            <Grid container spacing={3}>
                {DocItemList.map((props, idx) => (
                    <Grid item xs={12} md={4} key={idx}>
                        <CustomCard title={props.title} description={props.description} link={props.link} />
                    </Grid>
                ))}
            </Grid>
        </Container>
        </>
    );
}

