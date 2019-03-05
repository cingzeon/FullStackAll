import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
class BaiduMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName:'',
            map:'',
            BMap:'',
        }
    }
    componentDidMount () {
        const BMap = window.BMap
        const map = new BMap.Map("allmap"); // 创建Map实例
        const point = new BMap.Point(114.059213,22.553054);
        // map.centerAndZoom(new BMap.Point(point), 17); // 初始化地图,设    置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.centerAndZoom(point, 18);
        //const marker = new BMap.Marker(point);
        //map.addOverlay(marker);
        map.setCurrentCity("深圳"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        //marker.enableDragging();
        this.setState({
            map:map,
            BMap:BMap,
        })
    }

    
    theLocation = () => {
		if(this.state.cityName != ""){
            const { map, BMap } = this.state;
            //map.centerAndZoom(this.state.cityName,11);      // 用城市名设置地图中心点
            const point = new BMap.Point(114.059213,22.553054);
            const marker = new BMap.Marker(point);
            map.centerAndZoom(point, 18);
            map.addOverlay(marker);
            marker.enableDragging();

            var opts = { width: 250, height: 100, title: "潍坊地图" }; //信息窗口
            var infoWindow = new BMap.InfoWindow("<div style='color:red;'>大家好</div>", opts);
            map.clearOverlays()
            //标注拖拽后的位置
            marker.addEventListener("dragend", (e) => {
                alert("当前位置：" + e.point.lng + ", " + e.point.lat);
            });

            //点击的位置
            map.addEventListener("click", (e) => {
               //alert("当前位置：" + e.point.lng + ", " + e.point.lat);
               var pointClick=  new BMap.Point(e.point.lng , e.point.lat);
               map.openInfoWindow(infoWindow, pointClick);
            });
   
		}
    }

    handleInputChange = (e) => {
        this.setState({
            cityName:e.target.value
        })
        console.log(e.target.value);
    }
 
    render () {
        return ( 
            <Fragment>
                <div id="r-result">
                    城市名: <input onChange={this.handleInputChange} type="text" style={{width:100, marginRight:10}} />
                    <input type="button" value="查询" onClick={this.theLocation} />
                </div>
                <div id='allmap' style={{width:'100vw', height:'100vh'}} />
            </Fragment>       
        )
    }
}

export default BaiduMap;