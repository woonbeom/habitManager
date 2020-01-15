import React from 'react';
import './LoginPageTemplate.css';

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const LoginPageTemplate = ({form, children}) => {
    return (
        <Positioner>
            <ShadowBox>
                <LogoWrapper>
                    <Logo to="/">HERUM</Logo>
                </LogoWrapper>
                <Contents>
                    {children}
                </Contents>
            </ShadowBox>
        </Positioner>
    );
};

export default LoginPageTemplate;