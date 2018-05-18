import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import moment from 'moment';
import numeral from 'numeral';
import { FormatMoneyPipe } from '../pipes';

declare var window: any

window.d3 = d3

const COLORS = ['#F84145', '#0088FF']
const time_now = d3.timeDay.offset(new Date(), -1)

@Component({
    selector: 'expect-graph',
    templateUrl: 'expect-graph.html',
    providers: [FormatMoneyPipe]
})
export class ExpectGraphComponent {
    // @Input("daily-return") daily_return: any;
    @Input("performance-return") performance_return: any;
    @Input("performance-second-return") performance_second_return: any;

    ready: boolean = false;
    container: any;
    margin: any;
    width: number;
    height: number;
    incomeHeight: number;
    XAXIS_HEIGHT: number;
    X_TICKS_COUNT: number = 4;
    legend: Array<any>;
    smallPathArr: Array<any>; 
    period_list = [
        { value: d3.timeMonth.offset(time_now, -3), label: "半年" },
    ]
    current_period: any;
    public_pos_x :number;

    constructor(public element: ElementRef, public formatMoney: FormatMoneyPipe) {

        this.legend = [{
            label: '',
            color: COLORS[1],
            yield: ''
        }, {
            label: '',
            color: '',
            yield: ''
        }]
        this.current_period = this.period_list[0]
    }

