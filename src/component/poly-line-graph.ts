import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import moment from 'moment';
import numeral from 'numeral';
import { FormatMoneyPipe } from '../pipes';

declare var window: any

window.d3 = d3

const GRADE = ['高', '中','低']
const COLORS = ['#F84145', '#0088FF']
const time_now = d3.timeDay.offset(new Date(), -12)

@Component({
    selector: 'poly-line-graph',
    templateUrl: 'poly-line-graph.html',
    providers: [FormatMoneyPipe]
})
export class PolyLineGraphComponent {
    @Input("line-return") line_return: any;
    @Input("line-second-return") line_second_return: any;
    ;
    ready: boolean = false;
    container: any;
    margin: any;
    width: number;
    height: number;
    XAXIS_HEIGHT: number;
    X_TICKS_COUNT: number = 4;
    legend: Array<any>;
    yAxisLineNum = [0,1,2,3,4]
    xAxisLineNum = [0,1,2,3,4,5]
    operations: any;
    period_list = [
        { value: d3.timeMonth.offset(time_now, -12), label: '年' },
    ];
    current_period: any;
    pos2_y: any;
    pos_x: any;
    

    constructor(public element: ElementRef, public formatMoney: FormatMoneyPipe) {
        this.current_period = this.period_list[0]
        
    }

