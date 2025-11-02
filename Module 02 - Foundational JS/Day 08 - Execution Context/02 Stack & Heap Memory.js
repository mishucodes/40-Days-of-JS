//Primitive values are stored in the stack memory, but non-primitive values are stored in the heap memory.
    //NOTE: All bindings (regardless of what they point to) get stored in the stack memory. It's just that the values these bindings point to live in the different memories (heap in case of non-primitives, & stack in case of primitives).

//Why this distinction matters:
    //a) Stack memory is fast, but small (used for fixed-size, short-lived data).
    //b) Heap memory is larger, but slower, and is managed by the "garbage collector".