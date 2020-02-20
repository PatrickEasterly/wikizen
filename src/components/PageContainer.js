import React from 'react';
import Pages from './Pages';
import Tabs from './Tabs';

export default class PageContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div>
                <Tabs />
                <Pages />
            </div>
        )
    }
}