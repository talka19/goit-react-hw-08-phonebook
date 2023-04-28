import { PageContainerDiv } from "./PageContainer.styled";

export function PageContainer({children}) {
    return(
        <PageContainerDiv>
            {children}
        </PageContainerDiv>
    );
};
