import React from 'react'
import axios from 'axios'
class Paihang extends React.Component{
    constructor(props){
        super(props)
        this.state={
            songListTop100:[]
        }
    }
    getTOP100(){
        axios.get('/music/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923')
        .then(data=>{
       
            this.setState({
                songListTop100:data.data.songlist
            })
            console.log(this.state.songListTop100,1)
        })
    }
    render (){
        return (
            <div style={{height:'200px',width:"300px",overflow:"scroll"}}>
                {/* <h2>{this.state.songListTop100.topinfo.ListName}</h2> */}
                <ol>
                {
                    this.state.songListTop100.map(v=>{
                        return(
                            <li key={v.cur_count}>{v.data.songname}</li>
                        )
                    })
                }
                </ol>
            </div>
        )
    }
    componentWillMount(){
        this.getTOP100()
        console.log(this.state.songListTop100,2)
    }
}

export default Paihang