    ngOnInit() {
        this.container = d3.select(this.element.nativeElement).select('.container').node();
        const options = {
            top: 25,
            bottom: 15,
            left: 45,
            right: 15,
        }
        this.init(options);
        this.ready = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.ready) {
            this.draw(this.performance_return,this.performance_second_return);
            this.legend[0].label = this.performance_return.name;
            if(this.performance_second_return){
                this.legend[1].label = this.performance_second_return.name;
                this.legend[1].color = COLORS[0];
            }

        }
    }

    ngAfterViewInit() {
        this.draw(this.performance_return,this.performance_second_return);
    }

    changePeriod(item) {
        if (this.current_period == item) return;
        this.current_period = item;
        this.draw(this.performance_return,this.performance_second_return);
        
    }

    init(options) {
        this.margin = {
            left: options.left || 15,
            top: options.top || 15,
            bottom: options.bottom || 0,
            right: options.right || 15,
        };
        this.width = this.container.clientWidth;
        this.height = options.height || 200;
        this.XAXIS_HEIGHT = 15;
    }

    createSVG() {
        d3.select(this.container).selectAll('svg').remove();
        const svg = d3.select(this.container).append('svg')
            .attr('class', 'd3-line-chart')
            .attr('width', this.width)
            .attr('height', this.height);

            svg.append("linearGradient")
            .attr("id", "portfolio-history-graph")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
                { offset: "0%", class: "asea-gradient-0" },
                { offset: "40%", class: "asea-gradient-p3" },
                { offset: "82%", class:"asea-gradient-0" },                
                { offset: "100%", class: "asea-gradient-0" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("class", d => d.class);


            svg.append("linearGradient")
            .attr("id", "benchmark-history-graph")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
                { offset: "0%", class: "benchmark-asea-gradient-0" },
                { offset: "50%", class: "benchmark-asea-gradient-p3" },
                { offset: "82%", class: "benchmark-asea-gradient-0" },                
                { offset: "100%", class: "benchmark-asea-gradient-0" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("class", d => d.class);

            
        svg.append("linearGradient")
            .attr("id", "profit-1-graph-gradients")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", -5).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
                { offset: "0%", class: "asea-gradient-0" },
                { offset: "20%", class: "asea-gradient-0" },
                { offset: "33%", class: "asea-gradient-50" },
                { offset: "45%", class: "asea-gradient-0" },
                { offset: "100%", class: "asea-gradient-0" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("class", d => d.class);


        svg.append("linearGradient")
            .attr("id", "profit-2-graph-gradients")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", -5).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
                { offset: "0%", class: "benchmark-asea-gradient-0" },
                { offset: "20%", class: "benchmark-asea-gradient-0" },                
                { offset: "33%", class: "benchmark-asea-gradient-50" },
                { offset: "45%", class: "benchmark-asea-gradient-0" },                
                { offset: "100%", class: "benchmark-asea-gradient-0" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("class", d => d.class);


            svg.append("linearGradient")
            .attr("id", "expect-axea-graph")
            // .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            // .attr("x2", (this.width-40) / 2).attr("y2", this.height)
            .attr("x2", 1).attr("y2", 0.8)
            .selectAll("stop")
            .data([
                { offset: "0%", class: "offset-50" },
                { offset: "45%", class: "offset-0" },
                { offset: "50%", class: "offset-50" },
                { offset: "55%", class: "offset-0" },
                { offset: "100%", class: "offset-50" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("class", d => d.class);


        svg.append("linearGradient")
            .attr("id", "rebalance-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
                { offset: "0%", class: "offset-0" },
                { offset: "100%", class: "offset-100" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("class", d => d.class);

        svg.append("linearGradient")
            .attr("id", "today-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
                { offset: "0%", class: "offset-0" },
                { offset: "80%", class: "offset-80" },
                { offset: "100%", class: "offset-100" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("class", d => d.class);


        svg.append("linearGradient")
        .attr("id", "prod-second-possibility-area")
        .attr("gradientUnits", "objectBoundingBox")
        // .attr('spreadMethod','pad')
        // .attr("x1", "0%").attr("y1", "40%")
        // .attr("x2", "0%").attr("y2", "60%")
        // .attr('gradientTransform','rotate(-60)')
        .selectAll("stop")
        .data([
            { offset: "0%", class: "second-offset-50" },
            { offset: "100%", class: "second-offset-50" }
        ])
        .enter().append("stop")
        .attr("offset", d => d.offset)
        .attr("class", d => d.class);

        return svg;
    }

    draw(performance_return,performance_second_return, transitionDuration = 0) {
        console.log(performance_return)
        console.log(performance_second_return)
        console.log('performance_second_return')

        // if (daily_return == null) return;
        if (performance_return == null) return;

        const svg = this.createSVG();
        const margin = this.margin,
            availableWidth =  this.width - this.margin.left - this.margin.right  ,
            chartViewHeight = this.height - margin.top - margin.bottom - this.XAXIS_HEIGHT;

        const startDate = d3.timeFormat('%Y-%m-%d')(this.current_period.value)

        // data = rebuildData(data, this.X_TICKS_COUNT, startDate)

        // const startIndex = daily_return.days.findIndex(d => d > startDate)

        let merge_date = [];
        let prod1_historical_values = performance_return.historical.values;
        let prod1_possibility_values = performance_return.possibility.other_values;
        let prod1_possibility_main_values = performance_return.possibility.main_values;
        let prod1_trading_days = performance_return.trading_days;
        let prod2_historical_values = null;
        let prod2_possibility_values = null;
        let prod2_possibility_main_values = null;

        const prod1_days = performance_return.historical.days;
        const prod1_possibility_days = performance_return.possibility.days;
        
        //判断是否有第二只基金
        if(performance_second_return != undefined){
            const prod2_days = performance_second_return.historical.days;
            prod2_historical_values = performance_second_return.historical.values;
            prod2_possibility_values = performance_second_return.possibility.other_values;
            prod2_possibility_main_values = performance_second_return.possibility.main_values;

            const prod_one_len = prod1_days.length
            const prod_two_len = prod2_days.length

            // if(prod_one_len == prod_two_len){
            //     merge_date = prod1_days.concat(prod1_possibility_days)
            // }else{
            //     //取交  
                
            //     if(prod_one_len > prod_two_len){
            //         const set_prod1_days = prod1_days.splice(prod_one_len - prod_two_len,prod_two_len)
            //         prod1_historical_values = prod1_historical_values.splice(prod_one_len - prod_two_len,prod_two_len)
            //         merge_date = merge_date = set_prod1_days.concat(prod1_possibility_days)

            //     }else{
            //         const set_prod2_days = prod2_days.splice(prod_two_len - prod_one_len,prod_one_len)
            //         prod2_historical_values = prod2_historical_values.splice(prod_one_len - prod_two_len,prod_two_len)
            //         merge_date = merge_date = set_prod2_days.concat(prod1_possibility_days)
            //     }
                
            // }
        }
        // merge_date = prod1_days.concat(prod1_possibility_days);
        merge_date = prod1_trading_days;
        

        let data = {
            date: merge_date,
            historical_data: prod1_historical_values,
            benchmark_data: prod2_historical_values,

            pro1_possibility_data: prod1_possibility_main_values,            
            pro1_possibility_y0_data: prod1_possibility_values,            
            pro1_possibility_y2_data: prod1_possibility_values,  
            pro1_possibility_area_data: prod1_possibility_values,            
            pro1_possibility_small_area_data: prod1_possibility_values,  

            pro2_possibility_data: prod2_possibility_main_values,
            pro2_possibility_y0_data: prod2_possibility_values,
            pro2_possibility_y2_data: prod2_possibility_values,
            pro2_possibility_area_data: prod2_possibility_values,
            pro2_possibility_small_area_data: prod2_possibility_values,
        }

        data = {
            date: data.date,
            historical_data: convert_log_ret(data.historical_data),
            benchmark_data: convert_log_ret(data.benchmark_data),

            pro1_possibility_data: convert_log_ret(data.pro1_possibility_data),
            pro1_possibility_y0_data: expected_log_ret(data.pro1_possibility_y0_data,0),
            pro1_possibility_y2_data: expected_log_ret(data.pro1_possibility_y2_data,3),
            pro1_possibility_area_data: area_log_set(data.pro1_possibility_area_data),
            pro1_possibility_small_area_data: small_area_log_set(data.pro1_possibility_area_data),

            pro2_possibility_data: convert_log_ret(data.pro2_possibility_data),
            pro2_possibility_y0_data: expected_log_ret(data.pro2_possibility_y0_data,0),
            pro2_possibility_y2_data: expected_log_ret(data.pro2_possibility_y2_data,3),
            pro2_possibility_area_data: area_log_set(data.pro2_possibility_area_data),
            pro2_possibility_small_area_data: small_area_log_set(data.pro2_possibility_small_area_data),
        }

        let valuesDomain
        if(performance_second_return){
            const min = data.benchmark_data.concat(data.historical_data)
            const max = data.pro2_possibility_small_area_data.concat(data.pro1_possibility_small_area_data).concat(data.pro1_possibility_y2_data)
            valuesDomain = generateYAxisTickValues(min,max);            
        }else{
            const max = data.pro1_possibility_small_area_data.concat(data.pro1_possibility_y2_data)
            valuesDomain = generateYAxisTickValues(data.historical_data,max); 
        }
        console.log(valuesDomain)

        //incomeHeight
        // const getV = incomeGradienteValues(data.historical_data);

        // const valuesDomain = generateYAxisTickValues(data.historical_data,data.pro1_possibility_y0_data); 

        const availableWidthHalf = availableWidth / 2;
        const x = d3.scaleLinear().range([0, availableWidth]).domain([0, data.date.length - 1]);
        const x2 = d3.scaleLinear().range([0, availableWidth / 2 + 30 ]).domain([0, data.date.length / 2 - 1]);
        const y = d3.scaleLinear().range([chartViewHeight, 0]).domain(valuesDomain);

        const g_axis = svg.append('g').attr('class', 'g-axis');
        // --- lines view
        const g_chart = svg.append('g').attr('class', 'g-chart').attr('transform', `translate(${margin.left},${margin.top})`);

        const line = d3.line()
            .x((_, index) => x(index))
            .y(d => y(d));

        const lines = d3.line()
        .x((_, index) => x2(index))
        .y(d => y(d))        

        const exp_line = d3.line()
            .x((_, index) => x2(index))
            .y(d => y(d));    

        var area = d3.area()
            .x((_, index) => x(index))
            .y0(this.height)
            .y1(d => y(d));



        // historical map
        const mapVals = performance_return.historical.days.map((item,i) => {
            const x_index = data.date.findIndex(p => item == p)            
            return {date: x_index, value: performance_return.historical.values[i] }
        })

        const  linexy =  d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.value); })
        //.interpolate('monotone');

        const  areaxy =  d3.area()
        .x(function(d) { return x(d.date); })
        .y0(this.height) 
        .y1(function(d) { return y(d.value); })

        // const lineTransition = d3.transition()
        //     .duration(transitionDuration)
        //     .ease(d3.easeLinear);

        //--- axis view y-axis
        const yAxisTextFormatter = d3.format(".0%");
        const yAxis = d3.axisRight().scale(y).ticks(5).tickSize(availableWidth + 41).tickFormat(v => yAxisTextFormatter(v));
        console.log(yAxis)
        // const yAxisMarginLeft = this.width - margin.right;
        const yAxisView = g_axis.append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${margin.left - 41},${margin.top})`)
            .call(yAxis);

        yAxisView.selectAll('g.tick').selectAll('text').attr('x', 35);
        yAxisView.selectAll('g.tick').selectAll('line').attr('x1', 40).attr('stroke-dasharray',2).attr('stroke-width',0.5).attr('stroke','#F1F1F1');


        let pos_y;
        let curDate1;

        if(performance_second_return){
            curDate1 = performance_second_return.historical.days[performance_second_return.historical.days.length - 1];
        }else{
            curDate1 = performance_return.historical.days[performance_return.historical.days.length - 1];
        }
        
        const x_index = data.date.findIndex(p => curDate1 == p);
        if (x_index < 0) return;
        const pos_x = x(x_index) + margin.left
        const pos_y_1 = y(data.historical_data[x_index]) + margin.top
        
        if(performance_second_return){
            pos_y = y(data.benchmark_data[x_index])
        }else{
            pos_y = y(data.historical_data[x_index]) /3  + margin.top - 7 
        }

        const expect_chart = g_chart.append("g")  
        const prod_two_expect_charta = expect_chart.append('g').attr("class","prod_2");
        const prod_one_expect_charta = expect_chart.append('g').attr("class","prod_1"); 
        
        if(performance_return.benchmark_data){
            const prod_one_expect_charta = expect_chart.append('g').attr("class","prod_1"); 
        }
        
        const xTickValues = generateXAxisTickValues(data.date, this.X_TICKS_COUNT, performance_return.possibility.days[0]);        

        // render the lines with inverse order
        const historical_data = data.historical_data;
        const benchmark_data = data.benchmark_data;

        const pro1_possibility_data = data.pro1_possibility_data;
        const pro1_possibility_area_data = data.pro1_possibility_area_data;
        const pro1_possibility_small_area_data = data.pro1_possibility_small_area_data;


        // prod_two Expect 
        if (benchmark_data) {
            // product 2 historical data map
            const prod2_map = performance_second_return.historical.days.map((item,i) => {
                const x_index = data.date.findIndex(p => item == p)            
                return {date: x_index, value: performance_second_return.historical.values[i] }
            })

            g_chart.append('path')
            .attr('class', 'benchmark-line')
            .attr('d', linexy(prod2_map));

            const pos2_y = y(data.benchmark_data[x_index]) + margin.top
            
            const pro2_possibility_data = data.pro2_possibility_data;
            const pro2_possibility_area_data = data.pro2_possibility_area_data;
            const pro2_possibility_small_area_data = data.pro2_possibility_small_area_data;

            // prod_two Expect  
            prod_two_expect_charta.append('path')
            .datum(pro2_possibility_area_data)
            .attr('class', 'prod-second-possibility-area-gradient')
            .attr("transform",`translate(${pos_x - 55}, -0)`) 
            .attr('d', (d) => lines(d) + "Z" )
            // .attr('d', exp_line);

            prod_two_expect_charta.append('path')
            .datum(pro2_possibility_small_area_data)
            .attr('class', 'prod-second-possibility-area-gradient')
            .attr("transform",`translate(${pos_x - 55},-0)`) 
            .attr('d', (d) => lines(d) + "Z" )

            prod_two_expect_charta.append('path')
            .datum(pro2_possibility_data)
            .attr('class', 'prod-second-possibility-line')
            .attr("transform",`translate(${pos_x - 55},-0)`) 
            .attr("stroke-dasharray",4)             
            .attr('d', lines);  

        }

        // today
        const todayLine = g_chart.append("g");
        todayLine.append('line').attr("x1",`${pos_x - 45}`).attr("x2",`${pos_x - 45}`).attr("y2",chartViewHeight)
        .attr("stroke","#CCCCCC")   //#CCCCCC
        .attr("stroke-dasharray",2)  

        //圆点 X
        this.public_pos_x =  pos_x;

        
        g_chart.append('path')
        .attr('class', 'area')
        .attr('d', areaxy(mapVals))

        g_chart.append('path')
        .attr('class', 'line')
        .attr('d', linexy(mapVals));
          
            
        // prod_one Expect  
        prod_one_expect_charta.append('path')
        .datum(pro1_possibility_area_data)
        .attr('class', 'prod-first-possibility-area-gradient')
        .attr('d', (d) => lines(d) + "Z" )
        .attr("transform",`translate(${pos_x - 55},-0)`)


        prod_one_expect_charta.append('path')
        .datum(pro1_possibility_small_area_data)
        .attr('class', 'prod-first-small-possibility-area')
        .attr('d', (d) => lines(d) + "Z")
        .attr("transform",`translate(${pos_x - 55}, -0)`)  
           

        prod_one_expect_charta.append('path')
        .datum(pro1_possibility_data)
        .attr('class', 'prod-first-possibility-line')
        .attr("stroke-dasharray",4)             
        .attr('d', lines)
        .attr("transform",`translate(${pos_x - 55},-0)`)
        
        
       
        todayLine.append("text")
        .attr("x",availableWidthHalf - 17)
        .attr("y","-5px")
        .attr("fill",COLORS[1])
        .attr("class","buleCol")

        // 基线
        todayLine.append('line').attr("x1",0).attr("x2",0).attr("y2",chartViewHeight)
        .attr("stroke","#F1F1F1")  
        .attr("stroke-width",1)

        //--- axis view x-axis

        const dateFormat = d3.timeFormat('%Y-%m-%d');
        const xAxisTextFormatter = (index) => dateFormat(new Date(data.date[index]));
        // const xAxisTickScale = d3.scaleLinear().domain([10, 100]).range([])
        const xAxisMarginTop = this.height - margin.bottom - this.XAXIS_HEIGHT;
        const xAxis = d3.axisBottom().scale(x).tickPadding(10).ticks(3).tickSizeInner(-xAxisMarginTop).tickSizeOuter(0).tickFormat(xAxisTextFormatter).tickValues(xTickValues);
        const xAxisView = g_axis.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(${margin.left},${xAxisMarginTop})`)
            .call(xAxis);
        //xAxisView.selectAll('.tick text').attr('x', 26);


        // 当前市值

        // if (this.current_value) {
        //     const txt = numeral(this.current_value).format('0,0.00')
        //     g_chart.append('text').attr('class', 'current-value').text('￥' + txt).attr('x', availableWidth).attr('y', -10)
        // }

        //---- operations
        const g_operations1 = svg.append('g').attr('class', 'g-operations');
        const g_operations = svg.append('g').attr('class', 'g-operations');

        // let operations = getValidOperations(daily_return.operations, startDate)

        const curDate = performance_return.possibility.days[0];
        let operations = [
            { "date": curDate, "action": "第一" },
            { "date": curDate, "action": "第二" },
        ]

        const operation_box = `
            <path d="M27,10.5 L27,2.00276013 C27,0.893542647 26.1012878,0 24.9926701,0 L2.00732994,0 C0.898338318,0 0,0.896666251 0,2.00276013 L0,10.9972399 C0,12.1064574 0.898712226,13 2.00732994,13 L23.5,13 L29,15 L27,10.5 Z"></path>
        `

        const operation_flag = {
            'buy_first': true,
            'sell_first': true,
            'rebalance_first': true,
        }

        for (let { date, action } of operations) {
            const x_index = performance_return.possibility.days.findIndex(p => date == p)
            if (x_index < 0) continue

            const concatData = data.historical_data;
            const pos_x = x(x_index) + margin.left
            const pos_y = y(concatData[concatData.length - 1]) + margin.top
            const pos_y_bottom = this.height - margin.bottom - this.XAXIS_HEIGHT - pos_y

            let show_tips = false

            //第一只基金圆点
            if (action == '第一') {
                const g_operation = g_operations.append('g').attr('class', 'operation')
                .attr('transform', `translate(${this.public_pos_x},${pos_y})`)

                const operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0)
                if (operation_flag.sell_first) {
                    operation_circle.attr('r', 4).attr('fill', "#FFF").attr('stroke',COLORS[1]).attr('stroke-width','4')
                    operation_flag.sell_first = false
                    show_tips = true
                }

            //第二只基金圆点
            }else if (action == '第二') {
                if(benchmark_data){
                    const pos2_y = y(data.benchmark_data[data.benchmark_data.length - 1]) + margin.top
                    
                    const g_operation1 = g_operations1.append('g').attr('class', 'operation1')
                    .attr('transform', `translate(${this.public_pos_x},${pos2_y})`)
        
                    const operation_circle1 = g_operation1.append('circle').attr('cx', -0.1).attr('cy', 0)

                    if (operation_flag.buy_first) {
                        operation_circle1.attr('r', 4).attr('fill', "#FFF").attr('stroke',COLORS[0]).attr('stroke-width','4')
                        operation_flag.buy_first = false
                        show_tips = true
                    }
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

function generateXAxisTickValues(total, count, today) {

    const now_today = total.findIndex(p => today == p)   
    const mid = Math.round(total / 2) - 1
    const last = total.length - 1

    return [0, now_today, last]

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


function incomeGradienteValues(data) {

    const [start, end] = d3.extent(data);
    if (start === 0 && end === 0) {
        return [-1, 1];
    } else if (start === end) {
        return [start / 2, end * 1.5];
    } else {
        return [start, end];
    }

}


function generateYAxisTickValues(historical_data, benchmark_data) {

    const [start1, end1] = d3.extent(historical_data);
    let [start2, end2] = [0, 0];
    if (benchmark_data) {
        [start2, end2] = d3.extent(benchmark_data);
    }
    const start = Math.min(start1, start2), end = Math.max(end1, end2)
    if (start === 0 && end === 0) {
        return [-1, 1];
    } else if (start === end) {
        return [start / 2, end * 1.5];
    } else {
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

// 历史表现 line
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
    return data
}

// 返回对应数组
function return_arr(data,key){
    if (data == null || data.length == 0) return null
    let arrData = [];
    for(let item of data){
         arrData.push(item[key])
    }
    return arrData;
}

// 预期表现 line
function expected_log_ret(data,key){    
    if (data == null || data.length == 0) return null
    let arr = [];
    for(let item of data){
        arr.push(item[key])
    }

    let total = 0
    const result = arr.map((item, index) => {
        if (index == 0) return 0
        total += item
        if(index > arr.length - 1){ return false}        
        return Math.exp(total) - 1;
    })

    return arr;
}

// 预期表现 area
function area_log_set(data){
    // console.log(data)
    if (data == null || data.length == 0) return null
    let arrY1 = [];
    let arrY2 = [];
    for(let item of data){
        arrY1.push(item[0])
        arrY2.push(item[3])
    }
    //let arrY2_sort = arrY2.sort();
    // console.log(arrY1.concat(arrY2))
    return arrY1.concat(arrY2)
}

// 预期表现 small area
function small_area_log_set(data){
    if (data == null || data.length == 0) return null
    let arrY3 = [];
    let arrY4 = [];
    for(let item of data){
        arrY3.push(item[1])
        arrY4.push(item[2])
    }
    //let arrY4_sort = arrY4.sort();
    return arrY3.concat(arrY4)
}