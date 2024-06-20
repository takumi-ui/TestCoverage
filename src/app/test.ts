

export function test({condition1, condition2, condition3}: {condition1: boolean, condition2: boolean, condition3: boolean}) {
    if (condition1) {
        console.log('命令文1'); return;
    }
    
    if (condition2) {
      console.log('命令文2');
    } else {
      console.log('命令文3');
    }
    
    if (condition3) {
     console.log('命令文4');
    }
}

  export function test2() {}