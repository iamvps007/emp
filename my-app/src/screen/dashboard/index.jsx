import { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Dashboard = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                flex: '1',
                backgroundColor: '#d8d8d8',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{
                    flex: '0.1',
                    padding: '12px',
                    marginTop: '10px'
                }}>
                    <img src="https://www.empower.com/themes/custom/wealth_management_v2/images/branding/logo-new-alt.svg"></img>
                </div>
                <div style={{
                    flex: '0.5',
                    padding: '12px'
                }}>
                    <Select isOptionSelected={isMenuOpen} options={options} />
                </div>
            </div>
            {/* Default Option */}
            {/* <div style={{
                flex: '1'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                    <h1 style={{
                        color: '#002157 !important',
                        fontSize: '35px'
                    }}
                        onClick={() => {
                            console.log("Hello")
                            setIsMenuOpen(true)
                        }}
                    >Please Select Batch</h1>
                    <small style={{
                        color: 'grey',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>To See <span style={{ color: '#0061B3' }}>Events</span>, <span style={{
                        color: '#0061B3'
                    }}>Dollar Logs</span></small>
                </div>
            </div> */}

            <div style={{
                flex: '1',
                flexDirection:'column'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    padding:'10px'
                }}>
                    <div id="card" style={{
                        border:'0.5px solid grey',
                        padding:'10px',
                        width:'100%',
                        margin:'10px',
                        flex:1,
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <h1 style={{
                            marginBottom:'0px',
                            marginTop:'10px',
                            fontSize:'40px',
                            fontWeight:'bolder'
                        }}>150</h1>
                        <span style={{
                            color:'grey'
                        }}>Unprocessed Events</span>

                    </div>
                    <div id="card" style={{
                        border:'0.5px solid grey',
                        padding:'10px',
                        width:'100%',
                        margin:'10px',
                        flex:1,
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <h1 style={{
                            marginBottom:'0px',
                            marginTop:'10px',
                            fontSize:'40px',
                            fontWeight:'bolder'
                        }}>$150</h1>
                        <span style={{
                            color:'grey'
                        }}>Dollar Amount Impacted </span>

                    </div>
                    <div id="card" style={{
                        border:'0.5px solid grey',
                        padding:'10px',
                        width:'100%',
                        margin:'10px',
                        flex:1,
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <h1 style={{
                            marginBottom:'0px',
                            marginTop:'10px',
                            fontSize:'40px',
                            fontWeight:'bolder'
                        }}>150</h1>
                        <span style={{
                            color:'grey'
                        }}>Unprocessed Events</span>

                    </div>
                    <div id="card" style={{
                        border:'0.5px solid grey',
                        padding:'10px',
                        width:'100%',
                        margin:'10px',
                        flex:1,
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <h1 style={{
                            marginBottom:'0px',
                            marginTop:'10px',
                            fontSize:'40px',
                            fontWeight:'bolder'
                        }}>150</h1>
                        <span style={{
                            color:'grey'
                        }}>Unprocessed Events</span>

                    </div>
                    <div id="card" style={{
                        border:'0.5px solid grey',
                        padding:'10px',
                        width:'100%',
                        margin:'10px',
                        flex:1,
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <h1 style={{
                            marginBottom:'0px',
                            marginTop:'10px',
                            fontSize:'40px',
                            fontWeight:'bolder'
                        }}>150</h1>
                        <span style={{
                            color:'grey'
                        }}>Unprocessed Events</span>

                    </div>
                </div>
                
            </div>



            <div style={{
                position: 'absolute',
                bottom: '10px',
                fontSize: '15px',
                color: 'grey',
                left: '10px'
            }}>
                Made for Empower to Empower People by @Kaushal
            </div>
        </div>


    )
}

export default Dashboard;