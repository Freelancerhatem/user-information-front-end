import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
const AwesomeButtons = () => {
    return (
        <div>
            <AwesomeButton

                type='primary'
                cssModule={AwesomeButtonStyles}>
                click
            </AwesomeButton>
            
        </div>
    );
};

export default AwesomeButtons;