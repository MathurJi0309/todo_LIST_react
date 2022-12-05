import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink=styled(Link)`
text-decoration: none;
color: red;

&:{
    text-decoration: underline;
}
`;

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/create-post">Create Post</StyledLink>
                </li>

            </ul>
        </div>
    );
}
export default Navbar;
