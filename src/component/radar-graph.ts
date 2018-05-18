import { Component, ElementRef, Input } from '@angular/core'
import * as d3 from 'd3'

const VALUE_TEXT_COLORS = ['#0088FF', '#FA374F']

const RADAR_COLORS = ['#F84145','#0088FF']

const RADAR_AREA_OPACITY = 0.9

const AXIS_DATA = [
    { axis: "超额收益", label: '超额收益', dx: 0, dy: -20, text_anchor: 'middle' },
    { axis: "管理经验", label: '管理经验', dx: 20, dy: -5, text_anchor: 'start' },
    { axis: "抗风险", label: '抗风险', dx: 15, dy: 30, text_anchor: 'middle' },
    { axis: "稳定性", label: '稳定性', dx: -15, dy: 30, text_anchor: 'middle' },
    { axis: "历史收益", label: '历史收益', dx: -20, dy: -5, text_anchor: 'end' },
]

const RADAR_DATA_TEMPLATE_1 = {
    "超额收益": { dx: -5, dy: -5, },
    "管理经验": { dx: 5, dy: 5, },
    "抗风险": { dx: 5, dy: 10, },
    "稳定性": { dx: -15, dy: 5, },
    "历史收益": { dx: -15, dy: 10, }
}

const RADAR_DATA_TEMPLATE_2 = [
    {
        "超额收益": { dx: 10, dy: -5, },
        "管理经验": { dx: 6, dy: 10, },
        "抗风险": { dx: -10, dy: 15, },
        "稳定性": { dx: -20, dy: 10, },
        "历史收益": { dx: -5, dy: 15, }
    }, {
        "超额收益": { dx: -20, dy: -5, },
        "管理经验": { dx: 2, dy: -5, },
        "抗跌能力": { dx: 8, dy: 10, },
        "稳定性": { dx: -15, dy: -5, },
        "历史收益": { dx: -25, dy: 5, }
    }]

@Component({
    selector: 'radar-graph',
    templateUrl: 'radar-graph.html',
})
export class RadarGraphComponent {

    @Input('portfolio') portfolio_data: any
    @Input('rebalance') rebalance_data: any


    legend: Array<any>
    constructor(public element: ElementRef) {

    }

    ngOnInit() {
        // console.log('ngOnInit')
    }

    ngAfterViewInit() {
        this.draw()
    }

    ngOnChanges() {
        this.draw()
    }

    draw() {
        // console.log(this.portfolio_data)
        // console.log(this.rebalance_data) 
        // console.log("------")

        const margin = { top: 40, right: 75, bottom: 40, left: 75 },
            width = this.element.nativeElement.offsetWidth - margin.left - margin.right,
            height = width

        const options = {
            w: width,
            h: height,
            margin: margin,
        }

        const radar_data = []
        if (this.rebalance_data && this.portfolio_data) {

            let model = Object.assign({}, RADAR_DATA_TEMPLATE_1)
            this.bind_data(model, this.rebalance_data)
            radar_data.push(model)

            let model1 = Object.assign({}, RADAR_DATA_TEMPLATE_2[0])
            this.bind_data(model1, this.portfolio_data)
            radar_data.push(model1)

            this.legend = [{
                label: this.portfolio_data.name,
                pkText: 'VS',
                color: VALUE_TEXT_COLORS[0],
            }, {
                label: this.rebalance_data.name,
                color: VALUE_TEXT_COLORS[1],
            }]
        } else if (this.portfolio_data) {
            let model = Object.assign({}, RADAR_DATA_TEMPLATE_1)
            this.bind_data(model, this.portfolio_data)
            const historical_score = Math.floor(this.portfolio_data.historical_score * 10) /10
            radar_data.push(model)
            this.legend = [{
                label: this.portfolio_data.name,
                pkText:  historical_score,
                color: VALUE_TEXT_COLORS[0],
            }]
        }
        if (radar_data.length > 0) {
            const container = d3.select(this.element.nativeElement).select('.container')
            renderRadarChart(container.node(), AXIS_DATA, radar_data, options, this.legend)
        }
    }

    bind_data(radar_data, data) {
        radar_data['超额收益'].value = data.excess_ret_power
        radar_data['管理经验'].value = data.management_experience
        radar_data['抗风险'].value = data.risk_measure
        radar_data['稳定性'].value = data.performance_stability
        radar_data['历史收益'].value = data.hist_ret_power
    }
}

/**
 * ref : http://bl.ocks.org/nbremer/21746a9668ffdf6d8242#index.html
 */
