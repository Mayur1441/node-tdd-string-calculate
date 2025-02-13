import {
    extractDelimiter,
    splitNumbers,
    validateNoNegatives,
} from './helpers/stringCalculator.helper';

export class StringCalculator {
    add(input: string): number {
        console.log('calculate input  -  ', input);
        if (!input) {
            return 0;
        }
        const {delimiter, numbersSection} = extractDelimiter(input);
        const numList = splitNumbers(numbersSection, delimiter);
        validateNoNegatives(numList);
        return numList.reduce((sum, num) => sum + num, 0);
    }
}
