import { Pipe, PipeTransform } from '@angular/core'
import numeral from 'numeral'

@Pipe({ name: 'formatPercent' })
export class FormatPercentPipe implements PipeTransform {
    transform(value: string, decimalDigits: number = 2): string {
        const money = Number(value)
        if (isNaN(money)) return value
        if(value != null || value != '') {
            return (money * 100).toFixed(decimalDigits) + '%'
        }else{
            return "--";
        }    
    }
}

@Pipe({ name: 'formatPercentWithSymbol' })
export class FormatPercentWithSymbolPipe implements FormatPercentPipe {
    transform(value: string, decimalDigits: number = 2, zero :number = 0): string {
        const money = Number(value)
        if (isNaN(money)) return value || "0"
        return (money * 100).toFixed(decimalDigits) 
    }
}

//分红 保留四位小数
@Pipe({ name: 'formatBonus' })
export class FormatbounsPipe implements PipeTransform {
    transform(value: string, decimalDigits: number = 4): string {
        const money = Number(value)
        return money.toFixed(decimalDigits) 
    }
}