function renderRadarChart(id, axis_data, radar_data, options, legend) {

    const cfg = {
        w: 600,				//Width of the circle
        h: 600,				//Height of the circle
        margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
        levels: 5,				//How many levels or inner circles should there be drawn
    };

    //Put all of the options into a variable called cfg
    if ('undefined' !== typeof options) {
        for (var i in options) {
            if ('undefined' !== typeof options[i]) { cfg[i] = options[i]; }
        }//for i
    }//if

    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    var maxValue = 10;

    const total = axis_data.length,					//The number of different axes
        radius = Math.min(cfg.w / 2, cfg.h / 2), 	//Radius of the outermost circle
        format_value = (v) => v >= 10 ? v : v.toFixed(1),			 	//Percentage formatting
        angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"

    //Scale for the radius
    var rScale = d3.scaleLinear()
        .range([0, radius])
        .domain([0, maxValue]);

    //Remove whatever chart with the same id/class was present before
    d3.select(id).select("svg").remove();

    //Initiate the radar chart SVG
    var svg = d3.select(id).append("svg")
        .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr("class", "radar" + id);
    //Append a g element		ß
    var g = svg.append("g")
        .attr('class',"g-class")
        .attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");

    //Wrapper for the grid & axes
    var g_grid_circle = g.append("g").attr("class", "g-grid-circle");

    //Draw the background circles
    g_grid_circle.selectAll(".levels")
        .data(d3.range(1, (cfg.levels + 1)).reverse())
        .enter()
        .append("circle")
        .attr("class", "grid-circle")
        .attr("r", function (d, i) { return radius / cfg.levels * d; })
        .style("fill", "transparent")
        .style("stroke", "#F1F1F1");

    //Text indicating at what % each level is
	g_grid_circle.selectAll(".axisLabel")
        .data(d3.range(1,(cfg.levels+1)).reverse())
        .enter().append("text")
        .attr("class", "axisLabel")
        .attr("x", function(d,i) { return maxValue * d/cfg.levels > 9 ? -20 : -17 })  
        .attr("y", function(d){return -d*radius/cfg.levels;})
        .attr("dy", "0.4em")
        .style("font-size", "10px")
        .attr("fill", "#999CA7")
        .text(function(d,i) { return maxValue * d/cfg.levels });

    //Create the straight lines radiating outward from the center
    var axis = g_grid_circle.selectAll(".axis")
        .data(axis_data)
        .enter()
        .append("g")
        .attr("class", "axis");
    //Append the lines
    axis.append("line")
        .attr("class", "axis-line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", function (d, i) { return rScale(maxValue * 1) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("y2", function (d, i) { return rScale(maxValue * 1) * Math.sin(angleSlice * i - Math.PI / 2); })

    axis.append("rect")
        .attr('width',5)
        .attr('height',5)
        .style('fill','#9AA0AA')
        .attr("x", function (d, i) { return rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2) - 2; })
        .attr("y", function (d, i) { return rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2); })


    //Append the labels at each axis
    axis.append("text")
        .attr("class", "axis-label")
        .attr("text-anchor", (d) => d.text_anchor)
        .attr("x", function (d, i) { return rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2) + d.dx; })
        .attr("y", function (d, i) { return rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2) + d.dy; })
        .text(function (d) { return d.label });



    //The radial line function
    var radarLine = d3.radialLine()
        .curve(d3.curveCatmullRomClosed)
        .radius(function (d) { return rScale(d.value); })
        .angle(function (d, i) { return i * angleSlice; });


    //Create a wrapper for the blobs	
    var rador_areas = g.selectAll(".g-rador-area")
        .data(radar_data)
        .enter().append("g")
        .attr("class", "g-rador-area");

    //Append the backgrounds	
    if(radar_data.length > 1){
        rador_areas
        .append("path")
        .attr("class", "radar-area")
        .attr("d", function (d, i) { return radarLine(build_radar_data(d, i)); })
        .style("fill", function (d, i) { return RADAR_COLORS[i]; })
        .style("fill-opacity", RADAR_AREA_OPACITY);
    }else{
        rador_areas
        .append("path")
        .attr("class", "radar-area")
        .attr("d", function (d, i) { return radarLine(build_radar_data(d, i)); })
        .style("fill", RADAR_COLORS[1])
        .style("fill-opacity", RADAR_AREA_OPACITY);
    }

    var g_axis_value = g.selectAll(".axis-value")
        .data(radar_data)
        .enter().append("g")
        .attr("class", "axis-value");

    // g_axis_value.selectAll("text")
    //     .data(build_radar_data)
    //     .enter().append("text")
    //     .attr("x", function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2) + d.dx; })
    //     .attr("y", function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2) + d.dy; })
    //     .attr("class", "text")
    //     .style("fill", (d) => VALUE_TEXT_COLORS[d.axis_index])
    //     .text(d => format_value(d.value));
    // helpers
    function build_radar_data(data, i) {
        return axis_data.map(item => {
            return Object.assign({ axis_index: i }, data[item.axis])
        });
    }

    if (radar_data.length == 2) {
        g.append('text')
        .attr('class','origin_text Geometr415')
        .attr('x', -15)
        .attr('y', 10)
        .style('fill','#ffffff')
        .style('font-size','28px')
        .style('text-shadow','0px 1px 15px #2f94ff')
        .text(legend[0].pkText)
    }else{
        if(String(legend[0].pkText).indexOf('.')>0){
            d3.selectAll('.g-class').append('text').text('分')
            .attr('x', 20)
            .attr('y', 15)
            .style('fill','#ffffff')
            .style('font-size','15px')
            .style('text-shadow','0px 1px 15px #2f94ff')
            .style('font-weight','600')

            g.append('text')
            .attr('class','origin_text origin_text1 Geometr415')
            .attr('x', -20)
            .attr('y', 15)
            .style('fill','#ffffff')
            .style('font-size','28px')
            .style('text-shadow','0px 1px 15px #2f94ff')
            .text(legend[0].pkText)
        }else{
            d3.selectAll('.g-class').append('text').text('分')
            .attr('x', 0)
            .attr('y', 10)
            .style('fill','#ffffff')
            .style('font-size','15px')
            .style('text-shadow','0px 1px 15px #2f94ff')
            .style('font-weight','600')

            g.append('text')
            .attr('class','origin_text origin_text1 Geometr415')
            .attr('x', -15)
            .attr('y', 10)
            .style('fill','#ffffff')
            .style('font-size','28px')
            .style('text-shadow','0px 1px 15px #2f94ff')
            .text(legend[0].pkText)
        }
        
    }
    console.log(String(legend[0].pkText).indexOf('.'))
}