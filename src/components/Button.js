import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        const { change, locale, show } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Click' : 'ঘড়ি পরিবর্তন করুন '}
                </button>
                {show && <p>Hello</p>}
            </div>
        );
    }
}
