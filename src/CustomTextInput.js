import React from "react";

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }
    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.refs.textInput.focus();
    }
    render() {
        // Use the ref callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div>
                <input
                    type="text"
                    ref="textInput" /><br /><br />
                <input
                    type="text"
                /><br /><br />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                />
            </div>
        );
    }
}

export default CustomTextInput;
