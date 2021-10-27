import { ReactNode } from "react";
import {Container} from './style';

interface MainContainerProps {
    children: ReactNode;
    title?: string;
}

const MainContainer = ({children, title}: MainContainerProps) => {
    return (
        <Container>
            <div className='content_title'>
                <h3>{title}</h3>
            </div>
            {children}
        </Container>
    )
}

export default MainContainer;