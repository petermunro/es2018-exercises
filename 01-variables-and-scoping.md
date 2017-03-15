# Variables and Scoping

1. What will happen when this code is executed?

        {
        console.log(i);
        let i = 5;
        }

   Run the code to verify your answer.

2. What will this code output?

        let invoiceId = 647;
        for (let invoiceId = 0; invoiceId < 5; invoiceId++) {
        }
        console.log(invoiceId);

   Again, run it to verify your answer.

3. What will this code output?

        if (true) {
            function updateId() {
                id = 20;
            }
        	let id = 5;
        	updateId();
        	console.log(id);
        }

4. What's wrong with this code?

        const N_PROC;
        console.log(N_PROC);
        N_PROC = 4;
        console.log(N_PROC);

5. Read through this code.
    1. What does it _look_ like it's trying to do?
    2. Why doesn't it do it?
    3. Fix it so that it does.

            "use strict"

            var callbacks = []
            for (var i = 0; i < 5; i++) {
              callbacks.push(function() { console.log(i); });
            }

            // test one of the callbacks - it should
            // display the number '2'
            callbacks[2]();
