import { PageContainer } from 'components/PageContainer/PageContainer';
import { HeaderTag, CoverDiv } from "components/Header/Header.styled";

export function Header({children}) {

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    {children}
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};

