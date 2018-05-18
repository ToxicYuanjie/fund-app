import { Component, ElementRef, Input } from '@angular/core'
import * as d3 from 'd3'


@Component({
    selector: 'meter-graph',
    templateUrl: 'meter-graph.html',
})
export class MeterGraphComponent {
 
    @Input('invest-return') invest_return: number

    constructor(public element: ElementRef) {
    }

    ngOnInit() {
        // console.log('ngOnInit')
        this.draw()
    }

    // ngAfterViewInit() {
    //     // console.log('ngAfterViewInit')
    //     this.draw()
    // }

    ngOnChanges() {
        this.draw()
    }

    draw() {
       const invest_return_val = this.invest_return / 10;
       d3.select('.chart-gauge').selectAll('svg').remove();             
       renderMeterChart(invest_return_val)
    }

}
/*
 * http://bl.ocks.org/ameyms/9184728
*/

function renderMeterChart(invest_return) {

  var barWidth, chart, chartInset, degToRad, repaintGauge,
  height, margin, numSections, padRad, percToDeg, percToRad, 
  percent, radius, svg, totalPercent, width, needle

  // current value
  percent = null;
  if(invest_return == 0.8){
    percent = 1;
  }else{
    percent = invest_return || 0;
  }

  numSections = 1;
  padRad = 0.025;
  chartInset = 10;

  // // Orientation of gauge:
  totalPercent = .75;

  var el = d3.select('.chart-gauge');

  console.log(screen.width)

  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 20
  };

  var clientWidth = el._parents[0].clientWidth - margin.left - margin.right / 2

  width = clientWidth / 2  - 20;
  height = 50;
  radius = Math.min(width) / 2.8;
  barWidth = 40 * width / 500;


  /*
    Utility methods 
  */
  percToDeg = function(perc) {
    return perc * 360;
  };

  percToRad = function(perc) {
    return degToRad(percToDeg(perc));
  };

  degToRad = function(deg) {
    return deg * Math.PI / 180;
  };

  // // Create SVG element
  svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height+ 5 + margin.top + margin.bottom);
 
  // defs
  const defs = svg.append("defs")
  const linearGradient = defs.append('linearGradient').attr('id','blueGradient')
  linearGradient.append('stop').attr('offset','0%').attr('stop-color','#48D3F9')
  linearGradient.append('stop').attr('offset','100%').attr('stop-color','#046AF1')

  // Add layer for the panel
  chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top+10) / 1.1) + ")");
  chart.append('path').attr('class', "arc chart-filled");
  chart.append('path').attr('class', "arc chart-empty");

  var arc2 = d3.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20)
  var arc1 = d3.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20)

  repaintGauge = function (perc) 
  {
    var next_start = totalPercent;
    var arcStartRad = percToRad(next_start);
    var arcEndRad = arcStartRad + percToRad(perc / 2);
    next_start += perc / 2;


    arc1.startAngle(arcStartRad).endAngle(arcEndRad);

    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad((1 - perc) / 2);

    arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);


    chart.select(".chart-filled").attr('d', arc1).attr('fill','url(#blueGradient)').attr('stroke-linecap','round').attr('stroke-width','0');
    chart.select(".chart-empty").attr('d', arc2);
  }


  var Needle = (function() {

    /** 
      * Helper function that returns the `d` value
      * for moving the needle
    **/
    var recalcPointerPos = function(perc) {
      var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY, radius;
      thetaRad = percToRad(perc / 2);
      centerX = 0;
      centerY = 0;
      radius = this.radius - 3;
      topX = centerX - this.len * Math.cos(thetaRad) / 2.5;
      topY = centerY - this.len * Math.sin(thetaRad) / 2.5;
      leftX = centerX - radius * Math.cos(thetaRad - Math.PI / 2);
      leftY = centerY - radius * Math.sin(thetaRad - Math.PI / 2);
      rightX = centerX - radius * Math.cos(thetaRad + Math.PI / 2);
      rightY = centerY - radius * Math.sin(thetaRad + Math.PI / 2);
      return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
    };

    function Needle(el) {
      this.el = el;
      this.len = width / 3;
      this.radius = this.len / 10;
    }

    Needle.prototype.render = function() {
      this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', 4);

      // 文字
      this.el.append('g').attr('class','allText')
      this.el.select('g').append("text").text('风险').attr('x',-(this.len + 10)).attr('y',20)
      this.el.select('g').append("text").text('投资时机').attr('x',-20).attr('y',20)
      this.el.select('g').append("text").text('机会').attr('x',this.len - 10).attr('y',20)
      this.el.select('g').append("text").text('观望').attr('x',-10).attr('y', -(height+14));

      //平均线
      console.log(this.len * 2)
      const lineNum = [0,1,2,3,4,5,6,7,8];
      const meanLine = this.el.append('g')
      const eachUnit = 180 / 8;
      const translateVal = this.len - 21;
      for(let item of lineNum ){
        const meanLineVal = (item * eachUnit) - 90;
        meanLine.append('text').text('|').attr("transform",'rotate('+ meanLineVal +') translate(0,-'+translateVal+')').attr('class','lineCol');
      }
      
      //  return this.el.append('path').attr('class', 'needle').attr('stroke-width',5).attr('fill','green').attr('d', recalcPointerPos.call(this, percent));
       this.el.append('path').attr('class', 'needle').attr('stroke-width',5).attr('fill','green').attr('d', recalcPointerPos.call(this, percent));
       this.el.append('circle').attr('class', 'round-center').attr('fill','#FFF').attr('cx', 0).attr('cy', 0).attr('r', 2);
      
    };

    Needle.prototype.moveTo = function(perc) {
      var self,
          oldValue = this.perc || 0;

      this.perc = perc;
      self = this;

      // Reset pointer position

      this.el.transition().delay(100).ease(d3.easeQuad).duration(200).select('.needle').tween('reset-progress', function() {
        return function(percentOfPercent) {
          var progress = (1 - percentOfPercent) * oldValue;
          
          repaintGauge(percent);
          return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
          
        };
      });

      this.el.transition().delay(300).ease(d3.easeBounce).duration(1500).select('.needle').tween('progress', function() {
        return function(percentOfPercent) {
          var progress = percentOfPercent * perc;
          
          repaintGauge(progress);
          return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
        };
      });

    };

    return Needle;

  })();

  needle = new Needle(chart);
  needle.render();

  needle.moveTo(percent);
  // needle.moveTo(.25)

  // setInterval(function(){
  //   needle.moveTo(Math.random());
  // }, 5000);


}