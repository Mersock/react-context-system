import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'ตกลง';
        return (
            <div>
                <button className="ui button primary">{text}</button>
            </div>
        );
    }
}

Button.contextType = LanguageContext;

export default Button