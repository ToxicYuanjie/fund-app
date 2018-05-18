import { Component, ElementRef, Input } from '@angular/core'
import * as d3 from 'd3'


@Component({
    selector: 'meter-compare-graph',
    templateUrl: 'meter-compare-graph.html',
})
export class MeterCompareGraphComponent {
 
    // @Input('return') invest_opportunity_value: any
    @Input('invest-return') invest_return: number

    constructor(public element: ElementRef) {
    }
    
    ngOnInit() {
      this.draw()
    }

    ngAfterViewInit() {
      this.draw()
    }

    ngOnChanges() {
      this.draw()
    }

    draw() {
       const invest_return_val = this.invest_return / 10;      
       d3.select('.chart-gauge-compare').selectAll('svg').remove();       
       return renderMeterChart(invest_return_val)
    }

}
/*
 * http://bl.ocks.org/ameyms/9184728
*/

function renderMeterChart(invest_return) {
  
  var barWidth, chart, chartInset, degToRad, repaintGauge,repaintGaugeTwo,
  height, margin, numSections, padRad, percToDeg, percToRad, 
  percent,percentTwo,orientationPercentTwo, radius, radiusTwo, svg, totalPercent, width, needle

  margin = {top: 20,right: 20,bottom: 30,left: 20};
  var el = d3.select('.chart-gauge-compare');
  var clientWidth = el._parents[0].clientWidth - margin.left - margin.right / 2;
  
  // current value
  percent = null;
  if(invest_return == 0.8){
    percent = 1;
  }else{
    percent = invest_return || 0;
  }
  percentTwo = 0;
  orientationPercentTwo = .5;
  numSections = 1;
  padRad = 0.025;
  chartInset = 10;

  // Orientation of gauge:
  totalPercent = .75;

  width = clientWidth - 20;
  height = 130;
  radius = Math.min(width) / 2.8;
  radiusTwo = Math.min(width) / 3.25;
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
  svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);
 
  // defs
  const defs = svg.append("defs")
  const linearGradient = defs.append('linearGradient').attr('id','blueGradient')
  linearGradient.append('stop').attr('offset','0%').attr('stop-color','#48D3F9')
  linearGradient.append('stop').attr('offset','100%').attr('stop-color','#046AF1')
  const linearGradientTwo = defs.append('linearGradient').attr('id','redGradient')
  linearGradientTwo.append('stop').attr('offset','0%').attr('stop-color','#F66937')
  linearGradientTwo.append('stop').attr('offset','100%').attr('stop-color','#FC211D')

  // Add layer for the panel
  chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top) / 1.1) + ")");
  chart.append('path').attr('class', "arc chart-filled");
  chart.append('path').attr('class', "arc chart-empty");
  chart.append('path').attr('class', "arc chart-filled-2");
  chart.append('path').attr('class', "arc chart-empty-2");

  var arc2 = d3.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20)
  var arc1 = d3.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20)

  var arc4 = d3.arc().outerRadius(radiusTwo - chartInset).innerRadius(radiusTwo - chartInset - barWidth + 20)
  var arc3 = d3.arc().outerRadius(radiusTwo - chartInset).innerRadius(radiusTwo - chartInset - barWidth + 20)

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

  repaintGaugeTwo = function (perc) 
  {
    var next_start = totalPercent;
    var arcStartRad = percToRad(next_start);
    var arcEndRad = arcStartRad + percToRad(perc / 2);
    next_start += perc / 2;


    arc3.startAngle(arcStartRad).endAngle(arcEndRad) / 2;

    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad((1 - perc) / 2);

    arc4.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

      chart.select(".chart-filled-2").attr('d', arc3).attr('fill','url(#blueGradient)').attr('stroke-linecap','round').attr('stroke-width','0');
      chart.select(".chart-empty-2").attr('d', arc4);
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
      radius = this.radius - 8;
      topX = centerX - this.len * Math.cos(thetaRad) / 3;
      topY = centerY - this.len * Math.sin(thetaRad) / 3;
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

      // 文字
      this.el.append('g').attr('class','allText')
      this.el.select('g').append("text").text('风险').attr('x',-(this.len)).attr('y',20)
      this.el.select('g').append("text").text('投资时机').attr('x',-20).attr('y',20)
      this.el.select('g').append("text").text('机会').attr('x',this.len - 20).attr('y',20)
      if(el._parents[0].clientWidth <= 375){
        this.el.select('g').append("text").text('观望').attr('x',-10).attr('y', -118);
      }else{
        this.el.select('g').append("text").text('观望').attr('x',-10).attr('y', -128);
      }
      
      //平均线
      console.log(this.len * 2)
      const lineNum = [0,1,2,3,4,5,6,7,8];
      const meanLine = this.el.append('g')
      const eachUnit = 180 / 8;
      const translateVal = this.len - 44;
      for(let item of lineNum ){
        const meanLineVal = (item * eachUnit) - 90;
        meanLine.append('text').text('|').attr("transform",'rotate('+ meanLineVal +') translate(0,-'+translateVal+')').attr('class','lineCol');
      }
      
      //  return this.el.append('path').attr('class', 'needle').attr('stroke-width',5).attr('fill','green').attr('d', recalcPointerPos.call(this, percent));
       this.el.append('path').attr('class', 'needleTwo').attr('stroke-width',5).attr('d', recalcPointerPos.call(this, orientationPercentTwo));
       this.el.append('path').attr('class', 'needle').attr('stroke-width',5).attr('d', recalcPointerPos.call(this, percent));
       this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', 4);       
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
          
          repaintGauge(progress);
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


    // 内线
    Needle.prototype.moveToTwo = function(perc) {
      var self,
          oldValue = this.perc || 0;

      this.perc = perc;
      self = this;

      // Reset pointer position

      this.el.transition().delay(100).ease(d3.easeQuad).duration(200).select('.needleTwo').tween('reset-progress', function() {
        return function(percentOfPercent) {
          var progress = (1 - percentOfPercent) * oldValue;
          
          repaintGaugeTwo(progress);
          
        };
      });

      this.el.transition().delay(300).ease(d3.easeBounce).duration(1500).select('.needleTwo').tween('progress', function() {
        return function(percentOfPercent) {
          var progressTwo = percentOfPercent * perc / 2;
          
          repaintGaugeTwo(progressTwo);
          return d3.select(this).attr('d', recalcPointerPos.call(self, progressTwo));
        };
      });

    };

    return Needle;

  })();
  //ready
  needle = new Needle(chart);
  needle.render();
  //画线
  needle.moveTo(percent);
  needle.moveToTwo(percentTwo);

}