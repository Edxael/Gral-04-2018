import * as React from 'react';
import './ztyle.css';

export default class Main extends React.Component {
    render() {

        const con1 = ( str: String ) => {
            let id: String = 'ID-' + str;
            id = id + ' ...';
        };

        const codexe1 = () => {
            let name: String = 'Daniel';
            con1(name);
            console.log(name);
        };


        return (
            <div>
                <h1>TypeScript React.tsx ...</h1>
                <hr/>

                <div>
                    <button onClick={codexe1} >Execute Code</button>
                    
                </div>

            </div>
        );
    }
}
