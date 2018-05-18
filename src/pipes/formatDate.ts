import { Pipe, PipeTransform } from '@angular/core'
import { start } from 'repl';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
    transform(value: Date, withTime: boolean = false): string {
        if (value == null) {
            return '';
        }

        let result = value.getFullYear() + '/' + (value.getMonth() + 1) +
            '/' + value.getDate();

        if (withTime) {
            result += ' ' + this.formatNumber(value.getHours()) + ':' + this.formatNumber(value.getMinutes())
        }

        return result
    }

    formatNumber(value: number) {
        let result = '';

        if (value > 10) {
            result += value;
        }
        else {
            result = '0' + value;
        }

        return result;
    }
}

//基金类型
@Pipe({ name: 'FundsTypeSymbol' })
export class FundsTypeSymbolPipe implements PipeTransform {
    transform(type: string): string {
        const translation = {
            EQUITY:"股票型",
            BOND:"债券型",
            MONEY_MARKET:"货币市场型",
            HYBRID:"混合型"
        }
        return translation[type] || type
    }
}

//推荐度符号 1
@Pipe({ name: 'SplitSymbolFirst' })
export class SplitSymbolFirstPipe implements PipeTransform {
    transform(symbol: string): string {
        if(symbol == null || symbol == "" ) {
            return "-" 
        }else{
            return symbol.substr(0,1)
        }    
    }
} 

//推荐度符号 2
@Pipe({ name: 'SplitSymbolLast' })
export class SplitSymbolLastPipe implements PipeTransform {
    transform(symbol : string): string {
        if(symbol == null || symbol == "" ){
            return ""
        }else{
            //return symbol.substr(1,1)
            let str = symbol.substr(1,1);
            if(str == '-'){
                str = '－';
            }
            return str;
        }
    }
}

//收益与风险
@Pipe({ name: 'DecimalPointOne' })
export class DecimalPointOnePipe implements PipeTransform {
    transform(value): number | string {
        if(value == null ) return ""
        if(value == 10){
            return value
        }else{
            return value * 10;
        }
    }
}

//基金经理 时间容错
@Pipe({ name: 'FundDetail' })
export class FundDetailPipe implements PipeTransform{
    transform(startDate:string):string{
        if(startDate == null){
            return startDate='--';
        }
        if(startDate){
            return startDate;
        }
    }
}

@Pipe({ name: 'FundDetailTwo' })
export class FundDetailtwoPipe implements PipeTransform{
    transform(startDate:string):string{
        if(startDate == null){
            return startDate=' 至今';
        }
        if(startDate){
            return startDate;
        }
    }
}