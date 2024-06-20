import { test, test2 } from "./test";

describe('Test', () => {
    it('命令文1のみを実行', () => {
        test({
            condition1: true,
            condition2: false,   
            condition3: false
        })
    });

    it('命令文2', () => {
        test({
            condition1: false,
            condition2: true,   
            condition3: false,
        })
    })

    it('命令文3、4を実行', () => {
        test({
            condition1: false,
            condition2: false,   
            condition3: true
        })
    })
  
  
    it('test2関数を実行', () => {
      test2();
    });
})