import { Card } from 'react-bootstrap'

function GitHubCard() {
    return (
        <Card style={{ width: '27rem' }}>
            <Card.Img varient="top" src="./git-image.png" />
            <Card.Body>
                <Card.Title>MalMWare</Card.Title>
                <Card.Text >
                    A fresh, young, software developer trying to enter the coding industry!
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard