//A JS program goes through 04 phases:
    //01. Tokenisation
    //02. Parsing (Abstract Syntax Tree)
    //03. Interpreting
    //04. Code Generation (optional)



//01. Tokenisation: breaking the code into individual atoms, & checking if if makes sense (see image)...
//02. Parsing: Creating an "Abstract Syntax Tree". Essentially completing the code. Suppose I have an AC remote, & set my AC to 25 & turn it off. Then I go to another room & turn AC on only on the remote. I set the temperature to 27. I turn AC off on the remote. Then I go to the AC room, & I switch on the AC via remote. It'll probably start at 27. Which means an 'on' command is just an 'on' command. It's probably "on with xyz settings". Similarly, the JS code I write is like me stating the bare minimum that I need to. Rest is handled by the Parsing.
//03. Interpreting: Walking through the AST. This is where the program starts “executing” step by step.
//04. Code Generation: In a pure interpreter, this wouldn’t exist. But modern JS engines (like V8) optimise by turning “hot” parts of code into machine code.
    //NOTE: "hot" means that chunk of code which is executed a lot of times. hence, generating an efficient machine-code is worth the effort.


//To be very pedantic, this is what happens (according to ChatGPT):
	// 1. Source → Tokens → AST.
	// 2. AST → Intermediate Representation (IR) → Bytecode.
        // - This is like a portable “middle language” between JS code and CPU code.
	// 3. Interpreter executes bytecode immediately (fast startup).
	// 4. Profiler detects “hot code.”
	// 5. JIT compiler translates hot code into highly optimised machine code.

//NOTE: Check Image to see how code executes (according to TapaScript)...



//Use astexplorer.net to see the AST for a JS code.