    ngOnInit() {
        this.container = d3.select(this.element.nativeElement).select('.container').node();
        const options = {
            top: 25,
            bottom: 15,
            left: 55,
            right: 15,
        }
        this.init(options);
        this.ready = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.ready) {
            // this.line_return = {"days":["2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06"],"values":[1,2,3,4,5,6]}
            // this.line_second_return = {"days":["2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06"],"values":[4,2,3,7,5,2]}
            //如果为[]隐藏图表
            if(this.line_return.days.length != 0){
                this.draw(this.line_return,this.line_second_return);
            }
        }
    }

    // ngAfterViewInit() {
    //     if(this.line_return.days.length != 0){
    //         this.draw(this.line_return,this.line_second_return);
    //     }
    // }

    // changePeriod(item) {
    //     this.draw(this.line_return,this.line_second_return);
    // }

    init(options) {
        this.margin = {
            left: options.left || 15,
            top: options.top || 15,
            bottom: options.bottom || 0,
            right: options.right || 15,
        };
        this.width = this.container.clientWidth ;
        this.height = options.height || 150;
        this.XAXIS_HEIGHT = 15;
    }

    createSVG() {
        d3.select(this.container).selectAll('svg').remove();
        const svg = d3.select(this.container).append('svg')
            .attr('class', 'd3-line-chart')
            .attr('width', this.width)
            .attr('height', this.height)


        svg.append("linearGradient")
            .attr("id", "portfolio-history-graph-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
 
        return svg;
    }

    draw(line_return,line_second_return, transitionDuration = 0) {

        if (line_return == null) return;
        const svg = this.createSVG();
        const margin = this.margin,
            availableWidth = this.width - this.margin.left - this.margin.right,
            chartViewHeight = this.height - margin.top - margin.bottom - this.XAXIS_HEIGHT;

        const startDate = d3.timeFormat('%Y-%m-%d')(this.current_period.value)

        // data = rebuildData(data, this.X_TICKS_COUNT, startDate)
        const startIndex = line_return.days.findIndex(d => d > startDate)
        let merge_date = line_return.days;
        let line_second_return_values = []
        const line_return_values = line_return.values;

        //是否有第二只基金
        if(line_second_return != undefined){
            line_second_return_values = line_second_return.values; 
            
            //是否哪个日期最长
            if(line_return.days.length < line_second_return.days.length){
                merge_date = line_second_return.days
            }         
        }


        let data = {
            date: merge_date,
            historical_data: line_return_values,
            benchmark_data: line_second_return_values,
        }

        data = {
            date: data.date,
            historical_data: data.historical_data,
            benchmark_data: data.benchmark_data,
        }

        const valuesDomain = generateYAxisTickValues(data);
        const valuesDomainNet = generateYAxisTickValuesNet(data.historical_data);

        const x = d3.scaleLinear().range([0, availableWidth]).domain([0, data.date.length - 1]);
        const x1 = d3.scaleLinear().range(15, availableWidth).domain([0, data.date.length - 1]);
        const y = d3.scaleLinear().range([chartViewHeight, 0]).domain(valuesDomain);
        const y1 = d3.scaleLinear().range([chartViewHeight, 0]).domain(valuesDomainNet);        
        const xTickValues = generateXAxisTickValues(data.date.length, this.X_TICKS_COUNT);

        const g_axis = svg.append('g').attr('class', 'g-axis');
        // --- lines view
        const g_chart = svg.append('g').attr('class', 'g-chart').attr('transform', `translate(${margin.left},${margin.top})`);

        const line = d3.line()
            .x((_, index) => x(index))
            .y(d => y(d));

        var area = d3.area()
            .x((_, index) => x(index))
            .y0(chartViewHeight)
            .y1(d => y(d));

        // const lineTransition = d3.transition()
        //     .duration(transitionDuration)
        //     .ease(d3.easeLinear);

        // render the lines with inverse order
        const historical_data = data.historical_data;
        const benchmark_data = data.benchmark_data;

        const chartViewHeightEqual = chartViewHeight / 4;
        const availableWidthEqual = (availableWidth - 30) / 5;
        const xLineGroup = g_chart.append("g");
        const yLineGroup = g_chart.append("g");
        

        for(let value of this.yAxisLineNum){
            const eaualTranslate = `translate(${0},${chartViewHeightEqual * value})`;
            if(value == 0){
                const eaualTranslate = `translate(${0},${0})`;
            }else if(value == 4){
                const eaualTranslate = `translate(${0},${chartViewHeightEqual})`;
            }
            yLineGroup.append("line")
            .attr("transform",eaualTranslate)
            .attr("x2",availableWidth)
            .attr("stroke","#F1F1F1")
            .attr("stroke-dasharray",2)
            .attr("stroke-width",1)
        }

        for(let value of this.xAxisLineNum){
            const eaualTranslate = `translate(${availableWidthEqual * value + 15},${0})`;
            if(value == 0){
                const eaualTranslate = `translate(${15},${0})`;
            }else if(value == 5){
                const eaualTranslate = `translate(${availableWidthEqual - 15},${0})`;
            }
            xLineGroup.append("line")
            .attr("transform",eaualTranslate)
            .attr("y2",chartViewHeight)
            .attr("stroke","#F1F1F1")
            .attr("stroke-dasharray",2)
            .attr("stroke-width",1)
        }
    
        
        if (benchmark_data) {

            //是否两只基金都有值
            if(historical_data.length != 0 && benchmark_data.length != 0){

                if(historical_data.length == benchmark_data.length ){
                    
                    g_chart.append('path')
                    .datum(benchmark_data)
                    .attr('class', 'benchmark-line')
                    .attr('d', line);
                    
                }
                //如果第二只基金数据少
                else if(historical_data.length > benchmark_data.length){
                    const date  = data.date[historical_data.length - benchmark_data.length]
                    const x_index = data.date.findIndex(p => date == p)
        
                    const pos_x = x(x_index);
                    const pos_y = y(data.historical_data[x_index]) + margin.top

                    g_chart.append('path')
                    .datum(benchmark_data)
                    .attr('class', 'benchmark-line')
                    .attr('d', line)
                    .attr('transform', `translate(${pos_x},0)`)
                
        
                }
                //如果第一只基金数据少
                else if(historical_data.length < benchmark_data.length){
                    const date  = data.date[benchmark_data.length - historical_data.length]
                    const x_index = data.date.findIndex(p => date == p)
        
                    const pos_x = x(x_index);
                    const pos_y = y(data.benchmark_data[x_index]) + margin.top

                    this.pos_x = pos_x;

                    g_chart.append('path')
                    .datum(benchmark_data)
                    .attr('class', 'benchmark-line')
                    .attr('d', line)

            }

        }

        if(this.pos_x){
            g_chart.append('path')
            .datum(historical_data)
            .attr('class', 'line')
            .attr('id','line')
            .attr('d', line)
            .attr('transform', `translate(${this.pos_x},0)`)
        }else{
            g_chart.append('path')
            .datum(historical_data)
            .attr('class', 'line')
            .attr('id','line')
            .attr('d', line);
        }

        //--- axis view x-axis

        const dateFormat = d3.timeFormat('%Y-%m-%d');
        const xAxisTextFormatter = (index) => dateFormat(new Date(data.date[index]));
        // const xAxisTickScale = d3.scaleLinear().domain([10, 100]).range([])

        const xAxisMarginTop = this.height - margin.bottom - this.XAXIS_HEIGHT;
        const xAxis = d3.axisBottom().scale(x).tickPadding(10).ticks(0).tickSizeInner(-xAxisMarginTop).tickSizeOuter(0).tickFormat(xAxisTextFormatter).tickValues(xTickValues);
        const xAxisView = g_axis.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(${margin.left},${xAxisMarginTop})`)
            .call(xAxis);

        //--- axis view y-axis
        const yAxisView = g_axis.append('g')
                .attr('class',"y axis")
                .attr('transform', `translate(${margin.left - 40},${margin.top})`)
                yAxisView.append("text").text(GRADE[0]).attr('x',2).attr('y',5)
                yAxisView.append("text").text(GRADE[1]).attr('x',2).attr('y',50)
                yAxisView.append("text").text(GRADE[2]).attr('x',2).attr('y',95)


        //--- axis view y-axis
        // const yAxisTextFormatter = d3.format(".2")
        // const yAxis = d3.axisRight().scale(y).ticks(4).tickSize(availableWidth + 41).tickFormat(v => yAxisTextFormatter(v));
        // // const yAxisMarginLeft = this.width - margin.right;
        // const yAxisView = g_axis.append('g')
        //     .attr('class', 'y axis')
        //     .attr('transform', `translate(${margin.left - 41},${margin.top})`)
        //     .call(yAxis);

        // yAxisView.selectAll('g.tick').selectAll('text').attr('x', 40);
        // yAxisView.selectAll('g.tick').selectAll('line').attr('x1', 40)


        // 当前市值

        // if (this.current_value) {
        //     const txt = numeral(this.current_value).format('0,0.00')
        //     g_chart.append('text').attr('class', 'current-value').text('￥' + txt).attr('x', availableWidth).attr('y', -10)
        // }

        //---- operations
        const g_operations = svg.append('g').attr('class', 'g-operations');

        const firstDate = data.date[0]
        const lastDate = data.date[data.date.length - 1]
        

        let operations = getValidOperations(line_return.operations, startDate)
        this.operations = operations
        // console.log(operations)
        operations = [
               { "date": firstDate, "action": "开始" },
               { "date": lastDate, "action": "终点" },
        ]

        const operation_box = `
            <path d="M27,10.5 L27,2.00276013 C27,0.893542647 26.1012878,0 24.9926701,0 L2.00732994,0 C0.898338318,0 0,0.896666251 0,2.00276013 L0,10.9972399 C0,12.1064574 0.898712226,13 2.00732994,13 L23.5,13 L29,15 L27,10.5 Z"></path>
        `

        const operation_flag = {
            'buy_first': true,
            'sell_first': true,
            'rebalance_first': true,
        }

        // 第二只基金开始与结束点位
        if(line_second_return){
            let firstDate;
            let lastDate;
            if(line_return.days.length > line_second_return.days.length){
                 firstDate = line_second_return.days[0]
                 lastDate = line_second_return.days[line_second_return.days.length - 1]
            }else{
                 firstDate = line_return.days[0]
                 lastDate = line_return.days[line_return.days.length - 1]
            }

            const operationsTwo = [
                { "date": firstDate, "action": "第二开始" },
                { "date": lastDate, "action": "第二终点" },
            ]


            for (let { date, action } of operationsTwo) {
                const x_index = line_return.days.findIndex(p => date == p)
                const x_index1 = line_second_return.days.findIndex(p => date == p)
    
                const pos_x = x(x_index) + margin.left
                const pos2_x = x(x_index) + margin.left + this.pos_x;
                const pos_y = y(data.historical_data[x_index]) + margin.top
                const pos2_y = y(data.benchmark_data[x_index1]) + margin.top

                let pos_x_value;
                let pos_y_value;

                if(this.pos_x){
                    pos_x_value = pos2_x
                }else{
                    pos_x_value = pos_x
                }

                const g_operation = g_operations.append('g').attr('class', 'operation1')
                .attr('transform', `translate(${pos_x_value},${pos2_y})`)
    
                const tips = g_operation.append('g').html(operation_box)
    
                const operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0)
    
                const text = tips.append('text').attr('x', '-5px').attr('y', '-7px')
    
                let show_tips = false
    
                if (action == '第二开始') {
                    g_operation.append("circle").attr('r',2).attr("fill","#FFFFFF")
                    if(this.pos_x){
                        operation_circle.attr('r', 5.5).attr('fill', COLORS[1])
                        
                    }else{
                        operation_circle.attr('r', 5.5).attr('fill', COLORS[0])
                        
                    }
                        
    
                } else if (action == '第二终点') {
                    if(this.pos_x){
                        g_operation.append("circle").attr('r',5).attr("fill",COLORS[1]).attr("stroke-width","4").attr("stroke","rgba(0,136,254,0.4)")                
                        operation_circle.attr('r', 4).attr('fill', COLORS[1])
                    }else{
                        g_operation.append("circle").attr('r',5).attr("fill",COLORS[0]).attr("stroke-width","4").attr("stroke","rgba(248,65,69,0.4)")                
                        operation_circle.attr('r', 4).attr('fill', COLORS[0])
                    }
                        
                }
    
                if (!show_tips) {
                    tips.style('display', 'none')
                }
            } 

        }

        // 第一只基金开始与结束点位
        for (let { date, action } of operations) {
            const x_index = data.date.findIndex(p => date == p)
            let x_index1;
            if(this.pos_x){
                 x_index1 = line_second_return.days.findIndex(p => date == p)                
            }
            if (x_index < 0) continue

            const pos_x = x(x_index) + margin.left
            const pos1_x = x(x_index) + margin.left + this.pos_x
            const pos_y = y(data.historical_data[x_index]) + margin.top
            const pos1_y = y(data.benchmark_data[x_index1]) + margin.top
            const pos_y_bottom = this.height - margin.bottom - this.XAXIS_HEIGHT - pos_y

            let pos_x_v
            let pos_x_x
            if(this.pos_x){
                pos_x_x = pos1_x;
                pos_x_v = pos1_y;
            }else{
                pos_x_x = pos_x;
                pos_x_v = pos_y;
            }

            const g_operation = g_operations.append('g').attr('class', 'operation')
                .attr('transform', `translate(${pos_x},${pos_x_v})`)

            const tips = g_operation.append('g').html(operation_box)

            const operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0)

            const text = tips.append('text').attr('x', '-5px').attr('y', '-7px')

            let show_tips = false

            if (action == '开始') {
                g_operation.append("circle").attr('r',2).attr("fill","#FFFFFF")
                if(this.pos_x){
                    operation_circle.attr('r', 5.5).attr('fill', COLORS[0])
                    
                }else{
                    operation_circle.attr('r', 5.5).attr('fill', COLORS[1])
                    
                }

            } else if (action == '终点') {
                if(this.pos_x){
                    operation_circle.attr('r', 4).attr('fill', COLORS[0])
                    g_operation.append("circle").attr('r',5).attr("fill",COLORS[0]).attr("stroke-width","4").attr("stroke","rgba(248,65,69,0.4)")                
                    
                }else{
                    operation_circle.attr('r', 4).attr('fill', COLORS[1])
                    g_operation.append("circle").attr('r',5).attr("fill",COLORS[1]).attr("stroke-width","4").attr("stroke","rgba(0,136,254,0.4)")                                    
                    
                }
            }

            if (!show_tips) {
                tips.style('display', 'none')
            }
        } 


        
            
    }

    }

}

function getValidOperations(operations, startDate) {
    const result = []
    for (let date in operations) {
        if (date > startDate) {
            result.push({ date, action: operations[date] })
        }
    }

    result.sort((first, second) => { return first.date < second.date ? -1 : (first.date == second.date ? 0 : 1); });
    const today = d3.timeFormat('%Y-%m-%d')(new Date)
    result.push({ date: today, action: '今日' })
    return result
}

function generateXAxisTickValues(total, count) {

    const mid = Math.round(total / 2) - 1
    const last = total - 1

    return [0, total - 1]

    // if (total % 3 == 0) {
    //     return [0, mid, last]
    // } else if (total > 14) {
    //     return [0, mid, last]
    // } else {
    //     return [0, total - 1]
    // }



    // switch (total) {
    //     case 3: return [1];
    //     case 4: return [1, 2];
    //     case 5: return [1, 2, 3];
    //     case 6: return [1, 2, 3, 4];
    //     case 7: return [2, 4];
    //     case 8: return [2, 5];
    //     case 9: return [1, 3, 5, 7];
    //     case 10: return [3, 6];
    //     case 11: return [2, 5, 8];
    //     case 12: return [3, 7];
    //     case 13: return [3, 6, 9];
    //     case 14: return [4, 9];
    // }

    // const values = [];

    // for (let i = 0; i < count; i++) {
    //     values.push(Math.round(total / (count + 1) * (i + 1)));
    // }


    // return values;
}


function generateYAxisTickValues({ historical_data, benchmark_data }) {
    // const [start1, end1] = d3.extent(historical_data);
    // let [start2, end2] = [0, 0];
    // if (benchmark_data) {
    //     [start2, end2] = d3.extent(benchmark_data);
    // }
    // const start = Math.min(start1, start2), end = Math.max(end1, end2)
    // if (start === 0 && end === 0) {
    //     return [-1, 1];
    // } else if (start === end) {
    //     return [start / 2, end * 1.5];
    // } else {
    //     return [start, end];
    // }
    return [0, 10];
}


function generateYAxisTickValuesNet(historical_data) {
    
        const [start, end] = d3.extent(historical_data);
        if(parseInt(start) == parseInt(end)){
            return [0, end]
        }else{
            return [start, end];
        }
        
    }
/*
    为了数据更好的显示，特别是少量数据时，需要对原数据形式进行调整
*/
function rebuild_data(data, xTickCount, startIndex) {


    if (data == null || data.length == 0) return null

    if (startIndex > 0) {
        data = data.slice(startIndex)
    }
    const first = data[0]
    const last = data[data.length - 1]
    if (data.length <= xTickCount) {
        //填充首尾
        return [first].concat(data).concat([last])
    } else if (data.length === xTickCount + 1) {
        //填充首部
        return [first].concat(data)

    } else {
        //不填充
        return data
    }
}

function convert_log_ret(data) {
    if (data == null || data.length == 0) return null
    let total = 0
    const result = data.map((item, index) => {
        if (index == 0) return 0
        total += item
        return Math.exp(total) - 1
    })
    // np.exp(log_ret.cumsum()) -1
    // console.log(result)
    return result
}