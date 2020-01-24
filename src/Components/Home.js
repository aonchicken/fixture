import React, {Component} from 'react';
import Toast from 'light-toast';
import { store } from 'react-notifications-component';


class Home extends Component {



    render() {

        return (
            <div >
               <h1 >Home</h1>
                <img src="data:image/jpeg;base64,{base64imagestring}" />
                <button
                    onClick={() => {
                        Toast.info('message...', 3000, () => {
                            // do something after the toast disappears
                        });
                    }}
                >
                    click me
                </button>
                <button
                    onClick={() => {
                        store.addNotification({
                            title: 'Dropbox',
                            message: 'Files were synced',
                            type: 'default',                         // 'default', 'success', 'info', 'warning'
                            container: 'top-right',                // where to position the notifications
                            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                            dismiss: {
                                duration: 3000
                            }
                        })
                    }}
                >
                    Add notification
                </button>



            </div>
        );
    }
}

export default Home;